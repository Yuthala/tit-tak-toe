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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/game */ \"./components/game/index.js\");\n/* harmony import */ var _components_game_game_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/game/game-symbol */ \"./components/game/game-symbol.jsx\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ \"./components/header/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction HomePage() {\n    // const [playersCount] = useState(4); //указать кол-во игроков 2 или 4 в начальном состоянии\n    // //хук, общий для game-info и game-field, венесен на уровень выше\n    // const {\n    // \tcells,\n    // \tcurrentMove,\n    // \thandleCellClick,\n    // \tnextMove,\n    // \twinnerSequence,\n    // \thandlePlayerTimeOver,\n    // \twinnerSymbol,\n    // } = useGameState(playersCount);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HomePageLayout, {\n        header: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__.Header, {}, void 0, false, {\n            fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\pages\\\\index.jsx\",\n            lineNumber: 22,\n            columnNumber: 27\n        }, void 0),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Game, {}, void 0, false, {\n            fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\pages\\\\index.jsx\",\n            lineNumber: 23,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\pages\\\\index.jsx\",\n        lineNumber: 22,\n        columnNumber: 3\n    }, this);\n}\n_c = HomePage;\nfunction HomePageLayout(param) {\n    let { header, children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-50 min-h-screen\",\n        children: [\n            header,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"pt-6 mx-auto w-max\",\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\pages\\\\index.jsx\",\n                lineNumber: 56,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\pages\\\\index.jsx\",\n        lineNumber: 54,\n        columnNumber: 3\n    }, this);\n}\n_c1 = HomePageLayout;\nvar _c, _c1;\n$RefreshReg$(_c, \"HomePage\");\n$RefreshReg$(_c1, \"HomePageLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWtGO0FBQ3RCO0FBQ2hCO0FBQ2I7QUFHaEIsU0FBU087SUFFdkIsNkZBQTZGO0lBQzdGLG1FQUFtRTtJQUNuRSxVQUFVO0lBQ1YsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGtDQUFrQztJQUVqQyxxQkFDQSw4REFBQ0M7UUFBZUMsc0JBQVEsOERBQUNKLHNEQUFNQTs7Ozs7a0JBQzlCLDRFQUFDSzs7Ozs7Ozs7OztBQTJCSjtLQTNDd0JIO0FBNkN4QixTQUFTQyxlQUFlLEtBQWtCO1FBQWxCLEVBQUNDLE1BQU0sRUFBRUUsUUFBUSxFQUFDLEdBQWxCO0lBQ3ZCLHFCQUNDLDhEQUFDQztRQUFJQyxXQUFVOztZQUNiSjswQkFDRiw4REFBQ0s7Z0JBQUtELFdBQVU7MEJBQXNCRjs7Ozs7Ozs7Ozs7O0FBR3hDO01BUFNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVUaXRsZSwgR2FtZUluZm8sIEdhbWVGaWVsZCwgdXNlR2FtZVN0YXRlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9nYW1lJztcclxuaW1wb3J0IHsgR2FtZVN5bWJvbCB9IGZyb20gJy4uL2NvbXBvbmVudHMvZ2FtZS9nYW1lLXN5bWJvbCc7XHJcbmltcG9ydCB7SGVhZGVyfSBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuXHJcblx0Ly8gY29uc3QgW3BsYXllcnNDb3VudF0gPSB1c2VTdGF0ZSg0KTsgLy/Rg9C60LDQt9Cw0YLRjCDQutC+0Lst0LLQviDQuNCz0YDQvtC60L7QsiAyINC40LvQuCA0INCyINC90LDRh9Cw0LvRjNC90L7QvCDRgdC+0YHRgtC+0Y/QvdC40LhcclxuXHQvLyAvL9GF0YPQuiwg0L7QsdGJ0LjQuSDQtNC70Y8gZ2FtZS1pbmZvINC4IGdhbWUtZmllbGQsINCy0LXQvdC10YHQtdC9INC90LAg0YPRgNC+0LLQtdC90Ywg0LLRi9GI0LVcclxuXHQvLyBjb25zdCB7XHJcblx0Ly8gXHRjZWxscyxcclxuXHQvLyBcdGN1cnJlbnRNb3ZlLFxyXG5cdC8vIFx0aGFuZGxlQ2VsbENsaWNrLFxyXG5cdC8vIFx0bmV4dE1vdmUsXHJcblx0Ly8gXHR3aW5uZXJTZXF1ZW5jZSxcclxuXHQvLyBcdGhhbmRsZVBsYXllclRpbWVPdmVyLFxyXG5cdC8vIFx0d2lubmVyU3ltYm9sLFxyXG5cdC8vIH0gPSB1c2VHYW1lU3RhdGUocGxheWVyc0NvdW50KTtcclxuXHJcbiAgcmV0dXJuIChcclxuXHRcdDxIb21lUGFnZUxheW91dCBoZWFkZXI9ezxIZWFkZXIgLz59PlxyXG5cdFx0XHQ8R2FtZSAvPlxyXG5cdFx0XHR7LyogPEdhbWVUaXRsZSBwbGF5ZXJzQ291bnQ9e3BsYXllcnNDb3VudH0vPlxyXG5cdFx0XHQ8R2FtZUluZm8gXHJcblx0XHRcdFx0cGxheWVyc0NvdW50PXtwbGF5ZXJzQ291bnR9IFxyXG5cdFx0XHRcdGNsYXNzTmFtZT1cIm10LTRcIiBcclxuXHRcdFx0XHRjdXJyZW50TW92ZT17Y3VycmVudE1vdmV9XHJcbiAgICAgICAgICBcdFx0aXNXaW5uZXI9eyEhd2lubmVyU3ltYm9sfVxyXG4gICAgICAgICAgXHRcdG9uUGxheWVyVGltZU92ZXI9e2hhbmRsZVBsYXllclRpbWVPdmVyfVxyXG5cdFx0XHQvPlxyXG5cclxuXHRcdFx0e3dpbm5lclN5bWJvbCAmJiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibXktNFwiPlxyXG5cdFx0XHRcdDxHYW1lU3ltYm9sIHN5bWJvbD17d2lubmVyU3ltYm9sfSAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KX1cclxuXHJcblx0XHRcdDxHYW1lRmllbGQgXHJcblx0XHRcdFx0Y2xhc3NOYW1lPVwibXQtNlwiIFxyXG5cdFx0XHRcdGNlbGxzPXtjZWxsc30gXHJcblx0XHRcdFx0Y3VycmVudE1vdmU9e2N1cnJlbnRNb3ZlfSBcclxuXHRcdFx0XHRuZXh0TW92ZT17bmV4dE1vdmV9XHJcblx0XHRcdFx0aGFuZGxlQ2VsbENsaWNrPXtoYW5kbGVDZWxsQ2xpY2t9XHJcblx0XHRcdFx0d2lubmVyU2VxdWVuY2U9e3dpbm5lclNlcXVlbmNlfVxyXG5cdFx0XHRcdHdpbm5lclN5bWJvbD17d2lubmVyU3ltYm9sfVxyXG5cdFx0XHQvPiAqL31cclxuXHRcdDwvSG9tZVBhZ2VMYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2VMYXlvdXQoe2hlYWRlciwgY2hpbGRyZW59KSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiYmctc2xhdGUtNTAgbWluLWgtc2NyZWVuXCI+XHJcblx0XHRcdHtoZWFkZXJ9XHJcblx0XHQ8bWFpbiBjbGFzc05hbWU9XCJwdC02IG14LWF1dG8gdy1tYXhcIj57Y2hpbGRyZW59PC9tYWluPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcbiJdLCJuYW1lcyI6WyJHYW1lVGl0bGUiLCJHYW1lSW5mbyIsIkdhbWVGaWVsZCIsInVzZUdhbWVTdGF0ZSIsIkdhbWVTeW1ib2wiLCJIZWFkZXIiLCJ1c2VTdGF0ZSIsIkhvbWVQYWdlIiwiSG9tZVBhZ2VMYXlvdXQiLCJoZWFkZXIiLCJHYW1lIiwiY2hpbGRyZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});