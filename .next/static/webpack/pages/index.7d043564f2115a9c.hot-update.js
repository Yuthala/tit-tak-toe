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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_game_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/game-layout */ \"./components/game-new/ui/game-layout.jsx\");\n/* harmony import */ var _ui_back_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/back-link */ \"./components/game-new/ui/back-link.jsx\");\n/* harmony import */ var _game_game_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game/game-title */ \"./components/game/game-title.jsx\");\n/* harmony import */ var _game_game_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game/game-info */ \"./components/game/game-info.jsx\");\n\n\n\n\n\nfunction Game() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_game_layout__WEBPACK_IMPORTED_MODULE_1__.GameLayout, {\n        backLink: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_back_link__WEBPACK_IMPORTED_MODULE_2__.BackLink, {}, void 0, false, {\n            fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n            lineNumber: 9,\n            columnNumber: 23\n        }, void 0),\n        title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_game_title__WEBPACK_IMPORTED_MODULE_3__.GameTitle, {}, void 0, false, {\n            fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n            lineNumber: 10,\n            columnNumber: 20\n        }, void 0),\n        gameInfo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_game_info__WEBPACK_IMPORTED_MODULE_4__.GameInfo, {\n            isRatingGame: true,\n            playersCount: 4,\n            timeMode: \"1 мин. на ход\"\n        }, void 0, false, {\n            fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n            lineNumber: 11,\n            columnNumber: 23\n        }, void 0)\n    }, void 0, false, {\n        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\game.jsx\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, this);\n}\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L2dhbWUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQThDO0FBQ0o7QUFDSztBQUNGO0FBRXRDLFNBQVNJO0lBQ1oscUJBQ0ksOERBQUNKLHVEQUFVQTtRQUNQSyx3QkFBVSw4REFBQ0osbURBQVFBOzs7OztRQUNuQksscUJBQU8sOERBQUNKLHVEQUFTQTs7Ozs7UUFDakJLLHdCQUFVLDhEQUFDSixxREFBUUE7WUFBQ0ssWUFBWTtZQUFDQyxjQUFjO1lBQUdDLFVBQVU7Ozs7Ozs7Ozs7O0FBR3hFO0tBUmdCTiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUtbmV3L2dhbWUuanN4P2U0MmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZUxheW91dCB9IGZyb20gJy4vdWkvZ2FtZS1sYXlvdXQnO1xyXG5pbXBvcnQgeyBCYWNrTGluayB9IGZyb20gJy4vdWkvYmFjay1saW5rJztcclxuaW1wb3J0IHsgR2FtZVRpdGxlIH0gZnJvbSAnLi4vZ2FtZS9nYW1lLXRpdGxlJztcclxuaW1wb3J0IHsgR2FtZUluZm8gfSBmcm9tICcuLi9nYW1lL2dhbWUtaW5mbyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2FtZSgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEdhbWVMYXlvdXQgXHJcbiAgICAgICAgICAgIGJhY2tMaW5rPXs8QmFja0xpbmsgLz59IFxyXG4gICAgICAgICAgICB0aXRsZT17PEdhbWVUaXRsZSAvPn0gXHJcbiAgICAgICAgICAgIGdhbWVJbmZvPXs8R2FtZUluZm8gaXNSYXRpbmdHYW1lIHBsYXllcnNDb3VudD17NH0gdGltZU1vZGU9eycxINC80LjQvS4g0L3QsCDRhdC+0LQnfSAvPn0gXHJcbiAgICAgICAgLz5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiR2FtZUxheW91dCIsIkJhY2tMaW5rIiwiR2FtZVRpdGxlIiwiR2FtZUluZm8iLCJHYW1lIiwiYmFja0xpbmsiLCJ0aXRsZSIsImdhbWVJbmZvIiwiaXNSYXRpbmdHYW1lIiwicGxheWVyc0NvdW50IiwidGltZU1vZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game-new/game.jsx\n"));

/***/ }),

/***/ "./components/game-new/ui/back-link.jsx":
/*!**********************************************!*\
  !*** ./components/game-new/ui/back-link.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BackLink: function() { return /* binding */ BackLink; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _icons_arrow_left_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/arrow-left-icon */ \"./components/game-new/ui/icons/arrow-left-icon.jsx\");\n\n\n\nfunction BackLink() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"#\",\n        className: \"flex items-center gap-2 text-xs text-teal-600 leading-tight -mb-0.5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_arrow_left_icon__WEBPACK_IMPORTED_MODULE_2__.ArrowLeftIcon, {}, void 0, false, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\ui\\\\back-link.jsx\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this),\n            \"На главную\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\ui\\\\back-link.jsx\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n}\n_c = BackLink;\nvar _c;\n$RefreshReg$(_c, \"BackLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L3VpL2JhY2stbGluay5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE2QjtBQUMyQjtBQUVqRCxTQUFTRTtJQUNaLHFCQUNJLDhEQUFDRixrREFBSUE7UUFBQ0csTUFBSztRQUFJQyxXQUFVOzswQkFDckIsOERBQUNILGlFQUFhQTs7Ozs7WUFBRzs7Ozs7OztBQUk3QjtLQVBnQkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lLW5ldy91aS9iYWNrLWxpbmsuanN4P2JmZjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgQXJyb3dMZWZ0SWNvbiB9IGZyb20gJy4vaWNvbnMvYXJyb3ctbGVmdC1pY29uJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBCYWNrTGluaygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXhzIHRleHQtdGVhbC02MDAgbGVhZGluZy10aWdodCAtbWItMC41XCI+XHJcbiAgICAgICAgICAgIDxBcnJvd0xlZnRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICDQndCwINCz0LvQsNCy0L3Rg9GOIFxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiTGluayIsIkFycm93TGVmdEljb24iLCJCYWNrTGluayIsImhyZWYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game-new/ui/back-link.jsx\n"));

/***/ }),

/***/ "./components/game-new/ui/game-layout.jsx":
/*!************************************************!*\
  !*** ./components/game-new/ui/game-layout.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameLayout: function() { return /* binding */ GameLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction GameLayout(param) {\n    let { backLink, title, gameInfo } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"pl-2\",\n            children: [\n                backLink,\n                title,\n                gameInfo\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\ui\\\\game-layout.jsx\",\n            lineNumber: 4,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game-new\\\\ui\\\\game-layout.jsx\",\n        lineNumber: 3,\n        columnNumber: 9\n    }, this);\n}\n_c = GameLayout;\nvar _c;\n$RefreshReg$(_c, \"GameLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L3VpL2dhbWUtbGF5b3V0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQU8sU0FBU0EsV0FBVyxLQUEyQjtRQUEzQixFQUFDQyxRQUFRLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFDLEdBQTNCO0lBQ3ZCLHFCQUNJLDhEQUFDQztrQkFDRyw0RUFBQ0E7WUFBSUMsV0FBVTs7Z0JBQ1ZKO2dCQUNBQztnQkFDQUM7Ozs7Ozs7Ozs7OztBQUlqQjtLQVZnQkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nYW1lLW5ldy91aS9nYW1lLWxheW91dC5qc3g/N2VhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gR2FtZUxheW91dCh7YmFja0xpbmssIHRpdGxlLCBnYW1lSW5mb30pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC0yXCI+XHJcbiAgICAgICAgICAgICAgICB7YmFja0xpbmt9XHJcbiAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICB7Z2FtZUluZm99XHJcblx0XHQgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiR2FtZUxheW91dCIsImJhY2tMaW5rIiwidGl0bGUiLCJnYW1lSW5mbyIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game-new/ui/game-layout.jsx\n"));

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/game */ \"./components/game/index.js\");\n/* harmony import */ var _components_game_game_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/game/game-symbol */ \"./components/game/game-symbol.jsx\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ \"./components/header/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_game_new_game__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../components/game-new/game */ \"./components/game-new/game.jsx\");\n\n\n\n\n\n\nfunction HomePage() {\n    // const [playersCount] = useState(4); //указать кол-во игроков 2 или 4 в начальном состоянии\n    // //хук, общий для game-info и game-field, венесен на уровень выше\n    // const {\n    // \tcells,\n    // \tcurrentMove,\n    // \thandleCellClick,\n    // \tnextMove,\n    // \twinnerSequence,\n    // \thandlePlayerTimeOver,\n    // \twinnerSymbol,\n    // } = useGameState(playersCount);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HomePageLayout, {\n        header: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__.Header, {}, void 0, false, {\n            fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\pages\\\\index.jsx\",\n            lineNumber: 23,\n            columnNumber: 27\n        }, void 0),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_new_game__WEBPACK_IMPORTED_MODULE_5__.Game, {}, void 0, false, {\n            fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\pages\\\\index.jsx\",\n            lineNumber: 24,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\pages\\\\index.jsx\",\n        lineNumber: 23,\n        columnNumber: 3\n    }, this);\n}\n_c = HomePage;\nfunction HomePageLayout(param) {\n    let { header, children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-50 min-h-screen\",\n        children: [\n            header,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"pt-6 mx-auto w-max\",\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\pages\\\\index.jsx\",\n                lineNumber: 57,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\pages\\\\index.jsx\",\n        lineNumber: 55,\n        columnNumber: 3\n    }, this);\n}\n_c1 = HomePageLayout;\nvar _c, _c1;\n$RefreshReg$(_c, \"HomePage\");\n$RefreshReg$(_c1, \"HomePageLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFrRjtBQUN0QjtBQUNoQjtBQUNiO0FBQ3NCO0FBR3RDLFNBQVNRO0lBRXZCLDZGQUE2RjtJQUM3RixtRUFBbUU7SUFDbkUsVUFBVTtJQUNWLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixrQ0FBa0M7SUFFakMscUJBQ0EsOERBQUNDO1FBQWVDLHNCQUFRLDhEQUFDTCxzREFBTUE7Ozs7O2tCQUM5Qiw0RUFBQ0UsMkRBQUlBOzs7Ozs7Ozs7O0FBMkJSO0tBM0N3QkM7QUE2Q3hCLFNBQVNDLGVBQWUsS0FBa0I7UUFBbEIsRUFBQ0MsTUFBTSxFQUFFQyxRQUFRLEVBQUMsR0FBbEI7SUFDdkIscUJBQ0MsOERBQUNDO1FBQUlDLFdBQVU7O1lBQ2JIOzBCQUNGLDhEQUFDSTtnQkFBS0QsV0FBVTswQkFBc0JGOzs7Ozs7Ozs7Ozs7QUFHeEM7TUFQU0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZVRpdGxlLCBHYW1lSW5mbywgR2FtZUZpZWxkLCB1c2VHYW1lU3RhdGUgfSBmcm9tICcuLi9jb21wb25lbnRzL2dhbWUnO1xyXG5pbXBvcnQgeyBHYW1lU3ltYm9sIH0gZnJvbSAnLi4vY29tcG9uZW50cy9nYW1lL2dhbWUtc3ltYm9sJztcclxuaW1wb3J0IHtIZWFkZXJ9IGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi8uLi9jb21wb25lbnRzL2dhbWUtbmV3L2dhbWUnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG5cclxuXHQvLyBjb25zdCBbcGxheWVyc0NvdW50XSA9IHVzZVN0YXRlKDQpOyAvL9GD0LrQsNC30LDRgtGMINC60L7Quy3QstC+INC40LPRgNC+0LrQvtCyIDIg0LjQu9C4IDQg0LIg0L3QsNGH0LDQu9GM0L3QvtC8INGB0L7RgdGC0L7Rj9C90LjQuFxyXG5cdC8vIC8v0YXRg9C6LCDQvtCx0YnQuNC5INC00LvRjyBnYW1lLWluZm8g0LggZ2FtZS1maWVsZCwg0LLQtdC90LXRgdC10L0g0L3QsCDRg9GA0L7QstC10L3RjCDQstGL0YjQtVxyXG5cdC8vIGNvbnN0IHtcclxuXHQvLyBcdGNlbGxzLFxyXG5cdC8vIFx0Y3VycmVudE1vdmUsXHJcblx0Ly8gXHRoYW5kbGVDZWxsQ2xpY2ssXHJcblx0Ly8gXHRuZXh0TW92ZSxcclxuXHQvLyBcdHdpbm5lclNlcXVlbmNlLFxyXG5cdC8vIFx0aGFuZGxlUGxheWVyVGltZU92ZXIsXHJcblx0Ly8gXHR3aW5uZXJTeW1ib2wsXHJcblx0Ly8gfSA9IHVzZUdhbWVTdGF0ZShwbGF5ZXJzQ291bnQpO1xyXG5cclxuICByZXR1cm4gKFxyXG5cdFx0PEhvbWVQYWdlTGF5b3V0IGhlYWRlcj17PEhlYWRlciAvPn0+XHJcblx0XHRcdDxHYW1lIC8+XHJcblx0XHRcdHsvKiA8R2FtZVRpdGxlIHBsYXllcnNDb3VudD17cGxheWVyc0NvdW50fS8+XHJcblx0XHRcdDxHYW1lSW5mbyBcclxuXHRcdFx0XHRwbGF5ZXJzQ291bnQ9e3BsYXllcnNDb3VudH0gXHJcblx0XHRcdFx0Y2xhc3NOYW1lPVwibXQtNFwiIFxyXG5cdFx0XHRcdGN1cnJlbnRNb3ZlPXtjdXJyZW50TW92ZX1cclxuICAgICAgICAgIFx0XHRpc1dpbm5lcj17ISF3aW5uZXJTeW1ib2x9XHJcbiAgICAgICAgICBcdFx0b25QbGF5ZXJUaW1lT3Zlcj17aGFuZGxlUGxheWVyVGltZU92ZXJ9XHJcblx0XHRcdC8+XHJcblxyXG5cdFx0XHR7d2lubmVyU3ltYm9sICYmIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJteS00XCI+XHJcblx0XHRcdFx0PEdhbWVTeW1ib2wgc3ltYm9sPXt3aW5uZXJTeW1ib2x9IC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpfVxyXG5cclxuXHRcdFx0PEdhbWVGaWVsZCBcclxuXHRcdFx0XHRjbGFzc05hbWU9XCJtdC02XCIgXHJcblx0XHRcdFx0Y2VsbHM9e2NlbGxzfSBcclxuXHRcdFx0XHRjdXJyZW50TW92ZT17Y3VycmVudE1vdmV9IFxyXG5cdFx0XHRcdG5leHRNb3ZlPXtuZXh0TW92ZX1cclxuXHRcdFx0XHRoYW5kbGVDZWxsQ2xpY2s9e2hhbmRsZUNlbGxDbGlja31cclxuXHRcdFx0XHR3aW5uZXJTZXF1ZW5jZT17d2lubmVyU2VxdWVuY2V9XHJcblx0XHRcdFx0d2lubmVyU3ltYm9sPXt3aW5uZXJTeW1ib2x9XHJcblx0XHRcdC8+ICovfVxyXG5cdFx0PC9Ib21lUGFnZUxheW91dD5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZUxheW91dCh7aGVhZGVyLCBjaGlsZHJlbn0pIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJiZy1zbGF0ZS01MCBtaW4taC1zY3JlZW5cIj5cclxuXHRcdFx0e2hlYWRlcn1cclxuXHRcdDxtYWluIGNsYXNzTmFtZT1cInB0LTYgbXgtYXV0byB3LW1heFwiPntjaGlsZHJlbn08L21haW4+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuIl0sIm5hbWVzIjpbIkdhbWVUaXRsZSIsIkdhbWVJbmZvIiwiR2FtZUZpZWxkIiwidXNlR2FtZVN0YXRlIiwiR2FtZVN5bWJvbCIsIkhlYWRlciIsInVzZVN0YXRlIiwiR2FtZSIsIkhvbWVQYWdlIiwiSG9tZVBhZ2VMYXlvdXQiLCJoZWFkZXIiLCJjaGlsZHJlbiIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});