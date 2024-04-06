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

/***/ "./components/game-new/player-info.jsx":
/*!*********************************************!*\
  !*** ./components/game-new/player-info.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PlayerInfo: function() { return /* binding */ PlayerInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _ui_game_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/game-symbol */ \"./components/game-new/ui/game-symbol.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction PlayerInfo(param) {\n    let { isRight, name, rating, avatar, symbol, isTimerRunning, timer, timerStartAt } = param;\n    const seconds = Math.ceil(timer / 1000);\n    //строковое представление минут\n    const minutesString = String(Math.floor(seconds / 60)).padStart(2, \"0\");\n    //строковое представление секунд\n    const secondsString = String(Math.floor(seconds % 60)).padStart(2, \"0\");\n    //флаг окончания времени на ход (осталось <10 сек)\n    const isDanger = seconds < 10;\n    //изменение цвета таймера, если осталось < 10 сек\n    const getTimerColor = ()=>{\n        if (isTimerRunning) {\n            return isDanger ? \"text-orange-600\" : \"text-slate-900\";\n        }\n        return \"text-slate-200\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"relative\", isRight && \"order-3\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-2 text-start text-teal-600 w-44\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: avatar,\n                                width: 48,\n                                height: 48,\n                                alt: \"avatar\",\n                                unoptimized: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\player-info.jsx\",\n                                lineNumber: 26,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"overflow-hidden\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-lg leading-tight\",\n                                        children: name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\player-info.jsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-teal-400 text-xs leading-tight\",\n                                        children: [\n                                            \"Рейтинг: \",\n                                            rating\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\player-info.jsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\player-info.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\player-info.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 8\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_symbol__WEBPACK_IMPORTED_MODULE_2__.GameSymbol, {\n                            symbol: symbol\n                        }, void 0, false, {\n                            fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\player-info.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\player-info.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\player-info.jsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"h-6 w-px bg-slate-200\", isRight && \"order-2\")\n            }, void 0, false, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\player-info.jsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"text-lg font-semibold w-[60px]\", isRight && \"order-1\", getTimerColor()),\n                children: [\n                    minutesString,\n                    \":\",\n                    secondsString\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\player-info.jsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\player-info.jsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n_c = PlayerInfo;\nvar _c;\n$RefreshReg$(_c, \"PlayerInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L3BsYXllci1pbmZvLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF3QjtBQUNzQjtBQUNmO0FBRXhCLFNBQVNHLFdBQVcsS0FBNEU7UUFBNUUsRUFBQ0MsT0FBTyxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLGNBQWMsRUFBRUMsS0FBSyxFQUFFQyxZQUFZLEVBQUMsR0FBNUU7SUFFdkIsTUFBTUMsVUFBVUMsS0FBS0MsSUFBSSxDQUFDSixRQUFRO0lBQ2xDLCtCQUErQjtJQUNsQyxNQUFNSyxnQkFBZ0JDLE9BQU9ILEtBQUtJLEtBQUssQ0FBQ0wsVUFBVSxLQUFLTSxRQUFRLENBQUMsR0FBRztJQUNuRSxnQ0FBZ0M7SUFDaEMsTUFBTUMsZ0JBQWdCSCxPQUFPSCxLQUFLSSxLQUFLLENBQUNMLFVBQVUsS0FBS00sUUFBUSxDQUFDLEdBQUc7SUFDbkUsa0RBQWtEO0lBQ2xELE1BQU1FLFdBQVdSLFVBQVU7SUFDeEIsaURBQWlEO0lBQ2pELE1BQU1TLGdCQUFnQjtRQUNsQixJQUFJWixnQkFBZ0I7WUFDaEIsT0FBT1csV0FBVyxvQkFBb0I7UUFDMUM7UUFDQSxPQUFPO0lBQ2Q7SUFFRyxxQkFDSSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFXdkIsZ0RBQUlBLENBQUMsWUFBWUksV0FBVzs7a0NBQ2pELDhEQUFDa0I7d0JBQUlDLFdBQVc7OzBDQUNmLDhEQUFDckIsbURBQUtBO2dDQUFDc0IsS0FBS2pCO2dDQUFRa0IsT0FBTztnQ0FBSUMsUUFBUTtnQ0FBSUMsS0FBSTtnQ0FBU0MsV0FBVzs7Ozs7OzBDQUNuRSw4REFBQ047Z0NBQUlDLFdBQVU7O2tEQUNDLDhEQUFDRDt3Q0FBSUMsV0FBVTtrREFBeUJsQjs7Ozs7O2tEQUN4Qyw4REFBQ2lCO3dDQUFJQyxXQUFVOzs0Q0FBc0M7NENBQVVqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHdkUsOERBQUNnQjt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ3RCLHVEQUFVQTs0QkFBQ08sUUFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUc1Qiw4REFBQ2M7Z0JBQUlDLFdBQVd2QixnREFBSUEsQ0FBQyx5QkFBeUJJLFdBQVc7Ozs7OzswQkFDekQsOERBQUNrQjtnQkFBSUMsV0FBV3ZCLGdEQUFJQSxDQUFDLGtDQUFrQ0ksV0FBVyxXQUFXaUI7O29CQUN4RU47b0JBQWM7b0JBQUVJOzs7Ozs7Ozs7Ozs7O0FBSWpDO0tBckNnQmhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS1uZXcvcGxheWVyLWluZm8uanN4PzMyYjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCB7IEdhbWVTeW1ib2wgfSBmcm9tIFwiLi91aS9nYW1lLXN5bWJvbFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQbGF5ZXJJbmZvKHtpc1JpZ2h0LCBuYW1lLCByYXRpbmcsIGF2YXRhciwgc3ltYm9sLCBpc1RpbWVyUnVubmluZywgdGltZXIsIHRpbWVyU3RhcnRBdH0pIHtcclxuXHJcbiAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5jZWlsKHRpbWVyIC8gMTAwMCk7XHJcbiAgICAvL9GB0YLRgNC+0LrQvtCy0L7QtSDQv9GA0LXQtNGB0YLQsNCy0LvQtdC90LjQtSDQvNC40L3Rg9GCXHJcblx0Y29uc3QgbWludXRlc1N0cmluZyA9IFN0cmluZyhNYXRoLmZsb29yKHNlY29uZHMgLyA2MCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcclxuXHQvL9GB0YLRgNC+0LrQvtCy0L7QtSDQv9GA0LXQtNGB0YLQsNCy0LvQtdC90LjQtSDRgdC10LrRg9C90LRcclxuXHRjb25zdCBzZWNvbmRzU3RyaW5nID0gU3RyaW5nKE1hdGguZmxvb3Ioc2Vjb25kcyAlIDYwKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG5cdC8v0YTQu9Cw0LMg0L7QutC+0L3Rh9Cw0L3QuNGPINCy0YDQtdC80LXQvdC4INC90LAg0YXQvtC0ICjQvtGB0YLQsNC70L7RgdGMIDwxMCDRgdC10LopXHJcblx0Y29uc3QgaXNEYW5nZXIgPSBzZWNvbmRzIDwgMTA7XHJcbiAgICAvL9C40LfQvNC10L3QtdC90LjQtSDRhtCy0LXRgtCwINGC0LDQudC80LXRgNCwLCDQtdGB0LvQuCDQvtGB0YLQsNC70L7RgdGMIDwgMTAg0YHQtdC6XHJcbiAgICBjb25zdCBnZXRUaW1lckNvbG9yID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc1RpbWVyUnVubmluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNEYW5nZXIgPyBcInRleHQtb3JhbmdlLTYwMFwiIDogXCJ0ZXh0LXNsYXRlLTkwMFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJ0ZXh0LXNsYXRlLTIwMFwiO1xyXG5cdH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTMgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KFwicmVsYXRpdmVcIiwgaXNSaWdodCAmJiBcIm9yZGVyLTNcIil9PlxyXG5cdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9e1wiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1zdGFydCB0ZXh0LXRlYWwtNjAwIHctNDRcIn0+XHJcblx0XHRcdFx0ICAgIDxJbWFnZSBzcmM9e2F2YXRhcn0gd2lkdGg9ezQ4fSBoZWlnaHQ9ezQ4fSBhbHQ9XCJhdmF0YXJcIiB1bm9wdGltaXplZC8+XHJcblx0XHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBsZWFkaW5nLXRpZ2h0XCI+e25hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC10ZWFsLTQwMCB0ZXh0LXhzIGxlYWRpbmctdGlnaHRcIj7QoNC10LnRgtC40L3Qszoge3JhdGluZ308L2Rpdj5cclxuXHRcdFx0XHQgICAgPC9kaXY+XHJcblx0XHRcdCAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy01IGgtNSByb3VuZGVkLWZ1bGwgYmctd2hpdGUgc2hhZG93IGFic29sdXRlIC1sZWZ0LTEgLXRvcC0xIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdhbWVTeW1ib2wgc3ltYm9sPXtzeW1ib2x9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KFwiaC02IHctcHggYmctc2xhdGUtMjAwXCIsIGlzUmlnaHQgJiYgXCJvcmRlci0yXCIpfT48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goXCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdy1bNjBweF1cIiwgaXNSaWdodCAmJiBcIm9yZGVyLTFcIiwgZ2V0VGltZXJDb2xvcigpKX0+XHJcbiAgICAgICAgICAgICAgICB7bWludXRlc1N0cmluZ306e3NlY29uZHNTdHJpbmd9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbImNsc3giLCJHYW1lU3ltYm9sIiwiSW1hZ2UiLCJQbGF5ZXJJbmZvIiwiaXNSaWdodCIsIm5hbWUiLCJyYXRpbmciLCJhdmF0YXIiLCJzeW1ib2wiLCJpc1RpbWVyUnVubmluZyIsInRpbWVyIiwidGltZXJTdGFydEF0Iiwic2Vjb25kcyIsIk1hdGgiLCJjZWlsIiwibWludXRlc1N0cmluZyIsIlN0cmluZyIsImZsb29yIiwicGFkU3RhcnQiLCJzZWNvbmRzU3RyaW5nIiwiaXNEYW5nZXIiLCJnZXRUaW1lckNvbG9yIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJ1bm9wdGltaXplZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game-new/player-info.jsx\n"));

/***/ })

});