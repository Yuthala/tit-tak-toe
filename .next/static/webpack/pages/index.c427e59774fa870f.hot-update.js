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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_game_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/game-layout */ \"./components/game-new/ui/game-layout.jsx\");\n/* harmony import */ var _ui_back_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/back-link */ \"./components/game-new/ui/back-link.jsx\");\n/* harmony import */ var _ui_game_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/game-title */ \"./components/game-new/ui/game-title.jsx\");\n/* harmony import */ var _ui_game_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/game-info */ \"./components/game-new/ui/game-info.jsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./components/game-new/constants.js\");\n/* harmony import */ var _player_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player-info */ \"./components/game-new/player-info.jsx\");\n/* harmony import */ var _ui_game_move_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/game-move-info */ \"./components/game-new/ui/game-move-info.jsx\");\n\n\n\n\n\n\n\n\nfunction Game() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_layout__WEBPACK_IMPORTED_MODULE_1__.GameLayout, {\n        backLink: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_back_link__WEBPACK_IMPORTED_MODULE_2__.BackLink, {}, void 0, false, {\n            fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n            lineNumber: 12,\n            columnNumber: 23\n        }, void 0),\n        title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_title__WEBPACK_IMPORTED_MODULE_3__.GameTitle, {}, void 0, false, {\n            fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n            lineNumber: 13,\n            columnNumber: 20\n        }, void 0),\n        gameInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_info__WEBPACK_IMPORTED_MODULE_4__.GameInfo, {\n            isRatingGame: true,\n            playersCount: 4,\n            timeMode: \"1 мин. на ход\"\n        }, void 0, false, {\n            fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n            lineNumber: 14,\n            columnNumber: 23\n        }, void 0),\n        playersList: _constants__WEBPACK_IMPORTED_MODULE_5__.PLAYERS.map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_player_info__WEBPACK_IMPORTED_MODULE_6__.PlayerInfo, {\n                avatar: player.avatar,\n                rating: player.rating,\n                name: player.name,\n                seconds: 60,\n                symbol: player.symbol,\n                isRight: index % 2 === 1\n            }, player.id, false, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n                lineNumber: 17,\n                columnNumber: 21\n            }, void 0)),\n        gameMoveInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameMoveInfo, {}, void 0, false, {\n            fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n            lineNumber: 27,\n            columnNumber: 27\n        }, void 0)\n    }, void 0, false, {\n        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this);\n}\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L2dhbWUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ0o7QUFDRTtBQUNGO0FBQ0o7QUFDSztBQUNPO0FBRTNDLFNBQVNPO0lBQ1oscUJBQ0ksOERBQUNQLHVEQUFVQTtRQUNQUSx3QkFBVSw4REFBQ1AsbURBQVFBOzs7OztRQUNuQlEscUJBQU8sOERBQUNQLHFEQUFTQTs7Ozs7UUFDakJRLHdCQUFVLDhEQUFDUCxtREFBUUE7WUFBQ1EsWUFBWTtZQUFDQyxjQUFjO1lBQUdDLFVBQVU7Ozs7OztRQUM1REMsYUFDSVYsK0NBQU9BLENBQUNXLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQyxzQkFDakIsOERBQUNaLG9EQUFVQTtnQkFFWGEsUUFBUUYsT0FBT0UsTUFBTTtnQkFDckJDLFFBQVFILE9BQU9HLE1BQU07Z0JBQ3JCQyxNQUFNSixPQUFPSSxJQUFJO2dCQUNqQkMsU0FBUztnQkFDVEMsUUFBUU4sT0FBT00sTUFBTTtnQkFDckJDLFNBQVNOLFFBQVEsTUFBSztlQU5qQkQsT0FBT1EsRUFBRTs7Ozs7UUFTdEJsQiw0QkFBYyw4REFBQ21COzs7Ozs7Ozs7O0FBSTNCO0tBdEJnQmxCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS1uZXcvZ2FtZS5qc3g/ZTQyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lTGF5b3V0IH0gZnJvbSAnLi91aS9nYW1lLWxheW91dCc7XHJcbmltcG9ydCB7IEJhY2tMaW5rIH0gZnJvbSAnLi91aS9iYWNrLWxpbmsnO1xyXG5pbXBvcnQgeyBHYW1lVGl0bGUgfSBmcm9tICcuL3VpL2dhbWUtdGl0bGUnO1xyXG5pbXBvcnQgeyBHYW1lSW5mbyB9IGZyb20gJy4vdWkvZ2FtZS1pbmZvJztcclxuaW1wb3J0IHsgUExBWUVSUyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gJy4vcGxheWVyLWluZm8nO1xyXG5pbXBvcnQgeyBnYW1lTW92ZUluZm99IGZyb20gJy4vdWkvZ2FtZS1tb3ZlLWluZm8nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdhbWUoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxHYW1lTGF5b3V0IFxyXG4gICAgICAgICAgICBiYWNrTGluaz17PEJhY2tMaW5rIC8+fSBcclxuICAgICAgICAgICAgdGl0bGU9ezxHYW1lVGl0bGUgLz59IFxyXG4gICAgICAgICAgICBnYW1lSW5mbz17PEdhbWVJbmZvIGlzUmF0aW5nR2FtZSBwbGF5ZXJzQ291bnQ9ezR9IHRpbWVNb2RlPXsnMSDQvNC40L0uINC90LAg0YXQvtC0J30gLz59IFxyXG4gICAgICAgICAgICBwbGF5ZXJzTGlzdD17XHJcbiAgICAgICAgICAgICAgICBQTEFZRVJTLm1hcCgocGxheWVyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxQbGF5ZXJJbmZvIFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17cGxheWVyLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhcj17cGxheWVyLmF2YXRhcn1cclxuICAgICAgICAgICAgICAgICAgICByYXRpbmc9e3BsYXllci5yYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17cGxheWVyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kcz17NjB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sPXtwbGF5ZXIuc3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzUmlnaHQ9e2luZGV4ICUgMiA9PT0xfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgZ2FtZU1vdmVJbmZvPXs8R2FtZU1vdmVJbmZvIC8+fVxyXG5cclxuICAgICAgICAvPlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJHYW1lTGF5b3V0IiwiQmFja0xpbmsiLCJHYW1lVGl0bGUiLCJHYW1lSW5mbyIsIlBMQVlFUlMiLCJQbGF5ZXJJbmZvIiwiZ2FtZU1vdmVJbmZvIiwiR2FtZSIsImJhY2tMaW5rIiwidGl0bGUiLCJnYW1lSW5mbyIsImlzUmF0aW5nR2FtZSIsInBsYXllcnNDb3VudCIsInRpbWVNb2RlIiwicGxheWVyc0xpc3QiLCJtYXAiLCJwbGF5ZXIiLCJpbmRleCIsImF2YXRhciIsInJhdGluZyIsIm5hbWUiLCJzZWNvbmRzIiwic3ltYm9sIiwiaXNSaWdodCIsImlkIiwiR2FtZU1vdmVJbmZvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game-new/game.jsx\n"));

/***/ }),

/***/ "./components/game-new/ui/game-move-info.jsx":
/*!***************************************************!*\
  !*** ./components/game-new/ui/game-move-info.jsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameMoveInfo: function() { return /* binding */ GameMoveInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n//компонент отображения информации о ходах\n\nfunction GameMoveInfo(param) {\n    let { actions, currentMove, nextMove } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center gap-1 text-xl leading-tight\",\n                children: [\n                    \"Ход: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameSymbol, {\n                        symbol: currentMove,\n                        className: \"w-5 h-5\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\ui\\\\game-move-info.jsx\",\n                        lineNumber: 6,\n                        columnNumber: 22\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\ui\\\\game-move-info.jsx\",\n                lineNumber: 5,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center gap-1 text-xs leading-tight text-slate-400\",\n                children: [\n                    \"Следующий: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameSymbol, {\n                        symbol: nextMove,\n                        className: \"w-3 h-3\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\ui\\\\game-move-info.jsx\",\n                        lineNumber: 9,\n                        columnNumber: 28\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\ui\\\\game-move-info.jsx\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = GameMoveInfo;\nvar _c;\n$RefreshReg$(_c, \"GameMoveInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L3VpL2dhbWUtbW92ZS1pbmZvLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSwwQ0FBMEM7O0FBQ25DLFNBQVNBLGFBQWEsS0FBZ0M7UUFBaEMsRUFBQ0MsT0FBTyxFQUFFQyxXQUFXLEVBQUVDLFFBQVEsRUFBQyxHQUFoQztJQUM1QixxQkFDTzs7MEJBQ0ksOERBQUNDO2dCQUFJQyxXQUFVOztvQkFBZ0Q7a0NBQ3RELDhEQUFDQzt3QkFBV0MsUUFBUUw7d0JBQWFHLFdBQVU7Ozs7Ozs7Ozs7OzswQkFFcEQsOERBQUNEO2dCQUFJQyxXQUFVOztvQkFBK0Q7a0NBQy9ELDhEQUFDQzt3QkFBV0MsUUFBUUo7d0JBQVVFLFdBQVU7Ozs7Ozs7Ozs7Ozs7O0FBSW5FO0tBWGdCTCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUtbmV3L3VpL2dhbWUtbW92ZS1pbmZvLmpzeD9hNzAxIl0sInNvdXJjZXNDb250ZW50IjpbIi8v0LrQvtC80L/QvtC90LXQvdGCINC+0YLQvtCx0YDQsNC20LXQvdC40Y8g0LjQvdGE0L7RgNC80LDRhtC40Lgg0L4g0YXQvtC00LDRhVxyXG5leHBvcnQgZnVuY3Rpb24gR2FtZU1vdmVJbmZvKHthY3Rpb25zLCBjdXJyZW50TW92ZSwgbmV4dE1vdmV9KSB7XHJcblx0cmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQteGwgbGVhZGluZy10aWdodFwiPlxyXG4gICAgICAgICAgICAgICAg0KXQvtC0OiA8R2FtZVN5bWJvbCBzeW1ib2w9e2N1cnJlbnRNb3ZlfSBjbGFzc05hbWU9XCJ3LTUgaC01XCIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LXhzIGxlYWRpbmctdGlnaHQgdGV4dC1zbGF0ZS00MDBcIj5cclxuICAgICAgICAgICAgICAgINCh0LvQtdC00YPRjtGJ0LjQuTogPEdhbWVTeW1ib2wgc3ltYm9sPXtuZXh0TW92ZX0gY2xhc3NOYW1lPVwidy0zIGgtM1wiLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcblx0KTtcclxufSJdLCJuYW1lcyI6WyJHYW1lTW92ZUluZm8iLCJhY3Rpb25zIiwiY3VycmVudE1vdmUiLCJuZXh0TW92ZSIsImRpdiIsImNsYXNzTmFtZSIsIkdhbWVTeW1ib2wiLCJzeW1ib2wiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game-new/ui/game-move-info.jsx\n"));

/***/ })

});