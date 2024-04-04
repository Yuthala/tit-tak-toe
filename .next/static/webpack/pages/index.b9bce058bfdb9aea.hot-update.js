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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_game_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/game-layout */ \"./components/game-new/ui/game-layout.jsx\");\n/* harmony import */ var _ui_back_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/back-link */ \"./components/game-new/ui/back-link.jsx\");\n/* harmony import */ var _ui_game_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/game-title */ \"./components/game-new/ui/game-title.jsx\");\n/* harmony import */ var _ui_game_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/game-info */ \"./components/game-new/ui/game-info.jsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./components/game-new/constants.js\");\n/* harmony import */ var _player_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player-info */ \"./components/game-new/player-info.jsx\");\n/* harmony import */ var _ui_game_move_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/game-move-info */ \"./components/game-new/ui/game-move-info.jsx\");\n/* harmony import */ var _ui_game_cell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/game-cell */ \"./components/game-new/ui/game-cell.jsx\");\n/* harmony import */ var _model_use_game_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./model/use-game-state */ \"./components/game-new/model/use-game-state.js\");\n/* harmony import */ var _ui_game_over_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/game-over-modal */ \"./components/game-new/ui/game-over-modal.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst PLAYERS_COUNT = 4;\nfunction Game() {\n    _s();\n    const [gameState, dispatch] = useReducer(gameStateReducer, {\n        playersCount: PLAYERS_COUNT\n    }, initGameState);\n    const winnerSequence = computeWinner(cells);\n    //состояние какой следующий ход. Не заводим копию состояния currentMove, а расчитываем прямо при рендере.\n    const nextMove = getNextMove(currentMove, playersCount, playersTimeOver);\n    const winnerPlayer = _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS.find((player)=>player.symbol === winnerSymbol);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_layout__WEBPACK_IMPORTED_MODULE_1__.GameLayout, {\n                backLink: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_back_link__WEBPACK_IMPORTED_MODULE_2__.BackLink, {}, void 0, false, {\n                    fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 23\n                }, void 0),\n                title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_title__WEBPACK_IMPORTED_MODULE_3__.GameTitle, {}, void 0, false, {\n                    fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 20\n                }, void 0),\n                gameInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_info__WEBPACK_IMPORTED_MODULE_4__.GameInfo, {\n                    isRatingGame: true,\n                    playersCount: 4,\n                    timeMode: \"1 мин. на ход\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 23\n                }, void 0),\n                playersList: _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS.slice(0, PLAYERS_COUNT).map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_player_info__WEBPACK_IMPORTED_MODULE_6__.PlayerInfo, {\n                        avatar: player.avatar,\n                        rating: player.rating,\n                        name: player.name,\n                        seconds: 60,\n                        symbol: player.symbol,\n                        isRight: index % 2 === 1\n                    }, player.id, false, {\n                        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 21\n                    }, void 0)),\n                gameMoveInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_move_info__WEBPACK_IMPORTED_MODULE_7__.GameMoveInfo, {\n                    currentMove: currentMove,\n                    nextMove: nextMove\n                }, void 0, false, {\n                    fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 27\n                }, void 0),\n                gameCells: cells.map((cell, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_cell__WEBPACK_IMPORTED_MODULE_8__.GameCell, {\n                        isWinner: winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence.includes(index),\n                        disabled: !!winnerSymbol,\n                        onClick: ()=>{\n                            dispatch({\n                                type: _model_use_game_state__WEBPACK_IMPORTED_MODULE_9__.GAME_STATE_ACTIONS.CELL_CLICK,\n                                index\n                            });\n                        },\n                        symbol: cell\n                    }, index, false, {\n                        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 51\n                    }, void 0))\n            }, void 0, false, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_over_modal__WEBPACK_IMPORTED_MODULE_10__.GameOverModal, {\n                winnerName: winnerPlayer === null || winnerPlayer === void 0 ? void 0 : winnerPlayer.name,\n                players: _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS.slice(0, PLAYERS_COUNT).map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_player_info__WEBPACK_IMPORTED_MODULE_6__.PlayerInfo, {\n                        avatar: player.avatar,\n                        rating: player.rating,\n                        name: player.name,\n                        seconds: 60,\n                        symbol: player.symbol,\n                        isRight: index % 2 === 1\n                    }, player.id, false, {\n                        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 21\n                    }, void 0))\n            }, void 0, false, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Game, \"hjOiclnsfqrQwVD5srQmTue05c4=\");\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L2dhbWUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QztBQUNKO0FBQ0U7QUFDRjtBQUNKO0FBQ0s7QUFDTztBQUNSO0FBQ2dDO0FBQ3JCO0FBRXJELE1BQU1XLGdCQUFnQjtBQUVmLFNBQVNDOztJQUNaLE1BQU0sQ0FBQ0MsV0FBV0MsU0FBUyxHQUFHQyxXQUMxQkMsa0JBQ0E7UUFBQ0MsY0FBY047SUFBYSxHQUM1Qk87SUFHSixNQUFNQyxpQkFBaUJDLGNBQWNDO0lBQ3hDLHlHQUF5RztJQUN6RyxNQUFNQyxXQUFXQyxZQUFZQyxhQUFhUCxjQUFjUTtJQUNyRCxNQUFNQyxlQUFldEIsK0NBQU9BLENBQUN1QixJQUFJLENBQUNDLENBQUFBLFNBQVVBLE9BQU9DLE1BQU0sS0FBS0M7SUFFOUQscUJBQ0k7OzBCQUNBLDhEQUFDOUIsdURBQVVBO2dCQUNQK0Isd0JBQVUsOERBQUM5QixtREFBUUE7Ozs7O2dCQUNuQitCLHFCQUFPLDhEQUFDOUIscURBQVNBOzs7OztnQkFDakIrQix3QkFBVSw4REFBQzlCLG1EQUFRQTtvQkFBQytCLFlBQVk7b0JBQUNqQixjQUFjO29CQUFHa0IsVUFBVTs7Ozs7O2dCQUM1REMsYUFDSWhDLCtDQUFPQSxDQUFDaUMsS0FBSyxDQUFDLEdBQUcxQixlQUFlMkIsR0FBRyxDQUFDLENBQUNWLFFBQVFXLHNCQUN6Qyw4REFBQ2xDLG9EQUFVQTt3QkFFWG1DLFFBQVFaLE9BQU9ZLE1BQU07d0JBQ3JCQyxRQUFRYixPQUFPYSxNQUFNO3dCQUNyQkMsTUFBTWQsT0FBT2MsSUFBSTt3QkFDakJDLFNBQVM7d0JBQ1RkLFFBQVFELE9BQU9DLE1BQU07d0JBQ3JCZSxTQUFTTCxRQUFRLE1BQU07dUJBTmxCWCxPQUFPaUIsRUFBRTs7Ozs7Z0JBU3RCQyw0QkFBYyw4REFBQ3hDLDREQUFZQTtvQkFBQ2tCLGFBQWFBO29CQUFhRixVQUFVQTs7Ozs7O2dCQUNoRXlCLFdBQVcxQixNQUFNaUIsR0FBRyxDQUFDLENBQUNVLE1BQU1ULHNCQUFVLDhEQUFDaEMsbURBQVFBO3dCQUUzQzBDLFFBQVEsRUFBRTlCLDJCQUFBQSxxQ0FBQUEsZUFBZ0IrQixRQUFRLENBQUNYO3dCQUNuQ1ksVUFBVSxDQUFDLENBQUNyQjt3QkFDWnNCLFNBQVM7NEJBQ0x0QyxTQUFTO2dDQUNMdUMsTUFBTTdDLHFFQUFrQkEsQ0FBQzhDLFVBQVU7Z0NBQ25DZjs0QkFDSjt3QkFDSjt3QkFDQVYsUUFBUW1CO3VCQVRIVDs7Ozs7Ozs7OzswQkFZYiw4REFBQzdCLCtEQUFhQTtnQkFDVjZDLFVBQVUsRUFBRTdCLHlCQUFBQSxtQ0FBQUEsYUFBY2dCLElBQUk7Z0JBQzlCYyxTQUFTcEQsK0NBQU9BLENBQUNpQyxLQUFLLENBQUMsR0FBRzFCLGVBQWUyQixHQUFHLENBQUMsQ0FBQ1YsUUFBUVcsc0JBQzlDLDhEQUFDbEMsb0RBQVVBO3dCQUVYbUMsUUFBUVosT0FBT1ksTUFBTTt3QkFDckJDLFFBQVFiLE9BQU9hLE1BQU07d0JBQ3JCQyxNQUFNZCxPQUFPYyxJQUFJO3dCQUNqQkMsU0FBUzt3QkFDVGQsUUFBUUQsT0FBT0MsTUFBTTt3QkFDckJlLFNBQVNMLFFBQVEsTUFBTTt1QkFObEJYLE9BQU9pQixFQUFFOzs7Ozs7Ozs7Ozs7QUFZbEM7R0E1RGdCakM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lLW5ldy9nYW1lLmpzeD9lNDJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVMYXlvdXQgfSBmcm9tICcuL3VpL2dhbWUtbGF5b3V0JztcclxuaW1wb3J0IHsgQmFja0xpbmsgfSBmcm9tICcuL3VpL2JhY2stbGluayc7XHJcbmltcG9ydCB7IEdhbWVUaXRsZSB9IGZyb20gJy4vdWkvZ2FtZS10aXRsZSc7XHJcbmltcG9ydCB7IEdhbWVJbmZvIH0gZnJvbSAnLi91aS9nYW1lLWluZm8nO1xyXG5pbXBvcnQgeyBQTEFZRVJTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSAnLi9wbGF5ZXItaW5mbyc7XHJcbmltcG9ydCB7IEdhbWVNb3ZlSW5mb30gZnJvbSAnLi91aS9nYW1lLW1vdmUtaW5mbyc7XHJcbmltcG9ydCB7IEdhbWVDZWxsIH0gZnJvbSAnLi91aS9nYW1lLWNlbGwnO1xyXG5pbXBvcnQgeyBHQU1FX1NUQVRFX0FDVElPTlMsIHVzZUdhbWVTdGF0ZSB9IGZyb20gJy4vbW9kZWwvdXNlLWdhbWUtc3RhdGUnO1xyXG5pbXBvcnQgeyBHYW1lT3Zlck1vZGFsIH0gZnJvbSAnLi91aS9nYW1lLW92ZXItbW9kYWwnO1xyXG5cclxuY29uc3QgUExBWUVSU19DT1VOVCA9IDQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2FtZSgpIHtcclxuICAgIGNvbnN0IFtnYW1lU3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoXHJcbiAgICAgICAgZ2FtZVN0YXRlUmVkdWNlciwgXHJcbiAgICAgICAge3BsYXllcnNDb3VudDogUExBWUVSU19DT1VOVH0sIFxyXG4gICAgICAgIGluaXRHYW1lU3RhdGVcclxuICAgIFxyXG4gICAgICAgICk7XHJcbiAgICBjb25zdCB3aW5uZXJTZXF1ZW5jZSA9IGNvbXB1dGVXaW5uZXIoY2VsbHMpO1xyXG5cdC8v0YHQvtGB0YLQvtGP0L3QuNC1INC60LDQutC+0Lkg0YHQu9C10LTRg9GO0YnQuNC5INGF0L7QtC4g0J3QtSDQt9Cw0LLQvtC00LjQvCDQutC+0L/QuNGOINGB0L7RgdGC0L7Rj9C90LjRjyBjdXJyZW50TW92ZSwg0LAg0YDQsNGB0YfQuNGC0YvQstCw0LXQvCDQv9GA0Y/QvNC+INC/0YDQuCDRgNC10L3QtNC10YDQtS5cclxuXHRjb25zdCBuZXh0TW92ZSA9IGdldE5leHRNb3ZlKGN1cnJlbnRNb3ZlLCBwbGF5ZXJzQ291bnQsIHBsYXllcnNUaW1lT3Zlcik7XHJcbiAgICBjb25zdCB3aW5uZXJQbGF5ZXIgPSBQTEFZRVJTLmZpbmQocGxheWVyID0+IHBsYXllci5zeW1ib2wgPT09IHdpbm5lclN5bWJvbCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxHYW1lTGF5b3V0IFxyXG4gICAgICAgICAgICBiYWNrTGluaz17PEJhY2tMaW5rIC8+fSBcclxuICAgICAgICAgICAgdGl0bGU9ezxHYW1lVGl0bGUgLz59IFxyXG4gICAgICAgICAgICBnYW1lSW5mbz17PEdhbWVJbmZvIGlzUmF0aW5nR2FtZSBwbGF5ZXJzQ291bnQ9ezR9IHRpbWVNb2RlPXsnMSDQvNC40L0uINC90LAg0YXQvtC0J30gLz59IFxyXG4gICAgICAgICAgICBwbGF5ZXJzTGlzdD17XHJcbiAgICAgICAgICAgICAgICBQTEFZRVJTLnNsaWNlKDAsIFBMQVlFUlNfQ09VTlQpLm1hcCgocGxheWVyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxQbGF5ZXJJbmZvIFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17cGxheWVyLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhcj17cGxheWVyLmF2YXRhcn1cclxuICAgICAgICAgICAgICAgICAgICByYXRpbmc9e3BsYXllci5yYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17cGxheWVyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kcz17NjB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sPXtwbGF5ZXIuc3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzUmlnaHQ9e2luZGV4ICUgMiA9PT0gMX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIGdhbWVNb3ZlSW5mbz17PEdhbWVNb3ZlSW5mbyBjdXJyZW50TW92ZT17Y3VycmVudE1vdmV9IG5leHRNb3ZlPXtuZXh0TW92ZX0vPn1cclxuICAgICAgICAgICAgZ2FtZUNlbGxzPXtjZWxscy5tYXAoKGNlbGwsIGluZGV4KSA9PiA8R2FtZUNlbGwgXHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgaXNXaW5uZXI9e3dpbm5lclNlcXVlbmNlPy5pbmNsdWRlcyhpbmRleCl9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17ISF3aW5uZXJTeW1ib2x9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBHQU1FX1NUQVRFX0FDVElPTlMuQ0VMTF9DTElDSyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzeW1ib2w9e2NlbGx9XHJcbiAgICAgICAgICAgIC8+KX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxHYW1lT3Zlck1vZGFsIFxyXG4gICAgICAgICAgICB3aW5uZXJOYW1lPXt3aW5uZXJQbGF5ZXI/Lm5hbWV9XHJcbiAgICAgICAgICAgIHBsYXllcnM9e1BMQVlFUlMuc2xpY2UoMCwgUExBWUVSU19DT1VOVCkubWFwKChwbGF5ZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFBsYXllckluZm8gXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtwbGF5ZXIuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXtwbGF5ZXIuYXZhdGFyfVxyXG4gICAgICAgICAgICAgICAgICAgIHJhdGluZz17cGxheWVyLnJhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtwbGF5ZXIubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRzPXs2MH1cclxuICAgICAgICAgICAgICAgICAgICBzeW1ib2w9e3BsYXllci5zeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNSaWdodD17aW5kZXggJSAyID09PSAxfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgIH0vPlxyXG4gICAgPC8+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbIkdhbWVMYXlvdXQiLCJCYWNrTGluayIsIkdhbWVUaXRsZSIsIkdhbWVJbmZvIiwiUExBWUVSUyIsIlBsYXllckluZm8iLCJHYW1lTW92ZUluZm8iLCJHYW1lQ2VsbCIsIkdBTUVfU1RBVEVfQUNUSU9OUyIsInVzZUdhbWVTdGF0ZSIsIkdhbWVPdmVyTW9kYWwiLCJQTEFZRVJTX0NPVU5UIiwiR2FtZSIsImdhbWVTdGF0ZSIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsImdhbWVTdGF0ZVJlZHVjZXIiLCJwbGF5ZXJzQ291bnQiLCJpbml0R2FtZVN0YXRlIiwid2lubmVyU2VxdWVuY2UiLCJjb21wdXRlV2lubmVyIiwiY2VsbHMiLCJuZXh0TW92ZSIsImdldE5leHRNb3ZlIiwiY3VycmVudE1vdmUiLCJwbGF5ZXJzVGltZU92ZXIiLCJ3aW5uZXJQbGF5ZXIiLCJmaW5kIiwicGxheWVyIiwic3ltYm9sIiwid2lubmVyU3ltYm9sIiwiYmFja0xpbmsiLCJ0aXRsZSIsImdhbWVJbmZvIiwiaXNSYXRpbmdHYW1lIiwidGltZU1vZGUiLCJwbGF5ZXJzTGlzdCIsInNsaWNlIiwibWFwIiwiaW5kZXgiLCJhdmF0YXIiLCJyYXRpbmciLCJuYW1lIiwic2Vjb25kcyIsImlzUmlnaHQiLCJpZCIsImdhbWVNb3ZlSW5mbyIsImdhbWVDZWxscyIsImNlbGwiLCJpc1dpbm5lciIsImluY2x1ZGVzIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwidHlwZSIsIkNFTExfQ0xJQ0siLCJ3aW5uZXJOYW1lIiwicGxheWVycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game-new/game.jsx\n"));

/***/ })

});