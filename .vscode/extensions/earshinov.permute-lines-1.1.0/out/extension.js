"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
function activate(context) {
    context.subscriptions.push(vscode.commands.registerTextEditorCommand("permute-lines.reverse", function (editor, edit) {
        run(function () {
            transformLines(editor, edit, function (lines) {
                return lines.slice().reverse();
            });
        });
    }));
    context.subscriptions.push(vscode.commands.registerTextEditorCommand("permute-lines.unique", function (editor, edit) {
        run(function () {
            transformLines(editor, edit, function (lines) {
                var unique_lines = [];
                lines.forEach(function (line) {
                    if (unique_lines.indexOf(line) < 0) {
                        unique_lines.push(line);
                    }
                });
                return unique_lines;
            });
        });
    }));
    context.subscriptions.push(vscode.commands.registerTextEditorCommand("permute-lines.shuffle", function (editor, edit) {
        run(function () {
            transformLines(editor, edit, shuffleArray);
        });
    }));
}
exports.activate = activate;
function run(callback) {
    try {
        callback();
    }
    catch (e) {
        console.error(e);
        throw e;
    }
}
function transformLines(editor, edit, callback) {
    var document = editor.document;
    var lineRanges = getLineRanges(editor);
    if (!lineRanges)
        return;
    var lineRangeTexts = lineRanges.map(function (lineRange) {
        return document.getText(lineRange.range);
    });
    lineRangeTexts = callback(lineRangeTexts);
    for (var i = 0; i < lineRanges.length && i < lineRangeTexts.length; ++i)
        edit.replace(lineRanges[i].range, lineRangeTexts[i]);
    // delete lines
    if (lineRanges.length > lineRangeTexts.length) {
        // Account for the last line which may not contain a trailing newline.
        // Simple deletion of its `rangeIncludingLineBreak` would leave an empty line.
        // Instead, we have to find a preceding newline to delete,
        // being careful not to cause intersecting ranges.
        //
        //   line to preserve\n <<< this is the newline to delete
        //   line to remove\n
        //   line to remove\n
        //   line to remove <<< end of document, no trailing newline
        //
        var i = lineRanges.length - 1;
        var lastLineRange = lineRanges[i];
        if (lastLineRange.rangeIncludingLineBreak.isEqual(lastLineRange.range)) {
            while (i > lineRangeTexts.length && lineRanges[i - 1].lineNumber == lineRanges[i].lineNumber - 1)
                i--;
            var borderLineRange = lineRanges[i];
            if (borderLineRange.lineNumber > 0)
                borderLineRange.rangeIncludingLineBreak = borderLineRange.rangeIncludingLineBreak.with(document.lineAt(borderLineRange.lineNumber - 1).range.end);
        }
        for (var i = lineRangeTexts.length; i < lineRanges.length; ++i) {
            // delete the line altogether
            edit.delete(lineRanges[i].rangeIncludingLineBreak);
        }
    }
    if (lineRangeTexts.length > lineRanges.length) {
        var appendix = "\n" + lineRangeTexts.slice(lineRanges.length).join("\n");
        edit.insert(lineRanges[lineRanges.length - 1].range.end, appendix);
    }
}
function getLineRanges(editor) {
    var document = editor.document;
    var lineCount = document.lineCount;
    if (lineCount <= 0)
        return null;
    var selections = editor.selections;
    if (selections.length === 0 || selections.length === 1 && selections[0].isEmpty) {
        // process the whole file
        // ignore empty lines at the end of file
        for (var pos = document.lineAt(lineCount - 1).range.end; pos.line > 0 && pos.character == 0; pos = document.lineAt(pos.line - 1).range.end) { }
        var endLine = pos.line;
        // lineRanges <- sorted array of vscode ranges
        var lineRanges = [];
        for (var lineNumber = 0; lineNumber <= endLine; lineNumber++) {
            var line = document.lineAt(lineNumber);
            lineRanges.push({ lineNumber, range: line.range, rangeIncludingLineBreak: line.rangeIncludingLineBreak });
        }
        return lineRanges;
    }
    // lineNumbersMap <- map of line numbers
    var lineNumbersMap = {};
    selections.forEach(function (selection) {
        // ignore empty lines at the beginning of selection
        for (var lineNumber = selection.start.line; lineNumber <= selection.end.line; ++lineNumber)
            lineNumbersMap[lineNumber] = true;
    });
    // lineNumbers <- sorted array of line numbers
    var stringLineNumbers = Object.keys(lineNumbersMap);
    if (stringLineNumbers.length < 2)
        return null;
    var lineNumbers = stringLineNumbers.map(function (stringLineNumber) { return parseInt(stringLineNumber); });
    lineNumbers.sort(function (a, b) { return a - b; });
    // lineRanges <- sorted array of vscode ranges
    return lineNumbers.map(function (lineNumber) {
        var line = document.lineAt(lineNumber);
        return { lineNumber, range: line.range, rangeIncludingLineBreak: line.rangeIncludingLineBreak };
    });
}
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
//# sourceMappingURL=extension.js.map