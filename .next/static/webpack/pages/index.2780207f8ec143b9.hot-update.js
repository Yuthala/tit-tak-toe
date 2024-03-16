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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _icons_zero_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/zero-icon */ \"./components/game/icons/zero-icon.jsx\");\n/* harmony import */ var _icons_cross_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/cross-icon */ \"./components/game/icons/cross-icon.jsx\");\n/* harmony import */ var _uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../uikit/ui-button */ \"./components/uikit/ui-button.jsx\");\n\n\n\n\n\n//массив клеточек\nconst cells = new Array(19 * 19).fill(null);\nfunction GameField(param) {\n    let { className } = param;\n    const actions = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__.UiButton, {\n                size: \"md\",\n                variant: \"primary\",\n                children: \"Ничья\"\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 13,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__.UiButton, {\n                size: \"md\",\n                variant: \"outline\",\n                children: \"Сдаться\"\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 14,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameFieldLayout, {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameMoveInfo, {\n                actions: actions\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 19,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameGrid, {\n                children: cells.map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameCell, {}, index, false, {\n                        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 6\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 22,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 18,\n        columnNumber: 3\n    }, this);\n}\n_c = GameField;\n//компонент\nfunction GameFieldLayout(param) {\n    let { children, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 pt-5 pb-7\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 36,\n        columnNumber: 3\n    }, this);\n}\n_c1 = GameFieldLayout;\n//компонент\nfunction GameMoveInfo(param) {\n    let { actions } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xl leading-tight\",\n                        children: [\n                            \"Ход: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_zero_icon__WEBPACK_IMPORTED_MODULE_2__.ZeroIcon, {\n                                className: \"w-5 h-5\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 73\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xs leading-tight text-slate-400\",\n                        children: [\n                            \"Следующий: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_cross_icon__WEBPACK_IMPORTED_MODULE_3__.CrossIcon, {}, void 0, false, {\n                                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 94\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 46,\n                columnNumber: 4\n            }, this),\n            actions\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 45,\n        columnNumber: 3\n    }, this);\n}\n_c2 = GameMoveInfo;\n//компонент отрисовки хода игры\nfunction GameCell(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"border border-slate-200 -ml-px -mt-px flex items-center justify-center\",\n        children: children\n    }, i, false, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 58,\n        columnNumber: 4\n    }, this);\n}\n_c3 = GameCell;\n//компонент отрисовки решетки игрового поля\nfunction GameGrid(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 72,\n        columnNumber: 3\n    }, this);\n}\n_c4 = GameGrid;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"GameField\");\n$RefreshReg$(_c1, \"GameFieldLayout\");\n$RefreshReg$(_c2, \"GameMoveInfo\");\n$RefreshReg$(_c3, \"GameCell\");\n$RefreshReg$(_c4, \"GameGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1maWVsZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0I7QUFDcUI7QUFDRTtBQUNEO0FBRTlDLGlCQUFpQjtBQUNqQixNQUFNSSxRQUFRLElBQUlDLE1BQU0sS0FBSyxJQUFJQyxJQUFJLENBQUM7QUFFL0IsU0FBU0MsVUFBVSxLQUFXO1FBQVgsRUFBQ0MsU0FBUyxFQUFDLEdBQVg7SUFFekIsTUFBTUMsd0JBQ047OzBCQUNDLDhEQUFDTixzREFBUUE7Z0JBQUNPLE1BQUs7Z0JBQUtDLFNBQVE7MEJBQVU7Ozs7OzswQkFDdEMsOERBQUNSLHNEQUFRQTtnQkFBQ08sTUFBSztnQkFBS0MsU0FBUTswQkFBVTs7Ozs7Ozs7SUFHdkMscUJBQ0MsOERBQUNDO1FBQWdCSixXQUFXQTs7MEJBQzNCLDhEQUFDSztnQkFBYUosU0FBU0E7Ozs7OzswQkFHdkIsOERBQUNLOzBCQUNDVixNQUFNVyxHQUFHLENBQUMsQ0FBQ0MsR0FBR0Msc0JBQ2QsOERBQUNDLGNBQWNEOzs7Ozs7Ozs7Ozs7Ozs7O0FBT3BCO0tBdEJnQlY7QUF3QmhCLFdBQVc7QUFDWCxTQUFTSyxnQkFBZ0IsS0FBcUI7UUFBckIsRUFBQ08sUUFBUSxFQUFFWCxTQUFTLEVBQUMsR0FBckI7SUFDeEIscUJBQ0MsOERBQUNZO1FBQUlaLFdBQVdSLGdEQUFJQSxDQUFDUSxXQUFXO2tCQUM5Qlc7Ozs7OztBQUdKO01BTlNQO0FBUVQsV0FBVztBQUNYLFNBQVNDLGFBQWEsS0FBUztRQUFULEVBQUNKLE9BQU8sRUFBQyxHQUFUO0lBQ3JCLHFCQUNDLDhEQUFDVztRQUFJWixXQUFVOzswQkFDZCw4REFBQ1k7Z0JBQUlaLFdBQVU7O2tDQUNkLDhEQUFDWTt3QkFBSVosV0FBVTs7NEJBQWdEOzBDQUFLLDhEQUFDUCxzREFBUUE7Z0NBQUNPLFdBQVU7Ozs7Ozs7Ozs7OztrQ0FDeEYsOERBQUNZO3dCQUFJWixXQUFVOzs0QkFBK0Q7MENBQVcsOERBQUNOLHdEQUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFbkdPOzs7Ozs7O0FBR0o7TUFWU0k7QUFZVCwrQkFBK0I7QUFDL0IsU0FBU0ssU0FBUyxLQUFVO1FBQVYsRUFBQ0MsUUFBUSxFQUFDLEdBQVY7SUFDakIscUJBQ0UsOERBQUNFO1FBRUFiLFdBQVU7a0JBR1RXO09BSklHOzs7OztBQU9UO01BVlNKO0FBYVQsMkNBQTJDO0FBQzNDLFNBQVNKLFNBQVMsS0FBVTtRQUFWLEVBQUNLLFFBQVEsRUFBQyxHQUFWO0lBQ2pCLHFCQUNDLDhEQUFDQztRQUFJWixXQUFVO2tCQUNiVzs7Ozs7O0FBR0o7TUFOU0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL2dhbWUtZmllbGQuanN4P2M2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyBaZXJvSWNvbiB9IGZyb20gJy4vaWNvbnMvemVyby1pY29uJztcbmltcG9ydCB7IENyb3NzSWNvbiB9IGZyb20gJy4vaWNvbnMvY3Jvc3MtaWNvbic7XG5pbXBvcnQgeyBVaUJ1dHRvbiB9IGZyb20gJy4uL3Vpa2l0L3VpLWJ1dHRvbic7XG5cbi8v0LzQsNGB0YHQuNCyINC60LvQtdGC0L7Rh9C10LpcbmNvbnN0IGNlbGxzID0gbmV3IEFycmF5KDE5ICogMTkpLmZpbGwobnVsbCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBHYW1lRmllbGQoe2NsYXNzTmFtZX0pIHtcblxuXHRjb25zdCBhY3Rpb25zID0gXG5cdDw+XG5cdFx0PFVpQnV0dG9uIHNpemU9XCJtZFwiIHZhcmlhbnQ9XCJwcmltYXJ5XCI+0J3QuNGH0YzRjzwvVWlCdXR0b24+XG5cdFx0PFVpQnV0dG9uIHNpemU9XCJtZFwiIHZhcmlhbnQ9XCJvdXRsaW5lXCI+0KHQtNCw0YLRjNGB0Y88L1VpQnV0dG9uPlxuXHQ8Lz5cblx0XG5cdHJldHVybihcblx0XHQ8R2FtZUZpZWxkTGF5b3V0IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cblx0XHRcdDxHYW1lTW92ZUluZm8gYWN0aW9ucz17YWN0aW9uc30gLz5cblxuXG5cdFx0XHQ8R2FtZUdyaWQ+XG5cdFx0XHRcdHtjZWxscy5tYXAoKF8sIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0PEdhbWVDZWxsIGtleT17aW5kZXh9PlxuXG5cdFx0XHRcdFx0PC9HYW1lQ2VsbD5cblx0XHRcdFx0KSl9XG5cdFx0XHQ8L0dhbWVHcmlkPlxuXHRcdDwvR2FtZUZpZWxkTGF5b3V0PlxuXHQpO1xufVxuXG4vL9C60L7QvNC/0L7QvdC10L3RglxuZnVuY3Rpb24gR2FtZUZpZWxkTGF5b3V0KHtjaGlsZHJlbiwgY2xhc3NOYW1lfSkge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzTmFtZSwgXCJiZy13aGl0ZSByb3VuZGVkLTJ4bCBzaGFkb3ctbWQgcHgtOCBwdC01IHBiLTdcIil9PlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG4vL9C60L7QvNC/0L7QvdC10L3RglxuZnVuY3Rpb24gR2FtZU1vdmVJbmZvKHthY3Rpb25zfSkge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMyBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPiBcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LXhsIGxlYWRpbmctdGlnaHRcIj7QpdC+0LQ6IDxaZXJvSWNvbiBjbGFzc05hbWU9XCJ3LTUgaC01XCIvPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQteHMgbGVhZGluZy10aWdodCB0ZXh0LXNsYXRlLTQwMFwiPtCh0LvQtdC00YPRjtGJ0LjQuTogPENyb3NzSWNvbiAvPjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHR7YWN0aW9uc31cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuLy/QutC+0LzQv9C+0L3QtdC90YIg0L7RgtGA0LjRgdC+0LLQutC4INGF0L7QtNCwINC40LPRgNGLXG5mdW5jdGlvbiBHYW1lQ2VsbCh7Y2hpbGRyZW59KSB7XG5cdHJldHVybiAoXG5cdFx0XHQ8YnV0dG9uIFxuXHRcdFx0XHRrZXk9e2l9IFxuXHRcdFx0XHRjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCAtbWwtcHggLW10LXB4IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcblx0XHRcdD5cblx0XHRcdFx0ey8qIDxaZXJvSWNvbiBjbGFzc05hbWU9XCJ3LTUgaC01XCIvPiAqL31cblx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PC9idXR0b24+XG5cdCk7XG59XG5cblxuLy/QutC+0LzQv9C+0L3QtdC90YIg0L7RgtGA0LjRgdC+0LLQutC4INGA0LXRiNC10YLQutC4INC40LPRgNC+0LLQvtCz0L4g0L/QvtC70Y9cbmZ1bmN0aW9uIEdhbWVHcmlkKHtjaGlsZHJlbn0pIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLVtyZXBlYXQoMTksXzMwcHgpXSBncmlkLXJvd3MtW3JlcGVhdCgxOSxfMzBweCldIHBsLXB4IHB0LXB4IG10LTNcIj5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiJdLCJuYW1lcyI6WyJjbHN4IiwiWmVyb0ljb24iLCJDcm9zc0ljb24iLCJVaUJ1dHRvbiIsImNlbGxzIiwiQXJyYXkiLCJmaWxsIiwiR2FtZUZpZWxkIiwiY2xhc3NOYW1lIiwiYWN0aW9ucyIsInNpemUiLCJ2YXJpYW50IiwiR2FtZUZpZWxkTGF5b3V0IiwiR2FtZU1vdmVJbmZvIiwiR2FtZUdyaWQiLCJtYXAiLCJfIiwiaW5kZXgiLCJHYW1lQ2VsbCIsImNoaWxkcmVuIiwiZGl2IiwiYnV0dG9uIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/game-field.jsx\n"));

/***/ })

});