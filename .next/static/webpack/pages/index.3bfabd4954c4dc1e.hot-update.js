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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _icons_zero_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/zero-icon */ \"./components/game/icons/zero-icon.jsx\");\n/* harmony import */ var _icons_cross_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/cross-icon */ \"./components/game/icons/cross-icon.jsx\");\n/* harmony import */ var _uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../uikit/ui-button */ \"./components/uikit/ui-button.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game-symbol */ \"./components/game/game-symbol.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n//константа, в которой хранится порядок ходов\nconst MOVE_ORDER = [\n    _constants__WEBPACK_IMPORTED_MODULE_6__.GAME_SYMBOLS.CROSS,\n    _constants__WEBPACK_IMPORTED_MODULE_6__.GAME_SYMBOLS.ZERO,\n    _constants__WEBPACK_IMPORTED_MODULE_6__.GAME_SYMBOLS.TRIANGLE,\n    _constants__WEBPACK_IMPORTED_MODULE_6__.GAME_SYMBOLS.SQUARE\n];\n//функция расчета состояния следующего хода на основании currentMove\nfunction getNextMove(currentMove) {\n    const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1;\n    var _MOVE_ORDER_nextMoveIndex;\n    //если MOVE_ORDER[nextMoveIndex] > 3, надо установить индекс 0 (ходит опять \"крестик\")\n    return (_MOVE_ORDER_nextMoveIndex = MOVE_ORDER[nextMoveIndex]) !== null && _MOVE_ORDER_nextMoveIndex !== void 0 ? _MOVE_ORDER_nextMoveIndex : MOVE_ORDER[0];\n}\nfunction GameField(param) {\n    let { className } = param;\n    _s();\n    //СОСТОЯНИЯ\n    //объединенное состояние: состояние игрового поля, состояние какой текущий ход \n    //начальное значение useState - отрисовываем один раз пустое игровое поле (массив клеточек 19х19) при первоначальном рендере компонента\n    const [{ cells, currentMove }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(()=>({\n            cells: new Array(19 * 19).fill(null),\n            currentMove: _constants__WEBPACK_IMPORTED_MODULE_6__.GAME_SYMBOLS.ZERO\n        }));\n    //состояние какой следующий ход. Не заводим копию состояния currentMove, а расчитываем прямо при рендере.\n    const nextMove = getNextMove(currentMove);\n    //обработчик клика по клетке (хода)\n    const handleCellClick = (index)=>{\n        setCurrentMove((lastCurrentMove)=>getNextMove(lastCurrentMove));\n        setCells((lastCells)=>{});\n    };\n    //переменная для GameMoveInfo (кнопки)\n    const actions = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__.UiButton, {\n                size: \"md\",\n                variant: \"primary\",\n                children: \"Ничья\"\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 48,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__.UiButton, {\n                size: \"md\",\n                variant: \"outline\",\n                children: \"Сдаться\"\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 49,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameFieldLayout, {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameMoveInfo, {\n                actions: actions,\n                currentMove: currentMove,\n                nextMove: nextMove\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 54,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameGrid, {\n                children: cells.map((symbol, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameCell, {\n                        onClick: ()=>{\n                            handleCellClick(index);\n                        },\n                        children: symbol && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_7__.GameSymbol, {\n                            symbol: symbol,\n                            className: \"w-5 h-5\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 18\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 6\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 59,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 53,\n        columnNumber: 3\n    }, this);\n}\n_s(GameField, \"xt84E+HDG+N8jzIZSC/q5MagaZk=\");\n_c = GameField;\n//компонент отрисовки хода игры\nfunction GameCell(param) {\n    let { children, onClick } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: onClick,\n        className: \"border border-slate-200 -ml-px -mt-px flex items-center justify-center\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 75,\n        columnNumber: 4\n    }, this);\n}\n_c1 = GameCell;\n//компонент для отображенияигрового поля\nfunction GameFieldLayout(param) {\n    let { children, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 pt-5 pb-7\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 88,\n        columnNumber: 3\n    }, this);\n}\n_c2 = GameFieldLayout;\n//компонент отображения информации о ходах\nfunction GameMoveInfo(param) {\n    let { actions, currentMove, nextMove } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xl leading-tight\",\n                        children: [\n                            \"Ход: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_7__.GameSymbol, {\n                                symbol: currentMove,\n                                className: \"w-5 h-5\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                        lineNumber: 99,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xs leading-tight text-slate-400\",\n                        children: [\n                            \"Следующий: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_7__.GameSymbol, {\n                                symbol: nextMove,\n                                className: \"w-3 h-3\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                                lineNumber: 103,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                        lineNumber: 102,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 98,\n                columnNumber: 4\n            }, this),\n            actions\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 97,\n        columnNumber: 3\n    }, this);\n}\n_c3 = GameMoveInfo;\n//компонент отрисовки решетки игрового поля\nfunction GameGrid(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 114,\n        columnNumber: 3\n    }, this);\n}\n_c4 = GameGrid;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"GameField\");\n$RefreshReg$(_c1, \"GameCell\");\n$RefreshReg$(_c2, \"GameFieldLayout\");\n$RefreshReg$(_c3, \"GameMoveInfo\");\n$RefreshReg$(_c4, \"GameGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVqRCw4REFBQ3dCO3dCQUFJeEIsV0FBVTs7NEJBQStEOzBDQUNsRSw4REFBQ1gsb0RBQVVBO2dDQUFDOEIsUUFBUWQ7Z0NBQVVMLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdwRFk7Ozs7Ozs7QUFHSjtNQWRTSTtBQWdCVCwyQ0FBMkM7QUFDM0MsU0FBU0MsU0FBUyxLQUFVO1FBQVYsRUFBQ0ssUUFBUSxFQUFDLEdBQVY7SUFDakIscUJBQ0MsOERBQUNFO1FBQUl4QixXQUFVO2tCQUNic0I7Ozs7OztBQUdKO01BTlNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS9nYW1lLWZpZWxkLmpzeD9jNjAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgWmVyb0ljb24gfSBmcm9tICcuL2ljb25zL3plcm8taWNvbic7XG5pbXBvcnQgeyBDcm9zc0ljb24gfSBmcm9tICcuL2ljb25zL2Nyb3NzLWljb24nO1xuaW1wb3J0IHsgVWlCdXR0b24gfSBmcm9tICcuLi91aWtpdC91aS1idXR0b24nO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHQU1FX1NZTUJPTFMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBHYW1lU3ltYm9sIH0gZnJvbSAnLi9nYW1lLXN5bWJvbCc7XG5cbi8v0LrQvtC90YHRgtCw0L3RgtCwLCDQsiDQutC+0YLQvtGA0L7QuSDRhdGA0LDQvdC40YLRgdGPINC/0L7RgNGP0LTQvtC6INGF0L7QtNC+0LJcbmNvbnN0IE1PVkVfT1JERVIgPSBbXG5cdEdBTUVfU1lNQk9MUy5DUk9TUyxcblx0R0FNRV9TWU1CT0xTLlpFUk8sXG5cdEdBTUVfU1lNQk9MUy5UUklBTkdMRSxcblx0R0FNRV9TWU1CT0xTLlNRVUFSRVxuXVxuXG4vL9GE0YPQvdC60YbQuNGPINGA0LDRgdGH0LXRgtCwINGB0L7RgdGC0L7Rj9C90LjRjyDRgdC70LXQtNGD0Y7RidC10LPQviDRhdC+0LTQsCDQvdCwINC+0YHQvdC+0LLQsNC90LjQuCBjdXJyZW50TW92ZVxuZnVuY3Rpb24gZ2V0TmV4dE1vdmUoY3VycmVudE1vdmUpIHtcblx0Y29uc3QgbmV4dE1vdmVJbmRleCA9IE1PVkVfT1JERVIuaW5kZXhPZihjdXJyZW50TW92ZSkgKyAxXG5cdC8v0LXRgdC70LggTU9WRV9PUkRFUltuZXh0TW92ZUluZGV4XSA+IDMsINC90LDQtNC+INGD0YHRgtCw0L3QvtCy0LjRgtGMINC40L3QtNC10LrRgSAwICjRhdC+0LTQuNGCINC+0L/Rj9GC0YwgXCLQutGA0LXRgdGC0LjQulwiKVxuXHRyZXR1cm4gTU9WRV9PUkRFUltuZXh0TW92ZUluZGV4XSA/PyBNT1ZFX09SREVSWzBdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gR2FtZUZpZWxkKHtjbGFzc05hbWV9KSB7XG4vL9Ch0J7QodCi0J7Qr9Cd0JjQr1xuXHQvL9C+0LHRitC10LTQuNC90LXQvdC90L7QtSDRgdC+0YHRgtC+0Y/QvdC40LU6INGB0L7RgdGC0L7Rj9C90LjQtSDQuNCz0YDQvtCy0L7Qs9C+INC/0L7Qu9GPLCDRgdC+0YHRgtC+0Y/QvdC40LUg0LrQsNC60L7QuSDRgtC10LrRg9GJ0LjQuSDRhdC+0LQgXG5cdC8v0L3QsNGH0LDQu9GM0L3QvtC1INC30L3QsNGH0LXQvdC40LUgdXNlU3RhdGUgLSDQvtGC0YDQuNGB0L7QstGL0LLQsNC10Lwg0L7QtNC40L0g0YDQsNC3INC/0YPRgdGC0L7QtSDQuNCz0YDQvtCy0L7QtSDQv9C+0LvQtSAo0LzQsNGB0YHQuNCyINC60LvQtdGC0L7Rh9C10LogMTnRhTE5KSDQv9GA0Lgg0L/QtdGA0LLQvtC90LDRh9Cw0LvRjNC90L7QvCDRgNC10L3QtNC10YDQtSDQutC+0LzQv9C+0L3QtdC90YLQsFxuXHRjb25zdCBbe2NlbGxzLCBjdXJyZW50TW92ZX0sIHNldEdhbWVTdGF0ZV0gPSB1c2VTdGF0ZSgoKSA9PiAoe1xuXHRcdGNlbGxzOiBuZXcgQXJyYXkoMTkgKiAxOSkuZmlsbChudWxsKSxcblx0XHRjdXJyZW50TW92ZTogR0FNRV9TWU1CT0xTLlpFUk9cblx0fSkpO1xuXG5cblx0Ly/RgdC+0YHRgtC+0Y/QvdC40LUg0LrQsNC60L7QuSDRgdC70LXQtNGD0Y7RidC40Lkg0YXQvtC0LiDQndC1INC30LDQstC+0LTQuNC8INC60L7Qv9C40Y4g0YHQvtGB0YLQvtGP0L3QuNGPIGN1cnJlbnRNb3ZlLCDQsCDRgNCw0YHRh9C40YLRi9Cy0LDQtdC8INC/0YDRj9C80L4g0L/RgNC4INGA0LXQvdC00LXRgNC1LlxuXHRjb25zdCBuZXh0TW92ZSA9IGdldE5leHRNb3ZlKGN1cnJlbnRNb3ZlKTtcblxuXHQvL9C+0LHRgNCw0LHQvtGC0YfQuNC6INC60LvQuNC60LAg0L/QviDQutC70LXRgtC60LUgKNGF0L7QtNCwKVxuXHRjb25zdCBoYW5kbGVDZWxsQ2xpY2sgPSAoaW5kZXgpID0+IHtcblx0XHRzZXRDdXJyZW50TW92ZShsYXN0Q3VycmVudE1vdmUgPT4gZ2V0TmV4dE1vdmUobGFzdEN1cnJlbnRNb3ZlKSk7XG5cdFx0c2V0Q2VsbHMobGFzdENlbGxzID0+IHtcblx0XHRcdFxuXHRcdH0pXG5cdH07XG5cblx0Ly/Qv9C10YDQtdC80LXQvdC90LDRjyDQtNC70Y8gR2FtZU1vdmVJbmZvICjQutC90L7Qv9C60LgpXG5cdGNvbnN0IGFjdGlvbnMgPSBcblx0PD5cblx0XHQ8VWlCdXR0b24gc2l6ZT1cIm1kXCIgdmFyaWFudD1cInByaW1hcnlcIj7QndC40YfRjNGPPC9VaUJ1dHRvbj5cblx0XHQ8VWlCdXR0b24gc2l6ZT1cIm1kXCIgdmFyaWFudD1cIm91dGxpbmVcIj7QodC00LDRgtGM0YHRjzwvVWlCdXR0b24+XG5cdDwvPlxuXG5cdHJldHVybihcblx0XHQ8R2FtZUZpZWxkTGF5b3V0IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cblx0XHRcdDxHYW1lTW92ZUluZm8gXG5cdFx0XHRcdGFjdGlvbnM9e2FjdGlvbnN9IFxuXHRcdFx0XHRjdXJyZW50TW92ZT17Y3VycmVudE1vdmV9IFxuXHRcdFx0XHRuZXh0TW92ZT17bmV4dE1vdmV9Lz5cblx0XHRcdFx0XG5cdFx0XHQ8R2FtZUdyaWQ+XG5cdFx0XHRcdHtjZWxscy5tYXAoKHN5bWJvbCwgaW5kZXgpID0+IChcblx0XHRcdFx0XHQ8R2FtZUNlbGwga2V5PXtpbmRleH0gb25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0aGFuZGxlQ2VsbENsaWNrKGluZGV4KTtcblx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdHtzeW1ib2wgJiYgPEdhbWVTeW1ib2wgc3ltYm9sPXtzeW1ib2x9IGNsYXNzTmFtZT1cInctNSBoLTVcIi8+fVxuXHRcdFx0XHQ8L0dhbWVDZWxsPlxuXHRcdFx0XHQpKX1cblx0XHRcdDwvR2FtZUdyaWQ+XG5cdFx0PC9HYW1lRmllbGRMYXlvdXQ+XG5cdCk7XG59XG5cbi8v0LrQvtC80L/QvtC90LXQvdGCINC+0YLRgNC40YHQvtCy0LrQuCDRhdC+0LTQsCDQuNCz0YDRi1xuZnVuY3Rpb24gR2FtZUNlbGwoe2NoaWxkcmVuLCBvbkNsaWNrfSkge1xuXHRyZXR1cm4gKFxuXHRcdFx0PGJ1dHRvbiBcblx0XHRcdFx0b25DbGljaz17b25DbGlja31cblx0XHRcdFx0Y2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgLW1sLXB4IC1tdC1weCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG5cdFx0XHQ+XG5cdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdDwvYnV0dG9uPlxuXHQpO1xufVxuXG5cbi8v0LrQvtC80L/QvtC90LXQvdGCINC00LvRjyDQvtGC0L7QsdGA0LDQttC10L3QuNGP0LjQs9GA0L7QstC+0LPQviDQv9C+0LvRj1xuZnVuY3Rpb24gR2FtZUZpZWxkTGF5b3V0KHtjaGlsZHJlbiwgY2xhc3NOYW1lfSkge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzTmFtZSwgXCJiZy13aGl0ZSByb3VuZGVkLTJ4bCBzaGFkb3ctbWQgcHgtOCBwdC01IHBiLTdcIil9PlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG4vL9C60L7QvNC/0L7QvdC10L3RgiDQvtGC0L7QsdGA0LDQttC10L3QuNGPINC40L3RhNC+0YDQvNCw0YbQuNC4INC+INGF0L7QtNCw0YVcbmZ1bmN0aW9uIEdhbWVNb3ZlSW5mbyh7YWN0aW9ucywgY3VycmVudE1vdmUsIG5leHRNb3ZlfSkge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMyBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPiBcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LXhsIGxlYWRpbmctdGlnaHRcIj5cblx0XHRcdFx0XHTQpdC+0LQ6IDxHYW1lU3ltYm9sIHN5bWJvbD17Y3VycmVudE1vdmV9IGNsYXNzTmFtZT1cInctNSBoLTVcIi8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQteHMgbGVhZGluZy10aWdodCB0ZXh0LXNsYXRlLTQwMFwiPlxuXHRcdFx0XHRcdNCh0LvQtdC00YPRjtGJ0LjQuTogPEdhbWVTeW1ib2wgc3ltYm9sPXtuZXh0TW92ZX0gY2xhc3NOYW1lPVwidy0zIGgtM1wiLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0e2FjdGlvbnN9XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbi8v0LrQvtC80L/QvtC90LXQvdGCINC+0YLRgNC40YHQvtCy0LrQuCDRgNC10YjQtdGC0LrQuCDQuNCz0YDQvtCy0L7Qs9C+INC/0L7Qu9GPXG5mdW5jdGlvbiBHYW1lR3JpZCh7Y2hpbGRyZW59KSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy1bcmVwZWF0KDE5LF8zMHB4KV0gZ3JpZC1yb3dzLVtyZXBlYXQoMTksXzMwcHgpXSBwbC1weCBwdC1weCBtdC0zXCI+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iXSwibmFtZXMiOlsiY2xzeCIsIlplcm9JY29uIiwiQ3Jvc3NJY29uIiwiVWlCdXR0b24iLCJ1c2VTdGF0ZSIsIkdBTUVfU1lNQk9MUyIsIkdhbWVTeW1ib2wiLCJNT1ZFX09SREVSIiwiQ1JPU1MiLCJaRVJPIiwiVFJJQU5HTEUiLCJTUVVBUkUiLCJnZXROZXh0TW92ZSIsImN1cnJlbnRNb3ZlIiwibmV4dE1vdmVJbmRleCIsImluZGV4T2YiLCJHYW1lRmllbGQiLCJjbGFzc05hbWUiLCJjZWxscyIsInNldEdhbWVTdGF0ZSIsIkFycmF5IiwiZmlsbCIsIm5leHRNb3ZlIiwiaGFuZGxlQ2VsbENsaWNrIiwiaW5kZXgiLCJzZXRDdXJyZW50TW92ZSIsImxhc3RDdXJyZW50TW92ZSIsInNldENlbGxzIiwibGFzdENlbGxzIiwiYWN0aW9ucyIsInNpemUiLCJ2YXJpYW50IiwiR2FtZUZpZWxkTGF5b3V0IiwiR2FtZU1vdmVJbmZvIiwiR2FtZUdyaWQiLCJtYXAiLCJzeW1ib2wiLCJHYW1lQ2VsbCIsIm9uQ2xpY2siLCJjaGlsZHJlbiIsImJ1dHRvbiIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/game-field.jsx\n"));

/***/ })

});