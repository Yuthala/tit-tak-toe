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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameField: function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _icons_zero_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/zero-icon */ \"./components/game/icons/zero-icon.jsx\");\n/* harmony import */ var _icons_cross_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/cross-icon */ \"./components/game/icons/cross-icon.jsx\");\n/* harmony import */ var _uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../uikit/ui-button */ \"./components/uikit/ui-button.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game-symbol */ \"./components/game/game-symbol.jsx\");\n/* harmony import */ var _use_game_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./use-game-state */ \"./components/game/use-game-state.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction GameField(param) {\n    let { className, playersCount } = param;\n    _s();\n    const { cells, currentMove, nextMove, handleCellClick } = (0,_use_game_state__WEBPACK_IMPORTED_MODULE_8__.useGameState)(playersCount);\n    //переменная для GameMoveInfo (кнопки)\n    const actions = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__.UiButton, {\n                size: \"md\",\n                variant: \"primary\",\n                children: \"Ничья\"\n            }, void 0, false, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 20,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uikit_ui_button__WEBPACK_IMPORTED_MODULE_4__.UiButton, {\n                size: \"md\",\n                variant: \"outline\",\n                children: \"Сдаться\"\n            }, void 0, false, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 21,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameFieldLayout, {\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameMoveInfo, {\n                actions: actions,\n                currentMove: currentMove,\n                nextMove: nextMove\n            }, void 0, false, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 26,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameGrid, {\n                children: cells.map((symbol, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameCell, {\n                        onClick: ()=>{\n                            handleCellClick(index);\n                        },\n                        children: symbol && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_7__.GameSymbol, {\n                            symbol: symbol,\n                            className: \"w-3 h-3\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-field.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 18\n                        }, this)\n                    }, index, false, {\n                        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 6\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 31,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 25,\n        columnNumber: 3\n    }, this);\n}\n_s(GameField, \"JSTkhiIYJSw0rFObSN21TCqf5l4=\", false, function() {\n    return [\n        _use_game_state__WEBPACK_IMPORTED_MODULE_8__.useGameState\n    ];\n});\n_c = GameField;\n//компонент отрисовки хода игры\nfunction GameCell(param) {\n    let { children, onClick } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: onClick,\n        className: \"border border-slate-200 -ml-px -mt-px flex items-center justify-center\",\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 49,\n        columnNumber: 4\n    }, this);\n}\n_c1 = GameCell;\n//компонент для отображенияигрового поля\nfunction GameFieldLayout(param) {\n    let { children, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 pt-5 pb-7\"),\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 62,\n        columnNumber: 3\n    }, this);\n}\n_c2 = GameFieldLayout;\n//компонент отображения информации о ходах\nfunction GameMoveInfo(param) {\n    let { actions, currentMove, nextMove } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xl leading-tight\",\n                        children: [\n                            \"Ход: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_7__.GameSymbol, {\n                                symbol: currentMove,\n                                className: \"w-5 h-5\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-1 text-xs leading-tight text-slate-400\",\n                        children: [\n                            \"Следующий: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_7__.GameSymbol, {\n                                symbol: nextMove,\n                                className: \"w-3 h-3\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-field.jsx\",\n                                lineNumber: 77,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-field.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-field.jsx\",\n                lineNumber: 72,\n                columnNumber: 4\n            }, this),\n            actions\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 71,\n        columnNumber: 3\n    }, this);\n}\n_c3 = GameMoveInfo;\n//компонент отрисовки решетки игрового поля\nfunction GameGrid(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3\",\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-field.jsx\",\n        lineNumber: 88,\n        columnNumber: 3\n    }, this);\n}\n_c4 = GameGrid;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"GameField\");\n$RefreshReg$(_c1, \"GameCell\");\n$RefreshReg$(_c2, \"GameFieldLayout\");\n$RefreshReg$(_c3, \"GameMoveInfo\");\n$RefreshReg$(_c4, \"GameGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1maWVsZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0I7QUFDcUI7QUFDRTtBQUNEO0FBQ2I7QUFDc0I7QUFDWjtBQUNLO0FBR3pDLFNBQVNTLFVBQVUsS0FBeUI7UUFBekIsRUFBQ0MsU0FBUyxFQUFFQyxZQUFZLEVBQUMsR0FBekI7O0lBQ3pCLE1BQU0sRUFBRUMsS0FBSyxFQUNaQyxXQUFXLEVBQ1hDLFFBQVEsRUFDUkMsZUFBZSxFQUFDLEdBQUdQLDZEQUFZQSxDQUFDRztJQUVqQyxzQ0FBc0M7SUFDdEMsTUFBTUssd0JBQ047OzBCQUNDLDhEQUFDYixzREFBUUE7Z0JBQUNjLE1BQUs7Z0JBQUtDLFNBQVE7MEJBQVU7Ozs7OzswQkFDdEMsOERBQUNmLHNEQUFRQTtnQkFBQ2MsTUFBSztnQkFBS0MsU0FBUTswQkFBVTs7Ozs7Ozs7SUFHdkMscUJBQ0MsOERBQUNDO1FBQWdCVCxXQUFXQTs7MEJBQzNCLDhEQUFDVTtnQkFDQUosU0FBU0E7Z0JBQ1RILGFBQWFBO2dCQUNiQyxVQUFVQTs7Ozs7OzBCQUVYLDhEQUFDTzswQkFDQ1QsTUFBTVUsR0FBRyxDQUFDLENBQUNDLFFBQVFDLHNCQUNuQiw4REFBQ0M7d0JBRUFDLFNBQVM7NEJBQ1JYLGdCQUFnQlM7d0JBQ2xCO2tDQUNFRCx3QkFBVSw4REFBQ2hCLG9EQUFVQTs0QkFBQ2dCLFFBQVFBOzRCQUFRYixXQUFVOzs7Ozs7dUJBSjVDYzs7Ozs7Ozs7Ozs7Ozs7OztBQVVYO0dBakNnQmY7O1FBSUtELHlEQUFZQTs7O0tBSmpCQztBQW1DaEIsK0JBQStCO0FBQy9CLFNBQVNnQixTQUFTLEtBQW1CO1FBQW5CLEVBQUNFLFFBQVEsRUFBRUQsT0FBTyxFQUFDLEdBQW5CO0lBQ2pCLHFCQUNFLDhEQUFDRTtRQUNBRixTQUFTQTtRQUNUaEIsV0FBVTtrQkFFVGlCOzs7Ozs7QUFHTDtNQVRTRjtBQVlULHdDQUF3QztBQUN4QyxTQUFTTixnQkFBZ0IsS0FBcUI7UUFBckIsRUFBQ1EsUUFBUSxFQUFFakIsU0FBUyxFQUFDLEdBQXJCO0lBQ3hCLHFCQUNDLDhEQUFDbUI7UUFBSW5CLFdBQVdWLGdEQUFJQSxDQUFDVSxXQUFXO2tCQUM5QmlCOzs7Ozs7QUFHSjtNQU5TUjtBQVFULDBDQUEwQztBQUMxQyxTQUFTQyxhQUFhLEtBQWdDO1FBQWhDLEVBQUNKLE9BQU8sRUFBRUgsV0FBVyxFQUFFQyxRQUFRLEVBQUMsR0FBaEM7SUFDckIscUJBQ0MsOERBQUNlO1FBQUluQixXQUFVOzswQkFDZCw4REFBQ21CO2dCQUFJbkIsV0FBVTs7a0NBQ2QsOERBQUNtQjt3QkFBSW5CLFdBQVU7OzRCQUFnRDswQ0FDekQsOERBQUNILG9EQUFVQTtnQ0FBQ2dCLFFBQVFWO2dDQUFhSCxXQUFVOzs7Ozs7Ozs7Ozs7a0NBRWpELDhEQUFDbUI7d0JBQUluQixXQUFVOzs0QkFBK0Q7MENBQ2xFLDhEQUFDSCxvREFBVUE7Z0NBQUNnQixRQUFRVDtnQ0FBVUosV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR3BETTs7Ozs7OztBQUdKO01BZFNJO0FBZ0JULDJDQUEyQztBQUMzQyxTQUFTQyxTQUFTLEtBQVU7UUFBVixFQUFDTSxRQUFRLEVBQUMsR0FBVjtJQUNqQixxQkFDQyw4REFBQ0U7UUFBSW5CLFdBQVU7a0JBQ2JpQjs7Ozs7O0FBR0o7TUFOU04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lL2dhbWUtZmllbGQuanN4P2M2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCB7IFplcm9JY29uIH0gZnJvbSAnLi9pY29ucy96ZXJvLWljb24nO1xyXG5pbXBvcnQgeyBDcm9zc0ljb24gfSBmcm9tICcuL2ljb25zL2Nyb3NzLWljb24nO1xyXG5pbXBvcnQgeyBVaUJ1dHRvbiB9IGZyb20gJy4uL3Vpa2l0L3VpLWJ1dHRvbic7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHQU1FX1NZTUJPTFMsIE1PVkVfT1JERVIgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IEdhbWVTeW1ib2wgfSBmcm9tICcuL2dhbWUtc3ltYm9sJztcclxuaW1wb3J0IHsgdXNlR2FtZVN0YXRlIH0gZnJvbSAnLi91c2UtZ2FtZS1zdGF0ZSc7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdhbWVGaWVsZCh7Y2xhc3NOYW1lLCBwbGF5ZXJzQ291bnR9KSB7XHJcblx0Y29uc3Qge1x0Y2VsbHMsIFxyXG5cdFx0Y3VycmVudE1vdmUsIFxyXG5cdFx0bmV4dE1vdmUsIFxyXG5cdFx0aGFuZGxlQ2VsbENsaWNrfSA9IHVzZUdhbWVTdGF0ZShwbGF5ZXJzQ291bnQpO1xyXG5cclxuXHQvL9C/0LXRgNC10LzQtdC90L3QsNGPINC00LvRjyBHYW1lTW92ZUluZm8gKNC60L3QvtC/0LrQuClcclxuXHRjb25zdCBhY3Rpb25zID0gXHJcblx0PD5cclxuXHRcdDxVaUJ1dHRvbiBzaXplPVwibWRcIiB2YXJpYW50PVwicHJpbWFyeVwiPtCd0LjRh9GM0Y88L1VpQnV0dG9uPlxyXG5cdFx0PFVpQnV0dG9uIHNpemU9XCJtZFwiIHZhcmlhbnQ9XCJvdXRsaW5lXCI+0KHQtNCw0YLRjNGB0Y88L1VpQnV0dG9uPlxyXG5cdDwvPlxyXG5cclxuXHRyZXR1cm4oXHJcblx0XHQ8R2FtZUZpZWxkTGF5b3V0IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuXHRcdFx0PEdhbWVNb3ZlSW5mbyBcclxuXHRcdFx0XHRhY3Rpb25zPXthY3Rpb25zfSBcclxuXHRcdFx0XHRjdXJyZW50TW92ZT17Y3VycmVudE1vdmV9IFxyXG5cdFx0XHRcdG5leHRNb3ZlPXtuZXh0TW92ZX0vPlxyXG5cdFx0XHRcdFxyXG5cdFx0XHQ8R2FtZUdyaWQ+XHJcblx0XHRcdFx0e2NlbGxzLm1hcCgoc3ltYm9sLCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdFx0PEdhbWVDZWxsIFxyXG5cdFx0XHRcdFx0XHRrZXk9e2luZGV4fSBcclxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGhhbmRsZUNlbGxDbGljayhpbmRleCk7XHJcblx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0e3N5bWJvbCAmJiA8R2FtZVN5bWJvbCBzeW1ib2w9e3N5bWJvbH0gY2xhc3NOYW1lPVwidy0zIGgtM1wiLz59XHJcblx0XHRcdFx0PC9HYW1lQ2VsbD5cclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0PC9HYW1lR3JpZD5cclxuXHRcdDwvR2FtZUZpZWxkTGF5b3V0PlxyXG5cdCk7XHJcbn1cclxuXHJcbi8v0LrQvtC80L/QvtC90LXQvdGCINC+0YLRgNC40YHQvtCy0LrQuCDRhdC+0LTQsCDQuNCz0YDRi1xyXG5mdW5jdGlvbiBHYW1lQ2VsbCh7Y2hpbGRyZW4sIG9uQ2xpY2t9KSB7XHJcblx0cmV0dXJuIChcclxuXHRcdFx0PGJ1dHRvbiBcclxuXHRcdFx0XHRvbkNsaWNrPXtvbkNsaWNrfVxyXG5cdFx0XHRcdGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItc2xhdGUtMjAwIC1tbC1weCAtbXQtcHggZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0XHQ8L2J1dHRvbj5cclxuXHQpO1xyXG59XHJcblxyXG5cclxuLy/QutC+0LzQv9C+0L3QtdC90YIg0LTQu9GPINC+0YLQvtCx0YDQsNC20LXQvdC40Y/QuNCz0YDQvtCy0L7Qs9C+INC/0L7Qu9GPXHJcbmZ1bmN0aW9uIEdhbWVGaWVsZExheW91dCh7Y2hpbGRyZW4sIGNsYXNzTmFtZX0pIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3NOYW1lLCBcImJnLXdoaXRlIHJvdW5kZWQtMnhsIHNoYWRvdy1tZCBweC04IHB0LTUgcGItN1wiKX0+XHJcblx0XHRcdHtjaGlsZHJlbn1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcbi8v0LrQvtC80L/QvtC90LXQvdGCINC+0YLQvtCx0YDQsNC20LXQvdC40Y8g0LjQvdGE0L7RgNC80LDRhtC40Lgg0L4g0YXQvtC00LDRhVxyXG5mdW5jdGlvbiBHYW1lTW92ZUluZm8oe2FjdGlvbnMsIGN1cnJlbnRNb3ZlLCBuZXh0TW92ZX0pIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zIGl0ZW1zLWNlbnRlclwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj4gXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LXhsIGxlYWRpbmctdGlnaHRcIj5cclxuXHRcdFx0XHRcdNCl0L7QtDogPEdhbWVTeW1ib2wgc3ltYm9sPXtjdXJyZW50TW92ZX0gY2xhc3NOYW1lPVwidy01IGgtNVwiLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQteHMgbGVhZGluZy10aWdodCB0ZXh0LXNsYXRlLTQwMFwiPlxyXG5cdFx0XHRcdFx00KHQu9C10LTRg9GO0YnQuNC5OiA8R2FtZVN5bWJvbCBzeW1ib2w9e25leHRNb3ZlfSBjbGFzc05hbWU9XCJ3LTMgaC0zXCIvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHR7YWN0aW9uc31cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcbi8v0LrQvtC80L/QvtC90LXQvdGCINC+0YLRgNC40YHQvtCy0LrQuCDRgNC10YjQtdGC0LrQuCDQuNCz0YDQvtCy0L7Qs9C+INC/0L7Qu9GPXHJcbmZ1bmN0aW9uIEdhbWVHcmlkKHtjaGlsZHJlbn0pIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy1bcmVwZWF0KDE5LF8zMHB4KV0gZ3JpZC1yb3dzLVtyZXBlYXQoMTksXzMwcHgpXSBwbC1weCBwdC1weCBtdC0zXCI+XHJcblx0XHRcdHtjaGlsZHJlbn1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImNsc3giLCJaZXJvSWNvbiIsIkNyb3NzSWNvbiIsIlVpQnV0dG9uIiwidXNlU3RhdGUiLCJHQU1FX1NZTUJPTFMiLCJNT1ZFX09SREVSIiwiR2FtZVN5bWJvbCIsInVzZUdhbWVTdGF0ZSIsIkdhbWVGaWVsZCIsImNsYXNzTmFtZSIsInBsYXllcnNDb3VudCIsImNlbGxzIiwiY3VycmVudE1vdmUiLCJuZXh0TW92ZSIsImhhbmRsZUNlbGxDbGljayIsImFjdGlvbnMiLCJzaXplIiwidmFyaWFudCIsIkdhbWVGaWVsZExheW91dCIsIkdhbWVNb3ZlSW5mbyIsIkdhbWVHcmlkIiwibWFwIiwic3ltYm9sIiwiaW5kZXgiLCJHYW1lQ2VsbCIsIm9uQ2xpY2siLCJjaGlsZHJlbiIsImJ1dHRvbiIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game/game-field.jsx\n"));

/***/ })

});