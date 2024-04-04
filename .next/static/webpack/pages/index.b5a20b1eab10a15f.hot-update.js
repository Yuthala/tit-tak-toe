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

/***/ "./components/game-new/game.jsx":
/*!**************************************!*\
  !*** ./components/game-new/game.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_game_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/game-layout */ \"./components/game-new/ui/game-layout.jsx\");\n/* harmony import */ var _ui_back_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/back-link */ \"./components/game-new/ui/back-link.jsx\");\n/* harmony import */ var _ui_game_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/game-title */ \"./components/game-new/ui/game-title.jsx\");\n/* harmony import */ var _ui_game_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/game-info */ \"./components/game-new/ui/game-info.jsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./components/game-new/constants.js\");\n/* harmony import */ var _player_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player-info */ \"./components/game-new/player-info.jsx\");\n/* harmony import */ var _ui_game_move_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/game-move-info */ \"./components/game-new/ui/game-move-info.jsx\");\n/* harmony import */ var _ui_game_cell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/game-cell */ \"./components/game-new/ui/game-cell.jsx\");\n/* harmony import */ var _model_use_game_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./model/use-game-state */ \"./components/game-new/model/use-game-state.js\");\n/* harmony import */ var _ui_game_over_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/game-over-modal */ \"./components/game-new/ui/game-over-modal.jsx\");\n//композиционный компонент\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst PLAYERS_COUNT = 4;\ninitGameState;\nfunction Game() {\n    _s();\n    const [gameState, dispatch] = useReducer(gameStateReducer, {\n        playersCount: PLAYERS_COUNT,\n        defaultTimer: 60000\n    }, initGameState);\n    const winnerSequence = computeWinner(gameState);\n    //состояние какой следующий ход. Не заводим копию состояния currentMove, а расчитываем прямо при рендере.\n    const nextMove = getNextMove(gameState);\n    const winnerSymbol = computeWinnerSymbol(gameState, {\n        winnerSequence,\n        nextMove\n    });\n    const winnerPlayer = _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS.find((player)=>player.symbol === winnerSymbol);\n    const { cells, currentMove } = gameState;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_layout__WEBPACK_IMPORTED_MODULE_1__.GameLayout, {\n                backLink: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_back_link__WEBPACK_IMPORTED_MODULE_2__.BackLink, {}, void 0, false, {\n                    fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 23\n                }, void 0),\n                title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_title__WEBPACK_IMPORTED_MODULE_3__.GameTitle, {}, void 0, false, {\n                    fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 20\n                }, void 0),\n                gameInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_info__WEBPACK_IMPORTED_MODULE_4__.GameInfo, {\n                    isRatingGame: true,\n                    playersCount: 4,\n                    timeMode: \"1 мин. на ход\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 23\n                }, void 0),\n                playersList: _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS.slice(0, PLAYERS_COUNT).map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_player_info__WEBPACK_IMPORTED_MODULE_6__.PlayerInfo, {\n                        avatar: player.avatar,\n                        rating: player.rating,\n                        name: player.name,\n                        seconds: 60,\n                        symbol: player.symbol,\n                        isRight: index % 2 === 1\n                    }, player.id, false, {\n                        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 21\n                    }, void 0)),\n                gameMoveInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_move_info__WEBPACK_IMPORTED_MODULE_7__.GameMoveInfo, {\n                    currentMove: currentMove,\n                    nextMove: nextMove\n                }, void 0, false, {\n                    fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 27\n                }, void 0),\n                gameCells: cells.map((cell, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_cell__WEBPACK_IMPORTED_MODULE_8__.GameCell, {\n                        isWinner: winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence.includes(index),\n                        disabled: !!winnerSymbol,\n                        onClick: ()=>{\n                            dispatch({\n                                type: _model_use_game_state__WEBPACK_IMPORTED_MODULE_9__.GAME_STATE_ACTIONS.CELL_CLICK,\n                                index\n                            });\n                        },\n                        symbol: cell\n                    }, index, false, {\n                        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 51\n                    }, void 0))\n            }, void 0, false, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_over_modal__WEBPACK_IMPORTED_MODULE_10__.GameOverModal, {\n                winnerName: winnerPlayer === null || winnerPlayer === void 0 ? void 0 : winnerPlayer.name,\n                players: _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS.slice(0, PLAYERS_COUNT).map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_player_info__WEBPACK_IMPORTED_MODULE_6__.PlayerInfo, {\n                        avatar: player.avatar,\n                        rating: player.rating,\n                        name: player.name,\n                        seconds: gameState.timers[player.symbol],\n                        symbol: player.symbol,\n                        isRight: index % 2 === 1\n                    }, player.id, false, {\n                        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 21\n                    }, void 0))\n            }, void 0, false, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Game, \"mlBLEB8gDdEjyjvNGX4Xhy2OxjM=\");\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L2dhbWUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQkFBMEI7OztBQUNvQjtBQUNKO0FBQ0U7QUFDRjtBQUNKO0FBQ0s7QUFDTztBQUNSO0FBQ2dDO0FBQ3JCO0FBRXJELE1BQU1XLGdCQUFnQjtBQUV0QkM7QUFFTyxTQUFTQzs7SUFDWixNQUFNLENBQUNDLFdBQVdDLFNBQVMsR0FBR0MsV0FDMUJDLGtCQUNBO1FBQUNDLGNBQWNQO1FBQWVRLGNBQWM7SUFBSyxHQUNqRFA7SUFHSixNQUFNUSxpQkFBaUJDLGNBQWNQO0lBQ3hDLHlHQUF5RztJQUN6RyxNQUFNUSxXQUFXQyxZQUFZVDtJQUMxQixNQUFNVSxlQUFlQyxvQkFBb0JYLFdBQVc7UUFBQ007UUFBZ0JFO0lBQVE7SUFDN0UsTUFBTUksZUFBZXRCLCtDQUFPQSxDQUFDdUIsSUFBSSxDQUFDQyxDQUFBQSxTQUFVQSxPQUFPQyxNQUFNLEtBQUtMO0lBRTlELE1BQU0sRUFBRU0sS0FBSyxFQUFFQyxXQUFXLEVBQUMsR0FBR2pCO0lBRTlCLHFCQUNJOzswQkFDQSw4REFBQ2QsdURBQVVBO2dCQUNQZ0Msd0JBQVUsOERBQUMvQixtREFBUUE7Ozs7O2dCQUNuQmdDLHFCQUFPLDhEQUFDL0IscURBQVNBOzs7OztnQkFDakJnQyx3QkFBVSw4REFBQy9CLG1EQUFRQTtvQkFBQ2dDLFlBQVk7b0JBQUNqQixjQUFjO29CQUFHa0IsVUFBVTs7Ozs7O2dCQUM1REMsYUFDSWpDLCtDQUFPQSxDQUFDa0MsS0FBSyxDQUFDLEdBQUczQixlQUFlNEIsR0FBRyxDQUFDLENBQUNYLFFBQVFZLHNCQUN6Qyw4REFBQ25DLG9EQUFVQTt3QkFFUG9DLFFBQVFiLE9BQU9hLE1BQU07d0JBQ3JCQyxRQUFRZCxPQUFPYyxNQUFNO3dCQUNyQkMsTUFBTWYsT0FBT2UsSUFBSTt3QkFDakJDLFNBQVM7d0JBQ1RmLFFBQVFELE9BQU9DLE1BQU07d0JBQ3JCZ0IsU0FBU0wsUUFBUSxNQUFNO3VCQU5sQlosT0FBT2tCLEVBQUU7Ozs7O2dCQVMxQkMsNEJBQWMsOERBQUN6Qyw0REFBWUE7b0JBQUN5QixhQUFhQTtvQkFBYVQsVUFBVUE7Ozs7OztnQkFDaEUwQixXQUFXbEIsTUFBTVMsR0FBRyxDQUFDLENBQUNVLE1BQU1ULHNCQUFVLDhEQUFDakMsbURBQVFBO3dCQUUzQzJDLFFBQVEsRUFBRTlCLDJCQUFBQSxxQ0FBQUEsZUFBZ0IrQixRQUFRLENBQUNYO3dCQUNuQ1ksVUFBVSxDQUFDLENBQUM1Qjt3QkFDWjZCLFNBQVM7NEJBQ0x0QyxTQUFTO2dDQUNMdUMsTUFBTTlDLHFFQUFrQkEsQ0FBQytDLFVBQVU7Z0NBQ25DZjs0QkFDSjt3QkFDSjt3QkFDQVgsUUFBUW9CO3VCQVRIVDs7Ozs7Ozs7OzswQkFZYiw4REFBQzlCLCtEQUFhQTtnQkFDVjhDLFVBQVUsRUFBRTlCLHlCQUFBQSxtQ0FBQUEsYUFBY2lCLElBQUk7Z0JBQzlCYyxTQUFTckQsK0NBQU9BLENBQUNrQyxLQUFLLENBQUMsR0FBRzNCLGVBQWU0QixHQUFHLENBQUMsQ0FBQ1gsUUFBUVksc0JBQzlDLDhEQUFDbkMsb0RBQVVBO3dCQUVYb0MsUUFBUWIsT0FBT2EsTUFBTTt3QkFDckJDLFFBQVFkLE9BQU9jLE1BQU07d0JBQ3JCQyxNQUFNZixPQUFPZSxJQUFJO3dCQUNqQkMsU0FBUzlCLFVBQVU0QyxNQUFNLENBQUM5QixPQUFPQyxNQUFNLENBQUM7d0JBQ3hDQSxRQUFRRCxPQUFPQyxNQUFNO3dCQUNyQmdCLFNBQVNMLFFBQVEsTUFBTTt1QkFObEJaLE9BQU9rQixFQUFFOzs7Ozs7Ozs7Ozs7QUFZbEM7R0EvRGdCakM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lLW5ldy9nYW1lLmpzeD9lNDJmIl0sInNvdXJjZXNDb250ZW50IjpbIi8v0LrQvtC80L/QvtC30LjRhtC40L7QvdC90YvQuSDQutC+0LzQv9C+0L3QtdC90YJcclxuaW1wb3J0IHsgR2FtZUxheW91dCB9IGZyb20gJy4vdWkvZ2FtZS1sYXlvdXQnO1xyXG5pbXBvcnQgeyBCYWNrTGluayB9IGZyb20gJy4vdWkvYmFjay1saW5rJztcclxuaW1wb3J0IHsgR2FtZVRpdGxlIH0gZnJvbSAnLi91aS9nYW1lLXRpdGxlJztcclxuaW1wb3J0IHsgR2FtZUluZm8gfSBmcm9tICcuL3VpL2dhbWUtaW5mbyc7XHJcbmltcG9ydCB7IFBMQVlFUlMgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tICcuL3BsYXllci1pbmZvJztcclxuaW1wb3J0IHsgR2FtZU1vdmVJbmZvfSBmcm9tICcuL3VpL2dhbWUtbW92ZS1pbmZvJztcclxuaW1wb3J0IHsgR2FtZUNlbGwgfSBmcm9tICcuL3VpL2dhbWUtY2VsbCc7XHJcbmltcG9ydCB7IEdBTUVfU1RBVEVfQUNUSU9OUywgdXNlR2FtZVN0YXRlIH0gZnJvbSAnLi9tb2RlbC91c2UtZ2FtZS1zdGF0ZSc7XHJcbmltcG9ydCB7IEdhbWVPdmVyTW9kYWwgfSBmcm9tICcuL3VpL2dhbWUtb3Zlci1tb2RhbCc7XHJcblxyXG5jb25zdCBQTEFZRVJTX0NPVU5UID0gNDtcclxuXHJcbmluaXRHYW1lU3RhdGVcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHYW1lKCkge1xyXG4gICAgY29uc3QgW2dhbWVTdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihcclxuICAgICAgICBnYW1lU3RhdGVSZWR1Y2VyLCBcclxuICAgICAgICB7cGxheWVyc0NvdW50OiBQTEFZRVJTX0NPVU5ULCBkZWZhdWx0VGltZXI6IDYwMDAwfSwgXHJcbiAgICAgICAgaW5pdEdhbWVTdGF0ZVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB3aW5uZXJTZXF1ZW5jZSA9IGNvbXB1dGVXaW5uZXIoZ2FtZVN0YXRlKTtcclxuXHQvL9GB0L7RgdGC0L7Rj9C90LjQtSDQutCw0LrQvtC5INGB0LvQtdC00YPRjtGJ0LjQuSDRhdC+0LQuINCd0LUg0LfQsNCy0L7QtNC40Lwg0LrQvtC/0LjRjiDRgdC+0YHRgtC+0Y/QvdC40Y8gY3VycmVudE1vdmUsINCwINGA0LDRgdGH0LjRgtGL0LLQsNC10Lwg0L/RgNGP0LzQviDQv9GA0Lgg0YDQtdC90LTQtdGA0LUuXHJcblx0Y29uc3QgbmV4dE1vdmUgPSBnZXROZXh0TW92ZShnYW1lU3RhdGUpO1xyXG4gICAgY29uc3Qgd2lubmVyU3ltYm9sID0gY29tcHV0ZVdpbm5lclN5bWJvbChnYW1lU3RhdGUsIHt3aW5uZXJTZXF1ZW5jZSwgbmV4dE1vdmV9KTtcclxuICAgIGNvbnN0IHdpbm5lclBsYXllciA9IFBMQVlFUlMuZmluZChwbGF5ZXIgPT4gcGxheWVyLnN5bWJvbCA9PT0gd2lubmVyU3ltYm9sKTtcclxuXHJcbiAgICBjb25zdCB7IGNlbGxzLCBjdXJyZW50TW92ZX0gPSBnYW1lU3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxHYW1lTGF5b3V0IFxyXG4gICAgICAgICAgICBiYWNrTGluaz17PEJhY2tMaW5rIC8+fSBcclxuICAgICAgICAgICAgdGl0bGU9ezxHYW1lVGl0bGUgLz59IFxyXG4gICAgICAgICAgICBnYW1lSW5mbz17PEdhbWVJbmZvIGlzUmF0aW5nR2FtZSBwbGF5ZXJzQ291bnQ9ezR9IHRpbWVNb2RlPXsnMSDQvNC40L0uINC90LAg0YXQvtC0J30gLz59IFxyXG4gICAgICAgICAgICBwbGF5ZXJzTGlzdD17XHJcbiAgICAgICAgICAgICAgICBQTEFZRVJTLnNsaWNlKDAsIFBMQVlFUlNfQ09VTlQpLm1hcCgocGxheWVyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxQbGF5ZXJJbmZvIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3BsYXllci5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXtwbGF5ZXIuYXZhdGFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByYXRpbmc9e3BsYXllci5yYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3BsYXllci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRzPXs2MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sPXtwbGF5ZXIuc3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1JpZ2h0PXtpbmRleCAlIDIgPT09IDF9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICBnYW1lTW92ZUluZm89ezxHYW1lTW92ZUluZm8gY3VycmVudE1vdmU9e2N1cnJlbnRNb3ZlfSBuZXh0TW92ZT17bmV4dE1vdmV9Lz59XHJcbiAgICAgICAgICAgIGdhbWVDZWxscz17Y2VsbHMubWFwKChjZWxsLCBpbmRleCkgPT4gPEdhbWVDZWxsIFxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIGlzV2lubmVyPXt3aW5uZXJTZXF1ZW5jZT8uaW5jbHVkZXMoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyEhd2lubmVyU3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogR0FNRV9TVEFURV9BQ1RJT05TLkNFTExfQ0xJQ0ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc3ltYm9sPXtjZWxsfVxyXG4gICAgICAgICAgICAvPil9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8R2FtZU92ZXJNb2RhbCBcclxuICAgICAgICAgICAgd2lubmVyTmFtZT17d2lubmVyUGxheWVyPy5uYW1lfVxyXG4gICAgICAgICAgICBwbGF5ZXJzPXtQTEFZRVJTLnNsaWNlKDAsIFBMQVlFUlNfQ09VTlQpLm1hcCgocGxheWVyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxQbGF5ZXJJbmZvIFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17cGxheWVyLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhcj17cGxheWVyLmF2YXRhcn1cclxuICAgICAgICAgICAgICAgICAgICByYXRpbmc9e3BsYXllci5yYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17cGxheWVyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kcz17Z2FtZVN0YXRlLnRpbWVyc1twbGF5ZXIuc3ltYm9sXX1cclxuICAgICAgICAgICAgICAgICAgICBzeW1ib2w9e3BsYXllci5zeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNSaWdodD17aW5kZXggJSAyID09PSAxfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgIH0vPlxyXG4gICAgPC8+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbIkdhbWVMYXlvdXQiLCJCYWNrTGluayIsIkdhbWVUaXRsZSIsIkdhbWVJbmZvIiwiUExBWUVSUyIsIlBsYXllckluZm8iLCJHYW1lTW92ZUluZm8iLCJHYW1lQ2VsbCIsIkdBTUVfU1RBVEVfQUNUSU9OUyIsInVzZUdhbWVTdGF0ZSIsIkdhbWVPdmVyTW9kYWwiLCJQTEFZRVJTX0NPVU5UIiwiaW5pdEdhbWVTdGF0ZSIsIkdhbWUiLCJnYW1lU3RhdGUiLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJnYW1lU3RhdGVSZWR1Y2VyIiwicGxheWVyc0NvdW50IiwiZGVmYXVsdFRpbWVyIiwid2lubmVyU2VxdWVuY2UiLCJjb21wdXRlV2lubmVyIiwibmV4dE1vdmUiLCJnZXROZXh0TW92ZSIsIndpbm5lclN5bWJvbCIsImNvbXB1dGVXaW5uZXJTeW1ib2wiLCJ3aW5uZXJQbGF5ZXIiLCJmaW5kIiwicGxheWVyIiwic3ltYm9sIiwiY2VsbHMiLCJjdXJyZW50TW92ZSIsImJhY2tMaW5rIiwidGl0bGUiLCJnYW1lSW5mbyIsImlzUmF0aW5nR2FtZSIsInRpbWVNb2RlIiwicGxheWVyc0xpc3QiLCJzbGljZSIsIm1hcCIsImluZGV4IiwiYXZhdGFyIiwicmF0aW5nIiwibmFtZSIsInNlY29uZHMiLCJpc1JpZ2h0IiwiaWQiLCJnYW1lTW92ZUluZm8iLCJnYW1lQ2VsbHMiLCJjZWxsIiwiaXNXaW5uZXIiLCJpbmNsdWRlcyIsImRpc2FibGVkIiwib25DbGljayIsInR5cGUiLCJDRUxMX0NMSUNLIiwid2lubmVyTmFtZSIsInBsYXllcnMiLCJ0aW1lcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game-new/game.jsx\n"));

/***/ })

});