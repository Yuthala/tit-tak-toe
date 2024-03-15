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

/***/ "./components/game/game-field.jsx":
/*!****************************************!*\
  !*** ./components/game/game-field.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _icons_zero_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/zero-icon */ \"./components/game/icons/zero-icon.jsx\");\n/* harmony import */ var _icons_cross_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/cross-icon */ \"./components/game/icons/cross-icon.jsx\");\n/* harmony import */ var _uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../uikit/ui-button */ \"./components/uikit/ui-button.jsx\");\n\n\n\n\n\n//массив клеточек\nconst cells = new Array(19 * 19).fill(null);\nfunction GameField(param) {\n    let { className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 pt-5 pb-7\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex gap-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mr-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center gap-1 text-xl leading-tight\",\n                            children: [\n                                \"Ход: \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_zero_icon__WEBPACK_IMPORTED_MODULE_2__.ZeroIcon, {\n                                    className: \"w-5 h-5\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                                    lineNumber: 14,\n                                    columnNumber: 74\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                            lineNumber: 14,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center gap-1 text-xs leading-tight text-slate-400\",\n                            children: [\n                                \"Следующий: \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_cross_icon__WEBPACK_IMPORTED_MODULE_3__.CrossIcon, {}, void 0, false, {\n                                    fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                                    lineNumber: 15,\n                                    columnNumber: 95\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                            lineNumber: 15,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                    lineNumber: 13,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__.UiButton, {\n                    size: \"md\",\n                    variant: \"primary\",\n                    children: \"Ничья\"\n                }, void 0, false, {\n                    fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__.UiButton, {\n                    size: \"md\",\n                    variant: \"outline\",\n                    children: \"Сдаться\"\n                }, void 0, false, {\n                    fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n            lineNumber: 12,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 11,\n        columnNumber: 3\n    }, this);\n}\n_c = GameField;\nvar _c;\n$RefreshReg$(_c, \"GameField\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1maWVsZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0I7QUFDcUI7QUFDRTtBQUNEO0FBRTlDLGlCQUFpQjtBQUNqQixNQUFNSSxRQUFRLElBQUlDLE1BQU0sS0FBSyxJQUFJQyxJQUFJLENBQUM7QUFFL0IsU0FBU0MsVUFBVSxLQUFXO1FBQVgsRUFBQ0MsU0FBUyxFQUFDLEdBQVg7SUFDekIscUJBQ0MsOERBQUNDO1FBQUlELFdBQVdSLGdEQUFJQSxDQUFDUSxXQUFXO2tCQUMvQiw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2QsOERBQUNDO29CQUFJRCxXQUFVOztzQ0FDZCw4REFBQ0M7NEJBQUlELFdBQVU7O2dDQUFnRDs4Q0FBSyw4REFBQ1Asc0RBQVFBO29DQUFDTyxXQUFVOzs7Ozs7Ozs7Ozs7c0NBQ3hGLDhEQUFDQzs0QkFBSUQsV0FBVTs7Z0NBQStEOzhDQUFXLDhEQUFDTix3REFBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUdwRyw4REFBQ0Msc0RBQVFBO29CQUFDTyxNQUFLO29CQUFLQyxTQUFROzhCQUFVOzs7Ozs7OEJBQ3RDLDhEQUFDUixzREFBUUE7b0JBQUNPLE1BQUs7b0JBQUtDLFNBQVE7OEJBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTFDO0tBZGdCSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1maWVsZC5qc3g/YzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IFplcm9JY29uIH0gZnJvbSAnLi9pY29ucy96ZXJvLWljb24nO1xuaW1wb3J0IHsgQ3Jvc3NJY29uIH0gZnJvbSAnLi9pY29ucy9jcm9zcy1pY29uJztcbmltcG9ydCB7IFVpQnV0dG9uIH0gZnJvbSAnLi4vdWlraXQvdWktYnV0dG9uJztcblxuLy/QvNCw0YHRgdC40LIg0LrQu9C10YLQvtGH0LXQulxuY29uc3QgY2VsbHMgPSBuZXcgQXJyYXkoMTkgKiAxOSkuZmlsbChudWxsKTtcblxuZXhwb3J0IGZ1bmN0aW9uIEdhbWVGaWVsZCh7Y2xhc3NOYW1lfSkge1xuXHRyZXR1cm4oXG5cdFx0PGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3NOYW1lLCBcImJnLXdoaXRlIHJvdW5kZWQtMnhsIHNoYWRvdy1tZCBweC04IHB0LTUgcGItN1wiKX0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTNcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+IFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC14bCBsZWFkaW5nLXRpZ2h0XCI+0KXQvtC0OiA8WmVyb0ljb24gY2xhc3NOYW1lPVwidy01IGgtNVwiLz48L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQteHMgbGVhZGluZy10aWdodCB0ZXh0LXNsYXRlLTQwMFwiPtCh0LvQtdC00YPRjtGJ0LjQuTogPENyb3NzSWNvbiAvPjwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8VWlCdXR0b24gc2l6ZT1cIm1kXCIgdmFyaWFudD1cInByaW1hcnlcIj7QndC40YfRjNGPPC9VaUJ1dHRvbj5cblx0XHRcdFx0PFVpQnV0dG9uIHNpemU9XCJtZFwiIHZhcmlhbnQ9XCJvdXRsaW5lXCI+0KHQtNCw0YLRjNGB0Y88L1VpQnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59Il0sIm5hbWVzIjpbImNsc3giLCJaZXJvSWNvbiIsIkNyb3NzSWNvbiIsIlVpQnV0dG9uIiwiY2VsbHMiLCJBcnJheSIsImZpbGwiLCJHYW1lRmllbGQiLCJjbGFzc05hbWUiLCJkaXYiLCJzaXplIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/game-field.jsx\n"));

/***/ })

});