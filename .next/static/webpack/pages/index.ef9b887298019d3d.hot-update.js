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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _icons_zero_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/zero-icon */ \"./components/game/icons/zero-icon.jsx\");\n/* harmony import */ var _icons_cross_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/cross-icon */ \"./components/game/icons/cross-icon.jsx\");\n/* harmony import */ var _uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../uikit/ui-button */ \"./components/uikit/ui-button.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n//константа, в которой перечислены все возможные варианты значков игроков\nconst GAME_SYMBOLS = {\n    ZERO: \"zero\",\n    CROSS: \"cross\",\n    TRIANGLE: \"triangle\",\n    SQUARE: \"square\"\n};\n//константа, в которой хранится порядок ходов\nconst MOVE_ORDER = [\n    GAME_SYMBOLS.CROSS,\n    GAME_SYMBOLS.ZERO,\n    GAME_SYMBOLS.TRIANGLE,\n    GAME_SYMBOLS.SQUARE\n];\n//функция расчета состояния следующего хода на основании currentMove\nfunction getNextMove(currentMove) {\n    const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1;\n    var _MOVE_ORDER_nextMoveIndex;\n    //если MOVE_ORDER[nextMoveIndex] > 3, надо установить индекс 0 (ходит опять \"крестик\")\n    return (_MOVE_ORDER_nextMoveIndex = MOVE_ORDER[nextMoveIndex]) !== null && _MOVE_ORDER_nextMoveIndex !== void 0 ? _MOVE_ORDER_nextMoveIndex : MOVE_ORDER[0];\n}\nfunction GameField(param) {\n    let { className } = param;\n    _s();\n    //СОСТОЯНИЯ\n    //состояние игровго поля. отрисовываем один раз пустое игровое поле (массив клеточек 19х19) при первоначальном рендере компонента\n    const [cells, setCells] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(()=>new Array(19 * 19).fill(null));\n    //состояние какой текущий ход, начальное значение \"крестик\"\n    const [currentMove, setCurrentMove] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(GAME_SYMBOLS.CROSS);\n    //состояние какой следующий ход. Не заводим копию состояния currentMove, а расчитываем прямо при рендере.\n    const nextMove = getNextMove(currentMove);\n    //переменная для GameMoveInfo (кнопки)\n    const actions = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__.UiButton, {\n                size: \"md\",\n                variant: \"primary\",\n                children: \"Ничья\"\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 45,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__.UiButton, {\n                size: \"md\",\n                variant: \"outline\",\n                children: \"Сдаться\"\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 46,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameFieldLayout, {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameMoveInfo, {\n                actions: actions\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 51,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameGrid, {\n                children: cells.map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameCell, {}, index, false, {\n                        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 6\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 53,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 50,\n        columnNumber: 3\n    }, this);\n}\n_s(GameField, \"kp2m4tXw5/IUP/J6odJPAxjkSB0=\");\n_c = GameField;\n//компонент для отображенияигрового поля\nfunction GameFieldLayout(param) {\n    let { children, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 pt-5 pb-7\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 67,\n        columnNumber: 3\n    }, this);\n}\n_c1 = GameFieldLayout;\n//компонент отображения информации о ходах\nfunction GameMoveInfo(param) {\n    let { actions, currentMove, nextMove } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xl leading-tight\",\n                        children: [\n                            \"Ход: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_zero_icon__WEBPACK_IMPORTED_MODULE_2__.ZeroIcon, {\n                                className: \"w-5 h-5\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 73\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xs leading-tight text-slate-400\",\n                        children: [\n                            \"Следующий: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_cross_icon__WEBPACK_IMPORTED_MODULE_3__.CrossIcon, {}, void 0, false, {\n                                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                                lineNumber: 79,\n                                columnNumber: 94\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 77,\n                columnNumber: 4\n            }, this),\n            actions\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 76,\n        columnNumber: 3\n    }, this);\n}\n_c2 = GameMoveInfo;\n//компонент, хранящий логику отображения значка\n//компонент отрисовки хода игры\nfunction GameCell(param) {\n    let { children, i } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"border border-slate-200 -ml-px -mt-px flex items-center justify-center\",\n        children: children\n    }, i, false, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 91,\n        columnNumber: 4\n    }, this);\n}\n_c3 = GameCell;\n//компонент отрисовки решетки игрового поля\nfunction GameGrid(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 104,\n        columnNumber: 3\n    }, this);\n}\n_c4 = GameGrid;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"GameField\");\n$RefreshReg$(_c1, \"GameFieldLayout\");\n$RefreshReg$(_c2, \"GameMoveInfo\");\n$RefreshReg$(_c3, \"GameCell\");\n$RefreshReg$(_c4, \"GameGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS9nYW1lLWZpZWxkLmpzeD9jNjAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgWmVyb0ljb24gfSBmcm9tICcuL2ljb25zL3plcm8taWNvbic7XG5pbXBvcnQgeyBDcm9zc0ljb24gfSBmcm9tICcuL2ljb25zL2Nyb3NzLWljb24nO1xuaW1wb3J0IHsgVWlCdXR0b24gfSBmcm9tICcuLi91aWtpdC91aS1idXR0b24nO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbi8v0LrQvtC90YHRgtCw0L3RgtCwLCDQsiDQutC+0YLQvtGA0L7QuSDQv9C10YDQtdGH0LjRgdC70LXQvdGLINCy0YHQtSDQstC+0LfQvNC+0LbQvdGL0LUg0LLQsNGA0LjQsNC90YLRiyDQt9C90LDRh9C60L7QsiDQuNCz0YDQvtC60L7QslxuY29uc3QgR0FNRV9TWU1CT0xTID0ge1xuXHRaRVJPOiAnemVybycsXG5cdENST1NTOiAnY3Jvc3MnLFxuXHRUUklBTkdMRTogJ3RyaWFuZ2xlJyxcblx0U1FVQVJFOiAnc3F1YXJlJ1xufVxuXG4vL9C60L7QvdGB0YLQsNC90YLQsCwg0LIg0LrQvtGC0L7RgNC+0Lkg0YXRgNCw0L3QuNGC0YHRjyDQv9C+0YDRj9C00L7QuiDRhdC+0LTQvtCyXG5jb25zdCBNT1ZFX09SREVSID0gW1xuXHRHQU1FX1NZTUJPTFMuQ1JPU1MsXG5cdEdBTUVfU1lNQk9MUy5aRVJPLFxuXHRHQU1FX1NZTUJPTFMuVFJJQU5HTEUsXG5cdEdBTUVfU1lNQk9MUy5TUVVBUkVcbl1cblxuLy/RhNGD0L3QutGG0LjRjyDRgNCw0YHRh9C10YLQsCDRgdC+0YHRgtC+0Y/QvdC40Y8g0YHQu9C10LTRg9GO0YnQtdCz0L4g0YXQvtC00LAg0L3QsCDQvtGB0L3QvtCy0LDQvdC40LggY3VycmVudE1vdmVcbmZ1bmN0aW9uIGdldE5leHRNb3ZlKGN1cnJlbnRNb3ZlKSB7XG5cdGNvbnN0IG5leHRNb3ZlSW5kZXggPSBNT1ZFX09SREVSLmluZGV4T2YoY3VycmVudE1vdmUpICsgMVxuXHQvL9C10YHQu9C4IE1PVkVfT1JERVJbbmV4dE1vdmVJbmRleF0gPiAzLCDQvdCw0LTQviDRg9GB0YLQsNC90L7QstC40YLRjCDQuNC90LTQtdC60YEgMCAo0YXQvtC00LjRgiDQvtC/0Y/RgtGMIFwi0LrRgNC10YHRgtC40LpcIilcblx0cmV0dXJuIE1PVkVfT1JERVJbbmV4dE1vdmVJbmRleF0gPz8gTU9WRV9PUkRFUlswXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEdhbWVGaWVsZCh7Y2xhc3NOYW1lfSkge1xuLy/QodCe0KHQotCe0K/QndCY0K9cblx0Ly/RgdC+0YHRgtC+0Y/QvdC40LUg0LjQs9GA0L7QstCz0L4g0L/QvtC70Y8uINC+0YLRgNC40YHQvtCy0YvQstCw0LXQvCDQvtC00LjQvSDRgNCw0Lcg0L/Rg9GB0YLQvtC1INC40LPRgNC+0LLQvtC1INC/0L7Qu9C1ICjQvNCw0YHRgdC40LIg0LrQu9C10YLQvtGH0LXQuiAxOdGFMTkpINC/0YDQuCDQv9C10YDQstC+0L3QsNGH0LDQu9GM0L3QvtC8INGA0LXQvdC00LXRgNC1INC60L7QvNC/0L7QvdC10L3RgtCwXG5cdGNvbnN0IFtjZWxscywgc2V0Q2VsbHNdID0gdXNlU3RhdGUoKCkgPT4gbmV3IEFycmF5KDE5ICogMTkpLmZpbGwobnVsbCkpO1xuXG5cdC8v0YHQvtGB0YLQvtGP0L3QuNC1INC60LDQutC+0Lkg0YLQtdC60YPRidC40Lkg0YXQvtC0LCDQvdCw0YfQsNC70YzQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSBcItC60YDQtdGB0YLQuNC6XCJcblx0Y29uc3QgW2N1cnJlbnRNb3ZlLCBzZXRDdXJyZW50TW92ZV0gPSB1c2VTdGF0ZShHQU1FX1NZTUJPTFMuQ1JPU1MpO1xuXG5cdC8v0YHQvtGB0YLQvtGP0L3QuNC1INC60LDQutC+0Lkg0YHQu9C10LTRg9GO0YnQuNC5INGF0L7QtC4g0J3QtSDQt9Cw0LLQvtC00LjQvCDQutC+0L/QuNGOINGB0L7RgdGC0L7Rj9C90LjRjyBjdXJyZW50TW92ZSwg0LAg0YDQsNGB0YfQuNGC0YvQstCw0LXQvCDQv9GA0Y/QvNC+INC/0YDQuCDRgNC10L3QtNC10YDQtS5cblx0Y29uc3QgbmV4dE1vdmUgPSBnZXROZXh0TW92ZShjdXJyZW50TW92ZSk7XG5cblxuXHQvL9C/0LXRgNC10LzQtdC90L3QsNGPINC00LvRjyBHYW1lTW92ZUluZm8gKNC60L3QvtC/0LrQuClcblx0Y29uc3QgYWN0aW9ucyA9IFxuXHQ8PlxuXHRcdDxVaUJ1dHRvbiBzaXplPVwibWRcIiB2YXJpYW50PVwicHJpbWFyeVwiPtCd0LjRh9GM0Y88L1VpQnV0dG9uPlxuXHRcdDxVaUJ1dHRvbiBzaXplPVwibWRcIiB2YXJpYW50PVwib3V0bGluZVwiPtCh0LTQsNGC0YzRgdGPPC9VaUJ1dHRvbj5cblx0PC8+XG5cblx0cmV0dXJuKFxuXHRcdDxHYW1lRmllbGRMYXlvdXQgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuXHRcdFx0PEdhbWVNb3ZlSW5mbyBhY3Rpb25zPXthY3Rpb25zfSAvPlxuXG5cdFx0XHQ8R2FtZUdyaWQ+XG5cdFx0XHRcdHtjZWxscy5tYXAoKF8sIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0PEdhbWVDZWxsIGtleT17aW5kZXh9PlxuXG5cdFx0XHRcdFx0PC9HYW1lQ2VsbD5cblx0XHRcdFx0KSl9XG5cdFx0XHQ8L0dhbWVHcmlkPlxuXHRcdDwvR2FtZUZpZWxkTGF5b3V0PlxuXHQpO1xufVxuXG4vL9C60L7QvNC/0L7QvdC10L3RgiDQtNC70Y8g0L7RgtC+0LHRgNCw0LbQtdC90LjRj9C40LPRgNC+0LLQvtCz0L4g0L/QvtC70Y9cbmZ1bmN0aW9uIEdhbWVGaWVsZExheW91dCh7Y2hpbGRyZW4sIGNsYXNzTmFtZX0pIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc05hbWUsIFwiYmctd2hpdGUgcm91bmRlZC0yeGwgc2hhZG93LW1kIHB4LTggcHQtNSBwYi03XCIpfT5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuLy/QutC+0LzQv9C+0L3QtdC90YIg0L7RgtC+0LHRgNCw0LbQtdC90LjRjyDQuNC90YTQvtGA0LzQsNGG0LjQuCDQviDRhdC+0LTQsNGFXG5mdW5jdGlvbiBHYW1lTW92ZUluZm8oe2FjdGlvbnMsIGN1cnJlbnRNb3ZlLCBuZXh0TW92ZX0pIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTMgaXRlbXMtY2VudGVyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj4gXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC14bCBsZWFkaW5nLXRpZ2h0XCI+0KXQvtC0OiA8WmVyb0ljb24gY2xhc3NOYW1lPVwidy01IGgtNVwiLz48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LXhzIGxlYWRpbmctdGlnaHQgdGV4dC1zbGF0ZS00MDBcIj7QodC70LXQtNGD0Y7RidC40Lk6IDxDcm9zc0ljb24gLz48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0e2FjdGlvbnN9XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbi8v0LrQvtC80L/QvtC90LXQvdGCLCDRhdGA0LDQvdGP0YnQuNC5INC70L7Qs9C40LrRgyDQvtGC0L7QsdGA0LDQttC10L3QuNGPINC30L3QsNGH0LrQsFxuXG4vL9C60L7QvNC/0L7QvdC10L3RgiDQvtGC0YDQuNGB0L7QstC60Lgg0YXQvtC00LAg0LjQs9GA0YtcbmZ1bmN0aW9uIEdhbWVDZWxsKHtjaGlsZHJlbiwgaX0pIHtcblx0cmV0dXJuIChcblx0XHRcdDxidXR0b24gXG5cdFx0XHRcdGtleT17aX0gXG5cdFx0XHRcdGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItc2xhdGUtMjAwIC1tbC1weCAtbXQtcHggZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuXHRcdFx0PlxuXHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHQ8L2J1dHRvbj5cblx0KTtcbn1cblxuXG4vL9C60L7QvNC/0L7QvdC10L3RgiDQvtGC0YDQuNGB0L7QstC60Lgg0YDQtdGI0LXRgtC60Lgg0LjQs9GA0L7QstC+0LPQviDQv9C+0LvRj1xuZnVuY3Rpb24gR2FtZUdyaWQoe2NoaWxkcmVufSkge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtW3JlcGVhdCgxOSxfMzBweCldIGdyaWQtcm93cy1bcmVwZWF0KDE5LF8zMHB4KV0gcGwtcHggcHQtcHggbXQtM1wiPlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIl0sIm5hbWVzIjpbImNsc3giLCJaZXJvSWNvbiIsIkNyb3NzSWNvbiIsIlVpQnV0dG9uIiwidXNlU3RhdGUiLCJHQU1FX1NZTUJPTFMiLCJaRVJPIiwiQ1JPU1MiLCJUUklBTkdMRSIsIlNRVUFSRSIsIk1PVkVfT1JERVIiLCJnZXROZXh0TW92ZSIsImN1cnJlbnRNb3ZlIiwibmV4dE1vdmVJbmRleCIsImluZGV4T2YiLCJHYW1lRmllbGQiLCJjbGFzc05hbWUiLCJjZWxscyIsInNldENlbGxzIiwiQXJyYXkiLCJmaWxsIiwic2V0Q3VycmVudE1vdmUiLCJuZXh0TW92ZSIsImFjdGlvbnMiLCJzaXplIiwidmFyaWFudCIsIkdhbWVGaWVsZExheW91dCIsIkdhbWVNb3ZlSW5mbyIsIkdhbWVHcmlkIiwibWFwIiwiXyIsImluZGV4IiwiR2FtZUNlbGwiLCJjaGlsZHJlbiIsImRpdiIsImkiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/game-field.jsx\n"));

/***/ })

});