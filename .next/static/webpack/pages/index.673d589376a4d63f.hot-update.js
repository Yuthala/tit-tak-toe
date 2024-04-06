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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PlayerInfo: function() { return /* binding */ PlayerInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _ui_game_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/game-symbol */ \"./components/game-new/ui/game-symbol.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction PlayerInfo(param) {\n    let { isRight, name, rating, avatar, symbol, timer, timerStartAt } = param;\n    const seconds = Math.ceil(timer / 1000);\n    //строковое представление минут\n    const minutesString = String(Math.floor(seconds / 60)).padStart(2, \"0\");\n    //строковое представление секунд\n    const secondsString = String(Math.floor(seconds % 60)).padStart(2, \"0\");\n    //флаг окончания времени на ход (осталось <10 сек)\n    const isDanger = seconds < 10;\n    //изменение цвета таймера, если осталось < 10 сек\n    const getTimerColor = ()=>{\n        if (timerStartAt) {\n            return isDanger ? \"text-orange-600\" : \"text-slate-900\";\n        }\n        return \"text-slate-200\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"relative\", isRight && \"order-3\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-2 text-start text-teal-600 w-44\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: avatar,\n                                width: 48,\n                                height: 48,\n                                alt: \"avatar\",\n                                unoptimized: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\player-info.jsx\",\n                                lineNumber: 26,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"overflow-hidden\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-lg leading-tight\",\n                                        children: name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\player-info.jsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-teal-400 text-xs leading-tight\",\n                                        children: [\n                                            \"Рейтинг: \",\n                                            rating\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\player-info.jsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\player-info.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\player-info.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 8\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_symbol__WEBPACK_IMPORTED_MODULE_2__.GameSymbol, {\n                            symbol: symbol\n                        }, void 0, false, {\n                            fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\player-info.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\player-info.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\player-info.jsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"h-6 w-px bg-slate-200\", isRight && \"order-2\")\n            }, void 0, false, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\player-info.jsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"text-lg font-semibold w-[60px]\", isRight && \"order-1\", getTimerColor()),\n                children: [\n                    minutesString,\n                    \":\",\n                    secondsString\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\player-info.jsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\player-info.jsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n_c = PlayerInfo;\nvar _c;\n$RefreshReg$(_c, \"PlayerInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L3BsYXllci1pbmZvLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF3QjtBQUNzQjtBQUNmO0FBRXhCLFNBQVNHLFdBQVcsS0FBNEQ7UUFBNUQsRUFBQ0MsT0FBTyxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsWUFBWSxFQUFDLEdBQTVEO0lBRXZCLE1BQU1DLFVBQVVDLEtBQUtDLElBQUksQ0FBQ0osUUFBUTtJQUNsQywrQkFBK0I7SUFDbEMsTUFBTUssZ0JBQWdCQyxPQUFPSCxLQUFLSSxLQUFLLENBQUNMLFVBQVUsS0FBS00sUUFBUSxDQUFDLEdBQUc7SUFDbkUsZ0NBQWdDO0lBQ2hDLE1BQU1DLGdCQUFnQkgsT0FBT0gsS0FBS0ksS0FBSyxDQUFDTCxVQUFVLEtBQUtNLFFBQVEsQ0FBQyxHQUFHO0lBQ25FLGtEQUFrRDtJQUNsRCxNQUFNRSxXQUFXUixVQUFVO0lBQ3hCLGlEQUFpRDtJQUNqRCxNQUFNUyxnQkFBZ0I7UUFDbEIsSUFBSVYsY0FBYztZQUNkLE9BQU9TLFdBQVcsb0JBQW9CO1FBQzFDO1FBQ0EsT0FBTztJQUNkO0lBRUcscUJBQ0ksOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBV3RCLGdEQUFJQSxDQUFDLFlBQVlJLFdBQVc7O2tDQUNqRCw4REFBQ2lCO3dCQUFJQyxXQUFXOzswQ0FDZiw4REFBQ3BCLG1EQUFLQTtnQ0FBQ3FCLEtBQUtoQjtnQ0FBUWlCLE9BQU87Z0NBQUlDLFFBQVE7Z0NBQUlDLEtBQUk7Z0NBQVNDLFdBQVc7Ozs7OzswQ0FDbkUsOERBQUNOO2dDQUFJQyxXQUFVOztrREFDQyw4REFBQ0Q7d0NBQUlDLFdBQVU7a0RBQXlCakI7Ozs7OztrREFDeEMsOERBQUNnQjt3Q0FBSUMsV0FBVTs7NENBQXNDOzRDQUFVaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR3ZFLDhEQUFDZTt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ3JCLHVEQUFVQTs0QkFBQ08sUUFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUc1Qiw4REFBQ2E7Z0JBQUlDLFdBQVd0QixnREFBSUEsQ0FBQyx5QkFBeUJJLFdBQVc7Ozs7OzswQkFDekQsOERBQUNpQjtnQkFBSUMsV0FBV3RCLGdEQUFJQSxDQUFDLGtDQUFrQ0ksV0FBVyxXQUFXZ0I7O29CQUN4RU47b0JBQWM7b0JBQUVJOzs7Ozs7Ozs7Ozs7O0FBSWpDO0tBckNnQmYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lLW5ldy9wbGF5ZXItaW5mby5qc3g/MzJiNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IHsgR2FtZVN5bWJvbCB9IGZyb20gXCIuL3VpL2dhbWUtc3ltYm9sXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBsYXllckluZm8oe2lzUmlnaHQsIG5hbWUsIHJhdGluZywgYXZhdGFyLCBzeW1ib2wsIHRpbWVyLCB0aW1lclN0YXJ0QXR9KSB7XHJcblxyXG4gICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguY2VpbCh0aW1lciAvIDEwMDApO1xyXG4gICAgLy/RgdGC0YDQvtC60L7QstC+0LUg0L/RgNC10LTRgdGC0LDQstC70LXQvdC40LUg0LzQuNC90YPRglxyXG5cdGNvbnN0IG1pbnV0ZXNTdHJpbmcgPSBTdHJpbmcoTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApKS5wYWRTdGFydCgyLCBcIjBcIik7XHJcblx0Ly/RgdGC0YDQvtC60L7QstC+0LUg0L/RgNC10LTRgdGC0LDQstC70LXQvdC40LUg0YHQtdC60YPQvdC0XHJcblx0Y29uc3Qgc2Vjb25kc1N0cmluZyA9IFN0cmluZyhNYXRoLmZsb29yKHNlY29uZHMgJSA2MCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcclxuXHQvL9GE0LvQsNCzINC+0LrQvtC90YfQsNC90LjRjyDQstGA0LXQvNC10L3QuCDQvdCwINGF0L7QtCAo0L7RgdGC0LDQu9C+0YHRjCA8MTAg0YHQtdC6KVxyXG5cdGNvbnN0IGlzRGFuZ2VyID0gc2Vjb25kcyA8IDEwO1xyXG4gICAgLy/QuNC30LzQtdC90LXQvdC40LUg0YbQstC10YLQsCDRgtCw0LnQvNC10YDQsCwg0LXRgdC70Lgg0L7RgdGC0LDQu9C+0YHRjCA8IDEwINGB0LXQulxyXG4gICAgY29uc3QgZ2V0VGltZXJDb2xvciA9ICgpID0+IHtcclxuICAgICAgICBpZiAodGltZXJTdGFydEF0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc0RhbmdlciA/IFwidGV4dC1vcmFuZ2UtNjAwXCIgOiBcInRleHQtc2xhdGUtOTAwXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcInRleHQtc2xhdGUtMjAwXCI7XHJcblx0fTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMyBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goXCJyZWxhdGl2ZVwiLCBpc1JpZ2h0ICYmIFwib3JkZXItM1wiKX0+XHJcblx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT17XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXN0YXJ0IHRleHQtdGVhbC02MDAgdy00NFwifT5cclxuXHRcdFx0XHQgICAgPEltYWdlIHNyYz17YXZhdGFyfSB3aWR0aD17NDh9IGhlaWdodD17NDh9IGFsdD1cImF2YXRhclwiIHVub3B0aW1pemVkLz5cclxuXHRcdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGxlYWRpbmctdGlnaHRcIj57bmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXRlYWwtNDAwIHRleHQteHMgbGVhZGluZy10aWdodFwiPtCg0LXQudGC0LjQvdCzOiB7cmF0aW5nfTwvZGl2PlxyXG5cdFx0XHRcdCAgICA8L2Rpdj5cclxuXHRcdFx0ICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTUgaC01IHJvdW5kZWQtZnVsbCBiZy13aGl0ZSBzaGFkb3cgYWJzb2x1dGUgLWxlZnQtMSAtdG9wLTEgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8R2FtZVN5bWJvbCBzeW1ib2w9e3N5bWJvbH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goXCJoLTYgdy1weCBiZy1zbGF0ZS0yMDBcIiwgaXNSaWdodCAmJiBcIm9yZGVyLTJcIil9PjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChcInRleHQtbGcgZm9udC1zZW1pYm9sZCB3LVs2MHB4XVwiLCBpc1JpZ2h0ICYmIFwib3JkZXItMVwiLCBnZXRUaW1lckNvbG9yKCkpfT5cclxuICAgICAgICAgICAgICAgIHttaW51dGVzU3RyaW5nfTp7c2Vjb25kc1N0cmluZ31cclxuICAgICAgICAgICAgPC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiY2xzeCIsIkdhbWVTeW1ib2wiLCJJbWFnZSIsIlBsYXllckluZm8iLCJpc1JpZ2h0IiwibmFtZSIsInJhdGluZyIsImF2YXRhciIsInN5bWJvbCIsInRpbWVyIiwidGltZXJTdGFydEF0Iiwic2Vjb25kcyIsIk1hdGgiLCJjZWlsIiwibWludXRlc1N0cmluZyIsIlN0cmluZyIsImZsb29yIiwicGFkU3RhcnQiLCJzZWNvbmRzU3RyaW5nIiwiaXNEYW5nZXIiLCJnZXRUaW1lckNvbG9yIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJ1bm9wdGltaXplZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game-new/player-info.jsx\n"));

/***/ })

});