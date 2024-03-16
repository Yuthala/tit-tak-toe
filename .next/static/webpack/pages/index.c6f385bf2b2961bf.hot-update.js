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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _icons_zero_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/zero-icon */ \"./components/game/icons/zero-icon.jsx\");\n/* harmony import */ var _icons_cross_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/cross-icon */ \"./components/game/icons/cross-icon.jsx\");\n/* harmony import */ var _uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../uikit/ui-button */ \"./components/uikit/ui-button.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game-symbol */ \"./components/game/game-symbol.jsx\");\n/* harmony import */ var _use_game_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./use-game-state */ \"./components/game/use-game-state.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction GameField(param) {\n    let { className } = param;\n    _s();\n    const { cells, currentMove, nextMove, handleCellClick } = (0,_use_game_state__WEBPACK_IMPORTED_MODULE_8__.useGameState)();\n    //переменная для GameMoveInfo (кнопки)\n    const actions = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__.UiButton, {\n                size: \"md\",\n                variant: \"primary\",\n                children: \"Ничья\"\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 20,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__.UiButton, {\n                size: \"md\",\n                variant: \"outline\",\n                children: \"Сдаться\"\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 21,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameFieldLayout, {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameMoveInfo, {\n                actions: actions,\n                currentMove: currentMove,\n                nextMove: nextMove\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 26,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameGrid, {\n                children: cells.map((symbol, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameCell, {\n                        onClick: ()=>{\n                            handleCellClick(index);\n                        },\n                        children: [\n                            \"//если symbol есть\",\n                            symbol && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_7__.GameSymbol, {\n                                symbol: symbol,\n                                className: \"w-5 h-5\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 18\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 6\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 31,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 25,\n        columnNumber: 3\n    }, this);\n}\n_s(GameField, \"3brs1CQdP+JthZx8MLAT2ujt87U=\", false, function() {\n    return [\n        _use_game_state__WEBPACK_IMPORTED_MODULE_8__.useGameState\n    ];\n});\n_c = GameField;\n//компонент отрисовки хода игры\nfunction GameCell(param) {\n    let { children, onClick } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: onClick,\n        className: \"border border-slate-200 -ml-px -mt-px flex items-center justify-center\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 48,\n        columnNumber: 4\n    }, this);\n}\n_c1 = GameCell;\n//компонент для отображенияигрового поля\nfunction GameFieldLayout(param) {\n    let { children, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 pt-5 pb-7\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 61,\n        columnNumber: 3\n    }, this);\n}\n_c2 = GameFieldLayout;\n//компонент отображения информации о ходах\nfunction GameMoveInfo(param) {\n    let { actions, currentMove, nextMove } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xl leading-tight\",\n                        children: [\n                            \"Ход: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_7__.GameSymbol, {\n                                symbol: currentMove,\n                                className: \"w-5 h-5\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xs leading-tight text-slate-400\",\n                        children: [\n                            \"Следующий: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_7__.GameSymbol, {\n                                symbol: nextMove,\n                                className: \"w-3 h-3\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n                lineNumber: 71,\n                columnNumber: 4\n            }, this),\n            actions\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 70,\n        columnNumber: 3\n    }, this);\n}\n_c3 = GameMoveInfo;\n//компонент отрисовки решетки игрового поля\nfunction GameGrid(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/components/game/game-field.jsx\",\n        lineNumber: 87,\n        columnNumber: 3\n    }, this);\n}\n_c4 = GameGrid;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"GameField\");\n$RefreshReg$(_c1, \"GameCell\");\n$RefreshReg$(_c2, \"GameFieldLayout\");\n$RefreshReg$(_c3, \"GameMoveInfo\");\n$RefreshReg$(_c4, \"GameGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1maWVsZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0I7QUFDcUI7QUFDRTtBQUNEO0FBQ2I7QUFDc0I7QUFDWjtBQUNLO0FBR3pDLFNBQVNTLFVBQVUsS0FBVztRQUFYLEVBQUNDLFNBQVMsRUFBQyxHQUFYOztJQUN6QixNQUFNLEVBQUVDLEtBQUssRUFDWkMsV0FBVyxFQUNYQyxRQUFRLEVBQ1JDLGVBQWUsRUFBQyxHQUFHTiw2REFBWUE7SUFFaEMsc0NBQXNDO0lBQ3RDLE1BQU1PLHdCQUNOOzswQkFDQyw4REFBQ1osc0RBQVFBO2dCQUFDYSxNQUFLO2dCQUFLQyxTQUFROzBCQUFVOzs7Ozs7MEJBQ3RDLDhEQUFDZCxzREFBUUE7Z0JBQUNhLE1BQUs7Z0JBQUtDLFNBQVE7MEJBQVU7Ozs7Ozs7O0lBR3ZDLHFCQUNDLDhEQUFDQztRQUFnQlIsV0FBV0E7OzBCQUMzQiw4REFBQ1M7Z0JBQ0FKLFNBQVNBO2dCQUNUSCxhQUFhQTtnQkFDYkMsVUFBVUE7Ozs7OzswQkFFWCw4REFBQ087MEJBQ0NULE1BQU1VLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQyxzQkFDbkIsOERBQUNDO3dCQUFxQkMsU0FBUzs0QkFDOUJYLGdCQUFnQlM7d0JBQ2pCOzs0QkFBRzs0QkFFREQsd0JBQVUsOERBQUNmLG9EQUFVQTtnQ0FBQ2UsUUFBUUE7Z0NBQVFaLFdBQVU7Ozs7Ozs7dUJBSm5DYTs7Ozs7Ozs7Ozs7Ozs7OztBQVVwQjtHQWhDZ0JkOztRQUlLRCx5REFBWUE7OztLQUpqQkM7QUFrQ2hCLCtCQUErQjtBQUMvQixTQUFTZSxTQUFTLEtBQW1CO1FBQW5CLEVBQUNFLFFBQVEsRUFBRUQsT0FBTyxFQUFDLEdBQW5CO0lBQ2pCLHFCQUNFLDhEQUFDRTtRQUNBRixTQUFTQTtRQUNUZixXQUFVO2tCQUVUZ0I7Ozs7OztBQUdMO01BVFNGO0FBWVQsd0NBQXdDO0FBQ3hDLFNBQVNOLGdCQUFnQixLQUFxQjtRQUFyQixFQUFDUSxRQUFRLEVBQUVoQixTQUFTLEVBQUMsR0FBckI7SUFDeEIscUJBQ0MsOERBQUNrQjtRQUFJbEIsV0FBV1YsZ0RBQUlBLENBQUNVLFdBQVc7a0JBQzlCZ0I7Ozs7OztBQUdKO01BTlNSO0FBUVQsMENBQTBDO0FBQzFDLFNBQVNDLGFBQWEsS0FBZ0M7UUFBaEMsRUFBQ0osT0FBTyxFQUFFSCxXQUFXLEVBQUVDLFFBQVEsRUFBQyxHQUFoQztJQUNyQixxQkFDQyw4REFBQ2U7UUFBSWxCLFdBQVU7OzBCQUNkLDhEQUFDa0I7Z0JBQUlsQixXQUFVOztrQ0FDZCw4REFBQ2tCO3dCQUFJbEIsV0FBVTs7NEJBQWdEOzBDQUN6RCw4REFBQ0gsb0RBQVVBO2dDQUFDZSxRQUFRVjtnQ0FBYUYsV0FBVTs7Ozs7Ozs7Ozs7O2tDQUVqRCw4REFBQ2tCO3dCQUFJbEIsV0FBVTs7NEJBQStEOzBDQUNsRSw4REFBQ0gsb0RBQVVBO2dDQUFDZSxRQUFRVDtnQ0FBVUgsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR3BESzs7Ozs7OztBQUdKO01BZFNJO0FBZ0JULDJDQUEyQztBQUMzQyxTQUFTQyxTQUFTLEtBQVU7UUFBVixFQUFDTSxRQUFRLEVBQUMsR0FBVjtJQUNqQixxQkFDQyw4REFBQ0U7UUFBSWxCLFdBQVU7a0JBQ2JnQjs7Ozs7O0FBR0o7TUFOU04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL2dhbWUtZmllbGQuanN4P2M2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyBaZXJvSWNvbiB9IGZyb20gJy4vaWNvbnMvemVyby1pY29uJztcbmltcG9ydCB7IENyb3NzSWNvbiB9IGZyb20gJy4vaWNvbnMvY3Jvc3MtaWNvbic7XG5pbXBvcnQgeyBVaUJ1dHRvbiB9IGZyb20gJy4uL3Vpa2l0L3VpLWJ1dHRvbic7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdBTUVfU1lNQk9MUywgTU9WRV9PUkRFUiB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IEdhbWVTeW1ib2wgfSBmcm9tICcuL2dhbWUtc3ltYm9sJztcbmltcG9ydCB7IHVzZUdhbWVTdGF0ZSB9IGZyb20gJy4vdXNlLWdhbWUtc3RhdGUnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBHYW1lRmllbGQoe2NsYXNzTmFtZX0pIHtcblx0Y29uc3Qge1x0Y2VsbHMsIFxuXHRcdGN1cnJlbnRNb3ZlLCBcblx0XHRuZXh0TW92ZSwgXG5cdFx0aGFuZGxlQ2VsbENsaWNrfSA9IHVzZUdhbWVTdGF0ZSgpO1xuXG5cdC8v0L/QtdGA0LXQvNC10L3QvdCw0Y8g0LTQu9GPIEdhbWVNb3ZlSW5mbyAo0LrQvdC+0L/QutC4KVxuXHRjb25zdCBhY3Rpb25zID0gXG5cdDw+XG5cdFx0PFVpQnV0dG9uIHNpemU9XCJtZFwiIHZhcmlhbnQ9XCJwcmltYXJ5XCI+0J3QuNGH0YzRjzwvVWlCdXR0b24+XG5cdFx0PFVpQnV0dG9uIHNpemU9XCJtZFwiIHZhcmlhbnQ9XCJvdXRsaW5lXCI+0KHQtNCw0YLRjNGB0Y88L1VpQnV0dG9uPlxuXHQ8Lz5cblxuXHRyZXR1cm4oXG5cdFx0PEdhbWVGaWVsZExheW91dCBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG5cdFx0XHQ8R2FtZU1vdmVJbmZvIFxuXHRcdFx0XHRhY3Rpb25zPXthY3Rpb25zfSBcblx0XHRcdFx0Y3VycmVudE1vdmU9e2N1cnJlbnRNb3ZlfSBcblx0XHRcdFx0bmV4dE1vdmU9e25leHRNb3ZlfS8+XG5cdFx0XHRcdFxuXHRcdFx0PEdhbWVHcmlkPlxuXHRcdFx0XHR7Y2VsbHMubWFwKChzeW1ib2wsIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0PEdhbWVDZWxsIGtleT17aW5kZXh9IG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdGhhbmRsZUNlbGxDbGljayhpbmRleCk7XG5cdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHQvL9C10YHQu9C4IHN5bWJvbCDQtdGB0YLRjCBcblx0XHRcdFx0XHRcdHtzeW1ib2wgJiYgPEdhbWVTeW1ib2wgc3ltYm9sPXtzeW1ib2x9IGNsYXNzTmFtZT1cInctNSBoLTVcIi8+fVxuXHRcdFx0XHQ8L0dhbWVDZWxsPlxuXHRcdFx0XHQpKX1cblx0XHRcdDwvR2FtZUdyaWQ+XG5cdFx0PC9HYW1lRmllbGRMYXlvdXQ+XG5cdCk7XG59XG5cbi8v0LrQvtC80L/QvtC90LXQvdGCINC+0YLRgNC40YHQvtCy0LrQuCDRhdC+0LTQsCDQuNCz0YDRi1xuZnVuY3Rpb24gR2FtZUNlbGwoe2NoaWxkcmVuLCBvbkNsaWNrfSkge1xuXHRyZXR1cm4gKFxuXHRcdFx0PGJ1dHRvbiBcblx0XHRcdFx0b25DbGljaz17b25DbGlja31cblx0XHRcdFx0Y2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgLW1sLXB4IC1tdC1weCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG5cdFx0XHQ+XG5cdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdDwvYnV0dG9uPlxuXHQpO1xufVxuXG5cbi8v0LrQvtC80L/QvtC90LXQvdGCINC00LvRjyDQvtGC0L7QsdGA0LDQttC10L3QuNGP0LjQs9GA0L7QstC+0LPQviDQv9C+0LvRj1xuZnVuY3Rpb24gR2FtZUZpZWxkTGF5b3V0KHtjaGlsZHJlbiwgY2xhc3NOYW1lfSkge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzTmFtZSwgXCJiZy13aGl0ZSByb3VuZGVkLTJ4bCBzaGFkb3ctbWQgcHgtOCBwdC01IHBiLTdcIil9PlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG4vL9C60L7QvNC/0L7QvdC10L3RgiDQvtGC0L7QsdGA0LDQttC10L3QuNGPINC40L3RhNC+0YDQvNCw0YbQuNC4INC+INGF0L7QtNCw0YVcbmZ1bmN0aW9uIEdhbWVNb3ZlSW5mbyh7YWN0aW9ucywgY3VycmVudE1vdmUsIG5leHRNb3ZlfSkge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMyBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPiBcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LXhsIGxlYWRpbmctdGlnaHRcIj5cblx0XHRcdFx0XHTQpdC+0LQ6IDxHYW1lU3ltYm9sIHN5bWJvbD17Y3VycmVudE1vdmV9IGNsYXNzTmFtZT1cInctNSBoLTVcIi8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQteHMgbGVhZGluZy10aWdodCB0ZXh0LXNsYXRlLTQwMFwiPlxuXHRcdFx0XHRcdNCh0LvQtdC00YPRjtGJ0LjQuTogPEdhbWVTeW1ib2wgc3ltYm9sPXtuZXh0TW92ZX0gY2xhc3NOYW1lPVwidy0zIGgtM1wiLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0e2FjdGlvbnN9XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbi8v0LrQvtC80L/QvtC90LXQvdGCINC+0YLRgNC40YHQvtCy0LrQuCDRgNC10YjQtdGC0LrQuCDQuNCz0YDQvtCy0L7Qs9C+INC/0L7Qu9GPXG5mdW5jdGlvbiBHYW1lR3JpZCh7Y2hpbGRyZW59KSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy1bcmVwZWF0KDE5LF8zMHB4KV0gZ3JpZC1yb3dzLVtyZXBlYXQoMTksXzMwcHgpXSBwbC1weCBwdC1weCBtdC0zXCI+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iXSwibmFtZXMiOlsiY2xzeCIsIlplcm9JY29uIiwiQ3Jvc3NJY29uIiwiVWlCdXR0b24iLCJ1c2VTdGF0ZSIsIkdBTUVfU1lNQk9MUyIsIk1PVkVfT1JERVIiLCJHYW1lU3ltYm9sIiwidXNlR2FtZVN0YXRlIiwiR2FtZUZpZWxkIiwiY2xhc3NOYW1lIiwiY2VsbHMiLCJjdXJyZW50TW92ZSIsIm5leHRNb3ZlIiwiaGFuZGxlQ2VsbENsaWNrIiwiYWN0aW9ucyIsInNpemUiLCJ2YXJpYW50IiwiR2FtZUZpZWxkTGF5b3V0IiwiR2FtZU1vdmVJbmZvIiwiR2FtZUdyaWQiLCJtYXAiLCJzeW1ib2wiLCJpbmRleCIsIkdhbWVDZWxsIiwib25DbGljayIsImNoaWxkcmVuIiwiYnV0dG9uIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/game-field.jsx\n"));

/***/ })

});