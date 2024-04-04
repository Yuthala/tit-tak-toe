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

/***/ "./components/game-new/model/use-game-state.js":
/*!*****************************************************!*\
  !*** ./components/game-new/model/use-game-state.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./components/game-new/constants.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _game_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../game/model */ \"./components/game/model.js\");\nvar _s = $RefreshSig$();\n\n\n\nfunction useGameState(playersCount) {\n    _s();\n    const [gameState, dispatch] = useReducer(gameStateReducer, {\n        playersCount\n    }, initGameState);\n    const winnerSequence = (0,_game_model__WEBPACK_IMPORTED_MODULE_2__.computeWinner)(cells);\n    //состояние какой следующий ход. Не заводим копию состояния currentMove, а расчитываем прямо при рендере.\n    const nextMove = (0,_game_model__WEBPACK_IMPORTED_MODULE_2__.getNextMove)(currentMove, playersCount, playersTimeOver);\n    const winnerSymbol = nextMove === currentMove ? currentMove : cells[winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence[0]];\n    return {\n        cells: gameState.cells,\n        currentMove: gameState.currentMove,\n        nextMove,\n        winnerSequence,\n        winnerSymbol,\n        dispatch\n    };\n} /* \r\n//СОСТОЯНИЯ\t\r\n\t//объединенное состояние: состояние игрового поля, состояние какой текущий ход \r\n\t//начальное значение useState - отрисовываем один раз пустое игровое поле (массив клеточек 19х19) при первоначальном рендере компонента\r\n  const [{ cells, currentMove, playersTimeOver }, setGameState] = useState(\r\n    () => ({\r\n      cells: new Array(19 * 19).fill(null),\r\n      currentMove: GAME_SYMBOLS.CROSS,\r\n      playersTimeOver: [],\r\n    })\r\n  );\r\n\r\n\tconst winnerSequence = computeWinner(cells);\r\n\t//состояние какой следующий ход. Не заводим копию состояния currentMove, а расчитываем прямо при рендере.\r\n\tconst nextMove = getNextMove(currentMove, playersCount, playersTimeOver);\r\n\r\n  const winnerSymbol =\r\n   \t nextMove === currentMove ? currentMove : cells[winnerSequence?.[0]];\r\n\r\n\t//обработчик клика по клетке (хода)\r\n\tconst handleCellClick = (index) => {\r\n    setGameState((lastGameState) => {\r\n      if (lastGameState.cells[index]) {\r\n        return lastGameState;\r\n      }\r\n\r\n      return {\r\n        ...lastGameState,\r\n        currentMove: getNextMove(\r\n          lastGameState.currentMove,\r\n          playersCount,\r\n          lastGameState.playersTimeOver\r\n        ),\r\n        cells: lastGameState.cells.map((cell, i) =>\r\n          i === index ? lastGameState.currentMove : cell\r\n        ),\r\n      };\r\n    });\r\n  };\r\n\r\n  //обработчик окончания времени хода игрока\r\n  const handlePlayerTimeOver = (symbol) => {\r\n    setGameState((lastGameState) => {\r\n      return {\r\n        ...lastGameState,\r\n        playersTimeOver: [...lastGameState.playersTimeOver, symbol],\r\n        currentMove: getNextMove(\r\n          lastGameState.currentMove,\r\n          playersCount,\r\n          lastGameState.playersTimeOver\r\n        ),\r\n      };\r\n    });\r\n  };\r\n\r\n\treturn{\r\n\t\tcells, \r\n\t\tcurrentMove, \r\n\t\tnextMove, \r\n\t\thandleCellClick, \r\n\t\thandlePlayerTimeOver,\r\n\t\twinnerSequence,\r\n\t\twinnerSymbol\r\n\t};\r\n  */ \n_s(useGameState, \"K4BiU2yFJxkZph4Rpz/ufJZVhb8=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL3VzZS1nYW1lLXN0YXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE0QztBQUNYO0FBQzZCO0FBRXZELFNBQVNJLGFBQWFDLFlBQVk7O0lBQ3ZDLE1BQU0sQ0FBQ0MsV0FBV0MsU0FBUyxHQUFHQyxXQUFXQyxrQkFBa0I7UUFBQ0o7SUFBWSxHQUFHSztJQUMzRSxNQUFNQyxpQkFBaUJULDBEQUFhQSxDQUFDVTtJQUN0Qyx5R0FBeUc7SUFDekcsTUFBTUMsV0FBV1Ysd0RBQVdBLENBQUNXLGFBQWFULGNBQWNVO0lBQ3ZELE1BQU1DLGVBQ0hILGFBQWFDLGNBQWNBLGNBQWNGLEtBQUssQ0FBQ0QsMkJBQUFBLHFDQUFBQSxjQUFnQixDQUFDLEVBQUUsQ0FBQztJQUV4RSxPQUFNO1FBQ0pDLE9BQU9OLFVBQVVNLEtBQUs7UUFDdEJFLGFBQWFSLFVBQVVRLFdBQVc7UUFDbENEO1FBQ0FGO1FBQ0FLO1FBQ0VUO0lBQ0g7QUFDRCxFQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBZ0VDO0dBakZjSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL3VzZS1nYW1lLXN0YXRlLmpzPzJkMWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR0FNRV9TWU1CT0xTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbXB1dGVXaW5uZXIsIGdldE5leHRNb3ZlIH0gZnJvbSAnLi4vLi4vZ2FtZS9tb2RlbCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlR2FtZVN0YXRlKHBsYXllcnNDb3VudCkge1xyXG4gIGNvbnN0IFtnYW1lU3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoZ2FtZVN0YXRlUmVkdWNlciwge3BsYXllcnNDb3VudH0sIGluaXRHYW1lU3RhdGUpO1xyXG4gIGNvbnN0IHdpbm5lclNlcXVlbmNlID0gY29tcHV0ZVdpbm5lcihjZWxscyk7XHJcblx0Ly/RgdC+0YHRgtC+0Y/QvdC40LUg0LrQsNC60L7QuSDRgdC70LXQtNGD0Y7RidC40Lkg0YXQvtC0LiDQndC1INC30LDQstC+0LTQuNC8INC60L7Qv9C40Y4g0YHQvtGB0YLQvtGP0L3QuNGPIGN1cnJlbnRNb3ZlLCDQsCDRgNCw0YHRh9C40YLRi9Cy0LDQtdC8INC/0YDRj9C80L4g0L/RgNC4INGA0LXQvdC00LXRgNC1LlxyXG5cdGNvbnN0IG5leHRNb3ZlID0gZ2V0TmV4dE1vdmUoY3VycmVudE1vdmUsIHBsYXllcnNDb3VudCwgcGxheWVyc1RpbWVPdmVyKTtcclxuICBjb25zdCB3aW5uZXJTeW1ib2wgPVxyXG4gICBcdCBuZXh0TW92ZSA9PT0gY3VycmVudE1vdmUgPyBjdXJyZW50TW92ZSA6IGNlbGxzW3dpbm5lclNlcXVlbmNlPy5bMF1dO1xyXG5cclxucmV0dXJue1xyXG5cdFx0Y2VsbHM6IGdhbWVTdGF0ZS5jZWxscywgXHJcblx0XHRjdXJyZW50TW92ZTogZ2FtZVN0YXRlLmN1cnJlbnRNb3ZlLCBcclxuXHRcdG5leHRNb3ZlLCBcclxuXHRcdHdpbm5lclNlcXVlbmNlLFxyXG5cdFx0d2lubmVyU3ltYm9sLCBcclxuICAgIGRpc3BhdGNoXHJcblx0fTtcclxufVxyXG4gLyogXHJcbi8v0KHQntCh0KLQntCv0J3QmNCvXHRcclxuXHQvL9C+0LHRitC10LTQuNC90LXQvdC90L7QtSDRgdC+0YHRgtC+0Y/QvdC40LU6INGB0L7RgdGC0L7Rj9C90LjQtSDQuNCz0YDQvtCy0L7Qs9C+INC/0L7Qu9GPLCDRgdC+0YHRgtC+0Y/QvdC40LUg0LrQsNC60L7QuSDRgtC10LrRg9GJ0LjQuSDRhdC+0LQgXHJcblx0Ly/QvdCw0YfQsNC70YzQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSB1c2VTdGF0ZSAtINC+0YLRgNC40YHQvtCy0YvQstCw0LXQvCDQvtC00LjQvSDRgNCw0Lcg0L/Rg9GB0YLQvtC1INC40LPRgNC+0LLQvtC1INC/0L7Qu9C1ICjQvNCw0YHRgdC40LIg0LrQu9C10YLQvtGH0LXQuiAxOdGFMTkpINC/0YDQuCDQv9C10YDQstC+0L3QsNGH0LDQu9GM0L3QvtC8INGA0LXQvdC00LXRgNC1INC60L7QvNC/0L7QvdC10L3RgtCwXHJcbiAgY29uc3QgW3sgY2VsbHMsIGN1cnJlbnRNb3ZlLCBwbGF5ZXJzVGltZU92ZXIgfSwgc2V0R2FtZVN0YXRlXSA9IHVzZVN0YXRlKFxyXG4gICAgKCkgPT4gKHtcclxuICAgICAgY2VsbHM6IG5ldyBBcnJheSgxOSAqIDE5KS5maWxsKG51bGwpLFxyXG4gICAgICBjdXJyZW50TW92ZTogR0FNRV9TWU1CT0xTLkNST1NTLFxyXG4gICAgICBwbGF5ZXJzVGltZU92ZXI6IFtdLFxyXG4gICAgfSlcclxuICApO1xyXG5cclxuXHRjb25zdCB3aW5uZXJTZXF1ZW5jZSA9IGNvbXB1dGVXaW5uZXIoY2VsbHMpO1xyXG5cdC8v0YHQvtGB0YLQvtGP0L3QuNC1INC60LDQutC+0Lkg0YHQu9C10LTRg9GO0YnQuNC5INGF0L7QtC4g0J3QtSDQt9Cw0LLQvtC00LjQvCDQutC+0L/QuNGOINGB0L7RgdGC0L7Rj9C90LjRjyBjdXJyZW50TW92ZSwg0LAg0YDQsNGB0YfQuNGC0YvQstCw0LXQvCDQv9GA0Y/QvNC+INC/0YDQuCDRgNC10L3QtNC10YDQtS5cclxuXHRjb25zdCBuZXh0TW92ZSA9IGdldE5leHRNb3ZlKGN1cnJlbnRNb3ZlLCBwbGF5ZXJzQ291bnQsIHBsYXllcnNUaW1lT3Zlcik7XHJcblxyXG4gIGNvbnN0IHdpbm5lclN5bWJvbCA9XHJcbiAgIFx0IG5leHRNb3ZlID09PSBjdXJyZW50TW92ZSA/IGN1cnJlbnRNb3ZlIDogY2VsbHNbd2lubmVyU2VxdWVuY2U/LlswXV07XHJcblxyXG5cdC8v0L7QsdGA0LDQsdC+0YLRh9C40Log0LrQu9C40LrQsCDQv9C+INC60LvQtdGC0LrQtSAo0YXQvtC00LApXHJcblx0Y29uc3QgaGFuZGxlQ2VsbENsaWNrID0gKGluZGV4KSA9PiB7XHJcbiAgICBzZXRHYW1lU3RhdGUoKGxhc3RHYW1lU3RhdGUpID0+IHtcclxuICAgICAgaWYgKGxhc3RHYW1lU3RhdGUuY2VsbHNbaW5kZXhdKSB7XHJcbiAgICAgICAgcmV0dXJuIGxhc3RHYW1lU3RhdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4ubGFzdEdhbWVTdGF0ZSxcclxuICAgICAgICBjdXJyZW50TW92ZTogZ2V0TmV4dE1vdmUoXHJcbiAgICAgICAgICBsYXN0R2FtZVN0YXRlLmN1cnJlbnRNb3ZlLFxyXG4gICAgICAgICAgcGxheWVyc0NvdW50LFxyXG4gICAgICAgICAgbGFzdEdhbWVTdGF0ZS5wbGF5ZXJzVGltZU92ZXJcclxuICAgICAgICApLFxyXG4gICAgICAgIGNlbGxzOiBsYXN0R2FtZVN0YXRlLmNlbGxzLm1hcCgoY2VsbCwgaSkgPT5cclxuICAgICAgICAgIGkgPT09IGluZGV4ID8gbGFzdEdhbWVTdGF0ZS5jdXJyZW50TW92ZSA6IGNlbGxcclxuICAgICAgICApLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy/QvtCx0YDQsNCx0L7RgtGH0LjQuiDQvtC60L7QvdGH0LDQvdC40Y8g0LLRgNC10LzQtdC90Lgg0YXQvtC00LAg0LjQs9GA0L7QutCwXHJcbiAgY29uc3QgaGFuZGxlUGxheWVyVGltZU92ZXIgPSAoc3ltYm9sKSA9PiB7XHJcbiAgICBzZXRHYW1lU3RhdGUoKGxhc3RHYW1lU3RhdGUpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5sYXN0R2FtZVN0YXRlLFxyXG4gICAgICAgIHBsYXllcnNUaW1lT3ZlcjogWy4uLmxhc3RHYW1lU3RhdGUucGxheWVyc1RpbWVPdmVyLCBzeW1ib2xdLFxyXG4gICAgICAgIGN1cnJlbnRNb3ZlOiBnZXROZXh0TW92ZShcclxuICAgICAgICAgIGxhc3RHYW1lU3RhdGUuY3VycmVudE1vdmUsXHJcbiAgICAgICAgICBwbGF5ZXJzQ291bnQsXHJcbiAgICAgICAgICBsYXN0R2FtZVN0YXRlLnBsYXllcnNUaW1lT3ZlclxyXG4gICAgICAgICksXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuXHRyZXR1cm57XHJcblx0XHRjZWxscywgXHJcblx0XHRjdXJyZW50TW92ZSwgXHJcblx0XHRuZXh0TW92ZSwgXHJcblx0XHRoYW5kbGVDZWxsQ2xpY2ssIFxyXG5cdFx0aGFuZGxlUGxheWVyVGltZU92ZXIsXHJcblx0XHR3aW5uZXJTZXF1ZW5jZSxcclxuXHRcdHdpbm5lclN5bWJvbFxyXG5cdH07XHJcbiAgKi9cclxuIl0sIm5hbWVzIjpbIkdBTUVfU1lNQk9MUyIsInVzZVN0YXRlIiwiY29tcHV0ZVdpbm5lciIsImdldE5leHRNb3ZlIiwidXNlR2FtZVN0YXRlIiwicGxheWVyc0NvdW50IiwiZ2FtZVN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIiwiZ2FtZVN0YXRlUmVkdWNlciIsImluaXRHYW1lU3RhdGUiLCJ3aW5uZXJTZXF1ZW5jZSIsImNlbGxzIiwibmV4dE1vdmUiLCJjdXJyZW50TW92ZSIsInBsYXllcnNUaW1lT3ZlciIsIndpbm5lclN5bWJvbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/game-new/model/use-game-state.js\n"));

/***/ })

});