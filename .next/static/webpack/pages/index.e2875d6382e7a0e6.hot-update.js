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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameInfo: function() { return /* binding */ GameInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile */ \"./components/profile/index.js\");\n/* harmony import */ var _icons_cross_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/cross-icon */ \"./components/game/icons/cross-icon.jsx\");\n/* harmony import */ var _game_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game-symbol */ \"./components/game/game-symbol.jsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\n/* harmony import */ var _images_avatar_1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/avatar-1.png */ \"./components/game/images/avatar-1.png\");\n/* harmony import */ var _images_avatar_2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/avatar-2.png */ \"./components/game/images/avatar-2.png\");\n/* harmony import */ var _images_avatar_3_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/avatar-3.png */ \"./components/game/images/avatar-3.png\");\n/* harmony import */ var _images_avatar_4_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/avatar-4.png */ \"./components/game/images/avatar-4.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst players = [\n    {\n        id: 1,\n        name: \"User 1505\",\n        rating: \"1230\",\n        avatar: _images_avatar_1_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_5__.GAME_SYMBOLS.CROSS\n    },\n    {\n        id: 2,\n        name: \"User 1645849680923460\",\n        rating: \"850\",\n        avatar: _images_avatar_2_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_5__.GAME_SYMBOLS.ZERO\n    },\n    {\n        id: 3,\n        name: \"User 2390\",\n        rating: \"56\",\n        avatar: _images_avatar_3_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_5__.GAME_SYMBOLS.TRIANGLE\n    },\n    {\n        id: 4,\n        name: \"User 1630\",\n        rating: \"2512\",\n        avatar: _images_avatar_4_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n        symbol: _constants__WEBPACK_IMPORTED_MODULE_5__.GAME_SYMBOLS.SQUARE\n    }\n];\nfunction GameInfo(param) {\n    let { className, playersCount } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(className, \"bg-white rounded-2xl shadow-md px-8 py-4 justify-between grid grid-cols-2 gap-12\"),\n        children: players.slice(0, playersCount).map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerInfo, {\n                playerInfo: player,\n                isRight: index % 2 === 1\n            }, player.id, false, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 47,\n                columnNumber: 5\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-info.jsx\",\n        lineNumber: 44,\n        columnNumber: 3\n    }, this);\n}\n_c = GameInfo;\nfunction PlayerInfo(param) {\n    let { playerInfo, isRight } = param;\n    _s();\n    const [seconds, setSeconds] = useState(60);\n    const minutesString = Math.floor(seconds / 60);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-3 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"relative\", isRight && \"order-3\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_profile__WEBPACK_IMPORTED_MODULE_2__.Profile, {\n                        className: \"w-44\",\n                        name: playerInfo.name,\n                        rating: playerInfo.rating,\n                        avatar: playerInfo.avatar\n                    }, void 0, false, {\n                        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-info.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_symbol__WEBPACK_IMPORTED_MODULE_4__.GameSymbol, {\n                            symbol: playerInfo.symbol\n                        }, void 0, false, {\n                            fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-info.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-info.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 66,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"h-6 w-px bg-slate-200\", isRight && \"order-2\")\n            }, void 0, false, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 77,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"text-slate-900 text-lg font-semibold\", isRight && \"order-1\"),\n                children: [\n                    minutesString,\n                    \":08\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-info.jsx\",\n                lineNumber: 78,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\OpenServer\\\\domains\\\\myproject.loc\\\\www\\\\tit-tak-toe\\\\components\\\\game\\\\game-info.jsx\",\n        lineNumber: 65,\n        columnNumber: 4\n    }, this);\n}\n_s(PlayerInfo, \"hW/iHjYwWpYKNYMPqr7oC+823d0=\");\n_c1 = PlayerInfo;\nvar _c, _c1;\n$RefreshReg$(_c, \"GameInfo\");\n$RefreshReg$(_c1, \"PlayerInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1pbmZvLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QjtBQUNZO0FBQ1c7QUFDSjtBQUNBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFFL0MsTUFBTVMsVUFBVTtJQUNmO1FBQ0NDLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLFFBQVFSLDREQUFVQTtRQUNsQlMsUUFBUVYsb0RBQVlBLENBQUNXLEtBQUs7SUFDM0I7SUFDQztRQUNBTCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxRQUFRUCw0REFBVUE7UUFDbEJRLFFBQVFWLG9EQUFZQSxDQUFDWSxJQUFJO0lBQzFCO0lBQ0M7UUFDQU4sSUFBSTtRQUNKQyxNQUFNO1FBQ05DLFFBQVE7UUFDUkMsUUFBUU4sNERBQVVBO1FBQ2xCTyxRQUFRVixvREFBWUEsQ0FBQ2EsUUFBUTtJQUM5QjtJQUNDO1FBQ0FQLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLFFBQVFMLDREQUFVQTtRQUNsQk0sUUFBUVYsb0RBQVlBLENBQUNjLE1BQU07SUFDNUI7Q0FDQTtBQUVNLFNBQVNDLFNBQVMsS0FBeUI7UUFBekIsRUFBQ0MsU0FBUyxFQUFFQyxZQUFZLEVBQUMsR0FBekI7SUFDeEIscUJBQ0MsOERBQUNDO1FBQUlGLFdBQVdwQixnREFBSUEsQ0FBQ29CLFdBQVc7a0JBRTlCWCxRQUFRYyxLQUFLLENBQUMsR0FBR0YsY0FBY0csR0FBRyxDQUFDLENBQUNDLFFBQVFDLHNCQUM1Qyw4REFBQ0M7Z0JBRUFDLFlBQVlIO2dCQUNaSSxTQUFTSCxRQUFRLE1BQU07ZUFGbEJELE9BQU9mLEVBQUU7Ozs7Ozs7Ozs7QUFTbkI7S0FmZ0JTO0FBaUJoQixTQUFTUSxXQUFXLEtBQXVCO1FBQXZCLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFLEdBQXZCOztJQUVuQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0MsU0FBUztJQUN2QyxNQUFNQyxnQkFBZ0JDLEtBQUtDLEtBQUssQ0FBQ0wsVUFBVTtJQUUzQyxxQkFDRSw4REFBQ1I7UUFBSUYsV0FBVTs7MEJBQ2QsOERBQUNFO2dCQUFJRixXQUFXcEIsZ0RBQUlBLENBQUMsWUFBWTZCLFdBQVc7O2tDQUMzQyw4REFBQzVCLDZDQUFPQTt3QkFDUG1CLFdBQVU7d0JBQ1ZULE1BQU1pQixXQUFXakIsSUFBSTt3QkFDckJDLFFBQVFnQixXQUFXaEIsTUFBTTt3QkFDekJDLFFBQVFlLFdBQVdmLE1BQU07Ozs7OztrQ0FFMUIsOERBQUNTO3dCQUFJRixXQUFVO2tDQUNkLDRFQUFDakIsb0RBQVVBOzRCQUFDVyxRQUFRYyxXQUFXZCxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHdkMsOERBQUNRO2dCQUFJRixXQUFXcEIsZ0RBQUlBLENBQUMseUJBQXlCNkIsV0FBVzs7Ozs7OzBCQUN6RCw4REFBQ1A7Z0JBQUlGLFdBQVdwQixnREFBSUEsQ0FBQyx3Q0FBd0M2QixXQUFXOztvQkFDdEVJO29CQUFjOzs7Ozs7Ozs7Ozs7O0FBSXBCO0dBeEJTTjtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvZ2FtZS1pbmZvLmpzeD9kMDQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgeyBQcm9maWxlfSBmcm9tICcuLi9wcm9maWxlJztcclxuaW1wb3J0IHsgQ3Jvc3NJY29uIH0gZnJvbSAnLi9pY29ucy9jcm9zcy1pY29uJztcclxuaW1wb3J0IHsgR2FtZVN5bWJvbCB9IGZyb20gJy4vZ2FtZS1zeW1ib2wnO1xyXG5pbXBvcnQgeyBHQU1FX1NZTUJPTFMgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCBhdmF0YXJTcmMxIGZyb20gJy4vaW1hZ2VzL2F2YXRhci0xLnBuZyc7XHJcbmltcG9ydCBhdmF0YXJTcmMyIGZyb20gJy4vaW1hZ2VzL2F2YXRhci0yLnBuZyc7XHJcbmltcG9ydCBhdmF0YXJTcmMzIGZyb20gJy4vaW1hZ2VzL2F2YXRhci0zLnBuZyc7XHJcbmltcG9ydCBhdmF0YXJTcmM0IGZyb20gJy4vaW1hZ2VzL2F2YXRhci00LnBuZyc7XHJcbiBcclxuY29uc3QgcGxheWVycyA9IFtcclxuXHR7XHJcblx0XHRpZDogMSxcclxuXHRcdG5hbWU6ICdVc2VyIDE1MDUnLCBcclxuXHRcdHJhdGluZzogJzEyMzAnLCBcclxuXHRcdGF2YXRhcjogYXZhdGFyU3JjMSwgXHJcblx0XHRzeW1ib2w6IEdBTUVfU1lNQk9MUy5DUk9TU1xyXG5cdH0sXHJcblx0XHR7XHJcblx0XHRpZDogMixcclxuXHRcdG5hbWU6ICdVc2VyIDE2NDU4NDk2ODA5MjM0NjAnLCBcclxuXHRcdHJhdGluZzogJzg1MCcsIFxyXG5cdFx0YXZhdGFyOiBhdmF0YXJTcmMyLCBcclxuXHRcdHN5bWJvbDogR0FNRV9TWU1CT0xTLlpFUk9cclxuXHR9LFxyXG5cdFx0e1xyXG5cdFx0aWQ6IDMsXHJcblx0XHRuYW1lOiAnVXNlciAyMzkwJywgXHJcblx0XHRyYXRpbmc6ICc1NicsIFxyXG5cdFx0YXZhdGFyOiBhdmF0YXJTcmMzLCBcclxuXHRcdHN5bWJvbDogR0FNRV9TWU1CT0xTLlRSSUFOR0xFXHJcblx0fSxcclxuXHRcdHtcclxuXHRcdGlkOiA0LFxyXG5cdFx0bmFtZTogJ1VzZXIgMTYzMCcsIFxyXG5cdFx0cmF0aW5nOiAnMjUxMicsIFxyXG5cdFx0YXZhdGFyOiBhdmF0YXJTcmM0LCBcclxuXHRcdHN5bWJvbDogR0FNRV9TWU1CT0xTLlNRVUFSRVxyXG5cdH1cclxuXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHYW1lSW5mbyh7Y2xhc3NOYW1lLCBwbGF5ZXJzQ291bnR9KSB7XHJcblx0cmV0dXJuKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3NOYW1lLCBcImJnLXdoaXRlIHJvdW5kZWQtMnhsIHNoYWRvdy1tZCBweC04IHB5LTQganVzdGlmeS1iZXR3ZWVuIGdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTEyXCIpfT5cclxuXHJcblx0XHRcdHtwbGF5ZXJzLnNsaWNlKDAsIHBsYXllcnNDb3VudCkubWFwKChwbGF5ZXIsIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0PFBsYXllckluZm8gXHJcblx0XHRcdFx0XHRrZXk9e3BsYXllci5pZH1cclxuXHRcdFx0XHRcdHBsYXllckluZm89e3BsYXllcn1cclxuXHRcdFx0XHRcdGlzUmlnaHQ9e2luZGV4ICUgMiA9PT0gMX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQpKX1cclxuXHJcblxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gUGxheWVySW5mbyh7IHBsYXllckluZm8sIGlzUmlnaHQgfSkge1xyXG5cclxuXHRjb25zdCBbc2Vjb25kcywgc2V0U2Vjb25kc10gPSB1c2VTdGF0ZSg2MCk7XHJcblx0Y29uc3QgbWludXRlc1N0cmluZyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zIGl0ZW1zLWNlbnRlclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbHN4KFwicmVsYXRpdmVcIiwgaXNSaWdodCAmJiBcIm9yZGVyLTNcIil9PlxyXG5cdFx0XHRcdFx0PFByb2ZpbGUgXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctNDRcIlxyXG5cdFx0XHRcdFx0XHRuYW1lPXtwbGF5ZXJJbmZvLm5hbWV9IFxyXG5cdFx0XHRcdFx0XHRyYXRpbmc9e3BsYXllckluZm8ucmF0aW5nfSBcclxuXHRcdFx0XHRcdFx0YXZhdGFyPXtwbGF5ZXJJbmZvLmF2YXRhcn1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctNSBoLTUgcm91bmRlZC1mdWxsIGJnLXdoaXRlIHNoYWRvdyBhYnNvbHV0ZSAtbGVmdC0xIC10b3AtMSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHQ8R2FtZVN5bWJvbCBzeW1ib2w9e3BsYXllckluZm8uc3ltYm9sfSAvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Nsc3goXCJoLTYgdy1weCBiZy1zbGF0ZS0yMDBcIiwgaXNSaWdodCAmJiBcIm9yZGVyLTJcIil9PjwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbHN4KFwidGV4dC1zbGF0ZS05MDAgdGV4dC1sZyBmb250LXNlbWlib2xkXCIsIGlzUmlnaHQgJiYgXCJvcmRlci0xXCIpfT5cclxuXHRcdFx0XHRcdHttaW51dGVzU3RyaW5nfTowOFxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHQpXHJcbn0iXSwibmFtZXMiOlsiY2xzeCIsIlByb2ZpbGUiLCJDcm9zc0ljb24iLCJHYW1lU3ltYm9sIiwiR0FNRV9TWU1CT0xTIiwiYXZhdGFyU3JjMSIsImF2YXRhclNyYzIiLCJhdmF0YXJTcmMzIiwiYXZhdGFyU3JjNCIsInBsYXllcnMiLCJpZCIsIm5hbWUiLCJyYXRpbmciLCJhdmF0YXIiLCJzeW1ib2wiLCJDUk9TUyIsIlpFUk8iLCJUUklBTkdMRSIsIlNRVUFSRSIsIkdhbWVJbmZvIiwiY2xhc3NOYW1lIiwicGxheWVyc0NvdW50IiwiZGl2Iiwic2xpY2UiLCJtYXAiLCJwbGF5ZXIiLCJpbmRleCIsIlBsYXllckluZm8iLCJwbGF5ZXJJbmZvIiwiaXNSaWdodCIsInNlY29uZHMiLCJzZXRTZWNvbmRzIiwidXNlU3RhdGUiLCJtaW51dGVzU3RyaW5nIiwiTWF0aCIsImZsb29yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/game-info.jsx\n"));

/***/ })

});