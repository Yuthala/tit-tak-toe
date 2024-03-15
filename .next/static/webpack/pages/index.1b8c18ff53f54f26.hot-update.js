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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _icons_zero_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/zero-icon */ \"./components/game/icons/zero-icon.jsx\");\n/* harmony import */ var _icons_cross_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/cross-icon */ \"./components/game/icons/cross-icon.jsx\");\n/* harmony import */ var _uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../uikit/ui-button */ \"./components/uikit/ui-button.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n//константа, в которой перечислены все возможные варианты значков игроков\nconst GAME_SYMBOLS = {\n    ZERO: \"zero\",\n    CROSS: \"cross\",\n    TRAINGLE: \"triangle\",\n    SQUARE: \"square\"\n};\nfunction GameField(param) {\n    let { className } = param;\n    _s();\n    //состояние игровго поля. отрисовываем один раз пустое игровое поле (массив клеточек 19х19) при первоначальном рендере компонента\n    const [cells, setCells] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(()=>new Array(19 * 19).fill(null));\n    //состояние какой текущий ход, начальное значение \"крестик\"\n    const [currentMove, setCurrentMove] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(GAME_SYMBOLS.CROSS);\n    //переменная для GameMoveInfo (кнопки)\n    const actions = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__.UiButton, {\n                size: \"md\",\n                variant: \"primary\",\n                children: \"Ничья\"\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 26,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__.UiButton, {\n                size: \"md\",\n                variant: \"outline\",\n                children: \"Сдаться\"\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 27,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameFieldLayout, {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameMoveInfo, {\n                actions: actions\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 32,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameGrid, {\n                children: cells.map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameCell, {}, index, false, {\n                        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 6\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 34,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 31,\n        columnNumber: 3\n    }, this);\n}\n_s(GameField, \"kp2m4tXw5/IUP/J6odJPAxjkSB0=\");\n_c = GameField;\n//компонент для отображенияигрового поля\nfunction GameFieldLayout(param) {\n    let { children, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 pt-5 pb-7\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 48,\n        columnNumber: 3\n    }, this);\n}\n_c1 = GameFieldLayout;\n//компонент отображения информации о ходах\nfunction GameMoveInfo(param) {\n    let { actions } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xl leading-tight\",\n                        children: [\n                            \"Ход: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_zero_icon__WEBPACK_IMPORTED_MODULE_2__.ZeroIcon, {\n                                className: \"w-5 h-5\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 73\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xs leading-tight text-slate-400\",\n                        children: [\n                            \"Следующий: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_cross_icon__WEBPACK_IMPORTED_MODULE_3__.CrossIcon, {}, void 0, false, {\n                                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 94\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 58,\n                columnNumber: 4\n            }, this),\n            actions\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 57,\n        columnNumber: 3\n    }, this);\n}\n_c2 = GameMoveInfo;\n//компонент отрисовки хода игры\nfunction GameCell(param) {\n    let { children, i } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"border border-slate-200 -ml-px -mt-px flex items-center justify-center\",\n        children: children\n    }, i, false, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 70,\n        columnNumber: 4\n    }, this);\n}\n_c3 = GameCell;\n//компонент отрисовки решетки игрового поля\nfunction GameGrid(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 83,\n        columnNumber: 3\n    }, this);\n}\n_c4 = GameGrid;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"GameField\");\n$RefreshReg$(_c1, \"GameFieldLayout\");\n$RefreshReg$(_c2, \"GameMoveInfo\");\n$RefreshReg$(_c3, \"GameCell\");\n$RefreshReg$(_c4, \"GameGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1maWVsZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBd0I7QUFDcUI7QUFDRTtBQUNEO0FBQ2I7QUFFakMseUVBQXlFO0FBQ3pFLE1BQU1LLGVBQWU7SUFDcEJDLE1BQU07SUFDTkMsT0FBTztJQUNQQyxVQUFVO0lBQ1ZDLFFBQVE7QUFDVDtBQUVPLFNBQVNDLFVBQVUsS0FBVztRQUFYLEVBQUNDLFNBQVMsRUFBQyxHQUFYOztJQUV6QixpSUFBaUk7SUFDakksTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDLElBQU0sSUFBSVUsTUFBTSxLQUFLLElBQUlDLElBQUksQ0FBQztJQUVqRSwyREFBMkQ7SUFDM0QsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdiLCtDQUFRQSxDQUFDQyxhQUFhRSxLQUFLO0lBRWpFLHNDQUFzQztJQUN0QyxNQUFNVyx3QkFDTjs7MEJBQ0MsOERBQUNmLHNEQUFRQTtnQkFBQ2dCLE1BQUs7Z0JBQUtDLFNBQVE7MEJBQVU7Ozs7OzswQkFDdEMsOERBQUNqQixzREFBUUE7Z0JBQUNnQixNQUFLO2dCQUFLQyxTQUFROzBCQUFVOzs7Ozs7OztJQUd2QyxxQkFDQyw4REFBQ0M7UUFBZ0JWLFdBQVdBOzswQkFDM0IsOERBQUNXO2dCQUFhSixTQUFTQTs7Ozs7OzBCQUV2Qiw4REFBQ0s7MEJBQ0NYLE1BQU1ZLEdBQUcsQ0FBQyxDQUFDQyxHQUFHQyxzQkFDZCw4REFBQ0MsY0FBY0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPcEI7R0E1QmdCaEI7S0FBQUE7QUE4QmhCLHdDQUF3QztBQUN4QyxTQUFTVyxnQkFBZ0IsS0FBcUI7UUFBckIsRUFBQ08sUUFBUSxFQUFFakIsU0FBUyxFQUFDLEdBQXJCO0lBQ3hCLHFCQUNDLDhEQUFDa0I7UUFBSWxCLFdBQVdYLGdEQUFJQSxDQUFDVyxXQUFXO2tCQUM5QmlCOzs7Ozs7QUFHSjtNQU5TUDtBQVFULDBDQUEwQztBQUMxQyxTQUFTQyxhQUFhLEtBQVM7UUFBVCxFQUFDSixPQUFPLEVBQUMsR0FBVDtJQUNyQixxQkFDQyw4REFBQ1c7UUFBSWxCLFdBQVU7OzBCQUNkLDhEQUFDa0I7Z0JBQUlsQixXQUFVOztrQ0FDZCw4REFBQ2tCO3dCQUFJbEIsV0FBVTs7NEJBQWdEOzBDQUFLLDhEQUFDVixzREFBUUE7Z0NBQUNVLFdBQVU7Ozs7Ozs7Ozs7OztrQ0FDeEYsOERBQUNrQjt3QkFBSWxCLFdBQVU7OzRCQUErRDswQ0FBVyw4REFBQ1Qsd0RBQVNBOzs7Ozs7Ozs7Ozs7Ozs7OztZQUVuR2dCOzs7Ozs7O0FBR0o7TUFWU0k7QUFZVCwrQkFBK0I7QUFDL0IsU0FBU0ssU0FBUyxLQUFhO1FBQWIsRUFBQ0MsUUFBUSxFQUFFRSxDQUFDLEVBQUMsR0FBYjtJQUNqQixxQkFDRSw4REFBQ0M7UUFFQXBCLFdBQVU7a0JBRVRpQjtPQUhJRTs7Ozs7QUFNVDtNQVRTSDtBQVlULDJDQUEyQztBQUMzQyxTQUFTSixTQUFTLEtBQVU7UUFBVixFQUFDSyxRQUFRLEVBQUMsR0FBVjtJQUNqQixxQkFDQyw4REFBQ0M7UUFBSWxCLFdBQVU7a0JBQ2JpQjs7Ozs7O0FBR0o7TUFOU0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL2dhbWUtZmllbGQuanN4P2M2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyBaZXJvSWNvbiB9IGZyb20gJy4vaWNvbnMvemVyby1pY29uJztcbmltcG9ydCB7IENyb3NzSWNvbiB9IGZyb20gJy4vaWNvbnMvY3Jvc3MtaWNvbic7XG5pbXBvcnQgeyBVaUJ1dHRvbiB9IGZyb20gJy4uL3Vpa2l0L3VpLWJ1dHRvbic7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuLy/QutC+0L3RgdGC0LDQvdGC0LAsINCyINC60L7RgtC+0YDQvtC5INC/0LXRgNC10YfQuNGB0LvQtdC90Ysg0LLRgdC1INCy0L7Qt9C80L7QttC90YvQtSDQstCw0YDQuNCw0L3RgtGLINC30L3QsNGH0LrQvtCyINC40LPRgNC+0LrQvtCyXG5jb25zdCBHQU1FX1NZTUJPTFMgPSB7XG5cdFpFUk86ICd6ZXJvJyxcblx0Q1JPU1M6ICdjcm9zcycsXG5cdFRSQUlOR0xFOiAndHJpYW5nbGUnLFxuXHRTUVVBUkU6ICdzcXVhcmUnXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBHYW1lRmllbGQoe2NsYXNzTmFtZX0pIHtcblxuXHQvL9GB0L7RgdGC0L7Rj9C90LjQtSDQuNCz0YDQvtCy0LPQviDQv9C+0LvRjy4g0L7RgtGA0LjRgdC+0LLRi9Cy0LDQtdC8INC+0LTQuNC9INGA0LDQtyDQv9GD0YHRgtC+0LUg0LjQs9GA0L7QstC+0LUg0L/QvtC70LUgKNC80LDRgdGB0LjQsiDQutC70LXRgtC+0YfQtdC6IDE50YUxOSkg0L/RgNC4INC/0LXRgNCy0L7QvdCw0YfQsNC70YzQvdC+0Lwg0YDQtdC90LTQtdGA0LUg0LrQvtC80L/QvtC90LXQvdGC0LBcblx0Y29uc3QgW2NlbGxzLCBzZXRDZWxsc10gPSB1c2VTdGF0ZSgoKSA9PiBuZXcgQXJyYXkoMTkgKiAxOSkuZmlsbChudWxsKSk7XG5cblx0Ly/RgdC+0YHRgtC+0Y/QvdC40LUg0LrQsNC60L7QuSDRgtC10LrRg9GJ0LjQuSDRhdC+0LQsINC90LDRh9Cw0LvRjNC90L7QtSDQt9C90LDRh9C10L3QuNC1IFwi0LrRgNC10YHRgtC40LpcIlxuXHRjb25zdCBbY3VycmVudE1vdmUsIHNldEN1cnJlbnRNb3ZlXSA9IHVzZVN0YXRlKEdBTUVfU1lNQk9MUy5DUk9TUyk7XG5cblx0Ly/Qv9C10YDQtdC80LXQvdC90LDRjyDQtNC70Y8gR2FtZU1vdmVJbmZvICjQutC90L7Qv9C60LgpXG5cdGNvbnN0IGFjdGlvbnMgPSBcblx0PD5cblx0XHQ8VWlCdXR0b24gc2l6ZT1cIm1kXCIgdmFyaWFudD1cInByaW1hcnlcIj7QndC40YfRjNGPPC9VaUJ1dHRvbj5cblx0XHQ8VWlCdXR0b24gc2l6ZT1cIm1kXCIgdmFyaWFudD1cIm91dGxpbmVcIj7QodC00LDRgtGM0YHRjzwvVWlCdXR0b24+XG5cdDwvPlxuXG5cdHJldHVybihcblx0XHQ8R2FtZUZpZWxkTGF5b3V0IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cblx0XHRcdDxHYW1lTW92ZUluZm8gYWN0aW9ucz17YWN0aW9uc30gLz5cblxuXHRcdFx0PEdhbWVHcmlkPlxuXHRcdFx0XHR7Y2VsbHMubWFwKChfLCBpbmRleCkgPT4gKFxuXHRcdFx0XHRcdDxHYW1lQ2VsbCBrZXk9e2luZGV4fT5cblxuXHRcdFx0XHRcdDwvR2FtZUNlbGw+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC9HYW1lR3JpZD5cblx0XHQ8L0dhbWVGaWVsZExheW91dD5cblx0KTtcbn1cblxuLy/QutC+0LzQv9C+0L3QtdC90YIg0LTQu9GPINC+0YLQvtCx0YDQsNC20LXQvdC40Y/QuNCz0YDQvtCy0L7Qs9C+INC/0L7Qu9GPXG5mdW5jdGlvbiBHYW1lRmllbGRMYXlvdXQoe2NoaWxkcmVuLCBjbGFzc05hbWV9KSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3NOYW1lLCBcImJnLXdoaXRlIHJvdW5kZWQtMnhsIHNoYWRvdy1tZCBweC04IHB0LTUgcGItN1wiKX0+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbi8v0LrQvtC80L/QvtC90LXQvdGCINC+0YLQvtCx0YDQsNC20LXQvdC40Y8g0LjQvdGE0L7RgNC80LDRhtC40Lgg0L4g0YXQvtC00LDRhVxuZnVuY3Rpb24gR2FtZU1vdmVJbmZvKHthY3Rpb25zfSkge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMyBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPiBcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LXhsIGxlYWRpbmctdGlnaHRcIj7QpdC+0LQ6IDxaZXJvSWNvbiBjbGFzc05hbWU9XCJ3LTUgaC01XCIvPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQteHMgbGVhZGluZy10aWdodCB0ZXh0LXNsYXRlLTQwMFwiPtCh0LvQtdC00YPRjtGJ0LjQuTogPENyb3NzSWNvbiAvPjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHR7YWN0aW9uc31cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuLy/QutC+0LzQv9C+0L3QtdC90YIg0L7RgtGA0LjRgdC+0LLQutC4INGF0L7QtNCwINC40LPRgNGLXG5mdW5jdGlvbiBHYW1lQ2VsbCh7Y2hpbGRyZW4sIGl9KSB7XG5cdHJldHVybiAoXG5cdFx0XHQ8YnV0dG9uIFxuXHRcdFx0XHRrZXk9e2l9IFxuXHRcdFx0XHRjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCAtbWwtcHggLW10LXB4IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcblx0XHRcdD5cblx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PC9idXR0b24+XG5cdCk7XG59XG5cblxuLy/QutC+0LzQv9C+0L3QtdC90YIg0L7RgtGA0LjRgdC+0LLQutC4INGA0LXRiNC10YLQutC4INC40LPRgNC+0LLQvtCz0L4g0L/QvtC70Y9cbmZ1bmN0aW9uIEdhbWVHcmlkKHtjaGlsZHJlbn0pIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLVtyZXBlYXQoMTksXzMwcHgpXSBncmlkLXJvd3MtW3JlcGVhdCgxOSxfMzBweCldIHBsLXB4IHB0LXB4IG10LTNcIj5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiJdLCJuYW1lcyI6WyJjbHN4IiwiWmVyb0ljb24iLCJDcm9zc0ljb24iLCJVaUJ1dHRvbiIsInVzZVN0YXRlIiwiR0FNRV9TWU1CT0xTIiwiWkVSTyIsIkNST1NTIiwiVFJBSU5HTEUiLCJTUVVBUkUiLCJHYW1lRmllbGQiLCJjbGFzc05hbWUiLCJjZWxscyIsInNldENlbGxzIiwiQXJyYXkiLCJmaWxsIiwiY3VycmVudE1vdmUiLCJzZXRDdXJyZW50TW92ZSIsImFjdGlvbnMiLCJzaXplIiwidmFyaWFudCIsIkdhbWVGaWVsZExheW91dCIsIkdhbWVNb3ZlSW5mbyIsIkdhbWVHcmlkIiwibWFwIiwiXyIsImluZGV4IiwiR2FtZUNlbGwiLCJjaGlsZHJlbiIsImRpdiIsImkiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/game-field.jsx\n"));

/***/ })

});