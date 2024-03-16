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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _icons_zero_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/zero-icon */ \"./components/game/icons/zero-icon.jsx\");\n/* harmony import */ var _icons_cross_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/cross-icon */ \"./components/game/icons/cross-icon.jsx\");\n/* harmony import */ var _uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../uikit/ui-button */ \"./components/uikit/ui-button.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game-symbol */ \"./components/game/game-symbol.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n//константа, в которой хранится порядок ходов\nconst MOVE_ORDER = [\n    _constants__WEBPACK_IMPORTED_MODULE_6__.GAME_SYMBOLS.CROSS,\n    _constants__WEBPACK_IMPORTED_MODULE_6__.GAME_SYMBOLS.ZERO,\n    _constants__WEBPACK_IMPORTED_MODULE_6__.GAME_SYMBOLS.TRIANGLE,\n    _constants__WEBPACK_IMPORTED_MODULE_6__.GAME_SYMBOLS.SQUARE\n];\n//функция расчета состояния следующего хода на основании currentMove\nfunction getNextMove(currentMove) {\n    const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1;\n    var _MOVE_ORDER_nextMoveIndex;\n    //если MOVE_ORDER[nextMoveIndex] > 3, надо установить индекс 0 (ходит опять \"крестик\")\n    return (_MOVE_ORDER_nextMoveIndex = MOVE_ORDER[nextMoveIndex]) !== null && _MOVE_ORDER_nextMoveIndex !== void 0 ? _MOVE_ORDER_nextMoveIndex : MOVE_ORDER[0];\n}\nfunction GameField(param) {\n    let { className } = param;\n    _s();\n    //СОСТОЯНИЯ\n    //объединенное состояние: состояние игрового поля, состояние какой текущий ход \n    //начальное значение useState - отрисовываем один раз пустое игровое поле (массив клеточек 19х19) при первоначальном рендере компонента\n    const [{ cells, currentMove }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(()=>({\n            cells: new Array(19 * 19).fill(null),\n            currentMove: _constants__WEBPACK_IMPORTED_MODULE_6__.GAME_SYMBOLS.ZERO\n        }));\n    //состояние какой следующий ход. Не заводим копию состояния currentMove, а расчитываем прямо при рендере.\n    const nextMove = getNextMove(currentMove);\n    //обработчик клика по клетке (хода)\n    const handleCellClick = (index)=>{\n        setGameState((lastGameState)=>({\n                ...lastGameState,\n                currentMove: getNextMove(lastCurrentMove),\n                cells: lastGameState.cells.map(cell, i)\n            }));\n        setCurrentMove((lastCurrentMove1)=>getNextMove(lastCurrentMove1));\n        setCells((lastCells)=>{});\n    };\n    //переменная для GameMoveInfo (кнопки)\n    const actions = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__.UiButton, {\n                size: \"md\",\n                variant: \"primary\",\n                children: \"Ничья\"\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 53,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__.UiButton, {\n                size: \"md\",\n                variant: \"outline\",\n                children: \"Сдаться\"\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 54,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameFieldLayout, {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameMoveInfo, {\n                actions: actions,\n                currentMove: currentMove,\n                nextMove: nextMove\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 59,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameGrid, {\n                children: cells.map((symbol, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameCell, {\n                        onClick: ()=>{\n                            handleCellClick(index);\n                        },\n                        children: symbol && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_7__.GameSymbol, {\n                            symbol: symbol,\n                            className: \"w-5 h-5\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                            lineNumber: 69,\n                            columnNumber: 18\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 6\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 64,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 58,\n        columnNumber: 3\n    }, this);\n}\n_s(GameField, \"xt84E+HDG+N8jzIZSC/q5MagaZk=\");\n_c = GameField;\n//компонент отрисовки хода игры\nfunction GameCell(param) {\n    let { children, onClick } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: onClick,\n        className: \"border border-slate-200 -ml-px -mt-px flex items-center justify-center\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 80,\n        columnNumber: 4\n    }, this);\n}\n_c1 = GameCell;\n//компонент для отображенияигрового поля\nfunction GameFieldLayout(param) {\n    let { children, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 pt-5 pb-7\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 93,\n        columnNumber: 3\n    }, this);\n}\n_c2 = GameFieldLayout;\n//компонент отображения информации о ходах\nfunction GameMoveInfo(param) {\n    let { actions, currentMove, nextMove } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xl leading-tight\",\n                        children: [\n                            \"Ход: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_7__.GameSymbol, {\n                                symbol: currentMove,\n                                className: \"w-5 h-5\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                                lineNumber: 105,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                        lineNumber: 104,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xs leading-tight text-slate-400\",\n                        children: [\n                            \"Следующий: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_7__.GameSymbol, {\n                                symbol: nextMove,\n                                className: \"w-3 h-3\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                                lineNumber: 108,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                        lineNumber: 107,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 103,\n                columnNumber: 4\n            }, this),\n            actions\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 102,\n        columnNumber: 3\n    }, this);\n}\n_c3 = GameMoveInfo;\n//компонент отрисовки решетки игрового поля\nfunction GameGrid(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 119,\n        columnNumber: 3\n    }, this);\n}\n_c4 = GameGrid;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"GameField\");\n$RefreshReg$(_c1, \"GameCell\");\n$RefreshReg$(_c2, \"GameFieldLayout\");\n$RefreshReg$(_c3, \"GameMoveInfo\");\n$RefreshReg$(_c4, \"GameGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZCw4REFBQzJCO2dCQUFJM0IsV0FBVTs7a0NBQ2QsOERBQUMyQjt3QkFBSTNCLFdBQVU7OzRCQUFnRDswQ0FDekQsOERBQUNYLG9EQUFVQTtnQ0FBQ2lDLFFBQVExQjtnQ0FBYUksV0FBVTs7Ozs7Ozs7Ozs7O2tDQUVqRCw4REFBQzJCO3dCQUFJM0IsV0FBVTs7NEJBQStEOzBDQUNsRSw4REFBQ1gsb0RBQVVBO2dDQUFDaUMsUUFBUWpCO2dDQUFVTCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHcERnQjs7Ozs7OztBQUdKO01BZFNJO0FBZ0JULDJDQUEyQztBQUMzQyxTQUFTQyxTQUFTLEtBQVU7UUFBVixFQUFDSSxRQUFRLEVBQUMsR0FBVjtJQUNqQixxQkFDQyw4REFBQ0U7UUFBSTNCLFdBQVU7a0JBQ2J5Qjs7Ozs7O0FBR0o7TUFOU0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL2dhbWUtZmllbGQuanN4P2M2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyBaZXJvSWNvbiB9IGZyb20gJy4vaWNvbnMvemVyby1pY29uJztcbmltcG9ydCB7IENyb3NzSWNvbiB9IGZyb20gJy4vaWNvbnMvY3Jvc3MtaWNvbic7XG5pbXBvcnQgeyBVaUJ1dHRvbiB9IGZyb20gJy4uL3Vpa2l0L3VpLWJ1dHRvbic7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdBTUVfU1lNQk9MUyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IEdhbWVTeW1ib2wgfSBmcm9tICcuL2dhbWUtc3ltYm9sJztcblxuLy/QutC+0L3RgdGC0LDQvdGC0LAsINCyINC60L7RgtC+0YDQvtC5INGF0YDQsNC90LjRgtGB0Y8g0L/QvtGA0Y/QtNC+0Log0YXQvtC00L7QslxuY29uc3QgTU9WRV9PUkRFUiA9IFtcblx0R0FNRV9TWU1CT0xTLkNST1NTLFxuXHRHQU1FX1NZTUJPTFMuWkVSTyxcblx0R0FNRV9TWU1CT0xTLlRSSUFOR0xFLFxuXHRHQU1FX1NZTUJPTFMuU1FVQVJFXG5dXG5cbi8v0YTRg9C90LrRhtC40Y8g0YDQsNGB0YfQtdGC0LAg0YHQvtGB0YLQvtGP0L3QuNGPINGB0LvQtdC00YPRjtGJ0LXQs9C+INGF0L7QtNCwINC90LAg0L7RgdC90L7QstCw0L3QuNC4IGN1cnJlbnRNb3ZlXG5mdW5jdGlvbiBnZXROZXh0TW92ZShjdXJyZW50TW92ZSkge1xuXHRjb25zdCBuZXh0TW92ZUluZGV4ID0gTU9WRV9PUkRFUi5pbmRleE9mKGN1cnJlbnRNb3ZlKSArIDFcblx0Ly/QtdGB0LvQuCBNT1ZFX09SREVSW25leHRNb3ZlSW5kZXhdID4gMywg0L3QsNC00L4g0YPRgdGC0LDQvdC+0LLQuNGC0Ywg0LjQvdC00LXQutGBIDAgKNGF0L7QtNC40YIg0L7Qv9GP0YLRjCBcItC60YDQtdGB0YLQuNC6XCIpXG5cdHJldHVybiBNT1ZFX09SREVSW25leHRNb3ZlSW5kZXhdID8/IE1PVkVfT1JERVJbMF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBHYW1lRmllbGQoe2NsYXNzTmFtZX0pIHtcbi8v0KHQntCh0KLQntCv0J3QmNCvXG5cdC8v0L7QsdGK0LXQtNC40L3QtdC90L3QvtC1INGB0L7RgdGC0L7Rj9C90LjQtTog0YHQvtGB0YLQvtGP0L3QuNC1INC40LPRgNC+0LLQvtCz0L4g0L/QvtC70Y8sINGB0L7RgdGC0L7Rj9C90LjQtSDQutCw0LrQvtC5INGC0LXQutGD0YnQuNC5INGF0L7QtCBcblx0Ly/QvdCw0YfQsNC70YzQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSB1c2VTdGF0ZSAtINC+0YLRgNC40YHQvtCy0YvQstCw0LXQvCDQvtC00LjQvSDRgNCw0Lcg0L/Rg9GB0YLQvtC1INC40LPRgNC+0LLQvtC1INC/0L7Qu9C1ICjQvNCw0YHRgdC40LIg0LrQu9C10YLQvtGH0LXQuiAxOdGFMTkpINC/0YDQuCDQv9C10YDQstC+0L3QsNGH0LDQu9GM0L3QvtC8INGA0LXQvdC00LXRgNC1INC60L7QvNC/0L7QvdC10L3RgtCwXG5cdGNvbnN0IFt7Y2VsbHMsIGN1cnJlbnRNb3ZlfSwgc2V0R2FtZVN0YXRlXSA9IHVzZVN0YXRlKCgpID0+ICh7XG5cdFx0Y2VsbHM6IG5ldyBBcnJheSgxOSAqIDE5KS5maWxsKG51bGwpLFxuXHRcdGN1cnJlbnRNb3ZlOiBHQU1FX1NZTUJPTFMuWkVST1xuXHR9KSk7XG5cblxuXHQvL9GB0L7RgdGC0L7Rj9C90LjQtSDQutCw0LrQvtC5INGB0LvQtdC00YPRjtGJ0LjQuSDRhdC+0LQuINCd0LUg0LfQsNCy0L7QtNC40Lwg0LrQvtC/0LjRjiDRgdC+0YHRgtC+0Y/QvdC40Y8gY3VycmVudE1vdmUsINCwINGA0LDRgdGH0LjRgtGL0LLQsNC10Lwg0L/RgNGP0LzQviDQv9GA0Lgg0YDQtdC90LTQtdGA0LUuXG5cdGNvbnN0IG5leHRNb3ZlID0gZ2V0TmV4dE1vdmUoY3VycmVudE1vdmUpO1xuXG5cdC8v0L7QsdGA0LDQsdC+0YLRh9C40Log0LrQu9C40LrQsCDQv9C+INC60LvQtdGC0LrQtSAo0YXQvtC00LApXG5cdGNvbnN0IGhhbmRsZUNlbGxDbGljayA9IChpbmRleCkgPT4ge1xuXHRcdHNldEdhbWVTdGF0ZShsYXN0R2FtZVN0YXRlID0+ICh7XG5cdFx0XHQuLi5sYXN0R2FtZVN0YXRlLFxuXHRcdFx0Y3VycmVudE1vdmU6IGdldE5leHRNb3ZlKGxhc3RDdXJyZW50TW92ZSksXG5cdFx0XHRjZWxsczogbGFzdEdhbWVTdGF0ZS5jZWxscy5tYXAoY2VsbCwgaSkgXG5cdFx0fSkpXG5cdFx0c2V0Q3VycmVudE1vdmUobGFzdEN1cnJlbnRNb3ZlID0+IGdldE5leHRNb3ZlKGxhc3RDdXJyZW50TW92ZSkpO1xuXHRcdHNldENlbGxzKGxhc3RDZWxscyA9PiB7XG5cblx0XHR9KVxuXHR9O1xuXG5cdC8v0L/QtdGA0LXQvNC10L3QvdCw0Y8g0LTQu9GPIEdhbWVNb3ZlSW5mbyAo0LrQvdC+0L/QutC4KVxuXHRjb25zdCBhY3Rpb25zID0gXG5cdDw+XG5cdFx0PFVpQnV0dG9uIHNpemU9XCJtZFwiIHZhcmlhbnQ9XCJwcmltYXJ5XCI+0J3QuNGH0YzRjzwvVWlCdXR0b24+XG5cdFx0PFVpQnV0dG9uIHNpemU9XCJtZFwiIHZhcmlhbnQ9XCJvdXRsaW5lXCI+0KHQtNCw0YLRjNGB0Y88L1VpQnV0dG9uPlxuXHQ8Lz5cblxuXHRyZXR1cm4oXG5cdFx0PEdhbWVGaWVsZExheW91dCBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG5cdFx0XHQ8R2FtZU1vdmVJbmZvIFxuXHRcdFx0XHRhY3Rpb25zPXthY3Rpb25zfSBcblx0XHRcdFx0Y3VycmVudE1vdmU9e2N1cnJlbnRNb3ZlfSBcblx0XHRcdFx0bmV4dE1vdmU9e25leHRNb3ZlfS8+XG5cdFx0XHRcdFxuXHRcdFx0PEdhbWVHcmlkPlxuXHRcdFx0XHR7Y2VsbHMubWFwKChzeW1ib2wsIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0PEdhbWVDZWxsIGtleT17aW5kZXh9IG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdGhhbmRsZUNlbGxDbGljayhpbmRleCk7XG5cdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHR7c3ltYm9sICYmIDxHYW1lU3ltYm9sIHN5bWJvbD17c3ltYm9sfSBjbGFzc05hbWU9XCJ3LTUgaC01XCIvPn1cblx0XHRcdFx0PC9HYW1lQ2VsbD5cblx0XHRcdFx0KSl9XG5cdFx0XHQ8L0dhbWVHcmlkPlxuXHRcdDwvR2FtZUZpZWxkTGF5b3V0PlxuXHQpO1xufVxuXG4vL9C60L7QvNC/0L7QvdC10L3RgiDQvtGC0YDQuNGB0L7QstC60Lgg0YXQvtC00LAg0LjQs9GA0YtcbmZ1bmN0aW9uIEdhbWVDZWxsKHtjaGlsZHJlbiwgb25DbGlja30pIHtcblx0cmV0dXJuIChcblx0XHRcdDxidXR0b24gXG5cdFx0XHRcdG9uQ2xpY2s9e29uQ2xpY2t9XG5cdFx0XHRcdGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItc2xhdGUtMjAwIC1tbC1weCAtbXQtcHggZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuXHRcdFx0PlxuXHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHQ8L2J1dHRvbj5cblx0KTtcbn1cblxuXG4vL9C60L7QvNC/0L7QvdC10L3RgiDQtNC70Y8g0L7RgtC+0LHRgNCw0LbQtdC90LjRj9C40LPRgNC+0LLQvtCz0L4g0L/QvtC70Y9cbmZ1bmN0aW9uIEdhbWVGaWVsZExheW91dCh7Y2hpbGRyZW4sIGNsYXNzTmFtZX0pIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc05hbWUsIFwiYmctd2hpdGUgcm91bmRlZC0yeGwgc2hhZG93LW1kIHB4LTggcHQtNSBwYi03XCIpfT5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuLy/QutC+0LzQv9C+0L3QtdC90YIg0L7RgtC+0LHRgNCw0LbQtdC90LjRjyDQuNC90YTQvtGA0LzQsNGG0LjQuCDQviDRhdC+0LTQsNGFXG5mdW5jdGlvbiBHYW1lTW92ZUluZm8oe2FjdGlvbnMsIGN1cnJlbnRNb3ZlLCBuZXh0TW92ZX0pIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTMgaXRlbXMtY2VudGVyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj4gXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC14bCBsZWFkaW5nLXRpZ2h0XCI+XG5cdFx0XHRcdFx00KXQvtC0OiA8R2FtZVN5bWJvbCBzeW1ib2w9e2N1cnJlbnRNb3ZlfSBjbGFzc05hbWU9XCJ3LTUgaC01XCIvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LXhzIGxlYWRpbmctdGlnaHQgdGV4dC1zbGF0ZS00MDBcIj5cblx0XHRcdFx0XHTQodC70LXQtNGD0Y7RidC40Lk6IDxHYW1lU3ltYm9sIHN5bWJvbD17bmV4dE1vdmV9IGNsYXNzTmFtZT1cInctMyBoLTNcIi8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdHthY3Rpb25zfVxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG4vL9C60L7QvNC/0L7QvdC10L3RgiDQvtGC0YDQuNGB0L7QstC60Lgg0YDQtdGI0LXRgtC60Lgg0LjQs9GA0L7QstC+0LPQviDQv9C+0LvRj1xuZnVuY3Rpb24gR2FtZUdyaWQoe2NoaWxkcmVufSkge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtW3JlcGVhdCgxOSxfMzBweCldIGdyaWQtcm93cy1bcmVwZWF0KDE5LF8zMHB4KV0gcGwtcHggcHQtcHggbXQtM1wiPlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIl0sIm5hbWVzIjpbImNsc3giLCJaZXJvSWNvbiIsIkNyb3NzSWNvbiIsIlVpQnV0dG9uIiwidXNlU3RhdGUiLCJHQU1FX1NZTUJPTFMiLCJHYW1lU3ltYm9sIiwiTU9WRV9PUkRFUiIsIkNST1NTIiwiWkVSTyIsIlRSSUFOR0xFIiwiU1FVQVJFIiwiZ2V0TmV4dE1vdmUiLCJjdXJyZW50TW92ZSIsIm5leHRNb3ZlSW5kZXgiLCJpbmRleE9mIiwiR2FtZUZpZWxkIiwiY2xhc3NOYW1lIiwiY2VsbHMiLCJzZXRHYW1lU3RhdGUiLCJBcnJheSIsImZpbGwiLCJuZXh0TW92ZSIsImhhbmRsZUNlbGxDbGljayIsImluZGV4IiwibGFzdEdhbWVTdGF0ZSIsImxhc3RDdXJyZW50TW92ZSIsIm1hcCIsImNlbGwiLCJpIiwic2V0Q3VycmVudE1vdmUiLCJzZXRDZWxscyIsImxhc3RDZWxscyIsImFjdGlvbnMiLCJzaXplIiwidmFyaWFudCIsIkdhbWVGaWVsZExheW91dCIsIkdhbWVNb3ZlSW5mbyIsIkdhbWVHcmlkIiwic3ltYm9sIiwiR2FtZUNlbGwiLCJvbkNsaWNrIiwiY2hpbGRyZW4iLCJidXR0b24iLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/game-field.jsx\n"));

/***/ })

});