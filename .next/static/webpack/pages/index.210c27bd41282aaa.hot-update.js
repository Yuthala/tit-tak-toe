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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _icons_zero_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/zero-icon */ \"./components/game/icons/zero-icon.jsx\");\n/* harmony import */ var _icons_cross_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/cross-icon */ \"./components/game/icons/cross-icon.jsx\");\n/* harmony import */ var _uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../uikit/ui-button */ \"./components/uikit/ui-button.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game-symbol */ \"./components/game/game-symbol.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n//функция расчета состояния следующего хода на основании currentMove\nfunction getNextMove(currentMove) {\n    const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1;\n    var _MOVE_ORDER_nextMoveIndex;\n    //если MOVE_ORDER[nextMoveIndex] > 3, надо установить индекс 0 (ходит опять \"крестик\")\n    return (_MOVE_ORDER_nextMoveIndex = MOVE_ORDER[nextMoveIndex]) !== null && _MOVE_ORDER_nextMoveIndex !== void 0 ? _MOVE_ORDER_nextMoveIndex : MOVE_ORDER[0];\n}\nfunction GameField(param) {\n    let { className } = param;\n    _s();\n    //СОСТОЯНИЯ\n    //объединенное состояние: состояние игрового поля, состояние какой текущий ход \n    //начальное значение useState - отрисовываем один раз пустое игровое поле (массив клеточек 19х19) при первоначальном рендере компонента\n    const [{ cells, currentMove }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(()=>({\n            cells: new Array(19 * 19).fill(null),\n            currentMove: _constants__WEBPACK_IMPORTED_MODULE_6__.GAME_SYMBOLS.ZERO\n        }));\n    //состояние какой следующий ход. Не заводим копию состояния currentMove, а расчитываем прямо при рендере.\n    const nextMove = getNextMove(currentMove);\n    //обработчик клика по клетке (хода)\n    const handleCellClick = (index)=>{\n        setGameState((lastGameState)=>({\n                ...lastGameState,\n                currentMove: getNextMove(lastGameState.currentMove),\n                cells: lastGameState.cells.map((cell, i)=>i === index ? lastGameState.currentMove : cell)\n            }));\n    };\n    //переменная для GameMoveInfo (кнопки)\n    const actions = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__.UiButton, {\n                size: \"md\",\n                variant: \"primary\",\n                children: \"Ничья\"\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 41,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__.UiButton, {\n                size: \"md\",\n                variant: \"outline\",\n                children: \"Сдаться\"\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 42,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameFieldLayout, {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameMoveInfo, {\n                actions: actions,\n                currentMove: currentMove,\n                nextMove: nextMove\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 47,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameGrid, {\n                children: cells.map((symbol, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameCell, {\n                        onClick: ()=>{\n                            handleCellClick(index);\n                        },\n                        children: symbol && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_7__.GameSymbol, {\n                            symbol: symbol,\n                            className: \"w-5 h-5\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 18\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 6\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 52,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 46,\n        columnNumber: 3\n    }, this);\n}\n_s(GameField, \"xt84E+HDG+N8jzIZSC/q5MagaZk=\");\n_c = GameField;\n//компонент отрисовки хода игры\nfunction GameCell(param) {\n    let { children, onClick } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: onClick,\n        className: \"border border-slate-200 -ml-px -mt-px flex items-center justify-center\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 68,\n        columnNumber: 4\n    }, this);\n}\n_c1 = GameCell;\n//компонент для отображенияигрового поля\nfunction GameFieldLayout(param) {\n    let { children, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 pt-5 pb-7\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 81,\n        columnNumber: 3\n    }, this);\n}\n_c2 = GameFieldLayout;\n//компонент отображения информации о ходах\nfunction GameMoveInfo(param) {\n    let { actions, currentMove, nextMove } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xl leading-tight\",\n                        children: [\n                            \"Ход: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_7__.GameSymbol, {\n                                symbol: currentMove,\n                                className: \"w-5 h-5\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                        lineNumber: 92,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xs leading-tight text-slate-400\",\n                        children: [\n                            \"Следующий: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_7__.GameSymbol, {\n                                symbol: nextMove,\n                                className: \"w-3 h-3\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                                lineNumber: 96,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                        lineNumber: 95,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 91,\n                columnNumber: 4\n            }, this),\n            actions\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 90,\n        columnNumber: 3\n    }, this);\n}\n_c3 = GameMoveInfo;\n//компонент отрисовки решетки игрового поля\nfunction GameGrid(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 107,\n        columnNumber: 3\n    }, this);\n}\n_c4 = GameGrid;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"GameField\");\n$RefreshReg$(_c1, \"GameCell\");\n$RefreshReg$(_c2, \"GameFieldLayout\");\n$RefreshReg$(_c3, \"GameMoveInfo\");\n$RefreshReg$(_c4, \"GameGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VTs7NEJBQStEOzBDQUNsRSw4REFBQ1Asb0RBQVVBO2dDQUFDMEIsUUFBUWI7Z0NBQVVOLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdwRGE7Ozs7Ozs7QUFHSjtNQWRTSTtBQWdCVCwyQ0FBMkM7QUFDM0MsU0FBU0MsU0FBUyxLQUFVO1FBQVYsRUFBQ0ksUUFBUSxFQUFDLEdBQVY7SUFDakIscUJBQ0MsOERBQUNFO1FBQUl4QixXQUFVO2tCQUNic0I7Ozs7OztBQUdKO01BTlNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS9nYW1lLWZpZWxkLmpzeD9jNjAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgWmVyb0ljb24gfSBmcm9tICcuL2ljb25zL3plcm8taWNvbic7XG5pbXBvcnQgeyBDcm9zc0ljb24gfSBmcm9tICcuL2ljb25zL2Nyb3NzLWljb24nO1xuaW1wb3J0IHsgVWlCdXR0b24gfSBmcm9tICcuLi91aWtpdC91aS1idXR0b24nO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHQU1FX1NZTUJPTFMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBHYW1lU3ltYm9sIH0gZnJvbSAnLi9nYW1lLXN5bWJvbCc7XG5cbi8v0YTRg9C90LrRhtC40Y8g0YDQsNGB0YfQtdGC0LAg0YHQvtGB0YLQvtGP0L3QuNGPINGB0LvQtdC00YPRjtGJ0LXQs9C+INGF0L7QtNCwINC90LAg0L7RgdC90L7QstCw0L3QuNC4IGN1cnJlbnRNb3ZlXG5mdW5jdGlvbiBnZXROZXh0TW92ZShjdXJyZW50TW92ZSkge1xuXHRjb25zdCBuZXh0TW92ZUluZGV4ID0gTU9WRV9PUkRFUi5pbmRleE9mKGN1cnJlbnRNb3ZlKSArIDFcblx0Ly/QtdGB0LvQuCBNT1ZFX09SREVSW25leHRNb3ZlSW5kZXhdID4gMywg0L3QsNC00L4g0YPRgdGC0LDQvdC+0LLQuNGC0Ywg0LjQvdC00LXQutGBIDAgKNGF0L7QtNC40YIg0L7Qv9GP0YLRjCBcItC60YDQtdGB0YLQuNC6XCIpXG5cdHJldHVybiBNT1ZFX09SREVSW25leHRNb3ZlSW5kZXhdID8/IE1PVkVfT1JERVJbMF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBHYW1lRmllbGQoe2NsYXNzTmFtZX0pIHtcbi8v0KHQntCh0KLQntCv0J3QmNCvXG5cdC8v0L7QsdGK0LXQtNC40L3QtdC90L3QvtC1INGB0L7RgdGC0L7Rj9C90LjQtTog0YHQvtGB0YLQvtGP0L3QuNC1INC40LPRgNC+0LLQvtCz0L4g0L/QvtC70Y8sINGB0L7RgdGC0L7Rj9C90LjQtSDQutCw0LrQvtC5INGC0LXQutGD0YnQuNC5INGF0L7QtCBcblx0Ly/QvdCw0YfQsNC70YzQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSB1c2VTdGF0ZSAtINC+0YLRgNC40YHQvtCy0YvQstCw0LXQvCDQvtC00LjQvSDRgNCw0Lcg0L/Rg9GB0YLQvtC1INC40LPRgNC+0LLQvtC1INC/0L7Qu9C1ICjQvNCw0YHRgdC40LIg0LrQu9C10YLQvtGH0LXQuiAxOdGFMTkpINC/0YDQuCDQv9C10YDQstC+0L3QsNGH0LDQu9GM0L3QvtC8INGA0LXQvdC00LXRgNC1INC60L7QvNC/0L7QvdC10L3RgtCwXG5cdGNvbnN0IFt7Y2VsbHMsIGN1cnJlbnRNb3ZlfSwgc2V0R2FtZVN0YXRlXSA9IHVzZVN0YXRlKCgpID0+ICh7XG5cdFx0Y2VsbHM6IG5ldyBBcnJheSgxOSAqIDE5KS5maWxsKG51bGwpLFxuXHRcdGN1cnJlbnRNb3ZlOiBHQU1FX1NZTUJPTFMuWkVST1xuXHR9KSk7XG5cblxuXHQvL9GB0L7RgdGC0L7Rj9C90LjQtSDQutCw0LrQvtC5INGB0LvQtdC00YPRjtGJ0LjQuSDRhdC+0LQuINCd0LUg0LfQsNCy0L7QtNC40Lwg0LrQvtC/0LjRjiDRgdC+0YHRgtC+0Y/QvdC40Y8gY3VycmVudE1vdmUsINCwINGA0LDRgdGH0LjRgtGL0LLQsNC10Lwg0L/RgNGP0LzQviDQv9GA0Lgg0YDQtdC90LTQtdGA0LUuXG5cdGNvbnN0IG5leHRNb3ZlID0gZ2V0TmV4dE1vdmUoY3VycmVudE1vdmUpO1xuXG5cdC8v0L7QsdGA0LDQsdC+0YLRh9C40Log0LrQu9C40LrQsCDQv9C+INC60LvQtdGC0LrQtSAo0YXQvtC00LApXG5cdGNvbnN0IGhhbmRsZUNlbGxDbGljayA9IChpbmRleCkgPT4ge1xuXHRcdHNldEdhbWVTdGF0ZShsYXN0R2FtZVN0YXRlID0+ICh7XG5cdFx0XHQuLi5sYXN0R2FtZVN0YXRlLFxuXHRcdFx0Y3VycmVudE1vdmU6IGdldE5leHRNb3ZlKGxhc3RHYW1lU3RhdGUuY3VycmVudE1vdmUpLFxuXHRcdFx0Y2VsbHM6IGxhc3RHYW1lU3RhdGUuY2VsbHMubWFwKChjZWxsLCBpKSA9PiBpID09PSBpbmRleCA/IGxhc3RHYW1lU3RhdGUuY3VycmVudE1vdmUgOiBjZWxsKSBcblx0XHR9KSlcblx0fTtcblxuXHQvL9C/0LXRgNC10LzQtdC90L3QsNGPINC00LvRjyBHYW1lTW92ZUluZm8gKNC60L3QvtC/0LrQuClcblx0Y29uc3QgYWN0aW9ucyA9IFxuXHQ8PlxuXHRcdDxVaUJ1dHRvbiBzaXplPVwibWRcIiB2YXJpYW50PVwicHJpbWFyeVwiPtCd0LjRh9GM0Y88L1VpQnV0dG9uPlxuXHRcdDxVaUJ1dHRvbiBzaXplPVwibWRcIiB2YXJpYW50PVwib3V0bGluZVwiPtCh0LTQsNGC0YzRgdGPPC9VaUJ1dHRvbj5cblx0PC8+XG5cblx0cmV0dXJuKFxuXHRcdDxHYW1lRmllbGRMYXlvdXQgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuXHRcdFx0PEdhbWVNb3ZlSW5mbyBcblx0XHRcdFx0YWN0aW9ucz17YWN0aW9uc30gXG5cdFx0XHRcdGN1cnJlbnRNb3ZlPXtjdXJyZW50TW92ZX0gXG5cdFx0XHRcdG5leHRNb3ZlPXtuZXh0TW92ZX0vPlxuXHRcdFx0XHRcblx0XHRcdDxHYW1lR3JpZD5cblx0XHRcdFx0e2NlbGxzLm1hcCgoc3ltYm9sLCBpbmRleCkgPT4gKFxuXHRcdFx0XHRcdDxHYW1lQ2VsbCBrZXk9e2luZGV4fSBvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRoYW5kbGVDZWxsQ2xpY2soaW5kZXgpO1xuXHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0e3N5bWJvbCAmJiA8R2FtZVN5bWJvbCBzeW1ib2w9e3N5bWJvbH0gY2xhc3NOYW1lPVwidy01IGgtNVwiLz59XG5cdFx0XHRcdDwvR2FtZUNlbGw+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC9HYW1lR3JpZD5cblx0XHQ8L0dhbWVGaWVsZExheW91dD5cblx0KTtcbn1cblxuLy/QutC+0LzQv9C+0L3QtdC90YIg0L7RgtGA0LjRgdC+0LLQutC4INGF0L7QtNCwINC40LPRgNGLXG5mdW5jdGlvbiBHYW1lQ2VsbCh7Y2hpbGRyZW4sIG9uQ2xpY2t9KSB7XG5cdHJldHVybiAoXG5cdFx0XHQ8YnV0dG9uIFxuXHRcdFx0XHRvbkNsaWNrPXtvbkNsaWNrfVxuXHRcdFx0XHRjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCAtbWwtcHggLW10LXB4IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcblx0XHRcdD5cblx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PC9idXR0b24+XG5cdCk7XG59XG5cblxuLy/QutC+0LzQv9C+0L3QtdC90YIg0LTQu9GPINC+0YLQvtCx0YDQsNC20LXQvdC40Y/QuNCz0YDQvtCy0L7Qs9C+INC/0L7Qu9GPXG5mdW5jdGlvbiBHYW1lRmllbGRMYXlvdXQoe2NoaWxkcmVuLCBjbGFzc05hbWV9KSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3NOYW1lLCBcImJnLXdoaXRlIHJvdW5kZWQtMnhsIHNoYWRvdy1tZCBweC04IHB0LTUgcGItN1wiKX0+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbi8v0LrQvtC80L/QvtC90LXQvdGCINC+0YLQvtCx0YDQsNC20LXQvdC40Y8g0LjQvdGE0L7RgNC80LDRhtC40Lgg0L4g0YXQvtC00LDRhVxuZnVuY3Rpb24gR2FtZU1vdmVJbmZvKHthY3Rpb25zLCBjdXJyZW50TW92ZSwgbmV4dE1vdmV9KSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zIGl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+IFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQteGwgbGVhZGluZy10aWdodFwiPlxuXHRcdFx0XHRcdNCl0L7QtDogPEdhbWVTeW1ib2wgc3ltYm9sPXtjdXJyZW50TW92ZX0gY2xhc3NOYW1lPVwidy01IGgtNVwiLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC14cyBsZWFkaW5nLXRpZ2h0IHRleHQtc2xhdGUtNDAwXCI+XG5cdFx0XHRcdFx00KHQu9C10LTRg9GO0YnQuNC5OiA8R2FtZVN5bWJvbCBzeW1ib2w9e25leHRNb3ZlfSBjbGFzc05hbWU9XCJ3LTMgaC0zXCIvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHR7YWN0aW9uc31cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuLy/QutC+0LzQv9C+0L3QtdC90YIg0L7RgtGA0LjRgdC+0LLQutC4INGA0LXRiNC10YLQutC4INC40LPRgNC+0LLQvtCz0L4g0L/QvtC70Y9cbmZ1bmN0aW9uIEdhbWVHcmlkKHtjaGlsZHJlbn0pIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLVtyZXBlYXQoMTksXzMwcHgpXSBncmlkLXJvd3MtW3JlcGVhdCgxOSxfMzBweCldIHBsLXB4IHB0LXB4IG10LTNcIj5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiJdLCJuYW1lcyI6WyJjbHN4IiwiWmVyb0ljb24iLCJDcm9zc0ljb24iLCJVaUJ1dHRvbiIsInVzZVN0YXRlIiwiR0FNRV9TWU1CT0xTIiwiR2FtZVN5bWJvbCIsImdldE5leHRNb3ZlIiwiY3VycmVudE1vdmUiLCJuZXh0TW92ZUluZGV4IiwiTU9WRV9PUkRFUiIsImluZGV4T2YiLCJHYW1lRmllbGQiLCJjbGFzc05hbWUiLCJjZWxscyIsInNldEdhbWVTdGF0ZSIsIkFycmF5IiwiZmlsbCIsIlpFUk8iLCJuZXh0TW92ZSIsImhhbmRsZUNlbGxDbGljayIsImluZGV4IiwibGFzdEdhbWVTdGF0ZSIsIm1hcCIsImNlbGwiLCJpIiwiYWN0aW9ucyIsInNpemUiLCJ2YXJpYW50IiwiR2FtZUZpZWxkTGF5b3V0IiwiR2FtZU1vdmVJbmZvIiwiR2FtZUdyaWQiLCJzeW1ib2wiLCJHYW1lQ2VsbCIsIm9uQ2xpY2siLCJjaGlsZHJlbiIsImJ1dHRvbiIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/game-field.jsx\n"));

/***/ })

});