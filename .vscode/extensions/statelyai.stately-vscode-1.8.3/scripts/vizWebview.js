(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toESM = (module, isNodeMode) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // ../../../node_modules/xstate/lib/_virtual/_tslib.js
  var require_tslib = __commonJS({
    "../../../node_modules/xstate/lib/_virtual/_tslib.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.__assign = function() {
        exports.__assign = Object.assign || function __assign3(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return exports.__assign.apply(this, arguments);
      };
      function __rest2(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
          }
        return t;
      }
      function __values2(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i >= o.length)
                o = void 0;
              return { value: o && o[i++], done: !o };
            }
          };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }
      function __read2(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error3) {
          e = { error: error3 };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      }
      function __spreadArray2(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      }
      exports.__read = __read2;
      exports.__rest = __rest2;
      exports.__spreadArray = __spreadArray2;
      exports.__values = __values2;
    }
  });

  // ../../../node_modules/xstate/lib/constants.js
  var require_constants = __commonJS({
    "../../../node_modules/xstate/lib/constants.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var STATE_DELIMITER2 = ".";
      var EMPTY_ACTIVITY_MAP2 = {};
      var DEFAULT_GUARD_TYPE2 = "xstate.guard";
      var TARGETLESS_KEY2 = "";
      exports.DEFAULT_GUARD_TYPE = DEFAULT_GUARD_TYPE2;
      exports.EMPTY_ACTIVITY_MAP = EMPTY_ACTIVITY_MAP2;
      exports.STATE_DELIMITER = STATE_DELIMITER2;
      exports.TARGETLESS_KEY = TARGETLESS_KEY2;
    }
  });

  // ../../../node_modules/xstate/lib/environment.js
  var require_environment = __commonJS({
    "../../../node_modules/xstate/lib/environment.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var IS_PRODUCTION2 = false;
      exports.IS_PRODUCTION = IS_PRODUCTION2;
    }
  });

  // ../../../node_modules/xstate/lib/utils.js
  var require_utils = __commonJS({
    "../../../node_modules/xstate/lib/utils.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var _tslib = require_tslib();
      var constants = require_constants();
      var environment = require_environment();
      var _a2;
      function keys2(value) {
        return Object.keys(value);
      }
      function matchesState2(parentStateId, childStateId, delimiter) {
        if (delimiter === void 0) {
          delimiter = constants.STATE_DELIMITER;
        }
        var parentStateValue = toStateValue2(parentStateId, delimiter);
        var childStateValue = toStateValue2(childStateId, delimiter);
        if (isString2(childStateValue)) {
          if (isString2(parentStateValue)) {
            return childStateValue === parentStateValue;
          }
          return false;
        }
        if (isString2(parentStateValue)) {
          return parentStateValue in childStateValue;
        }
        return keys2(parentStateValue).every(function(key) {
          if (!(key in childStateValue)) {
            return false;
          }
          return matchesState2(parentStateValue[key], childStateValue[key]);
        });
      }
      function getEventType2(event2) {
        try {
          return isString2(event2) || typeof event2 === "number" ? "".concat(event2) : event2.type;
        } catch (e) {
          throw new Error("Events must be strings or objects with a string event.type property.");
        }
      }
      function toStatePath2(stateId, delimiter) {
        try {
          if (isArray2(stateId)) {
            return stateId;
          }
          return stateId.toString().split(delimiter);
        } catch (e) {
          throw new Error("'".concat(stateId, "' is not a valid state path."));
        }
      }
      function isStateLike2(state) {
        return typeof state === "object" && "value" in state && "context" in state && "event" in state && "_event" in state;
      }
      function toStateValue2(stateValue, delimiter) {
        if (isStateLike2(stateValue)) {
          return stateValue.value;
        }
        if (isArray2(stateValue)) {
          return pathToStateValue2(stateValue);
        }
        if (typeof stateValue !== "string") {
          return stateValue;
        }
        var statePath = toStatePath2(stateValue, delimiter);
        return pathToStateValue2(statePath);
      }
      function pathToStateValue2(statePath) {
        if (statePath.length === 1) {
          return statePath[0];
        }
        var value = {};
        var marker = value;
        for (var i = 0; i < statePath.length - 1; i++) {
          if (i === statePath.length - 2) {
            marker[statePath[i]] = statePath[i + 1];
          } else {
            marker[statePath[i]] = {};
            marker = marker[statePath[i]];
          }
        }
        return value;
      }
      function mapValues2(collection, iteratee) {
        var result = {};
        var collectionKeys = keys2(collection);
        for (var i = 0; i < collectionKeys.length; i++) {
          var key = collectionKeys[i];
          result[key] = iteratee(collection[key], key, collection, i);
        }
        return result;
      }
      function mapFilterValues2(collection, iteratee, predicate) {
        var e_1, _a3;
        var result = {};
        try {
          for (var _b = _tslib.__values(keys2(collection)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            var item = collection[key];
            if (!predicate(item)) {
              continue;
            }
            result[key] = iteratee(item, key, collection);
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a3 = _b.return))
              _a3.call(_b);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
        return result;
      }
      var path2 = function(props) {
        return function(object) {
          var e_2, _a3;
          var result = object;
          try {
            for (var props_1 = _tslib.__values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
              var prop = props_1_1.value;
              result = result[prop];
            }
          } catch (e_2_1) {
            e_2 = {
              error: e_2_1
            };
          } finally {
            try {
              if (props_1_1 && !props_1_1.done && (_a3 = props_1.return))
                _a3.call(props_1);
            } finally {
              if (e_2)
                throw e_2.error;
            }
          }
          return result;
        };
      };
      function nestedPath2(props, accessorProp) {
        return function(object) {
          var e_3, _a3;
          var result = object;
          try {
            for (var props_2 = _tslib.__values(props), props_2_1 = props_2.next(); !props_2_1.done; props_2_1 = props_2.next()) {
              var prop = props_2_1.value;
              result = result[accessorProp][prop];
            }
          } catch (e_3_1) {
            e_3 = {
              error: e_3_1
            };
          } finally {
            try {
              if (props_2_1 && !props_2_1.done && (_a3 = props_2.return))
                _a3.call(props_2);
            } finally {
              if (e_3)
                throw e_3.error;
            }
          }
          return result;
        };
      }
      function toStatePaths2(stateValue) {
        if (!stateValue) {
          return [[]];
        }
        if (isString2(stateValue)) {
          return [[stateValue]];
        }
        var result = flatten2(keys2(stateValue).map(function(key) {
          var subStateValue = stateValue[key];
          if (typeof subStateValue !== "string" && (!subStateValue || !Object.keys(subStateValue).length)) {
            return [[key]];
          }
          return toStatePaths2(stateValue[key]).map(function(subPath) {
            return [key].concat(subPath);
          });
        }));
        return result;
      }
      function flatten2(array) {
        var _a3;
        return (_a3 = []).concat.apply(_a3, _tslib.__spreadArray([], _tslib.__read(array), false));
      }
      function toArrayStrict2(value) {
        if (isArray2(value)) {
          return value;
        }
        return [value];
      }
      function toArray2(value) {
        if (value === void 0) {
          return [];
        }
        return toArrayStrict2(value);
      }
      function mapContext2(mapper, context, _event) {
        var e_5, _a3;
        if (isFunction2(mapper)) {
          return mapper(context, _event.data);
        }
        var result = {};
        try {
          for (var _b = _tslib.__values(Object.keys(mapper)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            var subMapper = mapper[key];
            if (isFunction2(subMapper)) {
              result[key] = subMapper(context, _event.data);
            } else {
              result[key] = subMapper;
            }
          }
        } catch (e_5_1) {
          e_5 = {
            error: e_5_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a3 = _b.return))
              _a3.call(_b);
          } finally {
            if (e_5)
              throw e_5.error;
          }
        }
        return result;
      }
      function isBuiltInEvent2(eventType) {
        return /^(done|error)\./.test(eventType);
      }
      function isPromiseLike2(value) {
        if (value instanceof Promise) {
          return true;
        }
        if (value !== null && (isFunction2(value) || typeof value === "object") && isFunction2(value.then)) {
          return true;
        }
        return false;
      }
      function isBehavior2(value) {
        return value !== null && typeof value === "object" && "transition" in value && typeof value.transition === "function";
      }
      function partition2(items, predicate) {
        var e_6, _a3;
        var _b = _tslib.__read([[], []], 2), truthy = _b[0], falsy = _b[1];
        try {
          for (var items_1 = _tslib.__values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
            var item = items_1_1.value;
            if (predicate(item)) {
              truthy.push(item);
            } else {
              falsy.push(item);
            }
          }
        } catch (e_6_1) {
          e_6 = {
            error: e_6_1
          };
        } finally {
          try {
            if (items_1_1 && !items_1_1.done && (_a3 = items_1.return))
              _a3.call(items_1);
          } finally {
            if (e_6)
              throw e_6.error;
          }
        }
        return [truthy, falsy];
      }
      function updateHistoryStates2(hist, stateValue) {
        return mapValues2(hist.states, function(subHist, key) {
          if (!subHist) {
            return void 0;
          }
          var subStateValue = (isString2(stateValue) ? void 0 : stateValue[key]) || (subHist ? subHist.current : void 0);
          if (!subStateValue) {
            return void 0;
          }
          return {
            current: subStateValue,
            states: updateHistoryStates2(subHist, subStateValue)
          };
        });
      }
      function updateHistoryValue2(hist, stateValue) {
        return {
          current: stateValue,
          states: updateHistoryStates2(hist, stateValue)
        };
      }
      function updateContext2(context, _event, assignActions, state) {
        if (!environment.IS_PRODUCTION) {
          exports.warn(!!context, "Attempting to update undefined context");
        }
        var updatedContext = context ? assignActions.reduce(function(acc, assignAction) {
          var e_7, _a3;
          var assignment = assignAction.assignment;
          var meta = {
            state,
            action: assignAction,
            _event
          };
          var partialUpdate = {};
          if (isFunction2(assignment)) {
            partialUpdate = assignment(acc, _event.data, meta);
          } else {
            try {
              for (var _b = _tslib.__values(keys2(assignment)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                var propAssignment = assignment[key];
                partialUpdate[key] = isFunction2(propAssignment) ? propAssignment(acc, _event.data, meta) : propAssignment;
              }
            } catch (e_7_1) {
              e_7 = {
                error: e_7_1
              };
            } finally {
              try {
                if (_c && !_c.done && (_a3 = _b.return))
                  _a3.call(_b);
              } finally {
                if (e_7)
                  throw e_7.error;
              }
            }
          }
          return Object.assign({}, acc, partialUpdate);
        }, context) : context;
        return updatedContext;
      }
      exports.warn = function() {
      };
      if (!environment.IS_PRODUCTION) {
        exports.warn = function(condition, message) {
          var error3 = condition instanceof Error ? condition : void 0;
          if (!error3 && condition) {
            return;
          }
          if (console !== void 0) {
            var args = ["Warning: ".concat(message)];
            if (error3) {
              args.push(error3);
            }
            console.warn.apply(console, args);
          }
        };
      }
      function isArray2(value) {
        return Array.isArray(value);
      }
      function isFunction2(value) {
        return typeof value === "function";
      }
      function isString2(value) {
        return typeof value === "string";
      }
      function toGuard2(condition, guardMap) {
        if (!condition) {
          return void 0;
        }
        if (isString2(condition)) {
          return {
            type: constants.DEFAULT_GUARD_TYPE,
            name: condition,
            predicate: guardMap ? guardMap[condition] : void 0
          };
        }
        if (isFunction2(condition)) {
          return {
            type: constants.DEFAULT_GUARD_TYPE,
            name: condition.name,
            predicate: condition
          };
        }
        return condition;
      }
      function isObservable2(value) {
        try {
          return "subscribe" in value && isFunction2(value.subscribe);
        } catch (e) {
          return false;
        }
      }
      var symbolObservable2 = /* @__PURE__ */ function() {
        return typeof Symbol === "function" && Symbol.observable || "@@observable";
      }();
      var interopSymbols2 = (_a2 = {}, _a2[symbolObservable2] = function() {
        return this;
      }, _a2);
      function isMachine2(value) {
        try {
          return "__xstatenode" in value;
        } catch (e) {
          return false;
        }
      }
      function isActor3(value) {
        return !!value && typeof value.send === "function";
      }
      var uniqueId2 = /* @__PURE__ */ function() {
        var currentId = 0;
        return function() {
          currentId++;
          return currentId.toString(16);
        };
      }();
      function toEventObject3(event2, payload) {
        if (isString2(event2) || typeof event2 === "number") {
          return _tslib.__assign({
            type: event2
          }, payload);
        }
        return event2;
      }
      function toSCXMLEvent3(event2, scxmlEvent) {
        if (!isString2(event2) && "$$type" in event2 && event2.$$type === "scxml") {
          return event2;
        }
        var eventObject = toEventObject3(event2);
        return _tslib.__assign({
          name: eventObject.type,
          data: eventObject,
          $$type: "scxml",
          type: "external"
        }, scxmlEvent);
      }
      function toTransitionConfigArray2(event2, configLike) {
        var transitions = toArrayStrict2(configLike).map(function(transitionLike) {
          if (typeof transitionLike === "undefined" || typeof transitionLike === "string" || isMachine2(transitionLike)) {
            return {
              target: transitionLike,
              event: event2
            };
          }
          return _tslib.__assign(_tslib.__assign({}, transitionLike), {
            event: event2
          });
        });
        return transitions;
      }
      function normalizeTarget2(target) {
        if (target === void 0 || target === constants.TARGETLESS_KEY) {
          return void 0;
        }
        return toArray2(target);
      }
      function reportUnhandledExceptionOnInvocation2(originalError, currentError, id) {
        if (!environment.IS_PRODUCTION) {
          var originalStackTrace = originalError.stack ? " Stacktrace was '".concat(originalError.stack, "'") : "";
          if (originalError === currentError) {
            console.error("Missing onError handler for invocation '".concat(id, "', error was '").concat(originalError, "'.").concat(originalStackTrace));
          } else {
            var stackTrace = currentError.stack ? " Stacktrace was '".concat(currentError.stack, "'") : "";
            console.error("Missing onError handler and/or unhandled exception/promise rejection for invocation '".concat(id, "'. ") + "Original error: '".concat(originalError, "'. ").concat(originalStackTrace, " Current error is '").concat(currentError, "'.").concat(stackTrace));
          }
        }
      }
      function evaluateGuard2(machine2, guard, context, _event, state) {
        var guards = machine2.options.guards;
        var guardMeta = {
          state,
          cond: guard,
          _event
        };
        if (guard.type === constants.DEFAULT_GUARD_TYPE) {
          return ((guards === null || guards === void 0 ? void 0 : guards[guard.name]) || guard.predicate)(context, _event.data, guardMeta);
        }
        var condFn = guards === null || guards === void 0 ? void 0 : guards[guard.type];
        if (!condFn) {
          throw new Error("Guard '".concat(guard.type, "' is not implemented on machine '").concat(machine2.id, "'."));
        }
        return condFn(context, _event.data, guardMeta);
      }
      function toInvokeSource3(src) {
        if (typeof src === "string") {
          return {
            type: src
          };
        }
        return src;
      }
      function toObserver3(nextHandler, errorHandler, completionHandler) {
        if (typeof nextHandler === "object") {
          return nextHandler;
        }
        var noop = function() {
          return void 0;
        };
        return {
          next: nextHandler,
          error: errorHandler || noop,
          complete: completionHandler || noop
        };
      }
      function createInvokeId2(stateNodeId, index) {
        return "".concat(stateNodeId, ":invocation[").concat(index, "]");
      }
      exports.createInvokeId = createInvokeId2;
      exports.evaluateGuard = evaluateGuard2;
      exports.flatten = flatten2;
      exports.getEventType = getEventType2;
      exports.interopSymbols = interopSymbols2;
      exports.isActor = isActor3;
      exports.isArray = isArray2;
      exports.isBehavior = isBehavior2;
      exports.isBuiltInEvent = isBuiltInEvent2;
      exports.isFunction = isFunction2;
      exports.isMachine = isMachine2;
      exports.isObservable = isObservable2;
      exports.isPromiseLike = isPromiseLike2;
      exports.isStateLike = isStateLike2;
      exports.isString = isString2;
      exports.keys = keys2;
      exports.mapContext = mapContext2;
      exports.mapFilterValues = mapFilterValues2;
      exports.mapValues = mapValues2;
      exports.matchesState = matchesState2;
      exports.nestedPath = nestedPath2;
      exports.normalizeTarget = normalizeTarget2;
      exports.partition = partition2;
      exports.path = path2;
      exports.pathToStateValue = pathToStateValue2;
      exports.reportUnhandledExceptionOnInvocation = reportUnhandledExceptionOnInvocation2;
      exports.symbolObservable = symbolObservable2;
      exports.toArray = toArray2;
      exports.toArrayStrict = toArrayStrict2;
      exports.toEventObject = toEventObject3;
      exports.toGuard = toGuard2;
      exports.toInvokeSource = toInvokeSource3;
      exports.toObserver = toObserver3;
      exports.toSCXMLEvent = toSCXMLEvent3;
      exports.toStatePath = toStatePath2;
      exports.toStatePaths = toStatePaths2;
      exports.toStateValue = toStateValue2;
      exports.toTransitionConfigArray = toTransitionConfigArray2;
      exports.uniqueId = uniqueId2;
      exports.updateContext = updateContext2;
      exports.updateHistoryStates = updateHistoryStates2;
      exports.updateHistoryValue = updateHistoryValue2;
    }
  });

  // ../../../node_modules/fast-safe-stringify/index.js
  var require_fast_safe_stringify = __commonJS({
    "../../../node_modules/fast-safe-stringify/index.js"(exports, module) {
      module.exports = stringify2;
      stringify2.default = stringify2;
      stringify2.stable = deterministicStringify;
      stringify2.stableStringify = deterministicStringify;
      var arr = [];
      var replacerStack = [];
      function stringify2(obj, replacer, spacer) {
        decirc(obj, "", [], void 0);
        var res;
        try {
          if (replacerStack.length === 0) {
            res = JSON.stringify(obj, replacer, spacer);
          } else {
            res = JSON.stringify(obj, replaceGetterValues(replacer), spacer);
          }
        } catch (_) {
          return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
        } finally {
          while (arr.length !== 0) {
            var part = arr.pop();
            if (part.length === 4) {
              Object.defineProperty(part[0], part[1], part[3]);
            } else {
              part[0][part[1]] = part[2];
            }
          }
        }
        return res;
      }
      function decirc(val, k, stack, parent) {
        var i;
        if (typeof val === "object" && val !== null) {
          for (i = 0; i < stack.length; i++) {
            if (stack[i] === val) {
              var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k);
              if (propertyDescriptor.get !== void 0) {
                if (propertyDescriptor.configurable) {
                  Object.defineProperty(parent, k, { value: "[Circular]" });
                  arr.push([parent, k, val, propertyDescriptor]);
                } else {
                  replacerStack.push([val, k]);
                }
              } else {
                parent[k] = "[Circular]";
                arr.push([parent, k, val]);
              }
              return;
            }
          }
          stack.push(val);
          if (Array.isArray(val)) {
            for (i = 0; i < val.length; i++) {
              decirc(val[i], i, stack, val);
            }
          } else {
            var keys2 = Object.keys(val);
            for (i = 0; i < keys2.length; i++) {
              var key = keys2[i];
              decirc(val[key], key, stack, val);
            }
          }
          stack.pop();
        }
      }
      function compareFunction(a, b) {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      }
      function deterministicStringify(obj, replacer, spacer) {
        var tmp = deterministicDecirc(obj, "", [], void 0) || obj;
        var res;
        try {
          if (replacerStack.length === 0) {
            res = JSON.stringify(tmp, replacer, spacer);
          } else {
            res = JSON.stringify(tmp, replaceGetterValues(replacer), spacer);
          }
        } catch (_) {
          return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
        } finally {
          while (arr.length !== 0) {
            var part = arr.pop();
            if (part.length === 4) {
              Object.defineProperty(part[0], part[1], part[3]);
            } else {
              part[0][part[1]] = part[2];
            }
          }
        }
        return res;
      }
      function deterministicDecirc(val, k, stack, parent) {
        var i;
        if (typeof val === "object" && val !== null) {
          for (i = 0; i < stack.length; i++) {
            if (stack[i] === val) {
              var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k);
              if (propertyDescriptor.get !== void 0) {
                if (propertyDescriptor.configurable) {
                  Object.defineProperty(parent, k, { value: "[Circular]" });
                  arr.push([parent, k, val, propertyDescriptor]);
                } else {
                  replacerStack.push([val, k]);
                }
              } else {
                parent[k] = "[Circular]";
                arr.push([parent, k, val]);
              }
              return;
            }
          }
          try {
            if (typeof val.toJSON === "function") {
              return;
            }
          } catch (_) {
            return;
          }
          stack.push(val);
          if (Array.isArray(val)) {
            for (i = 0; i < val.length; i++) {
              deterministicDecirc(val[i], i, stack, val);
            }
          } else {
            var tmp = {};
            var keys2 = Object.keys(val).sort(compareFunction);
            for (i = 0; i < keys2.length; i++) {
              var key = keys2[i];
              deterministicDecirc(val[key], key, stack, val);
              tmp[key] = val[key];
            }
            if (parent !== void 0) {
              arr.push([parent, k, val]);
              parent[k] = tmp;
            } else {
              return tmp;
            }
          }
          stack.pop();
        }
      }
      function replaceGetterValues(replacer) {
        replacer = replacer !== void 0 ? replacer : function(k, v) {
          return v;
        };
        return function(key, val) {
          if (replacerStack.length > 0) {
            for (var i = 0; i < replacerStack.length; i++) {
              var part = replacerStack[i];
              if (part[1] === key && part[0] === val) {
                val = "[Circular]";
                replacerStack.splice(i, 1);
                break;
              }
            }
          }
          return replacer.call(this, key, val);
        };
      }
    }
  });

  // ../../../node_modules/@xstate/inspect/es/_virtual/_tslib.js
  var __assign = function() {
    __assign = Object.assign || function __assign3(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };

  // ../../../node_modules/xstate/es/_virtual/_tslib.js
  var __assign2 = function() {
    __assign2 = Object.assign || function __assign3(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    return __assign2.apply(this, arguments);
  };
  function __rest(s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  }
  function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m)
      return m.call(o);
    if (o && typeof o.length === "number")
      return {
        next: function() {
          if (o && i >= o.length)
            o = void 0;
          return { value: o && o[i++], done: !o };
        }
      };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
      return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error3) {
      e = { error: error3 };
    } finally {
      try {
        if (r && !r.done && (m = i["return"]))
          m.call(i);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return ar;
  }
  function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar)
            ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  }

  // ../../../node_modules/xstate/es/constants.js
  var STATE_DELIMITER = ".";
  var EMPTY_ACTIVITY_MAP = {};
  var DEFAULT_GUARD_TYPE = "xstate.guard";
  var TARGETLESS_KEY = "";

  // ../../../node_modules/xstate/es/environment.js
  var IS_PRODUCTION = false;

  // ../../../node_modules/xstate/es/utils.js
  var _a;
  function keys(value) {
    return Object.keys(value);
  }
  function matchesState(parentStateId, childStateId, delimiter) {
    if (delimiter === void 0) {
      delimiter = STATE_DELIMITER;
    }
    var parentStateValue = toStateValue(parentStateId, delimiter);
    var childStateValue = toStateValue(childStateId, delimiter);
    if (isString(childStateValue)) {
      if (isString(parentStateValue)) {
        return childStateValue === parentStateValue;
      }
      return false;
    }
    if (isString(parentStateValue)) {
      return parentStateValue in childStateValue;
    }
    return keys(parentStateValue).every(function(key) {
      if (!(key in childStateValue)) {
        return false;
      }
      return matchesState(parentStateValue[key], childStateValue[key]);
    });
  }
  function getEventType(event2) {
    try {
      return isString(event2) || typeof event2 === "number" ? "".concat(event2) : event2.type;
    } catch (e) {
      throw new Error("Events must be strings or objects with a string event.type property.");
    }
  }
  function toStatePath(stateId, delimiter) {
    try {
      if (isArray(stateId)) {
        return stateId;
      }
      return stateId.toString().split(delimiter);
    } catch (e) {
      throw new Error("'".concat(stateId, "' is not a valid state path."));
    }
  }
  function isStateLike(state) {
    return typeof state === "object" && "value" in state && "context" in state && "event" in state && "_event" in state;
  }
  function toStateValue(stateValue, delimiter) {
    if (isStateLike(stateValue)) {
      return stateValue.value;
    }
    if (isArray(stateValue)) {
      return pathToStateValue(stateValue);
    }
    if (typeof stateValue !== "string") {
      return stateValue;
    }
    var statePath = toStatePath(stateValue, delimiter);
    return pathToStateValue(statePath);
  }
  function pathToStateValue(statePath) {
    if (statePath.length === 1) {
      return statePath[0];
    }
    var value = {};
    var marker = value;
    for (var i = 0; i < statePath.length - 1; i++) {
      if (i === statePath.length - 2) {
        marker[statePath[i]] = statePath[i + 1];
      } else {
        marker[statePath[i]] = {};
        marker = marker[statePath[i]];
      }
    }
    return value;
  }
  function mapValues(collection, iteratee) {
    var result = {};
    var collectionKeys = keys(collection);
    for (var i = 0; i < collectionKeys.length; i++) {
      var key = collectionKeys[i];
      result[key] = iteratee(collection[key], key, collection, i);
    }
    return result;
  }
  function mapFilterValues(collection, iteratee, predicate) {
    var e_1, _a2;
    var result = {};
    try {
      for (var _b = __values(keys(collection)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var key = _c.value;
        var item = collection[key];
        if (!predicate(item)) {
          continue;
        }
        result[key] = iteratee(item, key, collection);
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a2 = _b.return))
          _a2.call(_b);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    return result;
  }
  var path = function(props) {
    return function(object) {
      var e_2, _a2;
      var result = object;
      try {
        for (var props_1 = __values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
          var prop = props_1_1.value;
          result = result[prop];
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (props_1_1 && !props_1_1.done && (_a2 = props_1.return))
            _a2.call(props_1);
        } finally {
          if (e_2)
            throw e_2.error;
        }
      }
      return result;
    };
  };
  function nestedPath(props, accessorProp) {
    return function(object) {
      var e_3, _a2;
      var result = object;
      try {
        for (var props_2 = __values(props), props_2_1 = props_2.next(); !props_2_1.done; props_2_1 = props_2.next()) {
          var prop = props_2_1.value;
          result = result[accessorProp][prop];
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (props_2_1 && !props_2_1.done && (_a2 = props_2.return))
            _a2.call(props_2);
        } finally {
          if (e_3)
            throw e_3.error;
        }
      }
      return result;
    };
  }
  function toStatePaths(stateValue) {
    if (!stateValue) {
      return [[]];
    }
    if (isString(stateValue)) {
      return [[stateValue]];
    }
    var result = flatten(keys(stateValue).map(function(key) {
      var subStateValue = stateValue[key];
      if (typeof subStateValue !== "string" && (!subStateValue || !Object.keys(subStateValue).length)) {
        return [[key]];
      }
      return toStatePaths(stateValue[key]).map(function(subPath) {
        return [key].concat(subPath);
      });
    }));
    return result;
  }
  function flatten(array) {
    var _a2;
    return (_a2 = []).concat.apply(_a2, __spreadArray([], __read(array), false));
  }
  function toArrayStrict(value) {
    if (isArray(value)) {
      return value;
    }
    return [value];
  }
  function toArray(value) {
    if (value === void 0) {
      return [];
    }
    return toArrayStrict(value);
  }
  function mapContext(mapper, context, _event) {
    var e_5, _a2;
    if (isFunction(mapper)) {
      return mapper(context, _event.data);
    }
    var result = {};
    try {
      for (var _b = __values(Object.keys(mapper)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var key = _c.value;
        var subMapper = mapper[key];
        if (isFunction(subMapper)) {
          result[key] = subMapper(context, _event.data);
        } else {
          result[key] = subMapper;
        }
      }
    } catch (e_5_1) {
      e_5 = {
        error: e_5_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a2 = _b.return))
          _a2.call(_b);
      } finally {
        if (e_5)
          throw e_5.error;
      }
    }
    return result;
  }
  function isBuiltInEvent(eventType) {
    return /^(done|error)\./.test(eventType);
  }
  function isPromiseLike(value) {
    if (value instanceof Promise) {
      return true;
    }
    if (value !== null && (isFunction(value) || typeof value === "object") && isFunction(value.then)) {
      return true;
    }
    return false;
  }
  function isBehavior(value) {
    return value !== null && typeof value === "object" && "transition" in value && typeof value.transition === "function";
  }
  function partition(items, predicate) {
    var e_6, _a2;
    var _b = __read([[], []], 2), truthy = _b[0], falsy = _b[1];
    try {
      for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
        var item = items_1_1.value;
        if (predicate(item)) {
          truthy.push(item);
        } else {
          falsy.push(item);
        }
      }
    } catch (e_6_1) {
      e_6 = {
        error: e_6_1
      };
    } finally {
      try {
        if (items_1_1 && !items_1_1.done && (_a2 = items_1.return))
          _a2.call(items_1);
      } finally {
        if (e_6)
          throw e_6.error;
      }
    }
    return [truthy, falsy];
  }
  function updateHistoryStates(hist, stateValue) {
    return mapValues(hist.states, function(subHist, key) {
      if (!subHist) {
        return void 0;
      }
      var subStateValue = (isString(stateValue) ? void 0 : stateValue[key]) || (subHist ? subHist.current : void 0);
      if (!subStateValue) {
        return void 0;
      }
      return {
        current: subStateValue,
        states: updateHistoryStates(subHist, subStateValue)
      };
    });
  }
  function updateHistoryValue(hist, stateValue) {
    return {
      current: stateValue,
      states: updateHistoryStates(hist, stateValue)
    };
  }
  function updateContext(context, _event, assignActions, state) {
    if (!IS_PRODUCTION) {
      warn(!!context, "Attempting to update undefined context");
    }
    var updatedContext = context ? assignActions.reduce(function(acc, assignAction) {
      var e_7, _a2;
      var assignment = assignAction.assignment;
      var meta = {
        state,
        action: assignAction,
        _event
      };
      var partialUpdate = {};
      if (isFunction(assignment)) {
        partialUpdate = assignment(acc, _event.data, meta);
      } else {
        try {
          for (var _b = __values(keys(assignment)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            var propAssignment = assignment[key];
            partialUpdate[key] = isFunction(propAssignment) ? propAssignment(acc, _event.data, meta) : propAssignment;
          }
        } catch (e_7_1) {
          e_7 = {
            error: e_7_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a2 = _b.return))
              _a2.call(_b);
          } finally {
            if (e_7)
              throw e_7.error;
          }
        }
      }
      return Object.assign({}, acc, partialUpdate);
    }, context) : context;
    return updatedContext;
  }
  var warn = function() {
  };
  if (!IS_PRODUCTION) {
    warn = function(condition, message) {
      var error3 = condition instanceof Error ? condition : void 0;
      if (!error3 && condition) {
        return;
      }
      if (console !== void 0) {
        var args = ["Warning: ".concat(message)];
        if (error3) {
          args.push(error3);
        }
        console.warn.apply(console, args);
      }
    };
  }
  function isArray(value) {
    return Array.isArray(value);
  }
  function isFunction(value) {
    return typeof value === "function";
  }
  function isString(value) {
    return typeof value === "string";
  }
  function toGuard(condition, guardMap) {
    if (!condition) {
      return void 0;
    }
    if (isString(condition)) {
      return {
        type: DEFAULT_GUARD_TYPE,
        name: condition,
        predicate: guardMap ? guardMap[condition] : void 0
      };
    }
    if (isFunction(condition)) {
      return {
        type: DEFAULT_GUARD_TYPE,
        name: condition.name,
        predicate: condition
      };
    }
    return condition;
  }
  function isObservable(value) {
    try {
      return "subscribe" in value && isFunction(value.subscribe);
    } catch (e) {
      return false;
    }
  }
  var symbolObservable = /* @__PURE__ */ function() {
    return typeof Symbol === "function" && Symbol.observable || "@@observable";
  }();
  var interopSymbols = (_a = {}, _a[symbolObservable] = function() {
    return this;
  }, _a);
  function isMachine(value) {
    try {
      return "__xstatenode" in value;
    } catch (e) {
      return false;
    }
  }
  function isActor(value) {
    return !!value && typeof value.send === "function";
  }
  function toEventObject(event2, payload) {
    if (isString(event2) || typeof event2 === "number") {
      return __assign2({
        type: event2
      }, payload);
    }
    return event2;
  }
  function toSCXMLEvent(event2, scxmlEvent) {
    if (!isString(event2) && "$$type" in event2 && event2.$$type === "scxml") {
      return event2;
    }
    var eventObject = toEventObject(event2);
    return __assign2({
      name: eventObject.type,
      data: eventObject,
      $$type: "scxml",
      type: "external"
    }, scxmlEvent);
  }
  function toTransitionConfigArray(event2, configLike) {
    var transitions = toArrayStrict(configLike).map(function(transitionLike) {
      if (typeof transitionLike === "undefined" || typeof transitionLike === "string" || isMachine(transitionLike)) {
        return {
          target: transitionLike,
          event: event2
        };
      }
      return __assign2(__assign2({}, transitionLike), {
        event: event2
      });
    });
    return transitions;
  }
  function normalizeTarget(target) {
    if (target === void 0 || target === TARGETLESS_KEY) {
      return void 0;
    }
    return toArray(target);
  }
  function reportUnhandledExceptionOnInvocation(originalError, currentError, id) {
    if (!IS_PRODUCTION) {
      var originalStackTrace = originalError.stack ? " Stacktrace was '".concat(originalError.stack, "'") : "";
      if (originalError === currentError) {
        console.error("Missing onError handler for invocation '".concat(id, "', error was '").concat(originalError, "'.").concat(originalStackTrace));
      } else {
        var stackTrace = currentError.stack ? " Stacktrace was '".concat(currentError.stack, "'") : "";
        console.error("Missing onError handler and/or unhandled exception/promise rejection for invocation '".concat(id, "'. ") + "Original error: '".concat(originalError, "'. ").concat(originalStackTrace, " Current error is '").concat(currentError, "'.").concat(stackTrace));
      }
    }
  }
  function evaluateGuard(machine2, guard, context, _event, state) {
    var guards = machine2.options.guards;
    var guardMeta = {
      state,
      cond: guard,
      _event
    };
    if (guard.type === DEFAULT_GUARD_TYPE) {
      return ((guards === null || guards === void 0 ? void 0 : guards[guard.name]) || guard.predicate)(context, _event.data, guardMeta);
    }
    var condFn = guards === null || guards === void 0 ? void 0 : guards[guard.type];
    if (!condFn) {
      throw new Error("Guard '".concat(guard.type, "' is not implemented on machine '").concat(machine2.id, "'."));
    }
    return condFn(context, _event.data, guardMeta);
  }
  function toInvokeSource(src) {
    if (typeof src === "string") {
      return {
        type: src
      };
    }
    return src;
  }
  function toObserver(nextHandler, errorHandler, completionHandler) {
    if (typeof nextHandler === "object") {
      return nextHandler;
    }
    var noop = function() {
      return void 0;
    };
    return {
      next: nextHandler,
      error: errorHandler || noop,
      complete: completionHandler || noop
    };
  }
  function createInvokeId(stateNodeId, index) {
    return "".concat(stateNodeId, ":invocation[").concat(index, "]");
  }

  // ../../../node_modules/xstate/es/types.js
  var ActionTypes;
  (function(ActionTypes2) {
    ActionTypes2["Start"] = "xstate.start";
    ActionTypes2["Stop"] = "xstate.stop";
    ActionTypes2["Raise"] = "xstate.raise";
    ActionTypes2["Send"] = "xstate.send";
    ActionTypes2["Cancel"] = "xstate.cancel";
    ActionTypes2["NullEvent"] = "";
    ActionTypes2["Assign"] = "xstate.assign";
    ActionTypes2["After"] = "xstate.after";
    ActionTypes2["DoneState"] = "done.state";
    ActionTypes2["DoneInvoke"] = "done.invoke";
    ActionTypes2["Log"] = "xstate.log";
    ActionTypes2["Init"] = "xstate.init";
    ActionTypes2["Invoke"] = "xstate.invoke";
    ActionTypes2["ErrorExecution"] = "error.execution";
    ActionTypes2["ErrorCommunication"] = "error.communication";
    ActionTypes2["ErrorPlatform"] = "error.platform";
    ActionTypes2["ErrorCustom"] = "xstate.error";
    ActionTypes2["Update"] = "xstate.update";
    ActionTypes2["Pure"] = "xstate.pure";
    ActionTypes2["Choose"] = "xstate.choose";
  })(ActionTypes || (ActionTypes = {}));
  var SpecialTargets;
  (function(SpecialTargets2) {
    SpecialTargets2["Parent"] = "#_parent";
    SpecialTargets2["Internal"] = "#_internal";
  })(SpecialTargets || (SpecialTargets = {}));

  // ../../../node_modules/xstate/es/actionTypes.js
  var start = ActionTypes.Start;
  var stop = ActionTypes.Stop;
  var raise = ActionTypes.Raise;
  var send = ActionTypes.Send;
  var cancel = ActionTypes.Cancel;
  var nullEvent = ActionTypes.NullEvent;
  var assign = ActionTypes.Assign;
  var after = ActionTypes.After;
  var doneState = ActionTypes.DoneState;
  var log = ActionTypes.Log;
  var init = ActionTypes.Init;
  var invoke = ActionTypes.Invoke;
  var errorExecution = ActionTypes.ErrorExecution;
  var errorPlatform = ActionTypes.ErrorPlatform;
  var error = ActionTypes.ErrorCustom;
  var update = ActionTypes.Update;
  var choose = ActionTypes.Choose;
  var pure = ActionTypes.Pure;

  // ../../../node_modules/xstate/es/actions.js
  var initEvent = /* @__PURE__ */ toSCXMLEvent({
    type: init
  });
  function getActionFunction(actionType, actionFunctionMap) {
    return actionFunctionMap ? actionFunctionMap[actionType] || void 0 : void 0;
  }
  function toActionObject(action, actionFunctionMap) {
    var actionObject;
    if (isString(action) || typeof action === "number") {
      var exec = getActionFunction(action, actionFunctionMap);
      if (isFunction(exec)) {
        actionObject = {
          type: action,
          exec
        };
      } else if (exec) {
        actionObject = exec;
      } else {
        actionObject = {
          type: action,
          exec: void 0
        };
      }
    } else if (isFunction(action)) {
      actionObject = {
        type: action.name || action.toString(),
        exec: action
      };
    } else {
      var exec = getActionFunction(action.type, actionFunctionMap);
      if (isFunction(exec)) {
        actionObject = __assign2(__assign2({}, action), {
          exec
        });
      } else if (exec) {
        var actionType = exec.type || action.type;
        actionObject = __assign2(__assign2(__assign2({}, exec), action), {
          type: actionType
        });
      } else {
        actionObject = action;
      }
    }
    return actionObject;
  }
  var toActionObjects = function(action, actionFunctionMap) {
    if (!action) {
      return [];
    }
    var actions = isArray(action) ? action : [action];
    return actions.map(function(subAction) {
      return toActionObject(subAction, actionFunctionMap);
    });
  };
  function toActivityDefinition(action) {
    var actionObject = toActionObject(action);
    return __assign2(__assign2({
      id: isString(action) ? action : actionObject.id
    }, actionObject), {
      type: actionObject.type
    });
  }
  function raise2(event2) {
    if (!isString(event2)) {
      return send2(event2, {
        to: SpecialTargets.Internal
      });
    }
    return {
      type: raise,
      event: event2
    };
  }
  function resolveRaise(action) {
    return {
      type: raise,
      _event: toSCXMLEvent(action.event)
    };
  }
  function send2(event2, options) {
    return {
      to: options ? options.to : void 0,
      type: send,
      event: isFunction(event2) ? event2 : toEventObject(event2),
      delay: options ? options.delay : void 0,
      id: options && options.id !== void 0 ? options.id : isFunction(event2) ? event2.name : getEventType(event2)
    };
  }
  function resolveSend(action, ctx, _event, delaysMap) {
    var meta = {
      _event
    };
    var resolvedEvent = toSCXMLEvent(isFunction(action.event) ? action.event(ctx, _event.data, meta) : action.event);
    var resolvedDelay;
    if (isString(action.delay)) {
      var configDelay = delaysMap && delaysMap[action.delay];
      resolvedDelay = isFunction(configDelay) ? configDelay(ctx, _event.data, meta) : configDelay;
    } else {
      resolvedDelay = isFunction(action.delay) ? action.delay(ctx, _event.data, meta) : action.delay;
    }
    var resolvedTarget = isFunction(action.to) ? action.to(ctx, _event.data, meta) : action.to;
    return __assign2(__assign2({}, action), {
      to: resolvedTarget,
      _event: resolvedEvent,
      event: resolvedEvent.data,
      delay: resolvedDelay
    });
  }
  var resolveLog = function(action, ctx, _event) {
    return __assign2(__assign2({}, action), {
      value: isString(action.expr) ? action.expr : action.expr(ctx, _event.data, {
        _event
      })
    });
  };
  var cancel2 = function(sendId) {
    return {
      type: cancel,
      sendId
    };
  };
  function start2(activity) {
    var activityDef = toActivityDefinition(activity);
    return {
      type: ActionTypes.Start,
      activity: activityDef,
      exec: void 0
    };
  }
  function stop2(actorRef) {
    var activity = isFunction(actorRef) ? actorRef : toActivityDefinition(actorRef);
    return {
      type: ActionTypes.Stop,
      activity,
      exec: void 0
    };
  }
  function resolveStop(action, context, _event) {
    var actorRefOrString = isFunction(action.activity) ? action.activity(context, _event.data) : action.activity;
    var resolvedActorRef = typeof actorRefOrString === "string" ? {
      id: actorRefOrString
    } : actorRefOrString;
    var actionObject = {
      type: ActionTypes.Stop,
      activity: resolvedActorRef
    };
    return actionObject;
  }
  var assign2 = function(assignment) {
    return {
      type: assign,
      assignment
    };
  };
  function after2(delayRef, id) {
    var idSuffix = id ? "#".concat(id) : "";
    return "".concat(ActionTypes.After, "(").concat(delayRef, ")").concat(idSuffix);
  }
  function done(id, data) {
    var type = "".concat(ActionTypes.DoneState, ".").concat(id);
    var eventObject = {
      type,
      data
    };
    eventObject.toString = function() {
      return type;
    };
    return eventObject;
  }
  function doneInvoke(id, data) {
    var type = "".concat(ActionTypes.DoneInvoke, ".").concat(id);
    var eventObject = {
      type,
      data
    };
    eventObject.toString = function() {
      return type;
    };
    return eventObject;
  }
  function error2(id, data) {
    var type = "".concat(ActionTypes.ErrorPlatform, ".").concat(id);
    var eventObject = {
      type,
      data
    };
    eventObject.toString = function() {
      return type;
    };
    return eventObject;
  }
  function resolveActions(machine2, currentState, currentContext, _event, actions, preserveActionOrder) {
    if (preserveActionOrder === void 0) {
      preserveActionOrder = false;
    }
    var _a2 = __read(preserveActionOrder ? [[], actions] : partition(actions, function(action) {
      return action.type === assign;
    }), 2), assignActions = _a2[0], otherActions = _a2[1];
    var updatedContext = assignActions.length ? updateContext(currentContext, _event, assignActions, currentState) : currentContext;
    var preservedContexts = preserveActionOrder ? [currentContext] : void 0;
    var resolvedActions = flatten(otherActions.map(function(actionObject) {
      var _a3;
      switch (actionObject.type) {
        case raise:
          return resolveRaise(actionObject);
        case send:
          var sendAction = resolveSend(actionObject, updatedContext, _event, machine2.options.delays);
          if (!IS_PRODUCTION) {
            warn(!isString(actionObject.delay) || typeof sendAction.delay === "number", "No delay reference for delay expression '".concat(actionObject.delay, "' was found on machine '").concat(machine2.id, "'"));
          }
          return sendAction;
        case log:
          return resolveLog(actionObject, updatedContext, _event);
        case choose: {
          var chooseAction = actionObject;
          var matchedActions = (_a3 = chooseAction.conds.find(function(condition) {
            var guard = toGuard(condition.cond, machine2.options.guards);
            return !guard || evaluateGuard(machine2, guard, updatedContext, _event, currentState);
          })) === null || _a3 === void 0 ? void 0 : _a3.actions;
          if (!matchedActions) {
            return [];
          }
          var _b = __read(resolveActions(machine2, currentState, updatedContext, _event, toActionObjects(toArray(matchedActions), machine2.options.actions), preserveActionOrder), 2), resolvedActionsFromChoose = _b[0], resolvedContextFromChoose = _b[1];
          updatedContext = resolvedContextFromChoose;
          preservedContexts === null || preservedContexts === void 0 ? void 0 : preservedContexts.push(updatedContext);
          return resolvedActionsFromChoose;
        }
        case pure: {
          var matchedActions = actionObject.get(updatedContext, _event.data);
          if (!matchedActions) {
            return [];
          }
          var _c = __read(resolveActions(machine2, currentState, updatedContext, _event, toActionObjects(toArray(matchedActions), machine2.options.actions), preserveActionOrder), 2), resolvedActionsFromPure = _c[0], resolvedContext = _c[1];
          updatedContext = resolvedContext;
          preservedContexts === null || preservedContexts === void 0 ? void 0 : preservedContexts.push(updatedContext);
          return resolvedActionsFromPure;
        }
        case stop: {
          return resolveStop(actionObject, updatedContext, _event);
        }
        case assign: {
          updatedContext = updateContext(updatedContext, _event, [actionObject], currentState);
          preservedContexts === null || preservedContexts === void 0 ? void 0 : preservedContexts.push(updatedContext);
          break;
        }
        default:
          var resolvedActionObject = toActionObject(actionObject, machine2.options.actions);
          var exec_1 = resolvedActionObject.exec;
          if (exec_1 && preservedContexts) {
            var contextIndex_1 = preservedContexts.length - 1;
            resolvedActionObject = __assign2(__assign2({}, resolvedActionObject), {
              exec: function(_ctx) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                  args[_i - 1] = arguments[_i];
                }
                exec_1.apply(void 0, __spreadArray([preservedContexts[contextIndex_1]], __read(args), false));
              }
            });
          }
          return resolvedActionObject;
      }
    }).filter(function(a) {
      return !!a;
    }));
    return [resolvedActions, updatedContext];
  }

  // ../../../node_modules/xstate/es/stateUtils.js
  var isLeafNode = function(stateNode) {
    return stateNode.type === "atomic" || stateNode.type === "final";
  };
  function getChildren(stateNode) {
    return keys(stateNode.states).map(function(key) {
      return stateNode.states[key];
    });
  }
  function getAllStateNodes(stateNode) {
    var stateNodes = [stateNode];
    if (isLeafNode(stateNode)) {
      return stateNodes;
    }
    return stateNodes.concat(flatten(getChildren(stateNode).map(getAllStateNodes)));
  }
  function getConfiguration(prevStateNodes, stateNodes) {
    var e_1, _a2, e_2, _b, e_3, _c, e_4, _d;
    var prevConfiguration = new Set(prevStateNodes);
    var prevAdjList = getAdjList(prevConfiguration);
    var configuration = new Set(stateNodes);
    try {
      for (var configuration_1 = __values(configuration), configuration_1_1 = configuration_1.next(); !configuration_1_1.done; configuration_1_1 = configuration_1.next()) {
        var s = configuration_1_1.value;
        var m = s.parent;
        while (m && !configuration.has(m)) {
          configuration.add(m);
          m = m.parent;
        }
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (configuration_1_1 && !configuration_1_1.done && (_a2 = configuration_1.return))
          _a2.call(configuration_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    var adjList = getAdjList(configuration);
    try {
      for (var configuration_2 = __values(configuration), configuration_2_1 = configuration_2.next(); !configuration_2_1.done; configuration_2_1 = configuration_2.next()) {
        var s = configuration_2_1.value;
        if (s.type === "compound" && (!adjList.get(s) || !adjList.get(s).length)) {
          if (prevAdjList.get(s)) {
            prevAdjList.get(s).forEach(function(sn) {
              return configuration.add(sn);
            });
          } else {
            s.initialStateNodes.forEach(function(sn) {
              return configuration.add(sn);
            });
          }
        } else {
          if (s.type === "parallel") {
            try {
              for (var _e = (e_3 = void 0, __values(getChildren(s))), _f = _e.next(); !_f.done; _f = _e.next()) {
                var child = _f.value;
                if (child.type === "history") {
                  continue;
                }
                if (!configuration.has(child)) {
                  configuration.add(child);
                  if (prevAdjList.get(child)) {
                    prevAdjList.get(child).forEach(function(sn) {
                      return configuration.add(sn);
                    });
                  } else {
                    child.initialStateNodes.forEach(function(sn) {
                      return configuration.add(sn);
                    });
                  }
                }
              }
            } catch (e_3_1) {
              e_3 = {
                error: e_3_1
              };
            } finally {
              try {
                if (_f && !_f.done && (_c = _e.return))
                  _c.call(_e);
              } finally {
                if (e_3)
                  throw e_3.error;
              }
            }
          }
        }
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (configuration_2_1 && !configuration_2_1.done && (_b = configuration_2.return))
          _b.call(configuration_2);
      } finally {
        if (e_2)
          throw e_2.error;
      }
    }
    try {
      for (var configuration_3 = __values(configuration), configuration_3_1 = configuration_3.next(); !configuration_3_1.done; configuration_3_1 = configuration_3.next()) {
        var s = configuration_3_1.value;
        var m = s.parent;
        while (m && !configuration.has(m)) {
          configuration.add(m);
          m = m.parent;
        }
      }
    } catch (e_4_1) {
      e_4 = {
        error: e_4_1
      };
    } finally {
      try {
        if (configuration_3_1 && !configuration_3_1.done && (_d = configuration_3.return))
          _d.call(configuration_3);
      } finally {
        if (e_4)
          throw e_4.error;
      }
    }
    return configuration;
  }
  function getValueFromAdj(baseNode, adjList) {
    var childStateNodes = adjList.get(baseNode);
    if (!childStateNodes) {
      return {};
    }
    if (baseNode.type === "compound") {
      var childStateNode = childStateNodes[0];
      if (childStateNode) {
        if (isLeafNode(childStateNode)) {
          return childStateNode.key;
        }
      } else {
        return {};
      }
    }
    var stateValue = {};
    childStateNodes.forEach(function(csn) {
      stateValue[csn.key] = getValueFromAdj(csn, adjList);
    });
    return stateValue;
  }
  function getAdjList(configuration) {
    var e_5, _a2;
    var adjList = /* @__PURE__ */ new Map();
    try {
      for (var configuration_4 = __values(configuration), configuration_4_1 = configuration_4.next(); !configuration_4_1.done; configuration_4_1 = configuration_4.next()) {
        var s = configuration_4_1.value;
        if (!adjList.has(s)) {
          adjList.set(s, []);
        }
        if (s.parent) {
          if (!adjList.has(s.parent)) {
            adjList.set(s.parent, []);
          }
          adjList.get(s.parent).push(s);
        }
      }
    } catch (e_5_1) {
      e_5 = {
        error: e_5_1
      };
    } finally {
      try {
        if (configuration_4_1 && !configuration_4_1.done && (_a2 = configuration_4.return))
          _a2.call(configuration_4);
      } finally {
        if (e_5)
          throw e_5.error;
      }
    }
    return adjList;
  }
  function getValue(rootNode, configuration) {
    var config = getConfiguration([rootNode], configuration);
    return getValueFromAdj(rootNode, getAdjList(config));
  }
  function has(iterable, item) {
    if (Array.isArray(iterable)) {
      return iterable.some(function(member) {
        return member === item;
      });
    }
    if (iterable instanceof Set) {
      return iterable.has(item);
    }
    return false;
  }
  function nextEvents(configuration) {
    return __spreadArray([], __read(new Set(flatten(__spreadArray([], __read(configuration.map(function(sn) {
      return sn.ownEvents;
    })), false)))), false);
  }
  function isInFinalState(configuration, stateNode) {
    if (stateNode.type === "compound") {
      return getChildren(stateNode).some(function(s) {
        return s.type === "final" && has(configuration, s);
      });
    }
    if (stateNode.type === "parallel") {
      return getChildren(stateNode).every(function(sn) {
        return isInFinalState(configuration, sn);
      });
    }
    return false;
  }
  function getMeta(configuration) {
    if (configuration === void 0) {
      configuration = [];
    }
    return configuration.reduce(function(acc, stateNode) {
      if (stateNode.meta !== void 0) {
        acc[stateNode.id] = stateNode.meta;
      }
      return acc;
    }, {});
  }
  function getTagsFromConfiguration(configuration) {
    return new Set(flatten(configuration.map(function(sn) {
      return sn.tags;
    })));
  }

  // ../../../node_modules/xstate/es/State.js
  function stateValuesEqual(a, b) {
    if (a === b) {
      return true;
    }
    if (a === void 0 || b === void 0) {
      return false;
    }
    if (isString(a) || isString(b)) {
      return a === b;
    }
    var aKeys = keys(a);
    var bKeys = keys(b);
    return aKeys.length === bKeys.length && aKeys.every(function(key) {
      return stateValuesEqual(a[key], b[key]);
    });
  }
  function isState(state) {
    if (isString(state)) {
      return false;
    }
    return "value" in state && "history" in state;
  }
  function bindActionToState(action, state) {
    var exec = action.exec;
    var boundAction = __assign2(__assign2({}, action), {
      exec: exec !== void 0 ? function() {
        return exec(state.context, state.event, {
          action,
          state,
          _event: state._event
        });
      } : void 0
    });
    return boundAction;
  }
  var State = /* @__PURE__ */ function() {
    function State2(config) {
      var _this = this;
      var _a2;
      this.actions = [];
      this.activities = EMPTY_ACTIVITY_MAP;
      this.meta = {};
      this.events = [];
      this.value = config.value;
      this.context = config.context;
      this._event = config._event;
      this._sessionid = config._sessionid;
      this.event = this._event.data;
      this.historyValue = config.historyValue;
      this.history = config.history;
      this.actions = config.actions || [];
      this.activities = config.activities || EMPTY_ACTIVITY_MAP;
      this.meta = getMeta(config.configuration);
      this.events = config.events || [];
      this.matches = this.matches.bind(this);
      this.toStrings = this.toStrings.bind(this);
      this.configuration = config.configuration;
      this.transitions = config.transitions;
      this.children = config.children;
      this.done = !!config.done;
      this.tags = (_a2 = Array.isArray(config.tags) ? new Set(config.tags) : config.tags) !== null && _a2 !== void 0 ? _a2 : /* @__PURE__ */ new Set();
      this.machine = config.machine;
      Object.defineProperty(this, "nextEvents", {
        get: function() {
          return nextEvents(_this.configuration);
        }
      });
    }
    State2.from = function(stateValue, context) {
      if (stateValue instanceof State2) {
        if (stateValue.context !== context) {
          return new State2({
            value: stateValue.value,
            context,
            _event: stateValue._event,
            _sessionid: null,
            historyValue: stateValue.historyValue,
            history: stateValue.history,
            actions: [],
            activities: stateValue.activities,
            meta: {},
            events: [],
            configuration: [],
            transitions: [],
            children: {}
          });
        }
        return stateValue;
      }
      var _event = initEvent;
      return new State2({
        value: stateValue,
        context,
        _event,
        _sessionid: null,
        historyValue: void 0,
        history: void 0,
        actions: [],
        activities: void 0,
        meta: void 0,
        events: [],
        configuration: [],
        transitions: [],
        children: {}
      });
    };
    State2.create = function(config) {
      return new State2(config);
    };
    State2.inert = function(stateValue, context) {
      if (stateValue instanceof State2) {
        if (!stateValue.actions.length) {
          return stateValue;
        }
        var _event = initEvent;
        return new State2({
          value: stateValue.value,
          context,
          _event,
          _sessionid: null,
          historyValue: stateValue.historyValue,
          history: stateValue.history,
          activities: stateValue.activities,
          configuration: stateValue.configuration,
          transitions: [],
          children: {}
        });
      }
      return State2.from(stateValue, context);
    };
    State2.prototype.toStrings = function(stateValue, delimiter) {
      var _this = this;
      if (stateValue === void 0) {
        stateValue = this.value;
      }
      if (delimiter === void 0) {
        delimiter = ".";
      }
      if (isString(stateValue)) {
        return [stateValue];
      }
      var valueKeys = keys(stateValue);
      return valueKeys.concat.apply(valueKeys, __spreadArray([], __read(valueKeys.map(function(key) {
        return _this.toStrings(stateValue[key], delimiter).map(function(s) {
          return key + delimiter + s;
        });
      })), false));
    };
    State2.prototype.toJSON = function() {
      var _a2 = this, configuration = _a2.configuration, transitions = _a2.transitions, tags = _a2.tags, machine2 = _a2.machine, jsonValues = __rest(_a2, ["configuration", "transitions", "tags", "machine"]);
      return __assign2(__assign2({}, jsonValues), {
        tags: Array.from(tags)
      });
    };
    State2.prototype.matches = function(parentStateValue) {
      return matchesState(parentStateValue, this.value);
    };
    State2.prototype.hasTag = function(tag) {
      return this.tags.has(tag);
    };
    State2.prototype.can = function(event2) {
      var _a2;
      if (IS_PRODUCTION) {
        warn(!!this.machine, "state.can(...) used outside of a machine-created State object; this will always return false.");
      }
      var transitionData = (_a2 = this.machine) === null || _a2 === void 0 ? void 0 : _a2.getTransitionData(this, event2);
      return !!(transitionData === null || transitionData === void 0 ? void 0 : transitionData.transitions.length) && transitionData.transitions.some(function(t) {
        return t.target !== void 0 || t.actions.length;
      });
    };
    return State2;
  }();

  // ../../../node_modules/xstate/es/serviceScope.js
  var serviceStack = [];
  var provide = function(service, fn) {
    serviceStack.push(service);
    var result = fn(service);
    serviceStack.pop();
    return result;
  };

  // ../../../node_modules/xstate/es/Actor.js
  function createNullActor(id) {
    return __assign2({
      id,
      send: function() {
        return void 0;
      },
      subscribe: function() {
        return {
          unsubscribe: function() {
            return void 0;
          }
        };
      },
      getSnapshot: function() {
        return void 0;
      },
      toJSON: function() {
        return {
          id
        };
      }
    }, interopSymbols);
  }
  function createInvocableActor(invokeDefinition, machine2, context, _event) {
    var _a2;
    var invokeSrc = toInvokeSource(invokeDefinition.src);
    var serviceCreator = (_a2 = machine2 === null || machine2 === void 0 ? void 0 : machine2.options.services) === null || _a2 === void 0 ? void 0 : _a2[invokeSrc.type];
    var resolvedData = invokeDefinition.data ? mapContext(invokeDefinition.data, context, _event) : void 0;
    var tempActor = serviceCreator ? createDeferredActor(serviceCreator, invokeDefinition.id, resolvedData) : createNullActor(invokeDefinition.id);
    tempActor.meta = invokeDefinition;
    return tempActor;
  }
  function createDeferredActor(entity, id, data) {
    var tempActor = createNullActor(id);
    tempActor.deferred = true;
    if (isMachine(entity)) {
      var initialState_1 = tempActor.state = provide(void 0, function() {
        return (data ? entity.withContext(data) : entity).initialState;
      });
      tempActor.getSnapshot = function() {
        return initialState_1;
      };
    }
    return tempActor;
  }
  function isActor2(item) {
    try {
      return typeof item.send === "function";
    } catch (e) {
      return false;
    }
  }
  function isSpawnedActor(item) {
    return isActor2(item) && "id" in item;
  }
  function toActorRef(actorRefLike) {
    return __assign2(__assign2({
      subscribe: function() {
        return {
          unsubscribe: function() {
            return void 0;
          }
        };
      },
      id: "anonymous",
      getSnapshot: function() {
        return void 0;
      }
    }, interopSymbols), actorRefLike);
  }

  // ../../../node_modules/xstate/es/invokeUtils.js
  function toInvokeSource2(src) {
    if (typeof src === "string") {
      var simpleSrc = {
        type: src
      };
      simpleSrc.toString = function() {
        return src;
      };
      return simpleSrc;
    }
    return src;
  }
  function toInvokeDefinition(invokeConfig) {
    return __assign2(__assign2({
      type: invoke
    }, invokeConfig), {
      toJSON: function() {
        var onDone = invokeConfig.onDone, onError = invokeConfig.onError, invokeDef = __rest(invokeConfig, ["onDone", "onError"]);
        return __assign2(__assign2({}, invokeDef), {
          type: invoke,
          src: toInvokeSource2(invokeConfig.src)
        });
      }
    });
  }

  // ../../../node_modules/xstate/es/StateNode.js
  var NULL_EVENT = "";
  var STATE_IDENTIFIER = "#";
  var WILDCARD = "*";
  var EMPTY_OBJECT = {};
  var isStateId = function(str) {
    return str[0] === STATE_IDENTIFIER;
  };
  var createDefaultOptions = function() {
    return {
      actions: {},
      guards: {},
      services: {},
      activities: {},
      delays: {}
    };
  };
  var validateArrayifiedTransitions = function(stateNode, event2, transitions) {
    var hasNonLastUnguardedTarget = transitions.slice(0, -1).some(function(transition) {
      return !("cond" in transition) && !("in" in transition) && (isString(transition.target) || isMachine(transition.target));
    });
    var eventText = event2 === NULL_EVENT ? "the transient event" : "event '".concat(event2, "'");
    warn(!hasNonLastUnguardedTarget, "One or more transitions for ".concat(eventText, " on state '").concat(stateNode.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.");
  };
  var StateNode = /* @__PURE__ */ function() {
    function StateNode2(config, options, _context, _stateInfo) {
      var _this = this;
      if (_context === void 0) {
        _context = "context" in config ? config.context : void 0;
      }
      var _a2;
      this.config = config;
      this._context = _context;
      this.order = -1;
      this.__xstatenode = true;
      this.__cache = {
        events: void 0,
        relativeValue: /* @__PURE__ */ new Map(),
        initialStateValue: void 0,
        initialState: void 0,
        on: void 0,
        transitions: void 0,
        candidates: {},
        delayedTransitions: void 0
      };
      this.idMap = {};
      this.tags = [];
      this.options = Object.assign(createDefaultOptions(), options);
      this.parent = _stateInfo === null || _stateInfo === void 0 ? void 0 : _stateInfo.parent;
      this.key = this.config.key || (_stateInfo === null || _stateInfo === void 0 ? void 0 : _stateInfo.key) || this.config.id || "(machine)";
      this.machine = this.parent ? this.parent.machine : this;
      this.path = this.parent ? this.parent.path.concat(this.key) : [];
      this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : STATE_DELIMITER);
      this.id = this.config.id || __spreadArray([this.machine.key], __read(this.path), false).join(this.delimiter);
      this.version = this.parent ? this.parent.version : this.config.version;
      this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic");
      this.schema = this.parent ? this.machine.schema : (_a2 = this.config.schema) !== null && _a2 !== void 0 ? _a2 : {};
      this.description = this.config.description;
      if (!IS_PRODUCTION) {
        warn(!("parallel" in this.config), 'The "parallel" property is deprecated and will be removed in version 4.1. '.concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead."));
      }
      this.initial = this.config.initial;
      this.states = this.config.states ? mapValues(this.config.states, function(stateConfig, key) {
        var _a3;
        var stateNode = new StateNode2(stateConfig, {}, void 0, {
          parent: _this,
          key
        });
        Object.assign(_this.idMap, __assign2((_a3 = {}, _a3[stateNode.id] = stateNode, _a3), stateNode.idMap));
        return stateNode;
      }) : EMPTY_OBJECT;
      var order = 0;
      function dfs(stateNode) {
        var e_1, _a3;
        stateNode.order = order++;
        try {
          for (var _b = __values(getChildren(stateNode)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var child = _c.value;
            dfs(child);
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a3 = _b.return))
              _a3.call(_b);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
      }
      dfs(this);
      this.history = this.config.history === true ? "shallow" : this.config.history || false;
      this._transient = !!this.config.always || (!this.config.on ? false : Array.isArray(this.config.on) ? this.config.on.some(function(_a3) {
        var event2 = _a3.event;
        return event2 === NULL_EVENT;
      }) : NULL_EVENT in this.config.on);
      this.strict = !!this.config.strict;
      this.onEntry = toArray(this.config.entry || this.config.onEntry).map(function(action) {
        return toActionObject(action);
      });
      this.onExit = toArray(this.config.exit || this.config.onExit).map(function(action) {
        return toActionObject(action);
      });
      this.meta = this.config.meta;
      this.doneData = this.type === "final" ? this.config.data : void 0;
      this.invoke = toArray(this.config.invoke).map(function(invokeConfig, i) {
        var _a3, _b;
        if (isMachine(invokeConfig)) {
          var invokeId = createInvokeId(_this.id, i);
          _this.machine.options.services = __assign2((_a3 = {}, _a3[invokeId] = invokeConfig, _a3), _this.machine.options.services);
          return toInvokeDefinition({
            src: invokeId,
            id: invokeId
          });
        } else if (isString(invokeConfig.src)) {
          var invokeId = invokeConfig.id || createInvokeId(_this.id, i);
          return toInvokeDefinition(__assign2(__assign2({}, invokeConfig), {
            id: invokeId,
            src: invokeConfig.src
          }));
        } else if (isMachine(invokeConfig.src) || isFunction(invokeConfig.src)) {
          var invokeId = invokeConfig.id || createInvokeId(_this.id, i);
          _this.machine.options.services = __assign2((_b = {}, _b[invokeId] = invokeConfig.src, _b), _this.machine.options.services);
          return toInvokeDefinition(__assign2(__assign2({
            id: invokeId
          }, invokeConfig), {
            src: invokeId
          }));
        } else {
          var invokeSource = invokeConfig.src;
          return toInvokeDefinition(__assign2(__assign2({
            id: createInvokeId(_this.id, i)
          }, invokeConfig), {
            src: invokeSource
          }));
        }
      });
      this.activities = toArray(this.config.activities).concat(this.invoke).map(function(activity) {
        return toActivityDefinition(activity);
      });
      this.transition = this.transition.bind(this);
      this.tags = toArray(this.config.tags);
    }
    StateNode2.prototype._init = function() {
      if (this.__cache.transitions) {
        return;
      }
      getAllStateNodes(this).forEach(function(stateNode) {
        return stateNode.on;
      });
    };
    StateNode2.prototype.withConfig = function(options, context) {
      var _a2 = this.options, actions = _a2.actions, activities = _a2.activities, guards = _a2.guards, services = _a2.services, delays = _a2.delays;
      return new StateNode2(this.config, {
        actions: __assign2(__assign2({}, actions), options.actions),
        activities: __assign2(__assign2({}, activities), options.activities),
        guards: __assign2(__assign2({}, guards), options.guards),
        services: __assign2(__assign2({}, services), options.services),
        delays: __assign2(__assign2({}, delays), options.delays)
      }, context !== null && context !== void 0 ? context : this.context);
    };
    StateNode2.prototype.withContext = function(context) {
      return new StateNode2(this.config, this.options, context);
    };
    Object.defineProperty(StateNode2.prototype, "context", {
      get: function() {
        return isFunction(this._context) ? this._context() : this._context;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(StateNode2.prototype, "definition", {
      get: function() {
        return {
          id: this.id,
          key: this.key,
          version: this.version,
          context: this.context,
          type: this.type,
          initial: this.initial,
          history: this.history,
          states: mapValues(this.states, function(state) {
            return state.definition;
          }),
          on: this.on,
          transitions: this.transitions,
          entry: this.onEntry,
          exit: this.onExit,
          activities: this.activities || [],
          meta: this.meta,
          order: this.order || -1,
          data: this.doneData,
          invoke: this.invoke,
          description: this.description,
          tags: this.tags
        };
      },
      enumerable: false,
      configurable: true
    });
    StateNode2.prototype.toJSON = function() {
      return this.definition;
    };
    Object.defineProperty(StateNode2.prototype, "on", {
      get: function() {
        if (this.__cache.on) {
          return this.__cache.on;
        }
        var transitions = this.transitions;
        return this.__cache.on = transitions.reduce(function(map, transition) {
          map[transition.eventType] = map[transition.eventType] || [];
          map[transition.eventType].push(transition);
          return map;
        }, {});
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(StateNode2.prototype, "after", {
      get: function() {
        return this.__cache.delayedTransitions || (this.__cache.delayedTransitions = this.getDelayedTransitions(), this.__cache.delayedTransitions);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(StateNode2.prototype, "transitions", {
      get: function() {
        return this.__cache.transitions || (this.__cache.transitions = this.formatTransitions(), this.__cache.transitions);
      },
      enumerable: false,
      configurable: true
    });
    StateNode2.prototype.getCandidates = function(eventName) {
      if (this.__cache.candidates[eventName]) {
        return this.__cache.candidates[eventName];
      }
      var transient = eventName === NULL_EVENT;
      var candidates = this.transitions.filter(function(transition) {
        var sameEventType = transition.eventType === eventName;
        return transient ? sameEventType : sameEventType || transition.eventType === WILDCARD;
      });
      this.__cache.candidates[eventName] = candidates;
      return candidates;
    };
    StateNode2.prototype.getDelayedTransitions = function() {
      var _this = this;
      var afterConfig = this.config.after;
      if (!afterConfig) {
        return [];
      }
      var mutateEntryExit = function(delay, i) {
        var delayRef = isFunction(delay) ? "".concat(_this.id, ":delay[").concat(i, "]") : delay;
        var eventType = after2(delayRef, _this.id);
        _this.onEntry.push(send2(eventType, {
          delay
        }));
        _this.onExit.push(cancel2(eventType));
        return eventType;
      };
      var delayedTransitions = isArray(afterConfig) ? afterConfig.map(function(transition, i) {
        var eventType = mutateEntryExit(transition.delay, i);
        return __assign2(__assign2({}, transition), {
          event: eventType
        });
      }) : flatten(keys(afterConfig).map(function(delay, i) {
        var configTransition = afterConfig[delay];
        var resolvedTransition = isString(configTransition) ? {
          target: configTransition
        } : configTransition;
        var resolvedDelay = !isNaN(+delay) ? +delay : delay;
        var eventType = mutateEntryExit(resolvedDelay, i);
        return toArray(resolvedTransition).map(function(transition) {
          return __assign2(__assign2({}, transition), {
            event: eventType,
            delay: resolvedDelay
          });
        });
      }));
      return delayedTransitions.map(function(delayedTransition) {
        var delay = delayedTransition.delay;
        return __assign2(__assign2({}, _this.formatTransition(delayedTransition)), {
          delay
        });
      });
    };
    StateNode2.prototype.getStateNodes = function(state) {
      var _a2;
      var _this = this;
      if (!state) {
        return [];
      }
      var stateValue = state instanceof State ? state.value : toStateValue(state, this.delimiter);
      if (isString(stateValue)) {
        var initialStateValue = this.getStateNode(stateValue).initial;
        return initialStateValue !== void 0 ? this.getStateNodes((_a2 = {}, _a2[stateValue] = initialStateValue, _a2)) : [this, this.states[stateValue]];
      }
      var subStateKeys = keys(stateValue);
      var subStateNodes = [this];
      subStateNodes.push.apply(subStateNodes, __spreadArray([], __read(flatten(subStateKeys.map(function(subStateKey) {
        return _this.getStateNode(subStateKey).getStateNodes(stateValue[subStateKey]);
      }))), false));
      return subStateNodes;
    };
    StateNode2.prototype.handles = function(event2) {
      var eventType = getEventType(event2);
      return this.events.includes(eventType);
    };
    StateNode2.prototype.resolveState = function(state) {
      var configuration = Array.from(getConfiguration([], this.getStateNodes(state.value)));
      return new State(__assign2(__assign2({}, state), {
        value: this.resolve(state.value),
        configuration,
        done: isInFinalState(configuration, this),
        tags: getTagsFromConfiguration(configuration)
      }));
    };
    StateNode2.prototype.transitionLeafNode = function(stateValue, state, _event) {
      var stateNode = this.getStateNode(stateValue);
      var next = stateNode.next(state, _event);
      if (!next || !next.transitions.length) {
        return this.next(state, _event);
      }
      return next;
    };
    StateNode2.prototype.transitionCompoundNode = function(stateValue, state, _event) {
      var subStateKeys = keys(stateValue);
      var stateNode = this.getStateNode(subStateKeys[0]);
      var next = stateNode._transition(stateValue[subStateKeys[0]], state, _event);
      if (!next || !next.transitions.length) {
        return this.next(state, _event);
      }
      return next;
    };
    StateNode2.prototype.transitionParallelNode = function(stateValue, state, _event) {
      var e_2, _a2;
      var transitionMap = {};
      try {
        for (var _b = __values(keys(stateValue)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var subStateKey = _c.value;
          var subStateValue = stateValue[subStateKey];
          if (!subStateValue) {
            continue;
          }
          var subStateNode = this.getStateNode(subStateKey);
          var next = subStateNode._transition(subStateValue, state, _event);
          if (next) {
            transitionMap[subStateKey] = next;
          }
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return))
            _a2.call(_b);
        } finally {
          if (e_2)
            throw e_2.error;
        }
      }
      var stateTransitions = keys(transitionMap).map(function(key) {
        return transitionMap[key];
      });
      var enabledTransitions = flatten(stateTransitions.map(function(st) {
        return st.transitions;
      }));
      var willTransition = stateTransitions.some(function(st) {
        return st.transitions.length > 0;
      });
      if (!willTransition) {
        return this.next(state, _event);
      }
      var entryNodes = flatten(stateTransitions.map(function(t) {
        return t.entrySet;
      }));
      var configuration = flatten(keys(transitionMap).map(function(key) {
        return transitionMap[key].configuration;
      }));
      return {
        transitions: enabledTransitions,
        entrySet: entryNodes,
        exitSet: flatten(stateTransitions.map(function(t) {
          return t.exitSet;
        })),
        configuration,
        source: state,
        actions: flatten(keys(transitionMap).map(function(key) {
          return transitionMap[key].actions;
        }))
      };
    };
    StateNode2.prototype._transition = function(stateValue, state, _event) {
      if (isString(stateValue)) {
        return this.transitionLeafNode(stateValue, state, _event);
      }
      if (keys(stateValue).length === 1) {
        return this.transitionCompoundNode(stateValue, state, _event);
      }
      return this.transitionParallelNode(stateValue, state, _event);
    };
    StateNode2.prototype.getTransitionData = function(state, event2) {
      return this._transition(state.value, state, toSCXMLEvent(event2));
    };
    StateNode2.prototype.next = function(state, _event) {
      var e_3, _a2;
      var _this = this;
      var eventName = _event.name;
      var actions = [];
      var nextStateNodes = [];
      var selectedTransition;
      try {
        for (var _b = __values(this.getCandidates(eventName)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var candidate = _c.value;
          var cond = candidate.cond, stateIn = candidate.in;
          var resolvedContext = state.context;
          var isInState = stateIn ? isString(stateIn) && isStateId(stateIn) ? state.matches(toStateValue(this.getStateNodeById(stateIn).path, this.delimiter)) : matchesState(toStateValue(stateIn, this.delimiter), path(this.path.slice(0, -2))(state.value)) : true;
          var guardPassed = false;
          try {
            guardPassed = !cond || evaluateGuard(this.machine, cond, resolvedContext, _event, state);
          } catch (err) {
            throw new Error("Unable to evaluate guard '".concat(cond.name || cond.type, "' in transition for event '").concat(eventName, "' in state node '").concat(this.id, "':\n").concat(err.message));
          }
          if (guardPassed && isInState) {
            if (candidate.target !== void 0) {
              nextStateNodes = candidate.target;
            }
            actions.push.apply(actions, __spreadArray([], __read(candidate.actions), false));
            selectedTransition = candidate;
            break;
          }
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return))
            _a2.call(_b);
        } finally {
          if (e_3)
            throw e_3.error;
        }
      }
      if (!selectedTransition) {
        return void 0;
      }
      if (!nextStateNodes.length) {
        return {
          transitions: [selectedTransition],
          entrySet: [],
          exitSet: [],
          configuration: state.value ? [this] : [],
          source: state,
          actions
        };
      }
      var allNextStateNodes = flatten(nextStateNodes.map(function(stateNode) {
        return _this.getRelativeStateNodes(stateNode, state.historyValue);
      }));
      var isInternal = !!selectedTransition.internal;
      var reentryNodes = isInternal ? [] : flatten(allNextStateNodes.map(function(n) {
        return _this.nodesFromChild(n);
      }));
      return {
        transitions: [selectedTransition],
        entrySet: reentryNodes,
        exitSet: isInternal ? [] : [this],
        configuration: allNextStateNodes,
        source: state,
        actions
      };
    };
    StateNode2.prototype.nodesFromChild = function(childStateNode) {
      if (childStateNode.escapes(this)) {
        return [];
      }
      var nodes = [];
      var marker = childStateNode;
      while (marker && marker !== this) {
        nodes.push(marker);
        marker = marker.parent;
      }
      nodes.push(this);
      return nodes;
    };
    StateNode2.prototype.escapes = function(stateNode) {
      if (this === stateNode) {
        return false;
      }
      var parent = this.parent;
      while (parent) {
        if (parent === stateNode) {
          return false;
        }
        parent = parent.parent;
      }
      return true;
    };
    StateNode2.prototype.getActions = function(transition, currentContext, _event, prevState) {
      var e_4, _a2, e_5, _b;
      var prevConfig = getConfiguration([], prevState ? this.getStateNodes(prevState.value) : [this]);
      var resolvedConfig = transition.configuration.length ? getConfiguration(prevConfig, transition.configuration) : prevConfig;
      try {
        for (var resolvedConfig_1 = __values(resolvedConfig), resolvedConfig_1_1 = resolvedConfig_1.next(); !resolvedConfig_1_1.done; resolvedConfig_1_1 = resolvedConfig_1.next()) {
          var sn = resolvedConfig_1_1.value;
          if (!has(prevConfig, sn)) {
            transition.entrySet.push(sn);
          }
        }
      } catch (e_4_1) {
        e_4 = {
          error: e_4_1
        };
      } finally {
        try {
          if (resolvedConfig_1_1 && !resolvedConfig_1_1.done && (_a2 = resolvedConfig_1.return))
            _a2.call(resolvedConfig_1);
        } finally {
          if (e_4)
            throw e_4.error;
        }
      }
      try {
        for (var prevConfig_1 = __values(prevConfig), prevConfig_1_1 = prevConfig_1.next(); !prevConfig_1_1.done; prevConfig_1_1 = prevConfig_1.next()) {
          var sn = prevConfig_1_1.value;
          if (!has(resolvedConfig, sn) || has(transition.exitSet, sn.parent)) {
            transition.exitSet.push(sn);
          }
        }
      } catch (e_5_1) {
        e_5 = {
          error: e_5_1
        };
      } finally {
        try {
          if (prevConfig_1_1 && !prevConfig_1_1.done && (_b = prevConfig_1.return))
            _b.call(prevConfig_1);
        } finally {
          if (e_5)
            throw e_5.error;
        }
      }
      var doneEvents = flatten(transition.entrySet.map(function(sn2) {
        var events = [];
        if (sn2.type !== "final") {
          return events;
        }
        var parent = sn2.parent;
        if (!parent.parent) {
          return events;
        }
        events.push(done(sn2.id, sn2.doneData), done(parent.id, sn2.doneData ? mapContext(sn2.doneData, currentContext, _event) : void 0));
        var grandparent = parent.parent;
        if (grandparent.type === "parallel") {
          if (getChildren(grandparent).every(function(parentNode) {
            return isInFinalState(transition.configuration, parentNode);
          })) {
            events.push(done(grandparent.id));
          }
        }
        return events;
      }));
      transition.exitSet.sort(function(a, b) {
        return b.order - a.order;
      });
      transition.entrySet.sort(function(a, b) {
        return a.order - b.order;
      });
      var entryStates = new Set(transition.entrySet);
      var exitStates = new Set(transition.exitSet);
      var _c = __read([flatten(Array.from(entryStates).map(function(stateNode) {
        return __spreadArray(__spreadArray([], __read(stateNode.activities.map(function(activity) {
          return start2(activity);
        })), false), __read(stateNode.onEntry), false);
      })).concat(doneEvents.map(raise2)), flatten(Array.from(exitStates).map(function(stateNode) {
        return __spreadArray(__spreadArray([], __read(stateNode.onExit), false), __read(stateNode.activities.map(function(activity) {
          return stop2(activity);
        })), false);
      }))], 2), entryActions = _c[0], exitActions = _c[1];
      var actions = toActionObjects(exitActions.concat(transition.actions).concat(entryActions), this.machine.options.actions);
      return actions;
    };
    StateNode2.prototype.transition = function(state, event2, context) {
      if (state === void 0) {
        state = this.initialState;
      }
      var _event = toSCXMLEvent(event2);
      var currentState;
      if (state instanceof State) {
        currentState = context === void 0 ? state : this.resolveState(State.from(state, context));
      } else {
        var resolvedStateValue = isString(state) ? this.resolve(pathToStateValue(this.getResolvedPath(state))) : this.resolve(state);
        var resolvedContext = context !== null && context !== void 0 ? context : this.machine.context;
        currentState = this.resolveState(State.from(resolvedStateValue, resolvedContext));
      }
      if (!IS_PRODUCTION && _event.name === WILDCARD) {
        throw new Error("An event cannot have the wildcard type ('".concat(WILDCARD, "')"));
      }
      if (this.strict) {
        if (!this.events.includes(_event.name) && !isBuiltInEvent(_event.name)) {
          throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(_event.name, "'"));
        }
      }
      var stateTransition = this._transition(currentState.value, currentState, _event) || {
        transitions: [],
        configuration: [],
        entrySet: [],
        exitSet: [],
        source: currentState,
        actions: []
      };
      var prevConfig = getConfiguration([], this.getStateNodes(currentState.value));
      var resolvedConfig = stateTransition.configuration.length ? getConfiguration(prevConfig, stateTransition.configuration) : prevConfig;
      stateTransition.configuration = __spreadArray([], __read(resolvedConfig), false);
      return this.resolveTransition(stateTransition, currentState, currentState.context, _event);
    };
    StateNode2.prototype.resolveRaisedTransition = function(state, _event, originalEvent) {
      var _a2;
      var currentActions = state.actions;
      state = this.transition(state, _event);
      state._event = originalEvent;
      state.event = originalEvent.data;
      (_a2 = state.actions).unshift.apply(_a2, __spreadArray([], __read(currentActions), false));
      return state;
    };
    StateNode2.prototype.resolveTransition = function(stateTransition, currentState, context, _event) {
      var e_6, _a2;
      var _this = this;
      if (_event === void 0) {
        _event = initEvent;
      }
      var configuration = stateTransition.configuration;
      var willTransition = !currentState || stateTransition.transitions.length > 0;
      var resolvedStateValue = willTransition ? getValue(this.machine, configuration) : void 0;
      var historyValue = currentState ? currentState.historyValue ? currentState.historyValue : stateTransition.source ? this.machine.historyValue(currentState.value) : void 0 : void 0;
      var actions = this.getActions(stateTransition, context, _event, currentState);
      var activities = currentState ? __assign2({}, currentState.activities) : {};
      try {
        for (var actions_1 = __values(actions), actions_1_1 = actions_1.next(); !actions_1_1.done; actions_1_1 = actions_1.next()) {
          var action = actions_1_1.value;
          if (action.type === start) {
            activities[action.activity.id || action.activity.type] = action;
          } else if (action.type === stop) {
            activities[action.activity.id || action.activity.type] = false;
          }
        }
      } catch (e_6_1) {
        e_6 = {
          error: e_6_1
        };
      } finally {
        try {
          if (actions_1_1 && !actions_1_1.done && (_a2 = actions_1.return))
            _a2.call(actions_1);
        } finally {
          if (e_6)
            throw e_6.error;
        }
      }
      var _b = __read(resolveActions(this, currentState, context, _event, actions, this.machine.config.preserveActionOrder), 2), resolvedActions = _b[0], updatedContext = _b[1];
      var _c = __read(partition(resolvedActions, function(action2) {
        return action2.type === raise || action2.type === send && action2.to === SpecialTargets.Internal;
      }), 2), raisedEvents = _c[0], nonRaisedActions = _c[1];
      var invokeActions = resolvedActions.filter(function(action2) {
        var _a3;
        return action2.type === start && ((_a3 = action2.activity) === null || _a3 === void 0 ? void 0 : _a3.type) === invoke;
      });
      var children2 = invokeActions.reduce(function(acc, action2) {
        acc[action2.activity.id] = createInvocableActor(action2.activity, _this.machine, updatedContext, _event);
        return acc;
      }, currentState ? __assign2({}, currentState.children) : {});
      var resolvedConfiguration = willTransition ? stateTransition.configuration : currentState ? currentState.configuration : [];
      var isDone = isInFinalState(resolvedConfiguration, this);
      var nextState = new State({
        value: resolvedStateValue || currentState.value,
        context: updatedContext,
        _event,
        _sessionid: currentState ? currentState._sessionid : null,
        historyValue: resolvedStateValue ? historyValue ? updateHistoryValue(historyValue, resolvedStateValue) : void 0 : currentState ? currentState.historyValue : void 0,
        history: !resolvedStateValue || stateTransition.source ? currentState : void 0,
        actions: resolvedStateValue ? nonRaisedActions : [],
        activities: resolvedStateValue ? activities : currentState ? currentState.activities : {},
        events: [],
        configuration: resolvedConfiguration,
        transitions: stateTransition.transitions,
        children: children2,
        done: isDone,
        tags: currentState === null || currentState === void 0 ? void 0 : currentState.tags,
        machine: this
      });
      var didUpdateContext = context !== updatedContext;
      nextState.changed = _event.name === update || didUpdateContext;
      var history = nextState.history;
      if (history) {
        delete history.history;
      }
      var isTransient = !isDone && (this._transient || configuration.some(function(stateNode) {
        return stateNode._transient;
      }));
      if (!willTransition && (!isTransient || _event.name === NULL_EVENT)) {
        return nextState;
      }
      var maybeNextState = nextState;
      if (!isDone) {
        if (isTransient) {
          maybeNextState = this.resolveRaisedTransition(maybeNextState, {
            type: nullEvent
          }, _event);
        }
        while (raisedEvents.length) {
          var raisedEvent = raisedEvents.shift();
          maybeNextState = this.resolveRaisedTransition(maybeNextState, raisedEvent._event, _event);
        }
      }
      var changed = maybeNextState.changed || (history ? !!maybeNextState.actions.length || didUpdateContext || typeof history.value !== typeof maybeNextState.value || !stateValuesEqual(maybeNextState.value, history.value) : void 0);
      maybeNextState.changed = changed;
      maybeNextState.history = history;
      maybeNextState.tags = getTagsFromConfiguration(maybeNextState.configuration);
      return maybeNextState;
    };
    StateNode2.prototype.getStateNode = function(stateKey) {
      if (isStateId(stateKey)) {
        return this.machine.getStateNodeById(stateKey);
      }
      if (!this.states) {
        throw new Error("Unable to retrieve child state '".concat(stateKey, "' from '").concat(this.id, "'; no child states exist."));
      }
      var result = this.states[stateKey];
      if (!result) {
        throw new Error("Child state '".concat(stateKey, "' does not exist on '").concat(this.id, "'"));
      }
      return result;
    };
    StateNode2.prototype.getStateNodeById = function(stateId) {
      var resolvedStateId = isStateId(stateId) ? stateId.slice(STATE_IDENTIFIER.length) : stateId;
      if (resolvedStateId === this.id) {
        return this;
      }
      var stateNode = this.machine.idMap[resolvedStateId];
      if (!stateNode) {
        throw new Error("Child state node '#".concat(resolvedStateId, "' does not exist on machine '").concat(this.id, "'"));
      }
      return stateNode;
    };
    StateNode2.prototype.getStateNodeByPath = function(statePath) {
      if (typeof statePath === "string" && isStateId(statePath)) {
        try {
          return this.getStateNodeById(statePath.slice(1));
        } catch (e) {
        }
      }
      var arrayStatePath = toStatePath(statePath, this.delimiter).slice();
      var currentStateNode = this;
      while (arrayStatePath.length) {
        var key = arrayStatePath.shift();
        if (!key.length) {
          break;
        }
        currentStateNode = currentStateNode.getStateNode(key);
      }
      return currentStateNode;
    };
    StateNode2.prototype.resolve = function(stateValue) {
      var _a2;
      var _this = this;
      if (!stateValue) {
        return this.initialStateValue || EMPTY_OBJECT;
      }
      switch (this.type) {
        case "parallel":
          return mapValues(this.initialStateValue, function(subStateValue, subStateKey) {
            return subStateValue ? _this.getStateNode(subStateKey).resolve(stateValue[subStateKey] || subStateValue) : EMPTY_OBJECT;
          });
        case "compound":
          if (isString(stateValue)) {
            var subStateNode = this.getStateNode(stateValue);
            if (subStateNode.type === "parallel" || subStateNode.type === "compound") {
              return _a2 = {}, _a2[stateValue] = subStateNode.initialStateValue, _a2;
            }
            return stateValue;
          }
          if (!keys(stateValue).length) {
            return this.initialStateValue || {};
          }
          return mapValues(stateValue, function(subStateValue, subStateKey) {
            return subStateValue ? _this.getStateNode(subStateKey).resolve(subStateValue) : EMPTY_OBJECT;
          });
        default:
          return stateValue || EMPTY_OBJECT;
      }
    };
    StateNode2.prototype.getResolvedPath = function(stateIdentifier) {
      if (isStateId(stateIdentifier)) {
        var stateNode = this.machine.idMap[stateIdentifier.slice(STATE_IDENTIFIER.length)];
        if (!stateNode) {
          throw new Error("Unable to find state node '".concat(stateIdentifier, "'"));
        }
        return stateNode.path;
      }
      return toStatePath(stateIdentifier, this.delimiter);
    };
    Object.defineProperty(StateNode2.prototype, "initialStateValue", {
      get: function() {
        var _a2;
        if (this.__cache.initialStateValue) {
          return this.__cache.initialStateValue;
        }
        var initialStateValue;
        if (this.type === "parallel") {
          initialStateValue = mapFilterValues(this.states, function(state) {
            return state.initialStateValue || EMPTY_OBJECT;
          }, function(stateNode) {
            return !(stateNode.type === "history");
          });
        } else if (this.initial !== void 0) {
          if (!this.states[this.initial]) {
            throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
          }
          initialStateValue = isLeafNode(this.states[this.initial]) ? this.initial : (_a2 = {}, _a2[this.initial] = this.states[this.initial].initialStateValue, _a2);
        } else {
          initialStateValue = {};
        }
        this.__cache.initialStateValue = initialStateValue;
        return this.__cache.initialStateValue;
      },
      enumerable: false,
      configurable: true
    });
    StateNode2.prototype.getInitialState = function(stateValue, context) {
      var configuration = this.getStateNodes(stateValue);
      return this.resolveTransition({
        configuration,
        entrySet: configuration,
        exitSet: [],
        transitions: [],
        source: void 0,
        actions: []
      }, void 0, context !== null && context !== void 0 ? context : this.machine.context, void 0);
    };
    Object.defineProperty(StateNode2.prototype, "initialState", {
      get: function() {
        this._init();
        var initialStateValue = this.initialStateValue;
        if (!initialStateValue) {
          throw new Error("Cannot retrieve initial state from simple state '".concat(this.id, "'."));
        }
        return this.getInitialState(initialStateValue);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(StateNode2.prototype, "target", {
      get: function() {
        var target;
        if (this.type === "history") {
          var historyConfig = this.config;
          if (isString(historyConfig.target)) {
            target = isStateId(historyConfig.target) ? pathToStateValue(this.machine.getStateNodeById(historyConfig.target).path.slice(this.path.length - 1)) : historyConfig.target;
          } else {
            target = historyConfig.target;
          }
        }
        return target;
      },
      enumerable: false,
      configurable: true
    });
    StateNode2.prototype.getRelativeStateNodes = function(relativeStateId, historyValue, resolve) {
      if (resolve === void 0) {
        resolve = true;
      }
      return resolve ? relativeStateId.type === "history" ? relativeStateId.resolveHistory(historyValue) : relativeStateId.initialStateNodes : [relativeStateId];
    };
    Object.defineProperty(StateNode2.prototype, "initialStateNodes", {
      get: function() {
        var _this = this;
        if (isLeafNode(this)) {
          return [this];
        }
        if (this.type === "compound" && !this.initial) {
          if (!IS_PRODUCTION) {
            warn(false, "Compound state node '".concat(this.id, "' has no initial state."));
          }
          return [this];
        }
        var initialStateNodePaths = toStatePaths(this.initialStateValue);
        return flatten(initialStateNodePaths.map(function(initialPath) {
          return _this.getFromRelativePath(initialPath);
        }));
      },
      enumerable: false,
      configurable: true
    });
    StateNode2.prototype.getFromRelativePath = function(relativePath) {
      if (!relativePath.length) {
        return [this];
      }
      var _a2 = __read(relativePath), stateKey = _a2[0], childStatePath = _a2.slice(1);
      if (!this.states) {
        throw new Error("Cannot retrieve subPath '".concat(stateKey, "' from node with no states"));
      }
      var childStateNode = this.getStateNode(stateKey);
      if (childStateNode.type === "history") {
        return childStateNode.resolveHistory();
      }
      if (!this.states[stateKey]) {
        throw new Error("Child state '".concat(stateKey, "' does not exist on '").concat(this.id, "'"));
      }
      return this.states[stateKey].getFromRelativePath(childStatePath);
    };
    StateNode2.prototype.historyValue = function(relativeStateValue) {
      if (!keys(this.states).length) {
        return void 0;
      }
      return {
        current: relativeStateValue || this.initialStateValue,
        states: mapFilterValues(this.states, function(stateNode, key) {
          if (!relativeStateValue) {
            return stateNode.historyValue();
          }
          var subStateValue = isString(relativeStateValue) ? void 0 : relativeStateValue[key];
          return stateNode.historyValue(subStateValue || stateNode.initialStateValue);
        }, function(stateNode) {
          return !stateNode.history;
        })
      };
    };
    StateNode2.prototype.resolveHistory = function(historyValue) {
      var _this = this;
      if (this.type !== "history") {
        return [this];
      }
      var parent = this.parent;
      if (!historyValue) {
        var historyTarget = this.target;
        return historyTarget ? flatten(toStatePaths(historyTarget).map(function(relativeChildPath) {
          return parent.getFromRelativePath(relativeChildPath);
        })) : parent.initialStateNodes;
      }
      var subHistoryValue = nestedPath(parent.path, "states")(historyValue).current;
      if (isString(subHistoryValue)) {
        return [parent.getStateNode(subHistoryValue)];
      }
      return flatten(toStatePaths(subHistoryValue).map(function(subStatePath) {
        return _this.history === "deep" ? parent.getFromRelativePath(subStatePath) : [parent.states[subStatePath[0]]];
      }));
    };
    Object.defineProperty(StateNode2.prototype, "stateIds", {
      get: function() {
        var _this = this;
        var childStateIds = flatten(keys(this.states).map(function(stateKey) {
          return _this.states[stateKey].stateIds;
        }));
        return [this.id].concat(childStateIds);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(StateNode2.prototype, "events", {
      get: function() {
        var e_7, _a2, e_8, _b;
        if (this.__cache.events) {
          return this.__cache.events;
        }
        var states = this.states;
        var events = new Set(this.ownEvents);
        if (states) {
          try {
            for (var _c = __values(keys(states)), _d = _c.next(); !_d.done; _d = _c.next()) {
              var stateId = _d.value;
              var state = states[stateId];
              if (state.states) {
                try {
                  for (var _e = (e_8 = void 0, __values(state.events)), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var event_1 = _f.value;
                    events.add("".concat(event_1));
                  }
                } catch (e_8_1) {
                  e_8 = {
                    error: e_8_1
                  };
                } finally {
                  try {
                    if (_f && !_f.done && (_b = _e.return))
                      _b.call(_e);
                  } finally {
                    if (e_8)
                      throw e_8.error;
                  }
                }
              }
            }
          } catch (e_7_1) {
            e_7 = {
              error: e_7_1
            };
          } finally {
            try {
              if (_d && !_d.done && (_a2 = _c.return))
                _a2.call(_c);
            } finally {
              if (e_7)
                throw e_7.error;
            }
          }
        }
        return this.__cache.events = Array.from(events);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(StateNode2.prototype, "ownEvents", {
      get: function() {
        var events = new Set(this.transitions.filter(function(transition) {
          return !(!transition.target && !transition.actions.length && transition.internal);
        }).map(function(transition) {
          return transition.eventType;
        }));
        return Array.from(events);
      },
      enumerable: false,
      configurable: true
    });
    StateNode2.prototype.resolveTarget = function(_target) {
      var _this = this;
      if (_target === void 0) {
        return void 0;
      }
      return _target.map(function(target) {
        if (!isString(target)) {
          return target;
        }
        var isInternalTarget = target[0] === _this.delimiter;
        if (isInternalTarget && !_this.parent) {
          return _this.getStateNodeByPath(target.slice(1));
        }
        var resolvedTarget = isInternalTarget ? _this.key + target : target;
        if (_this.parent) {
          try {
            var targetStateNode = _this.parent.getStateNodeByPath(resolvedTarget);
            return targetStateNode;
          } catch (err) {
            throw new Error("Invalid transition definition for state node '".concat(_this.id, "':\n").concat(err.message));
          }
        } else {
          return _this.getStateNodeByPath(resolvedTarget);
        }
      });
    };
    StateNode2.prototype.formatTransition = function(transitionConfig) {
      var _this = this;
      var normalizedTarget = normalizeTarget(transitionConfig.target);
      var internal = "internal" in transitionConfig ? transitionConfig.internal : normalizedTarget ? normalizedTarget.some(function(_target) {
        return isString(_target) && _target[0] === _this.delimiter;
      }) : true;
      var guards = this.machine.options.guards;
      var target = this.resolveTarget(normalizedTarget);
      var transition = __assign2(__assign2({}, transitionConfig), {
        actions: toActionObjects(toArray(transitionConfig.actions)),
        cond: toGuard(transitionConfig.cond, guards),
        target,
        source: this,
        internal,
        eventType: transitionConfig.event,
        toJSON: function() {
          return __assign2(__assign2({}, transition), {
            target: transition.target ? transition.target.map(function(t) {
              return "#".concat(t.id);
            }) : void 0,
            source: "#".concat(_this.id)
          });
        }
      });
      return transition;
    };
    StateNode2.prototype.formatTransitions = function() {
      var e_9, _a2;
      var _this = this;
      var onConfig;
      if (!this.config.on) {
        onConfig = [];
      } else if (Array.isArray(this.config.on)) {
        onConfig = this.config.on;
      } else {
        var _b = this.config.on, _c = WILDCARD, _d = _b[_c], wildcardConfigs = _d === void 0 ? [] : _d, strictTransitionConfigs_1 = __rest(_b, [typeof _c === "symbol" ? _c : _c + ""]);
        onConfig = flatten(keys(strictTransitionConfigs_1).map(function(key) {
          if (!IS_PRODUCTION && key === NULL_EVENT) {
            warn(false, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + 'Please check the `on` configuration for "#'.concat(_this.id, '".'));
          }
          var transitionConfigArray = toTransitionConfigArray(key, strictTransitionConfigs_1[key]);
          if (!IS_PRODUCTION) {
            validateArrayifiedTransitions(_this, key, transitionConfigArray);
          }
          return transitionConfigArray;
        }).concat(toTransitionConfigArray(WILDCARD, wildcardConfigs)));
      }
      var eventlessConfig = this.config.always ? toTransitionConfigArray("", this.config.always) : [];
      var doneConfig = this.config.onDone ? toTransitionConfigArray(String(done(this.id)), this.config.onDone) : [];
      if (!IS_PRODUCTION) {
        warn(!(this.config.onDone && !this.parent), 'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(this.id, '".'));
      }
      var invokeConfig = flatten(this.invoke.map(function(invokeDef) {
        var settleTransitions = [];
        if (invokeDef.onDone) {
          settleTransitions.push.apply(settleTransitions, __spreadArray([], __read(toTransitionConfigArray(String(doneInvoke(invokeDef.id)), invokeDef.onDone)), false));
        }
        if (invokeDef.onError) {
          settleTransitions.push.apply(settleTransitions, __spreadArray([], __read(toTransitionConfigArray(String(error2(invokeDef.id)), invokeDef.onError)), false));
        }
        return settleTransitions;
      }));
      var delayedTransitions = this.after;
      var formattedTransitions = flatten(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], __read(doneConfig), false), __read(invokeConfig), false), __read(onConfig), false), __read(eventlessConfig), false).map(function(transitionConfig) {
        return toArray(transitionConfig).map(function(transition) {
          return _this.formatTransition(transition);
        });
      }));
      try {
        for (var delayedTransitions_1 = __values(delayedTransitions), delayedTransitions_1_1 = delayedTransitions_1.next(); !delayedTransitions_1_1.done; delayedTransitions_1_1 = delayedTransitions_1.next()) {
          var delayedTransition = delayedTransitions_1_1.value;
          formattedTransitions.push(delayedTransition);
        }
      } catch (e_9_1) {
        e_9 = {
          error: e_9_1
        };
      } finally {
        try {
          if (delayedTransitions_1_1 && !delayedTransitions_1_1.done && (_a2 = delayedTransitions_1.return))
            _a2.call(delayedTransitions_1);
        } finally {
          if (e_9)
            throw e_9.error;
        }
      }
      return formattedTransitions;
    };
    return StateNode2;
  }();

  // ../../../node_modules/xstate/es/Machine.js
  function createMachine(config, options) {
    return new StateNode(config, options);
  }

  // ../../../node_modules/xstate/es/scheduler.js
  var defaultOptions = {
    deferEvents: false
  };
  var Scheduler = /* @__PURE__ */ function() {
    function Scheduler2(options) {
      this.processingEvent = false;
      this.queue = [];
      this.initialized = false;
      this.options = __assign2(__assign2({}, defaultOptions), options);
    }
    Scheduler2.prototype.initialize = function(callback) {
      this.initialized = true;
      if (callback) {
        if (!this.options.deferEvents) {
          this.schedule(callback);
          return;
        }
        this.process(callback);
      }
      this.flushEvents();
    };
    Scheduler2.prototype.schedule = function(task) {
      if (!this.initialized || this.processingEvent) {
        this.queue.push(task);
        return;
      }
      if (this.queue.length !== 0) {
        throw new Error("Event queue should be empty when it is not processing events");
      }
      this.process(task);
      this.flushEvents();
    };
    Scheduler2.prototype.clear = function() {
      this.queue = [];
    };
    Scheduler2.prototype.flushEvents = function() {
      var nextCallback = this.queue.shift();
      while (nextCallback) {
        this.process(nextCallback);
        nextCallback = this.queue.shift();
      }
    };
    Scheduler2.prototype.process = function(callback) {
      this.processingEvent = true;
      try {
        callback();
      } catch (e) {
        this.clear();
        throw e;
      } finally {
        this.processingEvent = false;
      }
    };
    return Scheduler2;
  }();

  // ../../../node_modules/xstate/es/registry.js
  var children = /* @__PURE__ */ new Map();
  var sessionIdIndex = 0;
  var registry = {
    bookId: function() {
      return "x:".concat(sessionIdIndex++);
    },
    register: function(id, actor) {
      children.set(id, actor);
      return id;
    },
    get: function(id) {
      return children.get(id);
    },
    free: function(id) {
      children.delete(id);
    }
  };

  // ../../../node_modules/xstate/es/devTools.js
  function getGlobal() {
    if (typeof globalThis !== "undefined") {
      return globalThis;
    }
    if (typeof self !== "undefined") {
      return self;
    }
    if (typeof window !== "undefined") {
      return window;
    }
    if (typeof global !== "undefined") {
      return global;
    }
    return void 0;
  }
  function getDevTools() {
    var global2 = getGlobal();
    if (global2 && "__xstate__" in global2) {
      return global2.__xstate__;
    }
    return void 0;
  }
  function registerService(service) {
    if (!getGlobal()) {
      return;
    }
    var devTools = getDevTools();
    if (devTools) {
      devTools.register(service);
    }
  }

  // ../../../node_modules/xstate/es/behaviors.js
  function spawnBehavior(behavior, options) {
    if (options === void 0) {
      options = {};
    }
    var state = behavior.initialState;
    var observers = /* @__PURE__ */ new Set();
    var mailbox = [];
    var flushing = false;
    var flush = function() {
      if (flushing) {
        return;
      }
      flushing = true;
      while (mailbox.length > 0) {
        var event_1 = mailbox.shift();
        state = behavior.transition(state, event_1, actorCtx);
        observers.forEach(function(observer) {
          return observer.next(state);
        });
      }
      flushing = false;
    };
    var actor = toActorRef({
      id: options.id,
      send: function(event2) {
        mailbox.push(event2);
        flush();
      },
      getSnapshot: function() {
        return state;
      },
      subscribe: function(next, handleError, complete) {
        var observer = toObserver(next, handleError, complete);
        observers.add(observer);
        observer.next(state);
        return {
          unsubscribe: function() {
            observers.delete(observer);
          }
        };
      }
    });
    var actorCtx = {
      parent: options.parent,
      self: actor,
      id: options.id || "anonymous",
      observers
    };
    state = behavior.start ? behavior.start(actorCtx) : state;
    return actor;
  }

  // ../../../node_modules/xstate/es/interpreter.js
  var DEFAULT_SPAWN_OPTIONS = {
    sync: false,
    autoForward: false
  };
  var InterpreterStatus;
  (function(InterpreterStatus2) {
    InterpreterStatus2[InterpreterStatus2["NotStarted"] = 0] = "NotStarted";
    InterpreterStatus2[InterpreterStatus2["Running"] = 1] = "Running";
    InterpreterStatus2[InterpreterStatus2["Stopped"] = 2] = "Stopped";
  })(InterpreterStatus || (InterpreterStatus = {}));
  var Interpreter = /* @__PURE__ */ function() {
    function Interpreter2(machine2, options) {
      var _this = this;
      if (options === void 0) {
        options = Interpreter2.defaultOptions;
      }
      this.machine = machine2;
      this.scheduler = new Scheduler();
      this.delayedEventsMap = {};
      this.listeners = /* @__PURE__ */ new Set();
      this.contextListeners = /* @__PURE__ */ new Set();
      this.stopListeners = /* @__PURE__ */ new Set();
      this.doneListeners = /* @__PURE__ */ new Set();
      this.eventListeners = /* @__PURE__ */ new Set();
      this.sendListeners = /* @__PURE__ */ new Set();
      this.initialized = false;
      this.status = InterpreterStatus.NotStarted;
      this.children = /* @__PURE__ */ new Map();
      this.forwardTo = /* @__PURE__ */ new Set();
      this.init = this.start;
      this.send = function(event2, payload) {
        if (isArray(event2)) {
          _this.batch(event2);
          return _this.state;
        }
        var _event = toSCXMLEvent(toEventObject(event2, payload));
        if (_this.status === InterpreterStatus.Stopped) {
          if (!IS_PRODUCTION) {
            warn(false, 'Event "'.concat(_event.name, '" was sent to stopped service "').concat(_this.machine.id, '". This service has already reached its final state, and will not transition.\nEvent: ').concat(JSON.stringify(_event.data)));
          }
          return _this.state;
        }
        if (_this.status !== InterpreterStatus.Running && !_this.options.deferEvents) {
          throw new Error('Event "'.concat(_event.name, '" was sent to uninitialized service "').concat(_this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.\nEvent: ').concat(JSON.stringify(_event.data)));
        }
        _this.scheduler.schedule(function() {
          _this.forward(_event);
          var nextState = _this.nextState(_event);
          _this.update(nextState, _event);
        });
        return _this._state;
      };
      this.sendTo = function(event2, to) {
        var isParent = _this.parent && (to === SpecialTargets.Parent || _this.parent.id === to);
        var target = isParent ? _this.parent : isString(to) ? _this.children.get(to) || registry.get(to) : isActor(to) ? to : void 0;
        if (!target) {
          if (!isParent) {
            throw new Error("Unable to send event to child '".concat(to, "' from service '").concat(_this.id, "'."));
          }
          if (!IS_PRODUCTION) {
            warn(false, "Service '".concat(_this.id, "' has no parent: unable to send event ").concat(event2.type));
          }
          return;
        }
        if ("machine" in target) {
          target.send(__assign2(__assign2({}, event2), {
            name: event2.name === error ? "".concat(error2(_this.id)) : event2.name,
            origin: _this.sessionId
          }));
        } else {
          target.send(event2.data);
        }
      };
      var resolvedOptions = __assign2(__assign2({}, Interpreter2.defaultOptions), options);
      var clock = resolvedOptions.clock, logger = resolvedOptions.logger, parent = resolvedOptions.parent, id = resolvedOptions.id;
      var resolvedId = id !== void 0 ? id : machine2.id;
      this.id = resolvedId;
      this.logger = logger;
      this.clock = clock;
      this.parent = parent;
      this.options = resolvedOptions;
      this.scheduler = new Scheduler({
        deferEvents: this.options.deferEvents
      });
      this.sessionId = registry.bookId();
    }
    Object.defineProperty(Interpreter2.prototype, "initialState", {
      get: function() {
        var _this = this;
        if (this._initialState) {
          return this._initialState;
        }
        return provide(this, function() {
          _this._initialState = _this.machine.initialState;
          return _this._initialState;
        });
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Interpreter2.prototype, "state", {
      get: function() {
        if (!IS_PRODUCTION) {
          warn(this.status !== InterpreterStatus.NotStarted, "Attempted to read state from uninitialized service '".concat(this.id, "'. Make sure the service is started first."));
        }
        return this._state;
      },
      enumerable: false,
      configurable: true
    });
    Interpreter2.prototype.execute = function(state, actionsConfig) {
      var e_1, _a2;
      try {
        for (var _b = __values(state.actions), _c = _b.next(); !_c.done; _c = _b.next()) {
          var action = _c.value;
          this.exec(action, state, actionsConfig);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return))
            _a2.call(_b);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
    };
    Interpreter2.prototype.update = function(state, _event) {
      var e_2, _a2, e_3, _b, e_4, _c, e_5, _d;
      var _this = this;
      state._sessionid = this.sessionId;
      this._state = state;
      if (this.options.execute) {
        this.execute(this.state);
      }
      this.children.forEach(function(child) {
        _this.state.children[child.id] = child;
      });
      if (this.devTools) {
        this.devTools.send(_event.data, state);
      }
      if (state.event) {
        try {
          for (var _e = __values(this.eventListeners), _f = _e.next(); !_f.done; _f = _e.next()) {
            var listener = _f.value;
            listener(state.event);
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (_f && !_f.done && (_a2 = _e.return))
              _a2.call(_e);
          } finally {
            if (e_2)
              throw e_2.error;
          }
        }
      }
      try {
        for (var _g = __values(this.listeners), _h = _g.next(); !_h.done; _h = _g.next()) {
          var listener = _h.value;
          listener(state, state.event);
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (_h && !_h.done && (_b = _g.return))
            _b.call(_g);
        } finally {
          if (e_3)
            throw e_3.error;
        }
      }
      try {
        for (var _j = __values(this.contextListeners), _k = _j.next(); !_k.done; _k = _j.next()) {
          var contextListener = _k.value;
          contextListener(this.state.context, this.state.history ? this.state.history.context : void 0);
        }
      } catch (e_4_1) {
        e_4 = {
          error: e_4_1
        };
      } finally {
        try {
          if (_k && !_k.done && (_c = _j.return))
            _c.call(_j);
        } finally {
          if (e_4)
            throw e_4.error;
        }
      }
      var isDone = isInFinalState(state.configuration || [], this.machine);
      if (this.state.configuration && isDone) {
        var finalChildStateNode = state.configuration.find(function(sn) {
          return sn.type === "final" && sn.parent === _this.machine;
        });
        var doneData = finalChildStateNode && finalChildStateNode.doneData ? mapContext(finalChildStateNode.doneData, state.context, _event) : void 0;
        try {
          for (var _l = __values(this.doneListeners), _m = _l.next(); !_m.done; _m = _l.next()) {
            var listener = _m.value;
            listener(doneInvoke(this.id, doneData));
          }
        } catch (e_5_1) {
          e_5 = {
            error: e_5_1
          };
        } finally {
          try {
            if (_m && !_m.done && (_d = _l.return))
              _d.call(_l);
          } finally {
            if (e_5)
              throw e_5.error;
          }
        }
        this.stop();
      }
    };
    Interpreter2.prototype.onTransition = function(listener) {
      this.listeners.add(listener);
      if (this.status === InterpreterStatus.Running) {
        listener(this.state, this.state.event);
      }
      return this;
    };
    Interpreter2.prototype.subscribe = function(nextListenerOrObserver, _, completeListener) {
      var _this = this;
      if (!nextListenerOrObserver) {
        return {
          unsubscribe: function() {
            return void 0;
          }
        };
      }
      var listener;
      var resolvedCompleteListener = completeListener;
      if (typeof nextListenerOrObserver === "function") {
        listener = nextListenerOrObserver;
      } else {
        listener = nextListenerOrObserver.next.bind(nextListenerOrObserver);
        resolvedCompleteListener = nextListenerOrObserver.complete.bind(nextListenerOrObserver);
      }
      this.listeners.add(listener);
      if (this.status === InterpreterStatus.Running) {
        listener(this.state);
      }
      if (resolvedCompleteListener) {
        this.onDone(resolvedCompleteListener);
      }
      return {
        unsubscribe: function() {
          listener && _this.listeners.delete(listener);
          resolvedCompleteListener && _this.doneListeners.delete(resolvedCompleteListener);
        }
      };
    };
    Interpreter2.prototype.onEvent = function(listener) {
      this.eventListeners.add(listener);
      return this;
    };
    Interpreter2.prototype.onSend = function(listener) {
      this.sendListeners.add(listener);
      return this;
    };
    Interpreter2.prototype.onChange = function(listener) {
      this.contextListeners.add(listener);
      return this;
    };
    Interpreter2.prototype.onStop = function(listener) {
      this.stopListeners.add(listener);
      return this;
    };
    Interpreter2.prototype.onDone = function(listener) {
      this.doneListeners.add(listener);
      return this;
    };
    Interpreter2.prototype.off = function(listener) {
      this.listeners.delete(listener);
      this.eventListeners.delete(listener);
      this.sendListeners.delete(listener);
      this.stopListeners.delete(listener);
      this.doneListeners.delete(listener);
      this.contextListeners.delete(listener);
      return this;
    };
    Interpreter2.prototype.start = function(initialState) {
      var _this = this;
      if (this.status === InterpreterStatus.Running) {
        return this;
      }
      registry.register(this.sessionId, this);
      this.initialized = true;
      this.status = InterpreterStatus.Running;
      var resolvedState = initialState === void 0 ? this.initialState : provide(this, function() {
        return isState(initialState) ? _this.machine.resolveState(initialState) : _this.machine.resolveState(State.from(initialState, _this.machine.context));
      });
      if (this.options.devTools) {
        this.attachDev();
      }
      this.scheduler.initialize(function() {
        _this.update(resolvedState, initEvent);
      });
      return this;
    };
    Interpreter2.prototype.stop = function() {
      var e_6, _a2, e_7, _b, e_8, _c, e_9, _d, e_10, _e;
      var _this = this;
      try {
        for (var _f = __values(this.listeners), _g = _f.next(); !_g.done; _g = _f.next()) {
          var listener = _g.value;
          this.listeners.delete(listener);
        }
      } catch (e_6_1) {
        e_6 = {
          error: e_6_1
        };
      } finally {
        try {
          if (_g && !_g.done && (_a2 = _f.return))
            _a2.call(_f);
        } finally {
          if (e_6)
            throw e_6.error;
        }
      }
      try {
        for (var _h = __values(this.stopListeners), _j = _h.next(); !_j.done; _j = _h.next()) {
          var listener = _j.value;
          listener();
          this.stopListeners.delete(listener);
        }
      } catch (e_7_1) {
        e_7 = {
          error: e_7_1
        };
      } finally {
        try {
          if (_j && !_j.done && (_b = _h.return))
            _b.call(_h);
        } finally {
          if (e_7)
            throw e_7.error;
        }
      }
      try {
        for (var _k = __values(this.contextListeners), _l = _k.next(); !_l.done; _l = _k.next()) {
          var listener = _l.value;
          this.contextListeners.delete(listener);
        }
      } catch (e_8_1) {
        e_8 = {
          error: e_8_1
        };
      } finally {
        try {
          if (_l && !_l.done && (_c = _k.return))
            _c.call(_k);
        } finally {
          if (e_8)
            throw e_8.error;
        }
      }
      try {
        for (var _m = __values(this.doneListeners), _o = _m.next(); !_o.done; _o = _m.next()) {
          var listener = _o.value;
          this.doneListeners.delete(listener);
        }
      } catch (e_9_1) {
        e_9 = {
          error: e_9_1
        };
      } finally {
        try {
          if (_o && !_o.done && (_d = _m.return))
            _d.call(_m);
        } finally {
          if (e_9)
            throw e_9.error;
        }
      }
      if (!this.initialized) {
        return this;
      }
      __spreadArray([], __read(this.state.configuration), false).sort(function(a, b) {
        return b.order - a.order;
      }).forEach(function(stateNode) {
        var e_11, _a3;
        try {
          for (var _b2 = __values(stateNode.definition.exit), _c2 = _b2.next(); !_c2.done; _c2 = _b2.next()) {
            var action = _c2.value;
            _this.exec(action, _this.state);
          }
        } catch (e_11_1) {
          e_11 = {
            error: e_11_1
          };
        } finally {
          try {
            if (_c2 && !_c2.done && (_a3 = _b2.return))
              _a3.call(_b2);
          } finally {
            if (e_11)
              throw e_11.error;
          }
        }
      });
      this.children.forEach(function(child) {
        if (isFunction(child.stop)) {
          child.stop();
        }
      });
      try {
        for (var _p = __values(keys(this.delayedEventsMap)), _q = _p.next(); !_q.done; _q = _p.next()) {
          var key = _q.value;
          this.clock.clearTimeout(this.delayedEventsMap[key]);
        }
      } catch (e_10_1) {
        e_10 = {
          error: e_10_1
        };
      } finally {
        try {
          if (_q && !_q.done && (_e = _p.return))
            _e.call(_p);
        } finally {
          if (e_10)
            throw e_10.error;
        }
      }
      this.scheduler.clear();
      this.initialized = false;
      this.status = InterpreterStatus.Stopped;
      registry.free(this.sessionId);
      return this;
    };
    Interpreter2.prototype.batch = function(events) {
      var _this = this;
      if (this.status === InterpreterStatus.NotStarted && this.options.deferEvents) {
        if (!IS_PRODUCTION) {
          warn(false, "".concat(events.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '" and are deferred. Make sure .start() is called for this service.\nEvent: ').concat(JSON.stringify(event)));
        }
      } else if (this.status !== InterpreterStatus.Running) {
        throw new Error("".concat(events.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.'));
      }
      this.scheduler.schedule(function() {
        var e_12, _a2;
        var nextState = _this.state;
        var batchChanged = false;
        var batchedActions = [];
        var _loop_1 = function(event_12) {
          var _event = toSCXMLEvent(event_12);
          _this.forward(_event);
          nextState = provide(_this, function() {
            return _this.machine.transition(nextState, _event);
          });
          batchedActions.push.apply(batchedActions, __spreadArray([], __read(nextState.actions.map(function(a) {
            return bindActionToState(a, nextState);
          })), false));
          batchChanged = batchChanged || !!nextState.changed;
        };
        try {
          for (var events_1 = __values(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
            var event_1 = events_1_1.value;
            _loop_1(event_1);
          }
        } catch (e_12_1) {
          e_12 = {
            error: e_12_1
          };
        } finally {
          try {
            if (events_1_1 && !events_1_1.done && (_a2 = events_1.return))
              _a2.call(events_1);
          } finally {
            if (e_12)
              throw e_12.error;
          }
        }
        nextState.changed = batchChanged;
        nextState.actions = batchedActions;
        _this.update(nextState, toSCXMLEvent(events[events.length - 1]));
      });
    };
    Interpreter2.prototype.sender = function(event2) {
      return this.send.bind(this, event2);
    };
    Interpreter2.prototype.nextState = function(event2) {
      var _this = this;
      var _event = toSCXMLEvent(event2);
      if (_event.name.indexOf(errorPlatform) === 0 && !this.state.nextEvents.some(function(nextEvent) {
        return nextEvent.indexOf(errorPlatform) === 0;
      })) {
        throw _event.data.data;
      }
      var nextState = provide(this, function() {
        return _this.machine.transition(_this.state, _event);
      });
      return nextState;
    };
    Interpreter2.prototype.forward = function(event2) {
      var e_13, _a2;
      try {
        for (var _b = __values(this.forwardTo), _c = _b.next(); !_c.done; _c = _b.next()) {
          var id = _c.value;
          var child = this.children.get(id);
          if (!child) {
            throw new Error("Unable to forward event '".concat(event2, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(id, "'."));
          }
          child.send(event2);
        }
      } catch (e_13_1) {
        e_13 = {
          error: e_13_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return))
            _a2.call(_b);
        } finally {
          if (e_13)
            throw e_13.error;
        }
      }
    };
    Interpreter2.prototype.defer = function(sendAction) {
      var _this = this;
      this.delayedEventsMap[sendAction.id] = this.clock.setTimeout(function() {
        if (sendAction.to) {
          _this.sendTo(sendAction._event, sendAction.to);
        } else {
          _this.send(sendAction._event);
        }
      }, sendAction.delay);
    };
    Interpreter2.prototype.cancel = function(sendId) {
      this.clock.clearTimeout(this.delayedEventsMap[sendId]);
      delete this.delayedEventsMap[sendId];
    };
    Interpreter2.prototype.exec = function(action, state, actionFunctionMap) {
      if (actionFunctionMap === void 0) {
        actionFunctionMap = this.machine.options.actions;
      }
      var context = state.context, _event = state._event;
      var actionOrExec = action.exec || getActionFunction(action.type, actionFunctionMap);
      var exec = isFunction(actionOrExec) ? actionOrExec : actionOrExec ? actionOrExec.exec : action.exec;
      if (exec) {
        try {
          return exec(context, _event.data, {
            action,
            state: this.state,
            _event
          });
        } catch (err) {
          if (this.parent) {
            this.parent.send({
              type: "xstate.error",
              data: err
            });
          }
          throw err;
        }
      }
      switch (action.type) {
        case send:
          var sendAction = action;
          if (typeof sendAction.delay === "number") {
            this.defer(sendAction);
            return;
          } else {
            if (sendAction.to) {
              this.sendTo(sendAction._event, sendAction.to);
            } else {
              this.send(sendAction._event);
            }
          }
          break;
        case cancel:
          this.cancel(action.sendId);
          break;
        case start: {
          if (this.status !== InterpreterStatus.Running) {
            return;
          }
          var activity = action.activity;
          if (!this.state.activities[activity.id || activity.type]) {
            break;
          }
          if (activity.type === ActionTypes.Invoke) {
            var invokeSource = toInvokeSource(activity.src);
            var serviceCreator = this.machine.options.services ? this.machine.options.services[invokeSource.type] : void 0;
            var id = activity.id, data = activity.data;
            if (!IS_PRODUCTION) {
              warn(!("forward" in activity), "`forward` property is deprecated (found in invocation of '".concat(activity.src, "' in in machine '").concat(this.machine.id, "'). ") + "Please use `autoForward` instead.");
            }
            var autoForward = "autoForward" in activity ? activity.autoForward : !!activity.forward;
            if (!serviceCreator) {
              if (!IS_PRODUCTION) {
                warn(false, "No service found for invocation '".concat(activity.src, "' in machine '").concat(this.machine.id, "'."));
              }
              return;
            }
            var resolvedData = data ? mapContext(data, context, _event) : void 0;
            if (typeof serviceCreator === "string") {
              return;
            }
            var source = isFunction(serviceCreator) ? serviceCreator(context, _event.data, {
              data: resolvedData,
              src: invokeSource,
              meta: activity.meta
            }) : serviceCreator;
            if (!source) {
              return;
            }
            var options = void 0;
            if (isMachine(source)) {
              source = resolvedData ? source.withContext(resolvedData) : source;
              options = {
                autoForward
              };
            }
            this.spawn(source, id, options);
          } else {
            this.spawnActivity(activity);
          }
          break;
        }
        case stop: {
          this.stopChild(action.activity.id);
          break;
        }
        case log:
          var label = action.label, value = action.value;
          if (label) {
            this.logger(label, value);
          } else {
            this.logger(value);
          }
          break;
        default:
          if (!IS_PRODUCTION) {
            warn(false, "No implementation found for action type '".concat(action.type, "'"));
          }
          break;
      }
      return void 0;
    };
    Interpreter2.prototype.removeChild = function(childId) {
      var _a2;
      this.children.delete(childId);
      this.forwardTo.delete(childId);
      (_a2 = this.state) === null || _a2 === void 0 ? true : delete _a2.children[childId];
    };
    Interpreter2.prototype.stopChild = function(childId) {
      var child = this.children.get(childId);
      if (!child) {
        return;
      }
      this.removeChild(childId);
      if (isFunction(child.stop)) {
        child.stop();
      }
    };
    Interpreter2.prototype.spawn = function(entity, name, options) {
      if (isPromiseLike(entity)) {
        return this.spawnPromise(Promise.resolve(entity), name);
      } else if (isFunction(entity)) {
        return this.spawnCallback(entity, name);
      } else if (isSpawnedActor(entity)) {
        return this.spawnActor(entity, name);
      } else if (isObservable(entity)) {
        return this.spawnObservable(entity, name);
      } else if (isMachine(entity)) {
        return this.spawnMachine(entity, __assign2(__assign2({}, options), {
          id: name
        }));
      } else if (isBehavior(entity)) {
        return this.spawnBehavior(entity, name);
      } else {
        throw new Error('Unable to spawn entity "'.concat(name, '" of type "').concat(typeof entity, '".'));
      }
    };
    Interpreter2.prototype.spawnMachine = function(machine2, options) {
      var _this = this;
      if (options === void 0) {
        options = {};
      }
      var childService = new Interpreter2(machine2, __assign2(__assign2({}, this.options), {
        parent: this,
        id: options.id || machine2.id
      }));
      var resolvedOptions = __assign2(__assign2({}, DEFAULT_SPAWN_OPTIONS), options);
      if (resolvedOptions.sync) {
        childService.onTransition(function(state) {
          _this.send(update, {
            state,
            id: childService.id
          });
        });
      }
      var actor = childService;
      this.children.set(childService.id, actor);
      if (resolvedOptions.autoForward) {
        this.forwardTo.add(childService.id);
      }
      childService.onDone(function(doneEvent) {
        _this.removeChild(childService.id);
        _this.send(toSCXMLEvent(doneEvent, {
          origin: childService.id
        }));
      }).start();
      return actor;
    };
    Interpreter2.prototype.spawnBehavior = function(behavior, id) {
      var actorRef = spawnBehavior(behavior, {
        id,
        parent: this
      });
      this.children.set(id, actorRef);
      return actorRef;
    };
    Interpreter2.prototype.spawnPromise = function(promise, id) {
      var _this = this;
      var canceled = false;
      var resolvedData;
      promise.then(function(response) {
        if (!canceled) {
          resolvedData = response;
          _this.removeChild(id);
          _this.send(toSCXMLEvent(doneInvoke(id, response), {
            origin: id
          }));
        }
      }, function(errorData) {
        if (!canceled) {
          _this.removeChild(id);
          var errorEvent = error2(id, errorData);
          try {
            _this.send(toSCXMLEvent(errorEvent, {
              origin: id
            }));
          } catch (error3) {
            reportUnhandledExceptionOnInvocation(errorData, error3, id);
            if (_this.devTools) {
              _this.devTools.send(errorEvent, _this.state);
            }
            if (_this.machine.strict) {
              _this.stop();
            }
          }
        }
      });
      var actor = __assign2({
        id,
        send: function() {
          return void 0;
        },
        subscribe: function(next, handleError, complete) {
          var observer = toObserver(next, handleError, complete);
          var unsubscribed = false;
          promise.then(function(response) {
            if (unsubscribed) {
              return;
            }
            observer.next(response);
            if (unsubscribed) {
              return;
            }
            observer.complete();
          }, function(err) {
            if (unsubscribed) {
              return;
            }
            observer.error(err);
          });
          return {
            unsubscribe: function() {
              return unsubscribed = true;
            }
          };
        },
        stop: function() {
          canceled = true;
        },
        toJSON: function() {
          return {
            id
          };
        },
        getSnapshot: function() {
          return resolvedData;
        }
      }, interopSymbols);
      this.children.set(id, actor);
      return actor;
    };
    Interpreter2.prototype.spawnCallback = function(callback, id) {
      var _this = this;
      var canceled = false;
      var receivers = /* @__PURE__ */ new Set();
      var listeners = /* @__PURE__ */ new Set();
      var emitted;
      var receive = function(e) {
        emitted = e;
        listeners.forEach(function(listener) {
          return listener(e);
        });
        if (canceled) {
          return;
        }
        _this.send(toSCXMLEvent(e, {
          origin: id
        }));
      };
      var callbackStop;
      try {
        callbackStop = callback(receive, function(newListener) {
          receivers.add(newListener);
        });
      } catch (err) {
        this.send(error2(id, err));
      }
      if (isPromiseLike(callbackStop)) {
        return this.spawnPromise(callbackStop, id);
      }
      var actor = __assign2({
        id,
        send: function(event2) {
          return receivers.forEach(function(receiver) {
            return receiver(event2);
          });
        },
        subscribe: function(next) {
          listeners.add(next);
          return {
            unsubscribe: function() {
              listeners.delete(next);
            }
          };
        },
        stop: function() {
          canceled = true;
          if (isFunction(callbackStop)) {
            callbackStop();
          }
        },
        toJSON: function() {
          return {
            id
          };
        },
        getSnapshot: function() {
          return emitted;
        }
      }, interopSymbols);
      this.children.set(id, actor);
      return actor;
    };
    Interpreter2.prototype.spawnObservable = function(source, id) {
      var _this = this;
      var emitted;
      var subscription = source.subscribe(function(value) {
        emitted = value;
        _this.send(toSCXMLEvent(value, {
          origin: id
        }));
      }, function(err) {
        _this.removeChild(id);
        _this.send(toSCXMLEvent(error2(id, err), {
          origin: id
        }));
      }, function() {
        _this.removeChild(id);
        _this.send(toSCXMLEvent(doneInvoke(id), {
          origin: id
        }));
      });
      var actor = __assign2({
        id,
        send: function() {
          return void 0;
        },
        subscribe: function(next, handleError, complete) {
          return source.subscribe(next, handleError, complete);
        },
        stop: function() {
          return subscription.unsubscribe();
        },
        getSnapshot: function() {
          return emitted;
        },
        toJSON: function() {
          return {
            id
          };
        }
      }, interopSymbols);
      this.children.set(id, actor);
      return actor;
    };
    Interpreter2.prototype.spawnActor = function(actor, name) {
      this.children.set(name, actor);
      return actor;
    };
    Interpreter2.prototype.spawnActivity = function(activity) {
      var implementation = this.machine.options && this.machine.options.activities ? this.machine.options.activities[activity.type] : void 0;
      if (!implementation) {
        if (!IS_PRODUCTION) {
          warn(false, "No implementation found for activity '".concat(activity.type, "'"));
        }
        return;
      }
      var dispose = implementation(this.state.context, activity);
      this.spawnEffect(activity.id, dispose);
    };
    Interpreter2.prototype.spawnEffect = function(id, dispose) {
      this.children.set(id, __assign2({
        id,
        send: function() {
          return void 0;
        },
        subscribe: function() {
          return {
            unsubscribe: function() {
              return void 0;
            }
          };
        },
        stop: dispose || void 0,
        getSnapshot: function() {
          return void 0;
        },
        toJSON: function() {
          return {
            id
          };
        }
      }, interopSymbols));
    };
    Interpreter2.prototype.attachDev = function() {
      var global2 = getGlobal();
      if (this.options.devTools && global2) {
        if (global2.__REDUX_DEVTOOLS_EXTENSION__) {
          var devToolsOptions = typeof this.options.devTools === "object" ? this.options.devTools : void 0;
          this.devTools = global2.__REDUX_DEVTOOLS_EXTENSION__.connect(__assign2(__assign2({
            name: this.id,
            autoPause: true,
            stateSanitizer: function(state) {
              return {
                value: state.value,
                context: state.context,
                actions: state.actions
              };
            }
          }, devToolsOptions), {
            features: __assign2({
              jump: false,
              skip: false
            }, devToolsOptions ? devToolsOptions.features : void 0)
          }), this.machine);
          this.devTools.init(this.state);
        }
        registerService(this);
      }
    };
    Interpreter2.prototype.toJSON = function() {
      return {
        id: this.id
      };
    };
    Interpreter2.prototype[symbolObservable] = function() {
      return this;
    };
    Interpreter2.prototype.getSnapshot = function() {
      if (this.status === InterpreterStatus.NotStarted) {
        return this.initialState;
      }
      return this._state;
    };
    Interpreter2.defaultOptions = /* @__PURE__ */ function(global2) {
      return {
        execute: true,
        deferEvents: true,
        clock: {
          setTimeout: function(fn, ms) {
            return setTimeout(fn, ms);
          },
          clearTimeout: function(id) {
            return clearTimeout(id);
          }
        },
        logger: global2.console.log.bind(console),
        devTools: false
      };
    }(typeof self !== "undefined" ? self : global);
    Interpreter2.interpret = interpret;
    return Interpreter2;
  }();
  function interpret(machine2, options) {
    var interpreter = new Interpreter(machine2, options);
    return interpreter;
  }

  // ../../../node_modules/@xstate/inspect/es/browser.js
  var import_utils9 = __toESM(require_utils());

  // ../../../node_modules/@xstate/inspect/es/utils.js
  var import_fast_safe_stringify = __toESM(require_fast_safe_stringify());
  function getLazy(value) {
    return typeof value === "function" ? value() : value;
  }
  function stringify(value) {
    try {
      return JSON.stringify(value);
    } catch (e) {
      return (0, import_fast_safe_stringify.default)(value);
    }
  }

  // ../../../node_modules/@xstate/inspect/es/inspectMachine.js
  function createInspectMachine(devTools) {
    if (devTools === void 0) {
      devTools = globalThis.__xstate__;
    }
    var serviceMap2 = /* @__PURE__ */ new Map();
    var sub = devTools.onRegister(function(service) {
      serviceMap2.set(service.sessionId, service);
    });
    return createMachine({
      initial: "pendingConnection",
      context: {
        client: void 0
      },
      states: {
        pendingConnection: {},
        connected: {
          on: {
            "service.state": {
              actions: function(ctx, e) {
                return ctx.client.send(e);
              }
            },
            "service.event": {
              actions: function(ctx, e) {
                return ctx.client.send(e);
              }
            },
            "service.register": {
              actions: function(ctx, e) {
                return ctx.client.send(e);
              }
            },
            "service.stop": {
              actions: function(ctx, e) {
                return ctx.client.send(e);
              }
            },
            "xstate.event": {
              actions: function(_, e) {
                var event2 = e.event;
                var scxmlEventObject = JSON.parse(event2);
                var service = serviceMap2.get(scxmlEventObject.origin);
                service === null || service === void 0 ? void 0 : service.send(scxmlEventObject);
              }
            },
            unload: {
              actions: function(ctx) {
                ctx.client.send({ type: "xstate.disconnect" });
              }
            },
            disconnect: "disconnected"
          }
        },
        disconnected: {
          entry: function() {
            sub.unsubscribe();
          },
          type: "final"
        }
      },
      on: {
        "xstate.inspecting": {
          target: ".connected",
          actions: [
            assign2({
              client: function(_, e) {
                return e.client;
              }
            }),
            function(ctx) {
              devTools.services.forEach(function(service) {
                var _a2;
                (_a2 = ctx.client) === null || _a2 === void 0 ? void 0 : _a2.send({
                  type: "service.register",
                  machine: stringify(service.machine),
                  state: stringify(service.state || service.initialState),
                  sessionId: service.sessionId
                });
              });
            }
          ]
        }
      }
    });
  }

  // ../../../node_modules/@xstate/inspect/es/browser.js
  var serviceMap = /* @__PURE__ */ new Map();
  function createDevTools() {
    var services = /* @__PURE__ */ new Set();
    var serviceListeners = /* @__PURE__ */ new Set();
    return {
      services,
      register: function(service) {
        services.add(service);
        serviceMap.set(service.sessionId, service);
        serviceListeners.forEach(function(listener) {
          return listener(service);
        });
        service.onStop(function() {
          services.delete(service);
          serviceMap.delete(service.sessionId);
        });
      },
      unregister: function(service) {
        services.delete(service);
        serviceMap.delete(service.sessionId);
      },
      onRegister: function(listener) {
        serviceListeners.add(listener);
        services.forEach(function(service) {
          return listener(service);
        });
        return {
          unsubscribe: function() {
            serviceListeners.delete(listener);
          }
        };
      }
    };
  }
  var defaultInspectorOptions = {
    url: "https://statecharts.io/inspect",
    iframe: function() {
      return document.querySelector("iframe[data-xstate]");
    },
    devTools: function() {
      var devTools = createDevTools();
      globalThis.__xstate__ = devTools;
      return devTools;
    }
  };
  function inspect(options) {
    var _a2 = __assign(__assign({}, defaultInspectorOptions), options), iframe = _a2.iframe, url = _a2.url, devTools = _a2.devTools;
    var resolvedIframe = getLazy(iframe);
    if (resolvedIframe === null) {
      console.warn("No suitable <iframe> found to embed the inspector. Please pass an <iframe> element to `inspect(iframe)` or create an <iframe data-xstate></iframe> element.");
      return void 0;
    }
    var resolvedDevTools = getLazy(devTools);
    var inspectMachine = createInspectMachine(resolvedDevTools);
    var inspectService = interpret(inspectMachine).start();
    var listeners = /* @__PURE__ */ new Set();
    var sub = inspectService.subscribe(function(state) {
      listeners.forEach(function(listener) {
        return listener.next(state);
      });
    });
    var targetWindow;
    var client;
    var messageHandler = function(event2) {
      if (typeof event2.data === "object" && event2.data !== null && "type" in event2.data) {
        if (resolvedIframe && !targetWindow) {
          targetWindow = resolvedIframe.contentWindow;
        }
        if (!client) {
          client = {
            send: function(e) {
              targetWindow.postMessage(e, url);
            }
          };
        }
        inspectService.send(__assign(__assign({}, event2.data), { client }));
      }
    };
    window.addEventListener("message", messageHandler);
    window.addEventListener("unload", function() {
      inspectService.send({ type: "unload" });
    });
    if (resolvedIframe === false) {
      targetWindow = window.open(url, "xstateinspector");
    }
    resolvedDevTools.onRegister(function(service) {
      var _a3;
      inspectService.send({
        type: "service.register",
        machine: stringify(service.machine),
        state: stringify(service.state || service.initialState),
        sessionId: service.sessionId,
        id: service.id,
        parent: (_a3 = service.parent) === null || _a3 === void 0 ? void 0 : _a3.sessionId
      });
      inspectService.send({
        type: "service.event",
        event: stringify((service.state || service.initialState)._event),
        sessionId: service.sessionId
      });
      var originalSend = service.send.bind(service);
      service.send = function inspectSend(event2, payload) {
        inspectService.send({
          type: "service.event",
          event: stringify((0, import_utils9.toSCXMLEvent)((0, import_utils9.toEventObject)(event2, payload))),
          sessionId: service.sessionId
        });
        return originalSend(event2, payload);
      };
      service.subscribe(function(state) {
        inspectService.send({
          type: "service.state",
          state: stringify(state),
          sessionId: service.sessionId
        });
      });
      service.onStop(function() {
        inspectService.send({
          type: "service.stop",
          sessionId: service.sessionId
        });
      });
    });
    if (resolvedIframe) {
      resolvedIframe.addEventListener("load", function() {
        targetWindow = resolvedIframe.contentWindow;
      });
      resolvedIframe.setAttribute("src", url);
    }
    return {
      send: function(event2) {
        inspectService.send(event2);
      },
      subscribe: function(next, onError, onComplete) {
        var observer = (0, import_utils9.toObserver)(next, onError, onComplete);
        listeners.add(observer);
        return {
          unsubscribe: function() {
            listeners.delete(observer);
          }
        };
      },
      disconnect: function() {
        inspectService.send("disconnect");
        window.removeEventListener("message", messageHandler);
        sub.unsubscribe();
      }
    };
  }

  // src/vizWebviewScript.ts
  var machine = createMachine({
    initial: "waitingForFirstContact",
    context: {
      config: {},
      uri: "",
      index: 0,
      guardsToMock: []
    },
    invoke: {
      src: () => (send3) => {
        window.addEventListener("message", (event2) => {
          try {
            send3(event2.data);
          } catch (e) {
            console.warn(e);
          }
        });
      }
    },
    on: {
      RECEIVE_SERVICE: {
        target: ".hasService",
        actions: assign2((context, event2) => {
          return {
            config: event2.config,
            index: event2.index,
            uri: event2.uri,
            guardsToMock: event2.guardsToMock || []
          };
        }),
        internal: false
      }
    },
    states: {
      waitingForFirstContact: {},
      hasService: {
        on: {
          UPDATE: {
            cond: (context, event2) => {
              return context.uri === event2.uri && context.index === event2.index;
            },
            target: ".startingInspector",
            actions: assign2((context, event2) => {
              return {
                config: event2.config,
                index: event2.index,
                uri: event2.uri,
                guardsToMock: event2.guardsToMock || []
              };
            }),
            internal: false
          }
        },
        invoke: {
          src: () => () => {
            const inspector = inspect({
              iframe: () => document.getElementById("iframe"),
              url: `https://xstate-viz-git-farskid-embedded-mode-statelyai.vercel.app/viz/embed?inspect&zoom=1&pan=1&controls=1`
            });
            return () => {
              inspector.disconnect();
            };
          }
        },
        initial: "startingInspector",
        states: {
          startingInspector: {
            after: {
              100: "startingInterpreter"
            }
          },
          startingInterpreter: {
            invoke: {
              src: (context) => (send3) => {
                var _a2;
                const guards = {};
                (_a2 = context.guardsToMock) == null ? void 0 : _a2.forEach((guard) => {
                  guards[guard] = () => true;
                });
                context.config.context = {};
                const machine2 = createMachine(context.config || {}, {
                  guards
                });
                const service = interpret(machine2, {
                  devTools: true
                }).start();
                return () => {
                  service.stop();
                };
              }
            }
          }
        }
      }
    }
  });
  interpret(machine).start();
})();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
