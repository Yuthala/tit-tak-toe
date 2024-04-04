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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_game_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/game-layout */ \"./components/game-new/ui/game-layout.jsx\");\n/* harmony import */ var _ui_back_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/back-link */ \"./components/game-new/ui/back-link.jsx\");\n/* harmony import */ var _ui_game_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/game-title */ \"./components/game-new/ui/game-title.jsx\");\n/* harmony import */ var _ui_game_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/game-info */ \"./components/game-new/ui/game-info.jsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./components/game-new/constants.js\");\n/* harmony import */ var _player_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player-info */ \"./components/game-new/player-info.jsx\");\n/* harmony import */ var _ui_game_move_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/game-move-info */ \"./components/game-new/ui/game-move-info.jsx\");\n/* harmony import */ var _ui_game_cell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/game-cell */ \"./components/game-new/ui/game-cell.jsx\");\n/* harmony import */ var _model_use_game_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./model/use-game-state */ \"./components/game-new/model/use-game-state.js\");\n/* harmony import */ var _ui_game_over_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/game-over-modal */ \"./components/game-new/ui/game-over-modal.jsx\");\n//композиционный компонент\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst PLAYERS_COUNT = 4;\ninitGameState;\nfunction Game() {\n    _s();\n    const [gameState, dispatch] = useReducer(gameStateReducer, {\n        playersCount: PLAYERS_COUNT\n    }, initGameState);\n    const winnerSequence = computeWinner(gameState);\n    //состояние какой следующий ход. Не заводим копию состояния currentMove, а расчитываем прямо при рендере.\n    const nextMove = getNextMove(gameState);\n    const winnerSymbol = computeWinnerSymbol(gameState, {\n        winnerSequence,\n        nextMove\n    });\n    const winnerPlayer = _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS.find((player)=>player.symbol === winnerSymbol);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_layout__WEBPACK_IMPORTED_MODULE_1__.GameLayout, {\n                backLink: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_back_link__WEBPACK_IMPORTED_MODULE_2__.BackLink, {}, void 0, false, {\n                    fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 23\n                }, void 0),\n                title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_title__WEBPACK_IMPORTED_MODULE_3__.GameTitle, {}, void 0, false, {\n                    fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 20\n                }, void 0),\n                gameInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_info__WEBPACK_IMPORTED_MODULE_4__.GameInfo, {\n                    isRatingGame: true,\n                    playersCount: 4,\n                    timeMode: \"1 мин. на ход\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 23\n                }, void 0),\n                playersList: _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS.slice(0, PLAYERS_COUNT).map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_player_info__WEBPACK_IMPORTED_MODULE_6__.PlayerInfo, {\n                        avatar: player.avatar,\n                        rating: player.rating,\n                        name: player.name,\n                        seconds: 60,\n                        symbol: player.symbol,\n                        isRight: index % 2 === 1\n                    }, player.id, false, {\n                        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 21\n                    }, void 0)),\n                gameMoveInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_move_info__WEBPACK_IMPORTED_MODULE_7__.GameMoveInfo, {\n                    currentMove: currentMove,\n                    nextMove: nextMove\n                }, void 0, false, {\n                    fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 27\n                }, void 0),\n                gameCells: cells.map((cell, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_cell__WEBPACK_IMPORTED_MODULE_8__.GameCell, {\n                        isWinner: winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence.includes(index),\n                        disabled: !!winnerSymbol,\n                        onClick: ()=>{\n                            dispatch({\n                                type: _model_use_game_state__WEBPACK_IMPORTED_MODULE_9__.GAME_STATE_ACTIONS.CELL_CLICK,\n                                index\n                            });\n                        },\n                        symbol: cell\n                    }, index, false, {\n                        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 51\n                    }, void 0))\n            }, void 0, false, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_over_modal__WEBPACK_IMPORTED_MODULE_10__.GameOverModal, {\n                winnerName: winnerPlayer === null || winnerPlayer === void 0 ? void 0 : winnerPlayer.name,\n                players: _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS.slice(0, PLAYERS_COUNT).map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_player_info__WEBPACK_IMPORTED_MODULE_6__.PlayerInfo, {\n                        avatar: player.avatar,\n                        rating: player.rating,\n                        name: player.name,\n                        seconds: 60,\n                        symbol: player.symbol,\n                        isRight: index % 2 === 1\n                    }, player.id, false, {\n                        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 21\n                    }, void 0))\n            }, void 0, false, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Game, \"hjOiclnsfqrQwVD5srQmTue05c4=\");\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L2dhbWUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQkFBMEI7OztBQUNvQjtBQUNKO0FBQ0U7QUFDRjtBQUNKO0FBQ0s7QUFDTztBQUNSO0FBQ2dDO0FBQ3JCO0FBRXJELE1BQU1XLGdCQUFnQjtBQUV0QkM7QUFFTyxTQUFTQzs7SUFDWixNQUFNLENBQUNDLFdBQVdDLFNBQVMsR0FBR0MsV0FDMUJDLGtCQUNBO1FBQUNDLGNBQWNQO0lBQWEsR0FDNUJDO0lBR0osTUFBTU8saUJBQWlCQyxjQUFjTjtJQUN4Qyx5R0FBeUc7SUFDekcsTUFBTU8sV0FBV0MsWUFBWVI7SUFDMUIsTUFBTVMsZUFBZUMsb0JBQW9CVixXQUFXO1FBQUNLO1FBQWdCRTtJQUFRO0lBQzdFLE1BQU1JLGVBQWVyQiwrQ0FBT0EsQ0FBQ3NCLElBQUksQ0FBQ0MsQ0FBQUEsU0FBVUEsT0FBT0MsTUFBTSxLQUFLTDtJQUU5RCxxQkFDSTs7MEJBQ0EsOERBQUN2Qix1REFBVUE7Z0JBQ1A2Qix3QkFBVSw4REFBQzVCLG1EQUFRQTs7Ozs7Z0JBQ25CNkIscUJBQU8sOERBQUM1QixxREFBU0E7Ozs7O2dCQUNqQjZCLHdCQUFVLDhEQUFDNUIsbURBQVFBO29CQUFDNkIsWUFBWTtvQkFBQ2QsY0FBYztvQkFBR2UsVUFBVTs7Ozs7O2dCQUM1REMsYUFDSTlCLCtDQUFPQSxDQUFDK0IsS0FBSyxDQUFDLEdBQUd4QixlQUFleUIsR0FBRyxDQUFDLENBQUNULFFBQVFVLHNCQUN6Qyw4REFBQ2hDLG9EQUFVQTt3QkFFWGlDLFFBQVFYLE9BQU9XLE1BQU07d0JBQ3JCQyxRQUFRWixPQUFPWSxNQUFNO3dCQUNyQkMsTUFBTWIsT0FBT2EsSUFBSTt3QkFDakJDLFNBQVM7d0JBQ1RiLFFBQVFELE9BQU9DLE1BQU07d0JBQ3JCYyxTQUFTTCxRQUFRLE1BQU07dUJBTmxCVixPQUFPZ0IsRUFBRTs7Ozs7Z0JBU3RCQyw0QkFBYyw4REFBQ3RDLDREQUFZQTtvQkFBQ3VDLGFBQWFBO29CQUFheEIsVUFBVUE7Ozs7OztnQkFDaEV5QixXQUFXQyxNQUFNWCxHQUFHLENBQUMsQ0FBQ1ksTUFBTVgsc0JBQVUsOERBQUM5QixtREFBUUE7d0JBRTNDMEMsUUFBUSxFQUFFOUIsMkJBQUFBLHFDQUFBQSxlQUFnQitCLFFBQVEsQ0FBQ2I7d0JBQ25DYyxVQUFVLENBQUMsQ0FBQzVCO3dCQUNaNkIsU0FBUzs0QkFDTHJDLFNBQVM7Z0NBQ0xzQyxNQUFNN0MscUVBQWtCQSxDQUFDOEMsVUFBVTtnQ0FDbkNqQjs0QkFDSjt3QkFDSjt3QkFDQVQsUUFBUW9CO3VCQVRIWDs7Ozs7Ozs7OzswQkFZYiw4REFBQzNCLCtEQUFhQTtnQkFDVjZDLFVBQVUsRUFBRTlCLHlCQUFBQSxtQ0FBQUEsYUFBY2UsSUFBSTtnQkFDOUJnQixTQUFTcEQsK0NBQU9BLENBQUMrQixLQUFLLENBQUMsR0FBR3hCLGVBQWV5QixHQUFHLENBQUMsQ0FBQ1QsUUFBUVUsc0JBQzlDLDhEQUFDaEMsb0RBQVVBO3dCQUVYaUMsUUFBUVgsT0FBT1csTUFBTTt3QkFDckJDLFFBQVFaLE9BQU9ZLE1BQU07d0JBQ3JCQyxNQUFNYixPQUFPYSxJQUFJO3dCQUNqQkMsU0FBUzt3QkFDVGIsUUFBUUQsT0FBT0MsTUFBTTt3QkFDckJjLFNBQVNMLFFBQVEsTUFBTTt1QkFObEJWLE9BQU9nQixFQUFFOzs7Ozs7Ozs7Ozs7QUFZbEM7R0E3RGdCOUI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lLW5ldy9nYW1lLmpzeD9lNDJmIl0sInNvdXJjZXNDb250ZW50IjpbIi8v0LrQvtC80L/QvtC30LjRhtC40L7QvdC90YvQuSDQutC+0LzQv9C+0L3QtdC90YJcclxuaW1wb3J0IHsgR2FtZUxheW91dCB9IGZyb20gJy4vdWkvZ2FtZS1sYXlvdXQnO1xyXG5pbXBvcnQgeyBCYWNrTGluayB9IGZyb20gJy4vdWkvYmFjay1saW5rJztcclxuaW1wb3J0IHsgR2FtZVRpdGxlIH0gZnJvbSAnLi91aS9nYW1lLXRpdGxlJztcclxuaW1wb3J0IHsgR2FtZUluZm8gfSBmcm9tICcuL3VpL2dhbWUtaW5mbyc7XHJcbmltcG9ydCB7IFBMQVlFUlMgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tICcuL3BsYXllci1pbmZvJztcclxuaW1wb3J0IHsgR2FtZU1vdmVJbmZvfSBmcm9tICcuL3VpL2dhbWUtbW92ZS1pbmZvJztcclxuaW1wb3J0IHsgR2FtZUNlbGwgfSBmcm9tICcuL3VpL2dhbWUtY2VsbCc7XHJcbmltcG9ydCB7IEdBTUVfU1RBVEVfQUNUSU9OUywgdXNlR2FtZVN0YXRlIH0gZnJvbSAnLi9tb2RlbC91c2UtZ2FtZS1zdGF0ZSc7XHJcbmltcG9ydCB7IEdhbWVPdmVyTW9kYWwgfSBmcm9tICcuL3VpL2dhbWUtb3Zlci1tb2RhbCc7XHJcblxyXG5jb25zdCBQTEFZRVJTX0NPVU5UID0gNDtcclxuXHJcbmluaXRHYW1lU3RhdGVcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHYW1lKCkge1xyXG4gICAgY29uc3QgW2dhbWVTdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihcclxuICAgICAgICBnYW1lU3RhdGVSZWR1Y2VyLCBcclxuICAgICAgICB7cGxheWVyc0NvdW50OiBQTEFZRVJTX0NPVU5UfSwgXHJcbiAgICAgICAgaW5pdEdhbWVTdGF0ZVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB3aW5uZXJTZXF1ZW5jZSA9IGNvbXB1dGVXaW5uZXIoZ2FtZVN0YXRlKTtcclxuXHQvL9GB0L7RgdGC0L7Rj9C90LjQtSDQutCw0LrQvtC5INGB0LvQtdC00YPRjtGJ0LjQuSDRhdC+0LQuINCd0LUg0LfQsNCy0L7QtNC40Lwg0LrQvtC/0LjRjiDRgdC+0YHRgtC+0Y/QvdC40Y8gY3VycmVudE1vdmUsINCwINGA0LDRgdGH0LjRgtGL0LLQsNC10Lwg0L/RgNGP0LzQviDQv9GA0Lgg0YDQtdC90LTQtdGA0LUuXHJcblx0Y29uc3QgbmV4dE1vdmUgPSBnZXROZXh0TW92ZShnYW1lU3RhdGUpO1xyXG4gICAgY29uc3Qgd2lubmVyU3ltYm9sID0gY29tcHV0ZVdpbm5lclN5bWJvbChnYW1lU3RhdGUsIHt3aW5uZXJTZXF1ZW5jZSwgbmV4dE1vdmV9KTtcclxuICAgIGNvbnN0IHdpbm5lclBsYXllciA9IFBMQVlFUlMuZmluZChwbGF5ZXIgPT4gcGxheWVyLnN5bWJvbCA9PT0gd2lubmVyU3ltYm9sKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPEdhbWVMYXlvdXQgXHJcbiAgICAgICAgICAgIGJhY2tMaW5rPXs8QmFja0xpbmsgLz59IFxyXG4gICAgICAgICAgICB0aXRsZT17PEdhbWVUaXRsZSAvPn0gXHJcbiAgICAgICAgICAgIGdhbWVJbmZvPXs8R2FtZUluZm8gaXNSYXRpbmdHYW1lIHBsYXllcnNDb3VudD17NH0gdGltZU1vZGU9eycxINC80LjQvS4g0L3QsCDRhdC+0LQnfSAvPn0gXHJcbiAgICAgICAgICAgIHBsYXllcnNMaXN0PXtcclxuICAgICAgICAgICAgICAgIFBMQVlFUlMuc2xpY2UoMCwgUExBWUVSU19DT1VOVCkubWFwKChwbGF5ZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFBsYXllckluZm8gXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtwbGF5ZXIuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXtwbGF5ZXIuYXZhdGFyfVxyXG4gICAgICAgICAgICAgICAgICAgIHJhdGluZz17cGxheWVyLnJhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtwbGF5ZXIubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRzPXs2MH1cclxuICAgICAgICAgICAgICAgICAgICBzeW1ib2w9e3BsYXllci5zeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNSaWdodD17aW5kZXggJSAyID09PSAxfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgZ2FtZU1vdmVJbmZvPXs8R2FtZU1vdmVJbmZvIGN1cnJlbnRNb3ZlPXtjdXJyZW50TW92ZX0gbmV4dE1vdmU9e25leHRNb3ZlfS8+fVxyXG4gICAgICAgICAgICBnYW1lQ2VsbHM9e2NlbGxzLm1hcCgoY2VsbCwgaW5kZXgpID0+IDxHYW1lQ2VsbCBcclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBpc1dpbm5lcj17d2lubmVyU2VxdWVuY2U/LmluY2x1ZGVzKGluZGV4KX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshIXdpbm5lclN5bWJvbH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEdBTUVfU1RBVEVfQUNUSU9OUy5DRUxMX0NMSUNLLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN5bWJvbD17Y2VsbH1cclxuICAgICAgICAgICAgLz4pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEdhbWVPdmVyTW9kYWwgXHJcbiAgICAgICAgICAgIHdpbm5lck5hbWU9e3dpbm5lclBsYXllcj8ubmFtZX1cclxuICAgICAgICAgICAgcGxheWVycz17UExBWUVSUy5zbGljZSgwLCBQTEFZRVJTX0NPVU5UKS5tYXAoKHBsYXllciwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8UGxheWVySW5mbyBcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e3BsYXllci5pZH1cclxuICAgICAgICAgICAgICAgICAgICBhdmF0YXI9e3BsYXllci5hdmF0YXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgcmF0aW5nPXtwbGF5ZXIucmF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e3BsYXllci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZHM9ezYwfVxyXG4gICAgICAgICAgICAgICAgICAgIHN5bWJvbD17cGxheWVyLnN5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgICBpc1JpZ2h0PXtpbmRleCAlIDIgPT09IDF9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgfS8+XHJcbiAgICA8Lz5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiR2FtZUxheW91dCIsIkJhY2tMaW5rIiwiR2FtZVRpdGxlIiwiR2FtZUluZm8iLCJQTEFZRVJTIiwiUGxheWVySW5mbyIsIkdhbWVNb3ZlSW5mbyIsIkdhbWVDZWxsIiwiR0FNRV9TVEFURV9BQ1RJT05TIiwidXNlR2FtZVN0YXRlIiwiR2FtZU92ZXJNb2RhbCIsIlBMQVlFUlNfQ09VTlQiLCJpbml0R2FtZVN0YXRlIiwiR2FtZSIsImdhbWVTdGF0ZSIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsImdhbWVTdGF0ZVJlZHVjZXIiLCJwbGF5ZXJzQ291bnQiLCJ3aW5uZXJTZXF1ZW5jZSIsImNvbXB1dGVXaW5uZXIiLCJuZXh0TW92ZSIsImdldE5leHRNb3ZlIiwid2lubmVyU3ltYm9sIiwiY29tcHV0ZVdpbm5lclN5bWJvbCIsIndpbm5lclBsYXllciIsImZpbmQiLCJwbGF5ZXIiLCJzeW1ib2wiLCJiYWNrTGluayIsInRpdGxlIiwiZ2FtZUluZm8iLCJpc1JhdGluZ0dhbWUiLCJ0aW1lTW9kZSIsInBsYXllcnNMaXN0Iiwic2xpY2UiLCJtYXAiLCJpbmRleCIsImF2YXRhciIsInJhdGluZyIsIm5hbWUiLCJzZWNvbmRzIiwiaXNSaWdodCIsImlkIiwiZ2FtZU1vdmVJbmZvIiwiY3VycmVudE1vdmUiLCJnYW1lQ2VsbHMiLCJjZWxscyIsImNlbGwiLCJpc1dpbm5lciIsImluY2x1ZGVzIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwidHlwZSIsIkNFTExfQ0xJQ0siLCJ3aW5uZXJOYW1lIiwicGxheWVycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game-new/game.jsx\n"));

/***/ })

});