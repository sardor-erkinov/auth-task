"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.useIntersection = useIntersection;\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ \"./node_modules/next/dist/client/request-idle-callback.js\");\nvar hasIntersectionObserver = typeof IntersectionObserver !== \"undefined\";\nfunction useIntersection(param) {\n    var rootRef = param.rootRef, rootMargin = param.rootMargin, disabled = param.disabled;\n    _s();\n    var isDisabled = disabled || !hasIntersectionObserver;\n    var unobserve = (0, _react).useRef();\n    var ref = _slicedToArray((0, _react).useState(false), 2), visible = ref[0], setVisible = ref[1];\n    var ref1 = _slicedToArray((0, _react).useState(rootRef ? rootRef.current : null), 2), root = ref1[0], setRoot = ref1[1];\n    var setRef = (0, _react).useCallback(function(el) {\n        if (unobserve.current) {\n            unobserve.current();\n            unobserve.current = undefined;\n        }\n        if (isDisabled || visible) return;\n        if (el && el.tagName) {\n            unobserve.current = observe(el, function(isVisible) {\n                return isVisible && setVisible(isVisible);\n            }, {\n                root: root,\n                rootMargin: rootMargin\n            });\n        }\n    }, [\n        isDisabled,\n        root,\n        rootMargin,\n        visible\n    ]);\n    (0, _react).useEffect(function() {\n        if (!hasIntersectionObserver) {\n            if (!visible) {\n                var idleCallback = (0, _requestIdleCallback).requestIdleCallback(function() {\n                    return setVisible(true);\n                });\n                return function() {\n                    return (0, _requestIdleCallback).cancelIdleCallback(idleCallback);\n                };\n            }\n        }\n    }, [\n        visible\n    ]);\n    (0, _react).useEffect(function() {\n        if (rootRef) setRoot(rootRef.current);\n    }, [\n        rootRef\n    ]);\n    return [\n        setRef,\n        visible\n    ];\n}\n_s(useIntersection, \"8yqWdEeDfD0tyyoUg0Lxi0UbbUQ=\");\nfunction observe(element, callback, options) {\n    var ref = createObserver(options), id = ref.id, observer = ref.observer, elements = ref.elements;\n    elements.set(element, callback);\n    observer.observe(element);\n    return function unobserve() {\n        elements.delete(element);\n        observer.unobserve(element);\n        // Destroy observer when there's nothing left to watch:\n        if (elements.size === 0) {\n            observer.disconnect();\n            observers.delete(id);\n            var index = idList.findIndex(function(obj) {\n                return obj.root === id.root && obj.margin === id.margin;\n            });\n            if (index > -1) {\n                idList.splice(index, 1);\n            }\n        }\n    };\n}\nvar observers = new Map();\nvar idList = [];\nfunction createObserver(options) {\n    var id = {\n        root: options.root || null,\n        margin: options.rootMargin || \"\"\n    };\n    var existing = idList.find(function(obj) {\n        return obj.root === id.root && obj.margin === id.margin;\n    });\n    var instance;\n    if (existing) {\n        instance = observers.get(existing);\n    } else {\n        instance = observers.get(id);\n        idList.push(id);\n    }\n    if (instance) {\n        return instance;\n    }\n    var elements = new Map();\n    var observer = new IntersectionObserver(function(entries) {\n        entries.forEach(function(entry) {\n            var callback = elements.get(entry.target);\n            var isVisible = entry.isIntersecting || entry.intersectionRatio > 0;\n            if (callback && isVisible) {\n                callback(isVisible);\n            }\n        });\n    }, options);\n    observers.set(id, instance = {\n        id: id,\n        observer: observer,\n        elements: elements\n    });\n    return instance;\n} //# sourceMappingURL=use-intersection.js.map\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDYkEsOENBQTZDO0lBQ3pDRyxLQUFLLEVBQUUsSUFBSTtDQUNkLEVBQUMsQ0FBQztBQUNIRCx1QkFBdUIsR0FBR0UsZUFBZSxDQUFDO0FBQzFDLElBQUlDLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyw0Q0FBTyxDQUFDO0FBQzdCLElBQUlDLG9CQUFvQixHQUFHRCxtQkFBTyxDQUFDLHlGQUF5QixDQUFDO0FBQzdELElBQU1FLHVCQUF1QixHQUFHLE9BQU9DLG9CQUFvQixLQUFLLFdBQVc7QUFDM0UsU0FBU0wsZUFBZSxDQUFDLEtBQW9DLEVBQUU7UUFBcENNLE9BQU8sR0FBVCxLQUFvQyxDQUFsQ0EsT0FBTyxFQUFHQyxVQUFVLEdBQXRCLEtBQW9DLENBQXhCQSxVQUFVLEVBQUdDLFFBQVEsR0FBakMsS0FBb0MsQ0FBWEEsUUFBUTs7SUFDdEQsSUFBTUMsVUFBVSxHQUFHRCxRQUFRLElBQUksQ0FBQ0osdUJBQXVCO0lBQ3ZELElBQU1NLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRVQsTUFBTSxDQUFDLENBQUNVLE1BQU0sRUFBRTtJQUN0QyxJQUE4QixHQUEyQixrQkFBM0IsQ0FBQyxDQUFDLEVBQUVWLE1BQU0sQ0FBQyxDQUFDVyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQWxEQyxPQUFPLEdBQWdCLEdBQTJCLEdBQTNDLEVBQUVDLFVBQVUsR0FBSSxHQUEyQixHQUEvQjtJQUMxQixJQUF3QixJQUFzRCxrQkFBdEQsQ0FBQyxDQUFDLEVBQUViLE1BQU0sQ0FBQyxDQUFDVyxRQUFRLENBQUNOLE9BQU8sR0FBR0EsT0FBTyxDQUFDUyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQXZFQyxJQUFJLEdBQWEsSUFBc0QsR0FBbkUsRUFBRUMsT0FBTyxHQUFJLElB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SUFBTXpCLFFBQVEsR0FBR0ssUUFBUSxDQUFDZ0IsR0FBRyxDQUFDSSxLQUFLLENBQUNDLE1BQU0sQ0FBQztZQUMzQyxJQUFNaEMsU0FBUyxHQUFHK0IsS0FBSyxDQUFDRSxjQUFjLElBQUlGLEtBQUssQ0FBQ0csaUJBQWlCLEdBQUcsQ0FBQztZQUNyRSxJQUFJNUIsUUFBUSxJQUFJTixTQUFTLEVBQUU7Z0JBQ3ZCTSxRQUFRLENBQUNOLFNBQVMsQ0FBQyxDQUFDO2FBQ3ZCO1NBQ0osQ0FBQyxDQUFDO0tBQ04sRUFBRU8sT0FBTyxDQUFDO0lBQ1hTLFNBQVMsQ0FBQ0osR0FBRyxDQUFDSCxFQUFFLEVBQUVpQixRQUFRLEdBQUc7UUFDekJqQixFQUFFLEVBQUZBLEVBQUU7UUFDRkMsUUFBUSxFQUFSQSxRQUFRO1FBQ1JDLFFBQVEsRUFBUkEsUUFBUTtLQUNYLENBQUMsQ0FBQztJQUNILE9BQU9lLFFBQVEsQ0FBQztDQUNuQixDQUVELDRDQUE0QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzP2ZkOTQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnVzZUludGVyc2VjdGlvbiA9IHVzZUludGVyc2VjdGlvbjtcbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oeyByb290UmVmICwgcm9vdE1hcmdpbiAsIGRpc2FibGVkICB9KSB7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtcbiAgICBjb25zdCB1bm9ic2VydmUgPSAoMCwgX3JlYWN0KS51c2VSZWYoKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSAoMCwgX3JlYWN0KS51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3Jvb3QsIHNldFJvb3RdID0gKDAsIF9yZWFjdCkudXNlU3RhdGUocm9vdFJlZiA/IHJvb3RSZWYuY3VycmVudCA6IG51bGwpO1xuICAgIGNvbnN0IHNldFJlZiA9ICgwLCBfcmVhY3QpLnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpO1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuO1xuICAgICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKGVsLCAoaXNWaXNpYmxlKT0+aXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKVxuICAgICAgICAgICAgLCB7XG4gICAgICAgICAgICAgICAgcm9vdCxcbiAgICAgICAgICAgICAgICByb290TWFyZ2luXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgaXNEaXNhYmxlZCxcbiAgICAgICAgcm9vdCxcbiAgICAgICAgcm9vdE1hcmdpbixcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgICgwLCBfcmVhY3QpLnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFZpc2libGUodHJ1ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKT0+KDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5jYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgICgwLCBfcmVhY3QpLnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAocm9vdFJlZikgc2V0Um9vdChyb290UmVmLmN1cnJlbnQpO1xuICAgIH0sIFtcbiAgICAgICAgcm9vdFJlZlxuICAgIF0pO1xuICAgIHJldHVybiBbXG4gICAgICAgIHNldFJlZixcbiAgICAgICAgdmlzaWJsZVxuICAgIF07XG59XG5mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBpZCAsIG9ic2VydmVyICwgZWxlbWVudHMgIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKTtcbiAgICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpIHtcbiAgICAgICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICAgICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpO1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gaWRMaXN0LmZpbmRJbmRleCgob2JqKT0+b2JqLnJvb3QgPT09IGlkLnJvb3QgJiYgb2JqLm1hcmdpbiA9PT0gaWQubWFyZ2luXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICBpZExpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwKCk7XG5jb25zdCBpZExpc3QgPSBbXTtcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZCA9IHtcbiAgICAgICAgcm9vdDogb3B0aW9ucy5yb290IHx8IG51bGwsXG4gICAgICAgIG1hcmdpbjogb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gICAgfTtcbiAgICBsZXQgZXhpc3RpbmcgPSBpZExpc3QuZmluZCgob2JqKT0+b2JqLnJvb3QgPT09IGlkLnJvb3QgJiYgb2JqLm1hcmdpbiA9PT0gaWQubWFyZ2luXG4gICAgKTtcbiAgICBsZXQgaW5zdGFuY2U7XG4gICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICAgIGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChleGlzdGluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKTtcbiAgICAgICAgaWRMaXN0LnB1c2goaWQpO1xuICAgIH1cbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcyk9PntcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSk9PntcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDA7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgb3B0aW9ucyk7XG4gICAgb2JzZXJ2ZXJzLnNldChpZCwgaW5zdGFuY2UgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBvYnNlcnZlcixcbiAgICAgICAgZWxlbWVudHNcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwidXNlSW50ZXJzZWN0aW9uIiwiX3JlYWN0IiwicmVxdWlyZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsInJvb3RSZWYiLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidXNlUmVmIiwidXNlU3RhdGUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsImN1cnJlbnQiLCJyb290Iiwic2V0Um9vdCIsInNldFJlZiIsInVzZUNhbGxiYWNrIiwiZWwiLCJ1bmRlZmluZWQiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlzVmlzaWJsZSIsInVzZUVmZmVjdCIsImlkbGVDYWxsYmFjayIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvcHRpb25zIiwiY3JlYXRlT2JzZXJ2ZXIiLCJpZCIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJzZXQiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImluZGV4IiwiaWRMaXN0IiwiZmluZEluZGV4Iiwib2JqIiwibWFyZ2luIiwic3BsaWNlIiwiTWFwIiwiZXhpc3RpbmciLCJmaW5kIiwiaW5zdGFuY2UiLCJnZXQiLCJwdXNoIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsInRhcmdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/client/use-intersection.js\n");

/***/ })

});