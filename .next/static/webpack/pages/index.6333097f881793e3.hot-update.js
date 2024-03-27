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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/game */ \"./components/game/index.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ \"./components/header/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction HomePage() {\n    _s();\n    const [playersCount] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(4); //указать кол-во игроков 2 или 4 в начальном состоянии\n    //хук, общий для game-info и game-field, венесен на уровень выше\n    const { cells, currentMove, nextMove, handleCellClick, winnerSequence } = (0,_components_game__WEBPACK_IMPORTED_MODULE_1__.useGameState)(playersCount);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-50 min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\pages\\\\index.jsx\",\n                lineNumber: 17,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"pt-6 mx-auto w-max\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game__WEBPACK_IMPORTED_MODULE_1__.GameTitle, {\n                        playersCount: playersCount\n                    }, void 0, false, {\n                        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 4\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game__WEBPACK_IMPORTED_MODULE_1__.GameInfo, {\n                        playersCount: playersCount,\n                        className: \"mt-4\",\n                        currentMove: currentMove,\n                        isWiiner: !!winnerSequence\n                    }, void 0, false, {\n                        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 4\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game__WEBPACK_IMPORTED_MODULE_1__.GameField, {\n                        className: \"mt-6\",\n                        cells: cells,\n                        currentMove: currentMove,\n                        nextMove: nextMove,\n                        handleCellClick: handleCellClick,\n                        winnerSequence: winnerSequence\n                    }, void 0, false, {\n                        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 4\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\pages\\\\index.jsx\",\n                lineNumber: 18,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\pages\\\\index.jsx\",\n        lineNumber: 16,\n        columnNumber: 2\n    }, this);\n}\n_s(HomePage, \"4hPCTyk54VqgkDYbUZLagCgHegY=\", false, function() {\n    return [\n        _components_game__WEBPACK_IMPORTED_MODULE_1__.useGameState\n    ];\n});\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWtGO0FBQ3RDO0FBQ2I7QUFFaEIsU0FBU007O0lBRXZCLE1BQU0sQ0FBQ0MsYUFBYSxHQUFHRiwrQ0FBUUEsQ0FBQyxJQUFJLHNEQUFzRDtJQUMxRixnRUFBZ0U7SUFDaEUsTUFBTSxFQUFFRyxLQUFLLEVBQ1pDLFdBQVcsRUFDWEMsUUFBUSxFQUNSQyxlQUFlLEVBQ2ZDLGNBQWMsRUFBQyxHQUFHVCw4REFBWUEsQ0FBQ0k7SUFFL0IscUJBQ0QsOERBQUNNO1FBQUlDLFdBQVU7OzBCQUNkLDhEQUFDVixzREFBTUE7Ozs7OzBCQUNQLDhEQUFDVztnQkFBS0QsV0FBVTs7a0NBQ2YsOERBQUNkLHVEQUFTQTt3QkFBQ08sY0FBY0E7Ozs7OztrQ0FDekIsOERBQUNOLHNEQUFRQTt3QkFDUk0sY0FBY0E7d0JBQ2RPLFdBQVU7d0JBQ1ZMLGFBQWFBO3dCQUNiTyxVQUFVLENBQUMsQ0FBQ0o7Ozs7OztrQ0FFYiw4REFBQ1YsdURBQVNBO3dCQUNUWSxXQUFVO3dCQUNWTixPQUFPQTt3QkFDUEMsYUFBYUE7d0JBQ2JDLFVBQVVBO3dCQUNWQyxpQkFBaUJBO3dCQUNqQkMsZ0JBQWdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BCO0dBaEN3Qk47O1FBUUpILDBEQUFZQTs7O0tBUlJHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVUaXRsZSwgR2FtZUluZm8sIEdhbWVGaWVsZCwgdXNlR2FtZVN0YXRlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9nYW1lJztcclxuaW1wb3J0IHtIZWFkZXJ9IGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcblxyXG5cdGNvbnN0IFtwbGF5ZXJzQ291bnRdID0gdXNlU3RhdGUoNCk7IC8v0YPQutCw0LfQsNGC0Ywg0LrQvtC7LdCy0L4g0LjQs9GA0L7QutC+0LIgMiDQuNC70LggNCDQsiDQvdCw0YfQsNC70YzQvdC+0Lwg0YHQvtGB0YLQvtGP0L3QuNC4XHJcblx0Ly/RhdGD0LosINC+0LHRidC40Lkg0LTQu9GPIGdhbWUtaW5mbyDQuCBnYW1lLWZpZWxkLCDQstC10L3QtdGB0LXQvSDQvdCwINGD0YDQvtCy0LXQvdGMINCy0YvRiNC1XHJcblx0Y29uc3Qge1x0Y2VsbHMsIFxyXG5cdFx0Y3VycmVudE1vdmUsIFxyXG5cdFx0bmV4dE1vdmUsIFxyXG5cdFx0aGFuZGxlQ2VsbENsaWNrLFxyXG5cdFx0d2lubmVyU2VxdWVuY2V9ID0gdXNlR2FtZVN0YXRlKHBsYXllcnNDb3VudCk7XHJcblxyXG4gIHJldHVybiAoXHJcblx0PGRpdiBjbGFzc05hbWU9XCJiZy1zbGF0ZS01MCBtaW4taC1zY3JlZW5cIj5cclxuXHRcdDxIZWFkZXIgLz5cclxuXHRcdDxtYWluIGNsYXNzTmFtZT1cInB0LTYgbXgtYXV0byB3LW1heFwiPlxyXG5cdFx0XHQ8R2FtZVRpdGxlIHBsYXllcnNDb3VudD17cGxheWVyc0NvdW50fS8+XHJcblx0XHRcdDxHYW1lSW5mbyBcclxuXHRcdFx0XHRwbGF5ZXJzQ291bnQ9e3BsYXllcnNDb3VudH0gXHJcblx0XHRcdFx0Y2xhc3NOYW1lPVwibXQtNFwiIFxyXG5cdFx0XHRcdGN1cnJlbnRNb3ZlPXtjdXJyZW50TW92ZX1cclxuXHRcdFx0XHRpc1dpaW5lcj17ISF3aW5uZXJTZXF1ZW5jZX1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PEdhbWVGaWVsZCBcclxuXHRcdFx0XHRjbGFzc05hbWU9XCJtdC02XCIgXHJcblx0XHRcdFx0Y2VsbHM9e2NlbGxzfSBcclxuXHRcdFx0XHRjdXJyZW50TW92ZT17Y3VycmVudE1vdmV9IFxyXG5cdFx0XHRcdG5leHRNb3ZlPXtuZXh0TW92ZX1cclxuXHRcdFx0XHRoYW5kbGVDZWxsQ2xpY2s9e2hhbmRsZUNlbGxDbGlja31cclxuXHRcdFx0XHR3aW5uZXJTZXF1ZW5jZT17d2lubmVyU2VxdWVuY2V9XHJcblx0XHRcdC8+XHJcblx0XHQ8L21haW4+XHJcblx0PC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiR2FtZVRpdGxlIiwiR2FtZUluZm8iLCJHYW1lRmllbGQiLCJ1c2VHYW1lU3RhdGUiLCJIZWFkZXIiLCJ1c2VTdGF0ZSIsIkhvbWVQYWdlIiwicGxheWVyc0NvdW50IiwiY2VsbHMiLCJjdXJyZW50TW92ZSIsIm5leHRNb3ZlIiwiaGFuZGxlQ2VsbENsaWNrIiwid2lubmVyU2VxdWVuY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwiaXNXaWluZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});