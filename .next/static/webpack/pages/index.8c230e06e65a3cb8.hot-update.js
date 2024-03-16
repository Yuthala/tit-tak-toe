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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _icons_zero_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/zero-icon */ \"./components/game/icons/zero-icon.jsx\");\n/* harmony import */ var _icons_cross_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/cross-icon */ \"./components/game/icons/cross-icon.jsx\");\n/* harmony import */ var _uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../uikit/ui-button */ \"./components/uikit/ui-button.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n//константа, в которой перечислены все возможные варианты значков игроков\nconst GAME_SYMBOLS = {\n    ZERO: \"zero\",\n    CROSS: \"cross\",\n    TRIANGLE: \"triangle\",\n    SQUARE: \"square\"\n};\n//константа, в которой хранится порядок ходов\nconst MOVE_ORDER = [\n    GAME_SYMBOLS.CROSS,\n    GAME_SYMBOLS.ZERO,\n    GAME_SYMBOLS.TRIANGLE,\n    GAME_SYMBOLS.SQUARE\n];\n//функция расчета состояния следующего хода на основании currentMove\nfunction getNextMove(currentMove) {\n    const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1;\n    var _MOVE_ORDER_nextMoveIndex;\n    //если MOVE_ORDER[nextMoveIndex] > 3, надо установить индекс 0 (ходит опять \"крестик\")\n    return (_MOVE_ORDER_nextMoveIndex = MOVE_ORDER[nextMoveIndex]) !== null && _MOVE_ORDER_nextMoveIndex !== void 0 ? _MOVE_ORDER_nextMoveIndex : MOVE_ORDER[0];\n}\nfunction GameField(param) {\n    let { className } = param;\n    _s();\n    //СОСТОЯНИЯ\n    //состояние игровго поля. отрисовываем один раз пустое игровое поле (массив клеточек 19х19) при первоначальном рендере компонента\n    const [cells, setCells] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(()=>new Array(19 * 19).fill(null));\n    //состояние какой текущий ход, начальное значение \"крестик\"\n    const [currentMove, setCurrentMove] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(GAME_SYMBOLS.CROSS);\n    //состояние какой следующий ход. Не заводим копию состояния currentMove, а расчитываем прямо при рендере.\n    const nextMove = getNextMove(currentMove);\n    //переменная для GameMoveInfo (кнопки)\n    const actions = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__.UiButton, {\n                size: \"md\",\n                variant: \"primary\",\n                children: \"Ничья\"\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 45,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__.UiButton, {\n                size: \"md\",\n                variant: \"outline\",\n                children: \"Сдаться\"\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 46,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameFieldLayout, {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameMoveInfo, {\n                actions: actions\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 51,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameGrid, {\n                children: cells.map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameCell, {}, index, false, {\n                        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 6\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 53,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 50,\n        columnNumber: 3\n    }, this);\n}\n_s(GameField, \"kp2m4tXw5/IUP/J6odJPAxjkSB0=\");\n_c = GameField;\n//компонент для отображенияигрового поля\nfunction GameFieldLayout(param) {\n    let { children, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 pt-5 pb-7\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 67,\n        columnNumber: 3\n    }, this);\n}\n_c1 = GameFieldLayout;\n//компонент отображения информации о ходах\nfunction GameMoveInfo(param) {\n    let { actions, currentMove, nextMove } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xl leading-tight\",\n                        children: [\n                            \"Ход: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_zero_icon__WEBPACK_IMPORTED_MODULE_2__.ZeroIcon, {\n                                className: \"w-5 h-5\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 73\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xs leading-tight text-slate-400\",\n                        children: [\n                            \"Следующий: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_cross_icon__WEBPACK_IMPORTED_MODULE_3__.CrossIcon, {}, void 0, false, {\n                                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                                lineNumber: 79,\n                                columnNumber: 94\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 77,\n                columnNumber: 4\n            }, this),\n            actions\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 76,\n        columnNumber: 3\n    }, this);\n}\n_c2 = GameMoveInfo;\n//компонент, хранящий логику отображения значка\nfunction GameSymbol(param) {\n    let { symbol } = param;\n}\n_c3 = GameSymbol;\n//компонент отрисовки хода игры\nfunction GameCell(param) {\n    let { children, i } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"border border-slate-200 -ml-px -mt-px flex items-center justify-center\",\n        children: children\n    }, i, false, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 94,\n        columnNumber: 4\n    }, this);\n}\n_c4 = GameCell;\n//компонент отрисовки решетки игрового поля\nfunction GameGrid(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 107,\n        columnNumber: 3\n    }, this);\n}\n_c5 = GameGrid;\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"GameField\");\n$RefreshReg$(_c1, \"GameFieldLayout\");\n$RefreshReg$(_c2, \"GameMoveInfo\");\n$RefreshReg$(_c3, \"GameSymbol\");\n$RefreshReg$(_c4, \"GameCell\");\n$RefreshReg$(_c5, \"GameGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1maWVsZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBd0I7QUFDcUI7QUFDRTtBQUNEO0FBQ2I7QUFFakMseUVBQXlFO0FBQ3pFLE1BQU1LLGVBQWU7SUFDcEJDLE1BQU07SUFDTkMsT0FBTztJQUNQQyxVQUFVO0lBQ1ZDLFFBQVE7QUFDVDtBQUVBLDZDQUE2QztBQUM3QyxNQUFNQyxhQUFhO0lBQ2xCTCxhQUFhRSxLQUFLO0lBQ2xCRixhQUFhQyxJQUFJO0lBQ2pCRCxhQUFhRyxRQUFRO0lBQ3JCSCxhQUFhSSxNQUFNO0NBQ25CO0FBRUQsb0VBQW9FO0FBQ3BFLFNBQVNFLFlBQVlDLFdBQVc7SUFDL0IsTUFBTUMsZ0JBQWdCSCxXQUFXSSxPQUFPLENBQUNGLGVBQWU7UUFFakRGO0lBRFAsc0ZBQXNGO0lBQ3RGLE9BQU9BLENBQUFBLDRCQUFBQSxVQUFVLENBQUNHLGNBQWMsY0FBekJILHVDQUFBQSw0QkFBNkJBLFVBQVUsQ0FBQyxFQUFFO0FBQ2xEO0FBRU8sU0FBU0ssVUFBVSxLQUFXO1FBQVgsRUFBQ0MsU0FBUyxFQUFDLEdBQVg7O0lBQzFCLFdBQVc7SUFDVixpSUFBaUk7SUFDakksTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdkLCtDQUFRQSxDQUFDLElBQU0sSUFBSWUsTUFBTSxLQUFLLElBQUlDLElBQUksQ0FBQztJQUVqRSwyREFBMkQ7SUFDM0QsTUFBTSxDQUFDUixhQUFhUyxlQUFlLEdBQUdqQiwrQ0FBUUEsQ0FBQ0MsYUFBYUUsS0FBSztJQUVqRSx5R0FBeUc7SUFDekcsTUFBTWUsV0FBV1gsWUFBWUM7SUFHN0Isc0NBQXNDO0lBQ3RDLE1BQU1XLHdCQUNOOzswQkFDQyw4REFBQ3BCLHNEQUFRQTtnQkFBQ3FCLE1BQUs7Z0JBQUtDLFNBQVE7MEJBQVU7Ozs7OzswQkFDdEMsOERBQUN0QixzREFBUUE7Z0JBQUNxQixNQUFLO2dCQUFLQyxTQUFROzBCQUFVOzs7Ozs7OztJQUd2QyxxQkFDQyw4REFBQ0M7UUFBZ0JWLFdBQVdBOzswQkFDM0IsOERBQUNXO2dCQUFhSixTQUFTQTs7Ozs7OzBCQUV2Qiw4REFBQ0s7MEJBQ0NYLE1BQU1ZLEdBQUcsQ0FBQyxDQUFDQyxHQUFHQyxzQkFDZCw4REFBQ0MsY0FBY0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPcEI7R0FoQ2dCaEI7S0FBQUE7QUFrQ2hCLHdDQUF3QztBQUN4QyxTQUFTVyxnQkFBZ0IsS0FBcUI7UUFBckIsRUFBQ08sUUFBUSxFQUFFakIsU0FBUyxFQUFDLEdBQXJCO0lBQ3hCLHFCQUNDLDhEQUFDa0I7UUFBSWxCLFdBQVdoQixnREFBSUEsQ0FBQ2dCLFdBQVc7a0JBQzlCaUI7Ozs7OztBQUdKO01BTlNQO0FBUVQsMENBQTBDO0FBQzFDLFNBQVNDLGFBQWEsS0FBZ0M7UUFBaEMsRUFBQ0osT0FBTyxFQUFFWCxXQUFXLEVBQUVVLFFBQVEsRUFBQyxHQUFoQztJQUNyQixxQkFDQyw4REFBQ1k7UUFBSWxCLFdBQVU7OzBCQUNkLDhEQUFDa0I7Z0JBQUlsQixXQUFVOztrQ0FDZCw4REFBQ2tCO3dCQUFJbEIsV0FBVTs7NEJBQWdEOzBDQUFLLDhEQUFDZixzREFBUUE7Z0NBQUNlLFdBQVU7Ozs7Ozs7Ozs7OztrQ0FDeEYsOERBQUNrQjt3QkFBSWxCLFdBQVU7OzRCQUErRDswQ0FBVyw4REFBQ2Qsd0RBQVNBOzs7Ozs7Ozs7Ozs7Ozs7OztZQUVuR3FCOzs7Ozs7O0FBR0o7TUFWU0k7QUFZVCwrQ0FBK0M7QUFDL0MsU0FBU1EsV0FBVyxLQUFRO1FBQVIsRUFBQ0MsTUFBTSxFQUFDLEdBQVI7QUFFcEI7TUFGU0Q7QUFJVCwrQkFBK0I7QUFDL0IsU0FBU0gsU0FBUyxLQUFhO1FBQWIsRUFBQ0MsUUFBUSxFQUFFSSxDQUFDLEVBQUMsR0FBYjtJQUNqQixxQkFDRSw4REFBQ0M7UUFFQXRCLFdBQVU7a0JBRVRpQjtPQUhJSTs7Ozs7QUFNVDtNQVRTTDtBQVlULDJDQUEyQztBQUMzQyxTQUFTSixTQUFTLEtBQVU7UUFBVixFQUFDSyxRQUFRLEVBQUMsR0FBVjtJQUNqQixxQkFDQyw4REFBQ0M7UUFBSWxCLFdBQVU7a0JBQ2JpQjs7Ozs7O0FBR0o7TUFOU0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL2dhbWUtZmllbGQuanN4P2M2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyBaZXJvSWNvbiB9IGZyb20gJy4vaWNvbnMvemVyby1pY29uJztcbmltcG9ydCB7IENyb3NzSWNvbiB9IGZyb20gJy4vaWNvbnMvY3Jvc3MtaWNvbic7XG5pbXBvcnQgeyBVaUJ1dHRvbiB9IGZyb20gJy4uL3Vpa2l0L3VpLWJ1dHRvbic7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuLy/QutC+0L3RgdGC0LDQvdGC0LAsINCyINC60L7RgtC+0YDQvtC5INC/0LXRgNC10YfQuNGB0LvQtdC90Ysg0LLRgdC1INCy0L7Qt9C80L7QttC90YvQtSDQstCw0YDQuNCw0L3RgtGLINC30L3QsNGH0LrQvtCyINC40LPRgNC+0LrQvtCyXG5jb25zdCBHQU1FX1NZTUJPTFMgPSB7XG5cdFpFUk86ICd6ZXJvJyxcblx0Q1JPU1M6ICdjcm9zcycsXG5cdFRSSUFOR0xFOiAndHJpYW5nbGUnLFxuXHRTUVVBUkU6ICdzcXVhcmUnXG59XG5cbi8v0LrQvtC90YHRgtCw0L3RgtCwLCDQsiDQutC+0YLQvtGA0L7QuSDRhdGA0LDQvdC40YLRgdGPINC/0L7RgNGP0LTQvtC6INGF0L7QtNC+0LJcbmNvbnN0IE1PVkVfT1JERVIgPSBbXG5cdEdBTUVfU1lNQk9MUy5DUk9TUyxcblx0R0FNRV9TWU1CT0xTLlpFUk8sXG5cdEdBTUVfU1lNQk9MUy5UUklBTkdMRSxcblx0R0FNRV9TWU1CT0xTLlNRVUFSRVxuXVxuXG4vL9GE0YPQvdC60YbQuNGPINGA0LDRgdGH0LXRgtCwINGB0L7RgdGC0L7Rj9C90LjRjyDRgdC70LXQtNGD0Y7RidC10LPQviDRhdC+0LTQsCDQvdCwINC+0YHQvdC+0LLQsNC90LjQuCBjdXJyZW50TW92ZVxuZnVuY3Rpb24gZ2V0TmV4dE1vdmUoY3VycmVudE1vdmUpIHtcblx0Y29uc3QgbmV4dE1vdmVJbmRleCA9IE1PVkVfT1JERVIuaW5kZXhPZihjdXJyZW50TW92ZSkgKyAxXG5cdC8v0LXRgdC70LggTU9WRV9PUkRFUltuZXh0TW92ZUluZGV4XSA+IDMsINC90LDQtNC+INGD0YHRgtCw0L3QvtCy0LjRgtGMINC40L3QtNC10LrRgSAwICjRhdC+0LTQuNGCINC+0L/Rj9GC0YwgXCLQutGA0LXRgdGC0LjQulwiKVxuXHRyZXR1cm4gTU9WRV9PUkRFUltuZXh0TW92ZUluZGV4XSA/PyBNT1ZFX09SREVSWzBdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gR2FtZUZpZWxkKHtjbGFzc05hbWV9KSB7XG4vL9Ch0J7QodCi0J7Qr9Cd0JjQr1xuXHQvL9GB0L7RgdGC0L7Rj9C90LjQtSDQuNCz0YDQvtCy0LPQviDQv9C+0LvRjy4g0L7RgtGA0LjRgdC+0LLRi9Cy0LDQtdC8INC+0LTQuNC9INGA0LDQtyDQv9GD0YHRgtC+0LUg0LjQs9GA0L7QstC+0LUg0L/QvtC70LUgKNC80LDRgdGB0LjQsiDQutC70LXRgtC+0YfQtdC6IDE50YUxOSkg0L/RgNC4INC/0LXRgNCy0L7QvdCw0YfQsNC70YzQvdC+0Lwg0YDQtdC90LTQtdGA0LUg0LrQvtC80L/QvtC90LXQvdGC0LBcblx0Y29uc3QgW2NlbGxzLCBzZXRDZWxsc10gPSB1c2VTdGF0ZSgoKSA9PiBuZXcgQXJyYXkoMTkgKiAxOSkuZmlsbChudWxsKSk7XG5cblx0Ly/RgdC+0YHRgtC+0Y/QvdC40LUg0LrQsNC60L7QuSDRgtC10LrRg9GJ0LjQuSDRhdC+0LQsINC90LDRh9Cw0LvRjNC90L7QtSDQt9C90LDRh9C10L3QuNC1IFwi0LrRgNC10YHRgtC40LpcIlxuXHRjb25zdCBbY3VycmVudE1vdmUsIHNldEN1cnJlbnRNb3ZlXSA9IHVzZVN0YXRlKEdBTUVfU1lNQk9MUy5DUk9TUyk7XG5cblx0Ly/RgdC+0YHRgtC+0Y/QvdC40LUg0LrQsNC60L7QuSDRgdC70LXQtNGD0Y7RidC40Lkg0YXQvtC0LiDQndC1INC30LDQstC+0LTQuNC8INC60L7Qv9C40Y4g0YHQvtGB0YLQvtGP0L3QuNGPIGN1cnJlbnRNb3ZlLCDQsCDRgNCw0YHRh9C40YLRi9Cy0LDQtdC8INC/0YDRj9C80L4g0L/RgNC4INGA0LXQvdC00LXRgNC1LlxuXHRjb25zdCBuZXh0TW92ZSA9IGdldE5leHRNb3ZlKGN1cnJlbnRNb3ZlKTtcblxuXG5cdC8v0L/QtdGA0LXQvNC10L3QvdCw0Y8g0LTQu9GPIEdhbWVNb3ZlSW5mbyAo0LrQvdC+0L/QutC4KVxuXHRjb25zdCBhY3Rpb25zID0gXG5cdDw+XG5cdFx0PFVpQnV0dG9uIHNpemU9XCJtZFwiIHZhcmlhbnQ9XCJwcmltYXJ5XCI+0J3QuNGH0YzRjzwvVWlCdXR0b24+XG5cdFx0PFVpQnV0dG9uIHNpemU9XCJtZFwiIHZhcmlhbnQ9XCJvdXRsaW5lXCI+0KHQtNCw0YLRjNGB0Y88L1VpQnV0dG9uPlxuXHQ8Lz5cblxuXHRyZXR1cm4oXG5cdFx0PEdhbWVGaWVsZExheW91dCBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG5cdFx0XHQ8R2FtZU1vdmVJbmZvIGFjdGlvbnM9e2FjdGlvbnN9IC8+XG5cblx0XHRcdDxHYW1lR3JpZD5cblx0XHRcdFx0e2NlbGxzLm1hcCgoXywgaW5kZXgpID0+IChcblx0XHRcdFx0XHQ8R2FtZUNlbGwga2V5PXtpbmRleH0+XG5cblx0XHRcdFx0XHQ8L0dhbWVDZWxsPlxuXHRcdFx0XHQpKX1cblx0XHRcdDwvR2FtZUdyaWQ+XG5cdFx0PC9HYW1lRmllbGRMYXlvdXQ+XG5cdCk7XG59XG5cbi8v0LrQvtC80L/QvtC90LXQvdGCINC00LvRjyDQvtGC0L7QsdGA0LDQttC10L3QuNGP0LjQs9GA0L7QstC+0LPQviDQv9C+0LvRj1xuZnVuY3Rpb24gR2FtZUZpZWxkTGF5b3V0KHtjaGlsZHJlbiwgY2xhc3NOYW1lfSkge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzTmFtZSwgXCJiZy13aGl0ZSByb3VuZGVkLTJ4bCBzaGFkb3ctbWQgcHgtOCBwdC01IHBiLTdcIil9PlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG4vL9C60L7QvNC/0L7QvdC10L3RgiDQvtGC0L7QsdGA0LDQttC10L3QuNGPINC40L3RhNC+0YDQvNCw0YbQuNC4INC+INGF0L7QtNCw0YVcbmZ1bmN0aW9uIEdhbWVNb3ZlSW5mbyh7YWN0aW9ucywgY3VycmVudE1vdmUsIG5leHRNb3ZlfSkge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMyBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPiBcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LXhsIGxlYWRpbmctdGlnaHRcIj7QpdC+0LQ6IDxaZXJvSWNvbiBjbGFzc05hbWU9XCJ3LTUgaC01XCIvPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQteHMgbGVhZGluZy10aWdodCB0ZXh0LXNsYXRlLTQwMFwiPtCh0LvQtdC00YPRjtGJ0LjQuTogPENyb3NzSWNvbiAvPjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHR7YWN0aW9uc31cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuLy/QutC+0LzQv9C+0L3QtdC90YIsINGF0YDQsNC90Y/RidC40Lkg0LvQvtCz0LjQutGDINC+0YLQvtCx0YDQsNC20LXQvdC40Y8g0LfQvdCw0YfQutCwXG5mdW5jdGlvbiBHYW1lU3ltYm9sKHtzeW1ib2x9KSB7XG5cbn1cblxuLy/QutC+0LzQv9C+0L3QtdC90YIg0L7RgtGA0LjRgdC+0LLQutC4INGF0L7QtNCwINC40LPRgNGLXG5mdW5jdGlvbiBHYW1lQ2VsbCh7Y2hpbGRyZW4sIGl9KSB7XG5cdHJldHVybiAoXG5cdFx0XHQ8YnV0dG9uIFxuXHRcdFx0XHRrZXk9e2l9IFxuXHRcdFx0XHRjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCAtbWwtcHggLW10LXB4IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcblx0XHRcdD5cblx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PC9idXR0b24+XG5cdCk7XG59XG5cblxuLy/QutC+0LzQv9C+0L3QtdC90YIg0L7RgtGA0LjRgdC+0LLQutC4INGA0LXRiNC10YLQutC4INC40LPRgNC+0LLQvtCz0L4g0L/QvtC70Y9cbmZ1bmN0aW9uIEdhbWVHcmlkKHtjaGlsZHJlbn0pIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLVtyZXBlYXQoMTksXzMwcHgpXSBncmlkLXJvd3MtW3JlcGVhdCgxOSxfMzBweCldIHBsLXB4IHB0LXB4IG10LTNcIj5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiJdLCJuYW1lcyI6WyJjbHN4IiwiWmVyb0ljb24iLCJDcm9zc0ljb24iLCJVaUJ1dHRvbiIsInVzZVN0YXRlIiwiR0FNRV9TWU1CT0xTIiwiWkVSTyIsIkNST1NTIiwiVFJJQU5HTEUiLCJTUVVBUkUiLCJNT1ZFX09SREVSIiwiZ2V0TmV4dE1vdmUiLCJjdXJyZW50TW92ZSIsIm5leHRNb3ZlSW5kZXgiLCJpbmRleE9mIiwiR2FtZUZpZWxkIiwiY2xhc3NOYW1lIiwiY2VsbHMiLCJzZXRDZWxscyIsIkFycmF5IiwiZmlsbCIsInNldEN1cnJlbnRNb3ZlIiwibmV4dE1vdmUiLCJhY3Rpb25zIiwic2l6ZSIsInZhcmlhbnQiLCJHYW1lRmllbGRMYXlvdXQiLCJHYW1lTW92ZUluZm8iLCJHYW1lR3JpZCIsIm1hcCIsIl8iLCJpbmRleCIsIkdhbWVDZWxsIiwiY2hpbGRyZW4iLCJkaXYiLCJHYW1lU3ltYm9sIiwic3ltYm9sIiwiaSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/game-field.jsx\n"));

/***/ })

});