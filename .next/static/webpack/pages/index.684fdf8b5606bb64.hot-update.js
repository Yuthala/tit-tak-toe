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

/***/ "./components/game/game-info.jsx":
/*!***************************************!*\
  !*** ./components/game/game-info.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameInfo: function() { return /* binding */ GameInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile */ \"./components/profile/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _icons_cross_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/cross-icon */ \"./components/game/icons/cross-icon.jsx\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-symbol */ \"./components/game/game-symbol.jsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\n/* harmony import */ var _images_avatar_1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/avatar-1.png */ \"./components/game/images/avatar-1.png\");\n/* harmony import */ var _images_avatar_2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/avatar-2.png */ \"./components/game/images/avatar-2.png\");\n/* harmony import */ var _images_avatar_3_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/avatar-3.png */ \"./components/game/images/avatar-3.png\");\n/* harmony import */ var _images_avatar_4_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/avatar-4.png */ \"./components/game/images/avatar-4.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst players = [\n    {\n        id: 1,\n        name: \"User 1505\",\n        rating: \"1230\",\n        avatar: _images_avatar_1_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_6__.GAME_SYMBOLS.CROSS\n    },\n    {\n        id: 2,\n        name: \"User 1645849680923460\",\n        rating: \"850\",\n        avatar: _images_avatar_2_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_6__.GAME_SYMBOLS.ZERO\n    },\n    {\n        id: 3,\n        name: \"User 2390\",\n        rating: \"56\",\n        avatar: _images_avatar_3_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_6__.GAME_SYMBOLS.TRIANGLE\n    },\n    {\n        id: 4,\n        name: \"User 1630\",\n        rating: \"2512\",\n        avatar: _images_avatar_4_png__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_6__.GAME_SYMBOLS.SQUARE\n    }\n];\nfunction GameInfo(param) {\n    let { className, playersCount } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 py-4 justify-between grid grid-cols-2 gap-12\"),\n        children: players.slice(0, playersCount).map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerInfo, {\n                playerInfo: player,\n                isRight: index % 2 === 1\n            }, player.id, false, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 48,\n                columnNumber: 5\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-info.jsx\",\n        lineNumber: 45,\n        columnNumber: 3\n    }, this);\n}\n_c = GameInfo;\nfunction PlayerInfo(param) {\n    let { playerInfo, isRight } = param;\n    _s();\n    //состояние таймера\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(66);\n    //строковое представление минут\n    const minutesString = String(Math.floor(seconds / 60)).padStart(2, \"0\");\n    //строковое представление секунд\n    const secondsString = String(Math.floor(seconds % 60)).padStart(2, \"0\");\n    //флаг окончания времени на ход (осталось <10 сек)\n    const isDanger = seconds < 10;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"relative\", isRight && \"order-3\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_profile__WEBPACK_IMPORTED_MODULE_2__.Profile, {\n                        className: \"w-44\",\n                        name: playerInfo.name,\n                        rating: playerInfo.rating,\n                        avatar: playerInfo.avatar\n                    }, void 0, false, {\n                        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-info.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_5__.GameSymbol, {\n                            symbol: playerInfo.symbol\n                        }, void 0, false, {\n                            fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-info.jsx\",\n                            lineNumber: 81,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-info.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 73,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"h-6 w-px bg-slate-200\", isRight && \"order-2\")\n            }, void 0, false, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 84,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"text-lg font-semibold\", isRight && \"order-1\", isDanger ? \"text-orange-600\" : \"text-slate-900\"),\n                children: [\n                    minutesString,\n                    \":\",\n                    secondsString\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 85,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-info.jsx\",\n        lineNumber: 72,\n        columnNumber: 4\n    }, this);\n}\n_s(PlayerInfo, \"V2ihls6HEP5QVu1PdHjDCS0+ucI=\");\n_c1 = PlayerInfo;\nvar _c, _c1;\n$RefreshReg$(_c, \"GameInfo\");\n$RefreshReg$(_c1, \"PlayerInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1pbmZvLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdCO0FBQ1k7QUFDTDtBQUNnQjtBQUNKO0FBQ0E7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUUvQyxNQUFNVSxVQUFVO0lBQ2Y7UUFDQ0MsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLFFBQVE7UUFDUkMsUUFBUVIsNERBQVVBO1FBQ2xCUyxRQUFRVixvREFBWUEsQ0FBQ1csS0FBSztJQUMzQjtJQUNDO1FBQ0FMLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLFFBQVFQLDREQUFVQTtRQUNsQlEsUUFBUVYsb0RBQVlBLENBQUNZLElBQUk7SUFDMUI7SUFDQztRQUNBTixJQUFJO1FBQ0pDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxRQUFRTiw0REFBVUE7UUFDbEJPLFFBQVFWLG9EQUFZQSxDQUFDYSxRQUFRO0lBQzlCO0lBQ0M7UUFDQVAsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLFFBQVE7UUFDUkMsUUFBUUwsNkRBQVVBO1FBQ2xCTSxRQUFRVixvREFBWUEsQ0FBQ2MsTUFBTTtJQUM1QjtDQUNBO0FBRU0sU0FBU0MsU0FBUyxLQUF5QjtRQUF6QixFQUFDQyxTQUFTLEVBQUVDLFlBQVksRUFBQyxHQUF6QjtJQUN4QixxQkFDQyw4REFBQ0M7UUFBSUYsV0FBV3JCLGdEQUFJQSxDQUFDcUIsV0FBVztrQkFFOUJYLFFBQVFjLEtBQUssQ0FBQyxHQUFHRixjQUFjRyxHQUFHLENBQUMsQ0FBQ0MsUUFBUUMsc0JBQzVDLDhEQUFDQztnQkFFQUMsWUFBWUg7Z0JBQ1pJLFNBQVNILFFBQVEsTUFBTTtlQUZsQkQsT0FBT2YsRUFBRTs7Ozs7Ozs7OztBQVNuQjtLQWZnQlM7QUFpQmhCLFNBQVNRLFdBQVcsS0FBdUI7UUFBdkIsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUUsR0FBdkI7O0lBQ25CLG1CQUFtQjtJQUNuQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBRzlCLCtDQUFRQSxDQUFDO0lBQ3ZDLCtCQUErQjtJQUMvQixNQUFNK0IsZ0JBQWdCQyxPQUFPQyxLQUFLQyxLQUFLLENBQUNMLFVBQVUsS0FBS00sUUFBUSxDQUFDLEdBQUc7SUFDbkUsZ0NBQWdDO0lBQ2hDLE1BQU1DLGdCQUFnQkosT0FBT0MsS0FBS0MsS0FBSyxDQUFDTCxVQUFVLEtBQUtNLFFBQVEsQ0FBQyxHQUFHO0lBRW5FLGtEQUFrRDtJQUNsRCxNQUFNRSxXQUFXUixVQUFVO0lBRTNCLHFCQUNFLDhEQUFDUjtRQUFJRixXQUFVOzswQkFDZCw4REFBQ0U7Z0JBQUlGLFdBQVdyQixnREFBSUEsQ0FBQyxZQUFZOEIsV0FBVzs7a0NBQzNDLDhEQUFDN0IsNkNBQU9BO3dCQUNQb0IsV0FBVTt3QkFDVlQsTUFBTWlCLFdBQVdqQixJQUFJO3dCQUNyQkMsUUFBUWdCLFdBQVdoQixNQUFNO3dCQUN6QkMsUUFBUWUsV0FBV2YsTUFBTTs7Ozs7O2tDQUUxQiw4REFBQ1M7d0JBQUlGLFdBQVU7a0NBQ2QsNEVBQUNqQixvREFBVUE7NEJBQUNXLFFBQVFjLFdBQVdkLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUd2Qyw4REFBQ1E7Z0JBQUlGLFdBQVdyQixnREFBSUEsQ0FBQyx5QkFBeUI4QixXQUFXOzs7Ozs7MEJBQ3pELDhEQUFDUDtnQkFBSUYsV0FBV3JCLGdEQUFJQSxDQUFDLHlCQUF5QjhCLFdBQVcsV0FBV1MsV0FBVyxvQkFBb0I7O29CQUNqR047b0JBQWM7b0JBQUVLOzs7Ozs7Ozs7Ozs7O0FBSXRCO0dBOUJTVjtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1pbmZvLmpzeD9kMDQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgeyBQcm9maWxlfSBmcm9tICcuLi9wcm9maWxlJztcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDcm9zc0ljb24gfSBmcm9tICcuL2ljb25zL2Nyb3NzLWljb24nO1xyXG5pbXBvcnQgeyBHYW1lU3ltYm9sIH0gZnJvbSAnLi9nYW1lLXN5bWJvbCc7XHJcbmltcG9ydCB7IEdBTUVfU1lNQk9MUyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IGF2YXRhclNyYzEgZnJvbSAnLi9pbWFnZXMvYXZhdGFyLTEucG5nJztcclxuaW1wb3J0IGF2YXRhclNyYzIgZnJvbSAnLi9pbWFnZXMvYXZhdGFyLTIucG5nJztcclxuaW1wb3J0IGF2YXRhclNyYzMgZnJvbSAnLi9pbWFnZXMvYXZhdGFyLTMucG5nJztcclxuaW1wb3J0IGF2YXRhclNyYzQgZnJvbSAnLi9pbWFnZXMvYXZhdGFyLTQucG5nJztcclxuIFxyXG5jb25zdCBwbGF5ZXJzID0gW1xyXG5cdHtcclxuXHRcdGlkOiAxLFxyXG5cdFx0bmFtZTogJ1VzZXIgMTUwNScsIFxyXG5cdFx0cmF0aW5nOiAnMTIzMCcsIFxyXG5cdFx0YXZhdGFyOiBhdmF0YXJTcmMxLCBcclxuXHRcdHN5bWJvbDogR0FNRV9TWU1CT0xTLkNST1NTXHJcblx0fSxcclxuXHRcdHtcclxuXHRcdGlkOiAyLFxyXG5cdFx0bmFtZTogJ1VzZXIgMTY0NTg0OTY4MDkyMzQ2MCcsIFxyXG5cdFx0cmF0aW5nOiAnODUwJywgXHJcblx0XHRhdmF0YXI6IGF2YXRhclNyYzIsIFxyXG5cdFx0c3ltYm9sOiBHQU1FX1NZTUJPTFMuWkVST1xyXG5cdH0sXHJcblx0XHR7XHJcblx0XHRpZDogMyxcclxuXHRcdG5hbWU6ICdVc2VyIDIzOTAnLCBcclxuXHRcdHJhdGluZzogJzU2JywgXHJcblx0XHRhdmF0YXI6IGF2YXRhclNyYzMsIFxyXG5cdFx0c3ltYm9sOiBHQU1FX1NZTUJPTFMuVFJJQU5HTEVcclxuXHR9LFxyXG5cdFx0e1xyXG5cdFx0aWQ6IDQsXHJcblx0XHRuYW1lOiAnVXNlciAxNjMwJywgXHJcblx0XHRyYXRpbmc6ICcyNTEyJywgXHJcblx0XHRhdmF0YXI6IGF2YXRhclNyYzQsIFxyXG5cdFx0c3ltYm9sOiBHQU1FX1NZTUJPTFMuU1FVQVJFXHJcblx0fVxyXG5dO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdhbWVJbmZvKHtjbGFzc05hbWUsIHBsYXllcnNDb3VudH0pIHtcclxuXHRyZXR1cm4oXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc05hbWUsIFwiYmctd2hpdGUgcm91bmRlZC0yeGwgc2hhZG93LW1kIHB4LTggcHktNCBqdXN0aWZ5LWJldHdlZW4gZ3JpZCBncmlkLWNvbHMtMiBnYXAtMTJcIil9PlxyXG5cclxuXHRcdFx0e3BsYXllcnMuc2xpY2UoMCwgcGxheWVyc0NvdW50KS5tYXAoKHBsYXllciwgaW5kZXgpID0+IChcclxuXHRcdFx0XHQ8UGxheWVySW5mbyBcclxuXHRcdFx0XHRcdGtleT17cGxheWVyLmlkfVxyXG5cdFx0XHRcdFx0cGxheWVySW5mbz17cGxheWVyfVxyXG5cdFx0XHRcdFx0aXNSaWdodD17aW5kZXggJSAyID09PSAxfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdCkpfVxyXG5cclxuXHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBQbGF5ZXJJbmZvKHsgcGxheWVySW5mbywgaXNSaWdodCB9KSB7XHJcblx0Ly/RgdC+0YHRgtC+0Y/QvdC40LUg0YLQsNC50LzQtdGA0LBcclxuXHRjb25zdCBbc2Vjb25kcywgc2V0U2Vjb25kc10gPSB1c2VTdGF0ZSg2Nik7XHJcblx0Ly/RgdGC0YDQvtC60L7QstC+0LUg0L/RgNC10LTRgdGC0LDQstC70LXQvdC40LUg0LzQuNC90YPRglxyXG5cdGNvbnN0IG1pbnV0ZXNTdHJpbmcgPSBTdHJpbmcoTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApKS5wYWRTdGFydCgyLCBcIjBcIik7XHJcblx0Ly/RgdGC0YDQvtC60L7QstC+0LUg0L/RgNC10LTRgdGC0LDQstC70LXQvdC40LUg0YHQtdC60YPQvdC0XHJcblx0Y29uc3Qgc2Vjb25kc1N0cmluZyA9IFN0cmluZyhNYXRoLmZsb29yKHNlY29uZHMgJSA2MCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcclxuXHJcblx0Ly/RhNC70LDQsyDQvtC60L7QvdGH0LDQvdC40Y8g0LLRgNC10LzQtdC90Lgg0L3QsCDRhdC+0LQgKNC+0YHRgtCw0LvQvtGB0YwgPDEwINGB0LXQuilcclxuXHRjb25zdCBpc0RhbmdlciA9IHNlY29uZHMgPCAxMDtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zIGl0ZW1zLWNlbnRlclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbHN4KFwicmVsYXRpdmVcIiwgaXNSaWdodCAmJiBcIm9yZGVyLTNcIil9PlxyXG5cdFx0XHRcdFx0PFByb2ZpbGUgXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctNDRcIlxyXG5cdFx0XHRcdFx0XHRuYW1lPXtwbGF5ZXJJbmZvLm5hbWV9IFxyXG5cdFx0XHRcdFx0XHRyYXRpbmc9e3BsYXllckluZm8ucmF0aW5nfSBcclxuXHRcdFx0XHRcdFx0YXZhdGFyPXtwbGF5ZXJJbmZvLmF2YXRhcn1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctNSBoLTUgcm91bmRlZC1mdWxsIGJnLXdoaXRlIHNoYWRvdyBhYnNvbHV0ZSAtbGVmdC0xIC10b3AtMSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHQ8R2FtZVN5bWJvbCBzeW1ib2w9e3BsYXllckluZm8uc3ltYm9sfSAvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Nsc3goXCJoLTYgdy1weCBiZy1zbGF0ZS0yMDBcIiwgaXNSaWdodCAmJiBcIm9yZGVyLTJcIil9PjwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbHN4KFwidGV4dC1sZyBmb250LXNlbWlib2xkXCIsIGlzUmlnaHQgJiYgXCJvcmRlci0xXCIsIGlzRGFuZ2VyID8gXCJ0ZXh0LW9yYW5nZS02MDBcIiA6IFwidGV4dC1zbGF0ZS05MDBcIil9PlxyXG5cdFx0XHRcdFx0e21pbnV0ZXNTdHJpbmd9OntzZWNvbmRzU3RyaW5nfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHQpXHJcbn0iXSwibmFtZXMiOlsiY2xzeCIsIlByb2ZpbGUiLCJ1c2VTdGF0ZSIsIkNyb3NzSWNvbiIsIkdhbWVTeW1ib2wiLCJHQU1FX1NZTUJPTFMiLCJhdmF0YXJTcmMxIiwiYXZhdGFyU3JjMiIsImF2YXRhclNyYzMiLCJhdmF0YXJTcmM0IiwicGxheWVycyIsImlkIiwibmFtZSIsInJhdGluZyIsImF2YXRhciIsInN5bWJvbCIsIkNST1NTIiwiWkVSTyIsIlRSSUFOR0xFIiwiU1FVQVJFIiwiR2FtZUluZm8iLCJjbGFzc05hbWUiLCJwbGF5ZXJzQ291bnQiLCJkaXYiLCJzbGljZSIsIm1hcCIsInBsYXllciIsImluZGV4IiwiUGxheWVySW5mbyIsInBsYXllckluZm8iLCJpc1JpZ2h0Iiwic2Vjb25kcyIsInNldFNlY29uZHMiLCJtaW51dGVzU3RyaW5nIiwiU3RyaW5nIiwiTWF0aCIsImZsb29yIiwicGFkU3RhcnQiLCJzZWNvbmRzU3RyaW5nIiwiaXNEYW5nZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/game-info.jsx\n"));

/***/ })

});