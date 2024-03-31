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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_game_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/game-layout */ \"./components/game-new/ui/game-layout.jsx\");\n/* harmony import */ var _ui_back_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/back-link */ \"./components/game-new/ui/back-link.jsx\");\n/* harmony import */ var _ui_game_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/game-title */ \"./components/game-new/ui/game-title.jsx\");\n/* harmony import */ var _ui_game_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/game-info */ \"./components/game-new/ui/game-info.jsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./components/game-new/constants.js\");\n/* harmony import */ var _player_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player-info */ \"./components/game-new/player-info.jsx\");\n/* harmony import */ var _ui_game_move_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/game-move-info */ \"./components/game-new/ui/game-move-info.jsx\");\n/* harmony import */ var _ui_game_cell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/game-cell */ \"./components/game-new/ui/game-cell.jsx\");\n/* harmony import */ var _model_use_game_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./model/use-game-state */ \"./components/game-new/model/use-game-state.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst PLAYERS_COUNT = 4;\nfunction Game() {\n    _s();\n    const { cells, currentMove, nextMove, handleCellClick, winnerSequence, winnerSymbol } = (0,_model_use_game_state__WEBPACK_IMPORTED_MODULE_9__.useGameState)(PLAYERS_COUNT);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_layout__WEBPACK_IMPORTED_MODULE_1__.GameLayout, {\n        backLink: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_back_link__WEBPACK_IMPORTED_MODULE_2__.BackLink, {}, void 0, false, {\n            fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n            lineNumber: 19,\n            columnNumber: 23\n        }, void 0),\n        title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_title__WEBPACK_IMPORTED_MODULE_3__.GameTitle, {}, void 0, false, {\n            fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n            lineNumber: 20,\n            columnNumber: 20\n        }, void 0),\n        gameInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_info__WEBPACK_IMPORTED_MODULE_4__.GameInfo, {\n            isRatingGame: true,\n            playersCount: 4,\n            timeMode: \"1 мин. на ход\"\n        }, void 0, false, {\n            fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n            lineNumber: 21,\n            columnNumber: 23\n        }, void 0),\n        playersList: _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS.map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_player_info__WEBPACK_IMPORTED_MODULE_6__.PlayerInfo, {\n                avatar: player.avatar,\n                rating: player.rating,\n                name: player.name,\n                seconds: 60,\n                symbol: player.symbol,\n                isRight: index % 2 === 1\n            }, player.id, false, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                lineNumber: 24,\n                columnNumber: 21\n            }, void 0)),\n        gameMoveInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_move_info__WEBPACK_IMPORTED_MODULE_7__.GameMoveInfo, {\n            currentMove: currentMove,\n            nextMove: nextMove\n        }, void 0, false, {\n            fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n            lineNumber: 34,\n            columnNumber: 27\n        }, void 0),\n        gameCells: cells.map((cell, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_cell__WEBPACK_IMPORTED_MODULE_8__.GameCell, {\n                isWinner: winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence.includes(index),\n                disabled: !!winnerSymbol,\n                onClick: ()=>{\n                    handleCellClick(index);\n                },\n                symbol: cell\n            }, index, false, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                lineNumber: 35,\n                columnNumber: 51\n            }, void 0))\n    }, void 0, false, {\n        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, this);\n}\n_s(Game, \"5y1pJ3ywNKs7s5vlQoRdk5vfIXI=\", false, function() {\n    return [\n        _model_use_game_state__WEBPACK_IMPORTED_MODULE_9__.useGameState\n    ];\n});\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L2dhbWUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ0o7QUFDRTtBQUNGO0FBQ0o7QUFDSztBQUNPO0FBQ1I7QUFDWTtBQUV0RCxNQUFNUyxnQkFBZ0I7QUFFZixTQUFTQzs7SUFFWixNQUFNLEVBQUNDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxRQUFRLEVBQUVDLGVBQWUsRUFBRUMsY0FBYyxFQUFFQyxZQUFZLEVBQUMsR0FBR1IsbUVBQVlBLENBQUNDO0lBRW5HLHFCQUNJLDhEQUFDVCx1REFBVUE7UUFDUGlCLHdCQUFVLDhEQUFDaEIsbURBQVFBOzs7OztRQUNuQmlCLHFCQUFPLDhEQUFDaEIscURBQVNBOzs7OztRQUNqQmlCLHdCQUFVLDhEQUFDaEIsbURBQVFBO1lBQUNpQixZQUFZO1lBQUNDLGNBQWM7WUFBR0MsVUFBVTs7Ozs7O1FBQzVEQyxhQUNJbkIsK0NBQU9BLENBQUNvQixHQUFHLENBQUMsQ0FBQ0MsUUFBUUMsc0JBQ2pCLDhEQUFDckIsb0RBQVVBO2dCQUVYc0IsUUFBUUYsT0FBT0UsTUFBTTtnQkFDckJDLFFBQVFILE9BQU9HLE1BQU07Z0JBQ3JCQyxNQUFNSixPQUFPSSxJQUFJO2dCQUNqQkMsU0FBUztnQkFDVEMsUUFBUU4sT0FBT00sTUFBTTtnQkFDckJDLFNBQVNOLFFBQVEsTUFBTTtlQU5sQkQsT0FBT1EsRUFBRTs7Ozs7UUFTdEJDLDRCQUFjLDhEQUFDNUIsNERBQVlBO1lBQUNNLGFBQWFBO1lBQWFDLFVBQVVBOzs7Ozs7UUFDaEVzQixXQUFXeEIsTUFBTWEsR0FBRyxDQUFDLENBQUNZLE1BQU1WLHNCQUFVLDhEQUFDbkIsbURBQVFBO2dCQUUzQzhCLFFBQVEsRUFBRXRCLDJCQUFBQSxxQ0FBQUEsZUFBZ0J1QixRQUFRLENBQUNaO2dCQUNuQ2EsVUFBVSxDQUFDLENBQUN2QjtnQkFDWndCLFNBQVM7b0JBQ1QxQixnQkFBZ0JZO2dCQUNoQjtnQkFDQUssUUFBUUs7ZUFOSFY7Ozs7Ozs7Ozs7QUFVckI7R0FqQ2dCaEI7O1FBRTBFRiwrREFBWUE7OztLQUZ0RkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lLW5ldy9nYW1lLmpzeD9lNDJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVMYXlvdXQgfSBmcm9tICcuL3VpL2dhbWUtbGF5b3V0JztcclxuaW1wb3J0IHsgQmFja0xpbmsgfSBmcm9tICcuL3VpL2JhY2stbGluayc7XHJcbmltcG9ydCB7IEdhbWVUaXRsZSB9IGZyb20gJy4vdWkvZ2FtZS10aXRsZSc7XHJcbmltcG9ydCB7IEdhbWVJbmZvIH0gZnJvbSAnLi91aS9nYW1lLWluZm8nO1xyXG5pbXBvcnQgeyBQTEFZRVJTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSAnLi9wbGF5ZXItaW5mbyc7XHJcbmltcG9ydCB7IEdhbWVNb3ZlSW5mb30gZnJvbSAnLi91aS9nYW1lLW1vdmUtaW5mbyc7XHJcbmltcG9ydCB7IEdhbWVDZWxsIH0gZnJvbSAnLi91aS9nYW1lLWNlbGwnO1xyXG5pbXBvcnQgeyB1c2VHYW1lU3RhdGUgfSBmcm9tICcuL21vZGVsL3VzZS1nYW1lLXN0YXRlJztcclxuXHJcbmNvbnN0IFBMQVlFUlNfQ09VTlQgPSA0O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdhbWUoKSB7XHJcblxyXG4gICAgY29uc3Qge2NlbGxzLCBjdXJyZW50TW92ZSwgbmV4dE1vdmUsIGhhbmRsZUNlbGxDbGljaywgd2lubmVyU2VxdWVuY2UsIHdpbm5lclN5bWJvbH0gPSB1c2VHYW1lU3RhdGUoUExBWUVSU19DT1VOVCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8R2FtZUxheW91dCBcclxuICAgICAgICAgICAgYmFja0xpbms9ezxCYWNrTGluayAvPn0gXHJcbiAgICAgICAgICAgIHRpdGxlPXs8R2FtZVRpdGxlIC8+fSBcclxuICAgICAgICAgICAgZ2FtZUluZm89ezxHYW1lSW5mbyBpc1JhdGluZ0dhbWUgcGxheWVyc0NvdW50PXs0fSB0aW1lTW9kZT17JzEg0LzQuNC9LiDQvdCwINGF0L7QtCd9IC8+fSBcclxuICAgICAgICAgICAgcGxheWVyc0xpc3Q9e1xyXG4gICAgICAgICAgICAgICAgUExBWUVSUy5tYXAoKHBsYXllciwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8UGxheWVySW5mbyBcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e3BsYXllci5pZH1cclxuICAgICAgICAgICAgICAgICAgICBhdmF0YXI9e3BsYXllci5hdmF0YXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgcmF0aW5nPXtwbGF5ZXIucmF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e3BsYXllci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZHM9ezYwfVxyXG4gICAgICAgICAgICAgICAgICAgIHN5bWJvbD17cGxheWVyLnN5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgICBpc1JpZ2h0PXtpbmRleCAlIDIgPT09IDF9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICBnYW1lTW92ZUluZm89ezxHYW1lTW92ZUluZm8gY3VycmVudE1vdmU9e2N1cnJlbnRNb3ZlfSBuZXh0TW92ZT17bmV4dE1vdmV9Lz59XHJcbiAgICAgICAgICAgIGdhbWVDZWxscz17Y2VsbHMubWFwKChjZWxsLCBpbmRleCkgPT4gPEdhbWVDZWxsIFxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIGlzV2lubmVyPXt3aW5uZXJTZXF1ZW5jZT8uaW5jbHVkZXMoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyEhd2lubmVyU3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2VsbENsaWNrKGluZGV4KTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzeW1ib2w9e2NlbGx9XHJcbiAgICAgICAgICAgIC8+KX1cclxuICAgICAgICAvPlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJHYW1lTGF5b3V0IiwiQmFja0xpbmsiLCJHYW1lVGl0bGUiLCJHYW1lSW5mbyIsIlBMQVlFUlMiLCJQbGF5ZXJJbmZvIiwiR2FtZU1vdmVJbmZvIiwiR2FtZUNlbGwiLCJ1c2VHYW1lU3RhdGUiLCJQTEFZRVJTX0NPVU5UIiwiR2FtZSIsImNlbGxzIiwiY3VycmVudE1vdmUiLCJuZXh0TW92ZSIsImhhbmRsZUNlbGxDbGljayIsIndpbm5lclNlcXVlbmNlIiwid2lubmVyU3ltYm9sIiwiYmFja0xpbmsiLCJ0aXRsZSIsImdhbWVJbmZvIiwiaXNSYXRpbmdHYW1lIiwicGxheWVyc0NvdW50IiwidGltZU1vZGUiLCJwbGF5ZXJzTGlzdCIsIm1hcCIsInBsYXllciIsImluZGV4IiwiYXZhdGFyIiwicmF0aW5nIiwibmFtZSIsInNlY29uZHMiLCJzeW1ib2wiLCJpc1JpZ2h0IiwiaWQiLCJnYW1lTW92ZUluZm8iLCJnYW1lQ2VsbHMiLCJjZWxsIiwiaXNXaW5uZXIiLCJpbmNsdWRlcyIsImRpc2FibGVkIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game-new/game.jsx\n"));

/***/ })

});