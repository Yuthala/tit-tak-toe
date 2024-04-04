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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_game_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/game-layout */ \"./components/game-new/ui/game-layout.jsx\");\n/* harmony import */ var _ui_back_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/back-link */ \"./components/game-new/ui/back-link.jsx\");\n/* harmony import */ var _ui_game_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/game-title */ \"./components/game-new/ui/game-title.jsx\");\n/* harmony import */ var _ui_game_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/game-info */ \"./components/game-new/ui/game-info.jsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./components/game-new/constants.js\");\n/* harmony import */ var _player_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player-info */ \"./components/game-new/player-info.jsx\");\n/* harmony import */ var _ui_game_move_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/game-move-info */ \"./components/game-new/ui/game-move-info.jsx\");\n/* harmony import */ var _ui_game_cell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/game-cell */ \"./components/game-new/ui/game-cell.jsx\");\n/* harmony import */ var _model_use_game_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./model/use-game-state */ \"./components/game-new/model/use-game-state.js\");\n/* harmony import */ var _ui_game_over_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/game-over-modal */ \"./components/game-new/ui/game-over-modal.jsx\");\n//композиционный компонент\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst PLAYERS_COUNT = 4;\ninitGameState;\nfunction Game() {\n    _s();\n    const [gameState, dispatch] = useReducer(gameStateReducer, {\n        playersCount: PLAYERS_COUNT,\n        defaultTimer: 60000,\n        currentMoveStart: Date.now()\n    }, initGameState);\n    const winnerSequence = computeWinner(gameState);\n    //состояние какой следующий ход. Не заводим копию состояния currentMove, а расчитываем прямо при рендере.\n    const nextMove = getNextMove(gameState);\n    const winnerSymbol = computeWinnerSymbol(gameState, {\n        winnerSequence,\n        nextMove\n    });\n    const winnerPlayer = _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS.find((player)=>player.symbol === winnerSymbol);\n    const { cells, currentMove } = gameState;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_layout__WEBPACK_IMPORTED_MODULE_1__.GameLayout, {\n                backLink: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_back_link__WEBPACK_IMPORTED_MODULE_2__.BackLink, {}, void 0, false, {\n                    fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 23\n                }, void 0),\n                title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_title__WEBPACK_IMPORTED_MODULE_3__.GameTitle, {}, void 0, false, {\n                    fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 20\n                }, void 0),\n                gameInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_info__WEBPACK_IMPORTED_MODULE_4__.GameInfo, {\n                    isRatingGame: true,\n                    playersCount: 4,\n                    timeMode: \"1 мин. на ход\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 23\n                }, void 0),\n                playersList: _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS.slice(0, PLAYERS_COUNT).map((player, index)=>{\n                    const { timer, timerStartAt } = computePlayerTimer(gameState, player.symbol);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_player_info__WEBPACK_IMPORTED_MODULE_6__.PlayerInfo, {\n                        avatar: player.avatar,\n                        rating: player.rating,\n                        name: player.name,\n                        symbol: player.symbol,\n                        isRight: index % 2 === 1\n                    }, player.id, false, {\n                        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 21\n                    }, void 0);\n                }),\n                gameMoveInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_move_info__WEBPACK_IMPORTED_MODULE_7__.GameMoveInfo, {\n                    currentMove: currentMove,\n                    nextMove: nextMove\n                }, void 0, false, {\n                    fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 27\n                }, void 0),\n                gameCells: cells.map((cell, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_cell__WEBPACK_IMPORTED_MODULE_8__.GameCell, {\n                        isWinner: winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence.includes(index),\n                        disabled: !!winnerSymbol,\n                        onClick: ()=>{\n                            dispatch({\n                                type: _model_use_game_state__WEBPACK_IMPORTED_MODULE_9__.GAME_STATE_ACTIONS.CELL_CLICK,\n                                index,\n                                now: Date.now()\n                            });\n                        },\n                        symbol: cell\n                    }, index, false, {\n                        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 51\n                    }, void 0))\n            }, void 0, false, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_over_modal__WEBPACK_IMPORTED_MODULE_10__.GameOverModal, {\n                winnerName: winnerPlayer === null || winnerPlayer === void 0 ? void 0 : winnerPlayer.name,\n                players: _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS.slice(0, PLAYERS_COUNT).map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_player_info__WEBPACK_IMPORTED_MODULE_6__.PlayerInfo, {\n                        avatar: player.avatar,\n                        rating: player.rating,\n                        name: player.name,\n                        timer: gameState.timers[player.symbol],\n                        symbol: player.symbol,\n                        isRight: index % 2 === 1\n                    }, player.id, false, {\n                        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 21\n                    }, void 0))\n            }, void 0, false, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Game, \"UuMOo/Am0TopUflOaK89S8Hq4tE=\");\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Li9jb21wb25lbnRzL2dhbWUtbmV3L2dhbWUuanN4P2U0MmYiXSwic291cmNlc0NvbnRlbnQiOlsiLy/QutC+0LzQv9C+0LfQuNGG0LjQvtC90L3Ri9C5INC60L7QvNC/0L7QvdC10L3RglxyXG5pbXBvcnQgeyBHYW1lTGF5b3V0IH0gZnJvbSAnLi91aS9nYW1lLWxheW91dCc7XHJcbmltcG9ydCB7IEJhY2tMaW5rIH0gZnJvbSAnLi91aS9iYWNrLWxpbmsnO1xyXG5pbXBvcnQgeyBHYW1lVGl0bGUgfSBmcm9tICcuL3VpL2dhbWUtdGl0bGUnO1xyXG5pbXBvcnQgeyBHYW1lSW5mbyB9IGZyb20gJy4vdWkvZ2FtZS1pbmZvJztcclxuaW1wb3J0IHsgUExBWUVSUyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gJy4vcGxheWVyLWluZm8nO1xyXG5pbXBvcnQgeyBHYW1lTW92ZUluZm99IGZyb20gJy4vdWkvZ2FtZS1tb3ZlLWluZm8nO1xyXG5pbXBvcnQgeyBHYW1lQ2VsbCB9IGZyb20gJy4vdWkvZ2FtZS1jZWxsJztcclxuaW1wb3J0IHsgR0FNRV9TVEFURV9BQ1RJT05TLCB1c2VHYW1lU3RhdGUgfSBmcm9tICcuL21vZGVsL3VzZS1nYW1lLXN0YXRlJztcclxuaW1wb3J0IHsgR2FtZU92ZXJNb2RhbCB9IGZyb20gJy4vdWkvZ2FtZS1vdmVyLW1vZGFsJztcclxuXHJcbmNvbnN0IFBMQVlFUlNfQ09VTlQgPSA0O1xyXG5cclxuaW5pdEdhbWVTdGF0ZVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdhbWUoKSB7XHJcbiAgICBjb25zdCBbZ2FtZVN0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKFxyXG4gICAgICAgIGdhbWVTdGF0ZVJlZHVjZXIsIFxyXG4gICAgICAgIHtwbGF5ZXJzQ291bnQ6IFBMQVlFUlNfQ09VTlQsIGRlZmF1bHRUaW1lcjogNjAwMDAsIGN1cnJlbnRNb3ZlU3RhcnQ6IERhdGUubm93KCl9LCBcclxuICAgICAgICBpbml0R2FtZVN0YXRlXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHdpbm5lclNlcXVlbmNlID0gY29tcHV0ZVdpbm5lcihnYW1lU3RhdGUpO1xyXG5cdC8v0YHQvtGB0YLQvtGP0L3QuNC1INC60LDQutC+0Lkg0YHQu9C10LTRg9GO0YnQuNC5INGF0L7QtC4g0J3QtSDQt9Cw0LLQvtC00LjQvCDQutC+0L/QuNGOINGB0L7RgdGC0L7Rj9C90LjRjyBjdXJyZW50TW92ZSwg0LAg0YDQsNGB0YfQuNGC0YvQstCw0LXQvCDQv9GA0Y/QvNC+INC/0YDQuCDRgNC10L3QtNC10YDQtS5cclxuXHRjb25zdCBuZXh0TW92ZSA9IGdldE5leHRNb3ZlKGdhbWVTdGF0ZSk7XHJcbiAgICBjb25zdCB3aW5uZXJTeW1ib2wgPSBjb21wdXRlV2lubmVyU3ltYm9sKGdhbWVTdGF0ZSwge3dpbm5lclNlcXVlbmNlLCBuZXh0TW92ZX0pO1xyXG4gICAgY29uc3Qgd2lubmVyUGxheWVyID0gUExBWUVSUy5maW5kKHBsYXllciA9PiBwbGF5ZXIuc3ltYm9sID09PSB3aW5uZXJTeW1ib2wpO1xyXG5cclxuICAgIGNvbnN0IHsgY2VsbHMsIGN1cnJlbnRNb3ZlfSA9IGdhbWVTdGF0ZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPEdhbWVMYXlvdXQgXHJcbiAgICAgICAgICAgIGJhY2tMaW5rPXs8QmFja0xpbmsgLz59IFxyXG4gICAgICAgICAgICB0aXRsZT17PEdhbWVUaXRsZSAvPn0gXHJcbiAgICAgICAgICAgIGdhbWVJbmZvPXs8R2FtZUluZm8gaXNSYXRpbmdHYW1lIHBsYXllcnNDb3VudD17NH0gdGltZU1vZGU9eycxINC80LjQvS4g0L3QsCDRhdC+0LQnfSAvPn0gXHJcbiAgICAgICAgICAgIHBsYXllcnNMaXN0PXtcclxuICAgICAgICAgICAgICAgIFBMQVlFUlMuc2xpY2UoMCwgUExBWUVSU19DT1VOVCkubWFwKChwbGF5ZXIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qge3RpbWVyLCB0aW1lclN0YXJ0QXR9ID0gY29tcHV0ZVBsYXllclRpbWVyKGdhbWVTdGF0ZSwgcGxheWVyLnN5bWJvbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFBsYXllckluZm8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cGxheWVyLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9e3BsYXllci5hdmF0YXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhdGluZz17cGxheWVyLnJhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17cGxheWVyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbD17cGxheWVyLnN5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNSaWdodD17aW5kZXggJSAyID09PSAxfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgZ2FtZU1vdmVJbmZvPXs8R2FtZU1vdmVJbmZvIGN1cnJlbnRNb3ZlPXtjdXJyZW50TW92ZX0gbmV4dE1vdmU9e25leHRNb3ZlfS8+fVxyXG4gICAgICAgICAgICBnYW1lQ2VsbHM9e2NlbGxzLm1hcCgoY2VsbCwgaW5kZXgpID0+IDxHYW1lQ2VsbCBcclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBpc1dpbm5lcj17d2lubmVyU2VxdWVuY2U/LmluY2x1ZGVzKGluZGV4KX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshIXdpbm5lclN5bWJvbH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEdBTUVfU1RBVEVfQUNUSU9OUy5DRUxMX0NMSUNLLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm93OiBEYXRlLm5vdygpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc3ltYm9sPXtjZWxsfVxyXG4gICAgICAgICAgICAvPil9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8R2FtZU92ZXJNb2RhbCBcclxuICAgICAgICAgICAgd2lubmVyTmFtZT17d2lubmVyUGxheWVyPy5uYW1lfVxyXG4gICAgICAgICAgICBwbGF5ZXJzPXtQTEFZRVJTLnNsaWNlKDAsIFBMQVlFUlNfQ09VTlQpLm1hcCgocGxheWVyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxQbGF5ZXJJbmZvIFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17cGxheWVyLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhcj17cGxheWVyLmF2YXRhcn1cclxuICAgICAgICAgICAgICAgICAgICByYXRpbmc9e3BsYXllci5yYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17cGxheWVyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXI9e2dhbWVTdGF0ZS50aW1lcnNbcGxheWVyLnN5bWJvbF19XHJcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sPXtwbGF5ZXIuc3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzUmlnaHQ9e2luZGV4ICUgMiA9PT0gMX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSlcclxuICAgICAgICB9Lz5cclxuICAgIDwvPlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJHYW1lTGF5b3V0IiwiQmFja0xpbmsiLCJHYW1lVGl0bGUiLCJHYW1lSW5mbyIsIlBMQVlFUlMiLCJQbGF5ZXJJbmZvIiwiR2FtZU1vdmVJbmZvIiwiR2FtZUNlbGwiLCJHQU1FX1NUQVRFX0FDVElPTlMiLCJ1c2VHYW1lU3RhdGUiLCJHYW1lT3Zlck1vZGFsIiwiUExBWUVSU19DT1VOVCIsImluaXRHYW1lU3RhdGUiLCJHYW1lIiwiZ2FtZVN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIiwiZ2FtZVN0YXRlUmVkdWNlciIsInBsYXllcnNDb3VudCIsImRlZmF1bHRUaW1lciIsImN1cnJlbnRNb3ZlU3RhcnQiLCJEYXRlIiwibm93Iiwid2lubmVyU2VxdWVuY2UiLCJjb21wdXRlV2lubmVyIiwibmV4dE1vdmUiLCJnZXROZXh0TW92ZSIsIndpbm5lclN5bWJvbCIsImNvbXB1dGVXaW5uZXJTeW1ib2wiLCJ3aW5uZXJQbGF5ZXIiLCJmaW5kIiwicGxheWVyIiwic3ltYm9sIiwiY2VsbHMiLCJjdXJyZW50TW92ZSIsImJhY2tMaW5rIiwidGl0bGUiLCJnYW1lSW5mbyIsImlzUmF0aW5nR2FtZSIsInRpbWVNb2RlIiwicGxheWVyc0xpc3QiLCJzbGljZSIsIm1hcCIsImluZGV4IiwidGltZXIiLCJ0aW1lclN0YXJ0QXQiLCJjb21wdXRlUGxheWVyVGltZXIiLCJhdmF0YXIiLCJyYXRpbmciLCJuYW1lIiwiaXNSaWdodCIsImlkIiwiZ2FtZU1vdmVJbmZvIiwiZ2FtZUNlbGxzIiwiY2VsbCIsImlzV2lubmVyIiwiaW5jbHVkZXMiLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJ0eXBlIiwiQ0VMTF9DTElDSyIsIndpbm5lck5hbWUiLCJwbGF5ZXJzIiwidGltZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game-new/game.jsx\n"));

/***/ })

});