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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameInfo: function() { return /* binding */ GameInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile */ \"./components/profile/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _icons_cross_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/cross-icon */ \"./components/game/icons/cross-icon.jsx\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-symbol */ \"./components/game/game-symbol.jsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\n/* harmony import */ var _images_avatar_1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/avatar-1.png */ \"./components/game/images/avatar-1.png\");\n/* harmony import */ var _images_avatar_2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/avatar-2.png */ \"./components/game/images/avatar-2.png\");\n/* harmony import */ var _images_avatar_3_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/avatar-3.png */ \"./components/game/images/avatar-3.png\");\n/* harmony import */ var _images_avatar_4_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/avatar-4.png */ \"./components/game/images/avatar-4.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst players = [\n    {\n        id: 1,\n        name: \"User 1505\",\n        rating: \"1230\",\n        avatar: _images_avatar_1_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_6__.GAME_SYMBOLS.CROSS\n    },\n    {\n        id: 2,\n        name: \"User 1645849680923460\",\n        rating: \"850\",\n        avatar: _images_avatar_2_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_6__.GAME_SYMBOLS.ZERO\n    },\n    {\n        id: 3,\n        name: \"User 2390\",\n        rating: \"56\",\n        avatar: _images_avatar_3_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_6__.GAME_SYMBOLS.TRIANGLE\n    },\n    {\n        id: 4,\n        name: \"User 1630\",\n        rating: \"2512\",\n        avatar: _images_avatar_4_png__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_6__.GAME_SYMBOLS.SQUARE\n    }\n];\nfunction GameInfo(param) {\n    let { className, playersCount, currentMove, isWinner } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 py-4 justify-between grid grid-cols-2 gap-12\"),\n        children: players.slice(0, playersCount).map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerInfo, {\n                playerInfo: player,\n                isRight: index % 2 === 1,\n                isTimerRunning: currentMove === player.symbol\n            }, player.id, false, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 48,\n                columnNumber: 5\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-info.jsx\",\n        lineNumber: 45,\n        columnNumber: 3\n    }, this);\n}\n_c = GameInfo;\nfunction PlayerInfo(param) {\n    let { playerInfo, isRight, isTimerRunning } = param;\n    _s();\n    //состояние таймера\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(60);\n    //строковое представление минут\n    const minutesString = String(Math.floor(seconds / 60)).padStart(2, \"0\");\n    //строковое представление секунд\n    const secondsString = String(Math.floor(seconds % 60)).padStart(2, \"0\");\n    //флаг окончания времени на ход (осталось <10 сек)\n    const isDanger = seconds < 10;\n    //таймер\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (isTimerRunning) {\n            const interval = setInterval(()=>{\n                //когда s-1 станет равным 0, состояние компоненты перестанет меняться, и перерисовка useState перестанет происходить\n                setSeconds((s)=>Math.max(s - 1, 0));\n            }, 1000);\n            return ()=>{\n                clearInterval(interval);\n                setSeconds(60);\n            };\n        }\n    }, [\n        isTimerRunning\n    ]);\n    //функция изменения цвета таймера\n    const getTimerColor = ()=>{\n        if (isTimerRunning) {\n            return isDanger ? \"text-orange-600\" : \"text-slate-900\";\n        }\n        return \"text-slate-200\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"relative\", isRight && \"order-3\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_profile__WEBPACK_IMPORTED_MODULE_2__.Profile, {\n                        className: \"w-44\",\n                        name: playerInfo.name,\n                        rating: playerInfo.rating,\n                        avatar: playerInfo.avatar\n                    }, void 0, false, {\n                        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-info.jsx\",\n                        lineNumber: 98,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_5__.GameSymbol, {\n                            symbol: playerInfo.symbol\n                        }, void 0, false, {\n                            fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-info.jsx\",\n                            lineNumber: 105,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-info.jsx\",\n                        lineNumber: 104,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 97,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"h-6 w-px bg-slate-200\", isRight && \"order-2\")\n            }, void 0, false, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 108,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"text-lg font-semibold w-[60px]\", isRight && \"order-1\", getTimerColor()),\n                children: [\n                    minutesString,\n                    \":\",\n                    secondsString\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 109,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-info.jsx\",\n        lineNumber: 96,\n        columnNumber: 4\n    }, this);\n}\n_s(PlayerInfo, \"T5PhQ9L5KSVb8XiZCZPVWhaJCbk=\");\n_c1 = PlayerInfo;\nvar _c, _c1;\n$RefreshReg$(_c, \"GameInfo\");\n$RefreshReg$(_c1, \"PlayerInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUNVO2dCQUFJSixXQUFXdEIsZ0RBQUlBLENBQUMseUJBQXlCaUMsV0FBVzs7Ozs7OzBCQUN6RCw4REFBQ1A7Z0JBQUlKLFdBQVd0QixnREFBSUEsQ0FBQyxrQ0FBa0NpQyxXQUFXLFdBQVdnQjs7b0JBQzNFWjtvQkFBYztvQkFBRUs7Ozs7Ozs7Ozs7Ozs7QUFJdEI7R0FyRFNYO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS9nYW1lLWluZm8uanN4P2QwNDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCB7IFByb2ZpbGV9IGZyb20gJy4uL3Byb2ZpbGUnO1xyXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ3Jvc3NJY29uIH0gZnJvbSAnLi9pY29ucy9jcm9zcy1pY29uJztcclxuaW1wb3J0IHsgR2FtZVN5bWJvbCB9IGZyb20gJy4vZ2FtZS1zeW1ib2wnO1xyXG5pbXBvcnQgeyBHQU1FX1NZTUJPTFMgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCBhdmF0YXJTcmMxIGZyb20gJy4vaW1hZ2VzL2F2YXRhci0xLnBuZyc7XHJcbmltcG9ydCBhdmF0YXJTcmMyIGZyb20gJy4vaW1hZ2VzL2F2YXRhci0yLnBuZyc7XHJcbmltcG9ydCBhdmF0YXJTcmMzIGZyb20gJy4vaW1hZ2VzL2F2YXRhci0zLnBuZyc7XHJcbmltcG9ydCBhdmF0YXJTcmM0IGZyb20gJy4vaW1hZ2VzL2F2YXRhci00LnBuZyc7XHJcbiBcclxuY29uc3QgcGxheWVycyA9IFtcclxuXHR7XHJcblx0XHRpZDogMSxcclxuXHRcdG5hbWU6ICdVc2VyIDE1MDUnLCBcclxuXHRcdHJhdGluZzogJzEyMzAnLCBcclxuXHRcdGF2YXRhcjogYXZhdGFyU3JjMSwgXHJcblx0XHRzeW1ib2w6IEdBTUVfU1lNQk9MUy5DUk9TU1xyXG5cdH0sXHJcblx0XHR7XHJcblx0XHRpZDogMixcclxuXHRcdG5hbWU6ICdVc2VyIDE2NDU4NDk2ODA5MjM0NjAnLCBcclxuXHRcdHJhdGluZzogJzg1MCcsIFxyXG5cdFx0YXZhdGFyOiBhdmF0YXJTcmMyLCBcclxuXHRcdHN5bWJvbDogR0FNRV9TWU1CT0xTLlpFUk9cclxuXHR9LFxyXG5cdFx0e1xyXG5cdFx0aWQ6IDMsXHJcblx0XHRuYW1lOiAnVXNlciAyMzkwJywgXHJcblx0XHRyYXRpbmc6ICc1NicsIFxyXG5cdFx0YXZhdGFyOiBhdmF0YXJTcmMzLCBcclxuXHRcdHN5bWJvbDogR0FNRV9TWU1CT0xTLlRSSUFOR0xFXHJcblx0fSxcclxuXHRcdHtcclxuXHRcdGlkOiA0LFxyXG5cdFx0bmFtZTogJ1VzZXIgMTYzMCcsIFxyXG5cdFx0cmF0aW5nOiAnMjUxMicsIFxyXG5cdFx0YXZhdGFyOiBhdmF0YXJTcmM0LCBcclxuXHRcdHN5bWJvbDogR0FNRV9TWU1CT0xTLlNRVUFSRVxyXG5cdH1cclxuXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHYW1lSW5mbyh7Y2xhc3NOYW1lLCBwbGF5ZXJzQ291bnQsIGN1cnJlbnRNb3ZlLCBpc1dpbm5lcn0pIHtcclxuXHRyZXR1cm4oXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc05hbWUsIFwiYmctd2hpdGUgcm91bmRlZC0yeGwgc2hhZG93LW1kIHB4LTggcHktNCBqdXN0aWZ5LWJldHdlZW4gZ3JpZCBncmlkLWNvbHMtMiBnYXAtMTJcIil9PlxyXG5cclxuXHRcdFx0e3BsYXllcnMuc2xpY2UoMCwgcGxheWVyc0NvdW50KS5tYXAoKHBsYXllciwgaW5kZXgpID0+IChcclxuXHRcdFx0XHQ8UGxheWVySW5mbyBcclxuXHRcdFx0XHRcdGtleT17cGxheWVyLmlkfVxyXG5cdFx0XHRcdFx0cGxheWVySW5mbz17cGxheWVyfVxyXG5cdFx0XHRcdFx0aXNSaWdodD17aW5kZXggJSAyID09PSAxfVxyXG5cdFx0XHRcdFx0aXNUaW1lclJ1bm5pbmc9e2N1cnJlbnRNb3ZlID09PSBwbGF5ZXIuc3ltYm9sfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdCkpfVxyXG5cclxuXHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBQbGF5ZXJJbmZvKHsgcGxheWVySW5mbywgaXNSaWdodCwgaXNUaW1lclJ1bm5pbmcgfSkge1xyXG5cdC8v0YHQvtGB0YLQvtGP0L3QuNC1INGC0LDQudC80LXRgNCwXHJcblx0Y29uc3QgW3NlY29uZHMsIHNldFNlY29uZHNdID0gdXNlU3RhdGUoNjApO1xyXG5cdC8v0YHRgtGA0L7QutC+0LLQvtC1INC/0YDQtdC00YHRgtCw0LLQu9C10L3QuNC1INC80LjQvdGD0YJcclxuXHRjb25zdCBtaW51dGVzU3RyaW5nID0gU3RyaW5nKE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG5cdC8v0YHRgtGA0L7QutC+0LLQvtC1INC/0YDQtdC00YHRgtCw0LLQu9C10L3QuNC1INGB0LXQutGD0L3QtFxyXG5cdGNvbnN0IHNlY29uZHNTdHJpbmcgPSBTdHJpbmcoTWF0aC5mbG9vcihzZWNvbmRzICUgNjApKS5wYWRTdGFydCgyLCBcIjBcIik7XHJcblxyXG5cdC8v0YTQu9Cw0LMg0L7QutC+0L3Rh9Cw0L3QuNGPINCy0YDQtdC80LXQvdC4INC90LAg0YXQvtC0ICjQvtGB0YLQsNC70L7RgdGMIDwxMCDRgdC10LopXHJcblx0Y29uc3QgaXNEYW5nZXIgPSBzZWNvbmRzIDwgMTA7XHJcblxyXG5cdC8v0YLQsNC50LzQtdGAXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmIChpc1RpbWVyUnVubmluZykge1xyXG5cdFx0XHRjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuXHRcdFx0Ly/QutC+0LPQtNCwIHMtMSDRgdGC0LDQvdC10YIg0YDQsNCy0L3Ri9C8IDAsINGB0L7RgdGC0L7Rj9C90LjQtSDQutC+0LzQv9C+0L3QtdC90YLRiyDQv9C10YDQtdGB0YLQsNC90LXRgiDQvNC10L3Rj9GC0YzRgdGPLCDQuCDQv9C10YDQtdGA0LjRgdC+0LLQutCwIHVzZVN0YXRlINC/0LXRgNC10YHRgtCw0L3QtdGCINC/0YDQvtC40YHRhdC+0LTQuNGC0YxcclxuXHRcdFx0c2V0U2Vjb25kcygocykgPT4gTWF0aC5tYXgocyAtIDEsIDApKTtcclxuXHRcdFx0fSwgMTAwMClcclxuXHJcblx0XHRcdHJldHVybiAoKSA9PiB7XHJcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcblx0XHRcdFx0c2V0U2Vjb25kcyg2MCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LCBbaXNUaW1lclJ1bm5pbmddKVxyXG5cclxuXHQvL9GE0YPQvdC60YbQuNGPINC40LfQvNC10L3QtdC90LjRjyDRhtCy0LXRgtCwINGC0LDQudC80LXRgNCwXHJcblx0Y29uc3QgZ2V0VGltZXJDb2xvciA9ICgpID0+IHtcclxuXHRcdGlmIChpc1RpbWVyUnVubmluZykge1xyXG5cdFx0XHRyZXR1cm4gaXNEYW5nZXIgPyBcInRleHQtb3JhbmdlLTYwMFwiIDogXCJ0ZXh0LXNsYXRlLTkwMFwiO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIFwidGV4dC1zbGF0ZS0yMDBcIjtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTMgaXRlbXMtY2VudGVyXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Nsc3goXCJyZWxhdGl2ZVwiLCBpc1JpZ2h0ICYmIFwib3JkZXItM1wiKX0+XHJcblx0XHRcdFx0XHQ8UHJvZmlsZSBcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy00NFwiXHJcblx0XHRcdFx0XHRcdG5hbWU9e3BsYXllckluZm8ubmFtZX0gXHJcblx0XHRcdFx0XHRcdHJhdGluZz17cGxheWVySW5mby5yYXRpbmd9IFxyXG5cdFx0XHRcdFx0XHRhdmF0YXI9e3BsYXllckluZm8uYXZhdGFyfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy01IGgtNSByb3VuZGVkLWZ1bGwgYmctd2hpdGUgc2hhZG93IGFic29sdXRlIC1sZWZ0LTEgLXRvcC0xIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdDxHYW1lU3ltYm9sIHN5bWJvbD17cGxheWVySW5mby5zeW1ib2x9IC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xzeChcImgtNiB3LXB4IGJnLXNsYXRlLTIwMFwiLCBpc1JpZ2h0ICYmIFwib3JkZXItMlwiKX0+PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Nsc3goXCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdy1bNjBweF1cIiwgaXNSaWdodCAmJiBcIm9yZGVyLTFcIiwgZ2V0VGltZXJDb2xvcigpKX0+XHJcblx0XHRcdFx0XHR7bWludXRlc1N0cmluZ306e3NlY29uZHNTdHJpbmd9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdClcclxufSJdLCJuYW1lcyI6WyJjbHN4IiwiUHJvZmlsZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ3Jvc3NJY29uIiwiR2FtZVN5bWJvbCIsIkdBTUVfU1lNQk9MUyIsImF2YXRhclNyYzEiLCJhdmF0YXJTcmMyIiwiYXZhdGFyU3JjMyIsImF2YXRhclNyYzQiLCJwbGF5ZXJzIiwiaWQiLCJuYW1lIiwicmF0aW5nIiwiYXZhdGFyIiwic3ltYm9sIiwiQ1JPU1MiLCJaRVJPIiwiVFJJQU5HTEUiLCJTUVVBUkUiLCJHYW1lSW5mbyIsImNsYXNzTmFtZSIsInBsYXllcnNDb3VudCIsImN1cnJlbnRNb3ZlIiwiaXNXaW5uZXIiLCJkaXYiLCJzbGljZSIsIm1hcCIsInBsYXllciIsImluZGV4IiwiUGxheWVySW5mbyIsInBsYXllckluZm8iLCJpc1JpZ2h0IiwiaXNUaW1lclJ1bm5pbmciLCJzZWNvbmRzIiwic2V0U2Vjb25kcyIsIm1pbnV0ZXNTdHJpbmciLCJTdHJpbmciLCJNYXRoIiwiZmxvb3IiLCJwYWRTdGFydCIsInNlY29uZHNTdHJpbmciLCJpc0RhbmdlciIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJzIiwibWF4IiwiY2xlYXJJbnRlcnZhbCIsImdldFRpbWVyQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/game-info.jsx\n"));

/***/ })

});