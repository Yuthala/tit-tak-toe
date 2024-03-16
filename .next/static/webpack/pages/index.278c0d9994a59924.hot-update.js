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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _icons_zero_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/zero-icon */ \"./components/game/icons/zero-icon.jsx\");\n/* harmony import */ var _icons_cross_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/cross-icon */ \"./components/game/icons/cross-icon.jsx\");\n/* harmony import */ var _uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../uikit/ui-button */ \"./components/uikit/ui-button.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n//массив клеточек\nconst cells = new Array(19 * 19).fill(null);\nfunction GameField(param) {\n    let { className } = param;\n    _s();\n    //состояние игровго поля. отрисовываем один раз пустое игровое поле при первоначальном рендере компонента\n    const [cells, setCells] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(()=>new Array(19 * 19).fill(null));\n    //переменная для GameMoveInfo (кнопки)\n    const actions = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__.UiButton, {\n                size: \"md\",\n                variant: \"primary\",\n                children: \"Ничья\"\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 18,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__.UiButton, {\n                size: \"md\",\n                variant: \"outline\",\n                children: \"Сдаться\"\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 19,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameFieldLayout, {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameMoveInfo, {\n                actions: actions\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 24,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameGrid, {\n                children: cells.map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameCell, {}, index, false, {\n                        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 6\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 26,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 23,\n        columnNumber: 3\n    }, this);\n}\n_s(GameField, \"aVQd4DoMy2DoceX5W0dVDU/zX58=\");\n_c = GameField;\n//компонент для отображенияигрового поля\nfunction GameFieldLayout(param) {\n    let { children, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 pt-5 pb-7\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 40,\n        columnNumber: 3\n    }, this);\n}\n_c1 = GameFieldLayout;\n//компонент отображения информации о ходах\nfunction GameMoveInfo(param) {\n    let { actions } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xl leading-tight\",\n                        children: [\n                            \"Ход: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_zero_icon__WEBPACK_IMPORTED_MODULE_2__.ZeroIcon, {\n                                className: \"w-5 h-5\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 73\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xs leading-tight text-slate-400\",\n                        children: [\n                            \"Следующий: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_cross_icon__WEBPACK_IMPORTED_MODULE_3__.CrossIcon, {}, void 0, false, {\n                                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 94\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 50,\n                columnNumber: 4\n            }, this),\n            actions\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 49,\n        columnNumber: 3\n    }, this);\n}\n_c2 = GameMoveInfo;\n//компонент отрисовки хода игры\nfunction GameCell(param) {\n    let { children, i } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"border border-slate-200 -ml-px -mt-px flex items-center justify-center\",\n        children: children\n    }, i, false, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 62,\n        columnNumber: 4\n    }, this);\n}\n_c3 = GameCell;\n//компонент отрисовки решетки игрового поля\nfunction GameGrid(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 75,\n        columnNumber: 3\n    }, this);\n}\n_c4 = GameGrid;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"GameField\");\n$RefreshReg$(_c1, \"GameFieldLayout\");\n$RefreshReg$(_c2, \"GameMoveInfo\");\n$RefreshReg$(_c3, \"GameCell\");\n$RefreshReg$(_c4, \"GameGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1maWVsZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBd0I7QUFDcUI7QUFDRTtBQUNEO0FBQ2I7QUFFakMsaUJBQWlCO0FBQ2pCLE1BQU1LLFFBQVEsSUFBSUMsTUFBTSxLQUFLLElBQUlDLElBQUksQ0FBQztBQUUvQixTQUFTQyxVQUFVLEtBQVc7UUFBWCxFQUFDQyxTQUFTLEVBQUMsR0FBWDs7SUFFekIseUdBQXlHO0lBQ3pHLE1BQU0sQ0FBQ0osT0FBT0ssU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBQyxJQUFNLElBQUlFLE1BQU0sS0FBSyxJQUFJQyxJQUFJLENBQUM7SUFFakUsc0NBQXNDO0lBQ3RDLE1BQU1JLHdCQUNOOzswQkFDQyw4REFBQ1Isc0RBQVFBO2dCQUFDUyxNQUFLO2dCQUFLQyxTQUFROzBCQUFVOzs7Ozs7MEJBQ3RDLDhEQUFDVixzREFBUUE7Z0JBQUNTLE1BQUs7Z0JBQUtDLFNBQVE7MEJBQVU7Ozs7Ozs7O0lBR3ZDLHFCQUNDLDhEQUFDQztRQUFnQkwsV0FBV0E7OzBCQUMzQiw4REFBQ007Z0JBQWFKLFNBQVNBOzs7Ozs7MEJBRXZCLDhEQUFDSzswQkFDQ1gsTUFBTVksR0FBRyxDQUFDLENBQUNDLEdBQUdDLHNCQUNkLDhEQUFDQyxjQUFjRDs7Ozs7Ozs7Ozs7Ozs7OztBQU9wQjtHQXpCZ0JYO0tBQUFBO0FBMkJoQix3Q0FBd0M7QUFDeEMsU0FBU00sZ0JBQWdCLEtBQXFCO1FBQXJCLEVBQUNPLFFBQVEsRUFBRVosU0FBUyxFQUFDLEdBQXJCO0lBQ3hCLHFCQUNDLDhEQUFDYTtRQUFJYixXQUFXVCxnREFBSUEsQ0FBQ1MsV0FBVztrQkFDOUJZOzs7Ozs7QUFHSjtNQU5TUDtBQVFULDBDQUEwQztBQUMxQyxTQUFTQyxhQUFhLEtBQVM7UUFBVCxFQUFDSixPQUFPLEVBQUMsR0FBVDtJQUNyQixxQkFDQyw4REFBQ1c7UUFBSWIsV0FBVTs7MEJBQ2QsOERBQUNhO2dCQUFJYixXQUFVOztrQ0FDZCw4REFBQ2E7d0JBQUliLFdBQVU7OzRCQUFnRDswQ0FBSyw4REFBQ1Isc0RBQVFBO2dDQUFDUSxXQUFVOzs7Ozs7Ozs7Ozs7a0NBQ3hGLDhEQUFDYTt3QkFBSWIsV0FBVTs7NEJBQStEOzBDQUFXLDhEQUFDUCx3REFBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBRW5HUzs7Ozs7OztBQUdKO01BVlNJO0FBWVQsK0JBQStCO0FBQy9CLFNBQVNLLFNBQVMsS0FBYTtRQUFiLEVBQUNDLFFBQVEsRUFBRUUsQ0FBQyxFQUFDLEdBQWI7SUFDakIscUJBQ0UsOERBQUNDO1FBRUFmLFdBQVU7a0JBRVRZO09BSElFOzs7OztBQU1UO01BVFNIO0FBWVQsMkNBQTJDO0FBQzNDLFNBQVNKLFNBQVMsS0FBVTtRQUFWLEVBQUNLLFFBQVEsRUFBQyxHQUFWO0lBQ2pCLHFCQUNDLDhEQUFDQztRQUFJYixXQUFVO2tCQUNiWTs7Ozs7O0FBR0o7TUFOU0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL2dhbWUtZmllbGQuanN4P2M2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyBaZXJvSWNvbiB9IGZyb20gJy4vaWNvbnMvemVyby1pY29uJztcbmltcG9ydCB7IENyb3NzSWNvbiB9IGZyb20gJy4vaWNvbnMvY3Jvc3MtaWNvbic7XG5pbXBvcnQgeyBVaUJ1dHRvbiB9IGZyb20gJy4uL3Vpa2l0L3VpLWJ1dHRvbic7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuLy/QvNCw0YHRgdC40LIg0LrQu9C10YLQvtGH0LXQulxuY29uc3QgY2VsbHMgPSBuZXcgQXJyYXkoMTkgKiAxOSkuZmlsbChudWxsKTtcblxuZXhwb3J0IGZ1bmN0aW9uIEdhbWVGaWVsZCh7Y2xhc3NOYW1lfSkge1xuXG5cdC8v0YHQvtGB0YLQvtGP0L3QuNC1INC40LPRgNC+0LLQs9C+INC/0L7Qu9GPLiDQvtGC0YDQuNGB0L7QstGL0LLQsNC10Lwg0L7QtNC40L0g0YDQsNC3INC/0YPRgdGC0L7QtSDQuNCz0YDQvtCy0L7QtSDQv9C+0LvQtSDQv9GA0Lgg0L/QtdGA0LLQvtC90LDRh9Cw0LvRjNC90L7QvCDRgNC10L3QtNC10YDQtSDQutC+0LzQv9C+0L3QtdC90YLQsFxuXHRjb25zdCBbY2VsbHMsIHNldENlbGxzXSA9IHVzZVN0YXRlKCgpID0+IG5ldyBBcnJheSgxOSAqIDE5KS5maWxsKG51bGwpKTtcblxuXHQvL9C/0LXRgNC10LzQtdC90L3QsNGPINC00LvRjyBHYW1lTW92ZUluZm8gKNC60L3QvtC/0LrQuClcblx0Y29uc3QgYWN0aW9ucyA9IFxuXHQ8PlxuXHRcdDxVaUJ1dHRvbiBzaXplPVwibWRcIiB2YXJpYW50PVwicHJpbWFyeVwiPtCd0LjRh9GM0Y88L1VpQnV0dG9uPlxuXHRcdDxVaUJ1dHRvbiBzaXplPVwibWRcIiB2YXJpYW50PVwib3V0bGluZVwiPtCh0LTQsNGC0YzRgdGPPC9VaUJ1dHRvbj5cblx0PC8+XG5cblx0cmV0dXJuKFxuXHRcdDxHYW1lRmllbGRMYXlvdXQgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuXHRcdFx0PEdhbWVNb3ZlSW5mbyBhY3Rpb25zPXthY3Rpb25zfSAvPlxuXG5cdFx0XHQ8R2FtZUdyaWQ+XG5cdFx0XHRcdHtjZWxscy5tYXAoKF8sIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0PEdhbWVDZWxsIGtleT17aW5kZXh9PlxuXG5cdFx0XHRcdFx0PC9HYW1lQ2VsbD5cblx0XHRcdFx0KSl9XG5cdFx0XHQ8L0dhbWVHcmlkPlxuXHRcdDwvR2FtZUZpZWxkTGF5b3V0PlxuXHQpO1xufVxuXG4vL9C60L7QvNC/0L7QvdC10L3RgiDQtNC70Y8g0L7RgtC+0LHRgNCw0LbQtdC90LjRj9C40LPRgNC+0LLQvtCz0L4g0L/QvtC70Y9cbmZ1bmN0aW9uIEdhbWVGaWVsZExheW91dCh7Y2hpbGRyZW4sIGNsYXNzTmFtZX0pIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc05hbWUsIFwiYmctd2hpdGUgcm91bmRlZC0yeGwgc2hhZG93LW1kIHB4LTggcHQtNSBwYi03XCIpfT5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuLy/QutC+0LzQv9C+0L3QtdC90YIg0L7RgtC+0LHRgNCw0LbQtdC90LjRjyDQuNC90YTQvtGA0LzQsNGG0LjQuCDQviDRhdC+0LTQsNGFXG5mdW5jdGlvbiBHYW1lTW92ZUluZm8oe2FjdGlvbnN9KSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zIGl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+IFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQteGwgbGVhZGluZy10aWdodFwiPtCl0L7QtDogPFplcm9JY29uIGNsYXNzTmFtZT1cInctNSBoLTVcIi8+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC14cyBsZWFkaW5nLXRpZ2h0IHRleHQtc2xhdGUtNDAwXCI+0KHQu9C10LTRg9GO0YnQuNC5OiA8Q3Jvc3NJY29uIC8+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdHthY3Rpb25zfVxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG4vL9C60L7QvNC/0L7QvdC10L3RgiDQvtGC0YDQuNGB0L7QstC60Lgg0YXQvtC00LAg0LjQs9GA0YtcbmZ1bmN0aW9uIEdhbWVDZWxsKHtjaGlsZHJlbiwgaX0pIHtcblx0cmV0dXJuIChcblx0XHRcdDxidXR0b24gXG5cdFx0XHRcdGtleT17aX0gXG5cdFx0XHRcdGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItc2xhdGUtMjAwIC1tbC1weCAtbXQtcHggZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuXHRcdFx0PlxuXHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHQ8L2J1dHRvbj5cblx0KTtcbn1cblxuXG4vL9C60L7QvNC/0L7QvdC10L3RgiDQvtGC0YDQuNGB0L7QstC60Lgg0YDQtdGI0LXRgtC60Lgg0LjQs9GA0L7QstC+0LPQviDQv9C+0LvRj1xuZnVuY3Rpb24gR2FtZUdyaWQoe2NoaWxkcmVufSkge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtW3JlcGVhdCgxOSxfMzBweCldIGdyaWQtcm93cy1bcmVwZWF0KDE5LF8zMHB4KV0gcGwtcHggcHQtcHggbXQtM1wiPlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIl0sIm5hbWVzIjpbImNsc3giLCJaZXJvSWNvbiIsIkNyb3NzSWNvbiIsIlVpQnV0dG9uIiwidXNlU3RhdGUiLCJjZWxscyIsIkFycmF5IiwiZmlsbCIsIkdhbWVGaWVsZCIsImNsYXNzTmFtZSIsInNldENlbGxzIiwiYWN0aW9ucyIsInNpemUiLCJ2YXJpYW50IiwiR2FtZUZpZWxkTGF5b3V0IiwiR2FtZU1vdmVJbmZvIiwiR2FtZUdyaWQiLCJtYXAiLCJfIiwiaW5kZXgiLCJHYW1lQ2VsbCIsImNoaWxkcmVuIiwiZGl2IiwiaSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/game-field.jsx\n"));

/***/ })

});