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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GAME_STATE_ACTIONS: function() { return /* binding */ GAME_STATE_ACTIONS; },\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./components/game-new/constants.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _game_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../game/model */ \"./components/game/model.js\");\nvar _s = $RefreshSig$();\n\n\n\nconst GAME_STATE_ACTIONS = {\n    CELL_CLICK: \"cell-click\"\n};\n//кастомный хук\nconst gameStateReducer = (state, action)=>{\n    return state;\n};\nconst initGameState = (param)=>{\n    let {} = param;\n    return {\n        cells: new Array(19 * 19).fill(null),\n        currentMove: _constants__WEBPACK_IMPORTED_MODULE_0__.GAME_SYMBOLS.CROSS,\n        playersTimeOver: []\n    };\n};\nfunction useGameState(playersCount) {\n    _s();\n    const [gameState, dispatch] = useReducer(gameStateReducer, {}, initGameState);\n    const winnerSequence = (0,_game_model__WEBPACK_IMPORTED_MODULE_2__.computeWinner)(cells);\n    //состояние какой следующий ход. Не заводим копию состояния currentMove, а расчитываем прямо при рендере.\n    const nextMove = (0,_game_model__WEBPACK_IMPORTED_MODULE_2__.getNextMove)(currentMove, playersCount, playersTimeOver);\n    const winnerSymbol = nextMove === currentMove ? currentMove : cells[winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence[0]];\n    return {\n        cells: gameState.cells,\n        currentMove: gameState.currentMove,\n        nextMove,\n        winnerSequence,\n        winnerSymbol,\n        dispatch\n    };\n} /* \r\n//СОСТОЯНИЯ\t\r\n\t//объединенное состояние: состояние игрового поля, состояние какой текущий ход \r\n\t//начальное значение useState - отрисовываем один раз пустое игровое поле (массив клеточек 19х19) при первоначальном рендере компонента\r\n  const [{ cells, currentMove, playersTimeOver }, setGameState] = useState(\r\n    () => ({\r\n      cells: new Array(19 * 19).fill(null),\r\n      currentMove: GAME_SYMBOLS.CROSS,\r\n      playersTimeOver: [],\r\n    })\r\n  );\r\n\r\n\tconst winnerSequence = computeWinner(cells);\r\n\t//состояние какой следующий ход. Не заводим копию состояния currentMove, а расчитываем прямо при рендере.\r\n\tconst nextMove = getNextMove(currentMove, playersCount, playersTimeOver);\r\n\r\n  const winnerSymbol =\r\n   \t nextMove === currentMove ? currentMove : cells[winnerSequence?.[0]];\r\n\r\n\t//обработчик клика по клетке (хода)\r\n\tconst handleCellClick = (index) => {\r\n    setGameState((lastGameState) => {\r\n      if (lastGameState.cells[index]) {\r\n        return lastGameState;\r\n      }\r\n\r\n      return {\r\n        ...lastGameState,\r\n        currentMove: getNextMove(\r\n          lastGameState.currentMove,\r\n          playersCount,\r\n          lastGameState.playersTimeOver\r\n        ),\r\n        cells: lastGameState.cells.map((cell, i) =>\r\n          i === index ? lastGameState.currentMove : cell\r\n        ),\r\n      };\r\n    });\r\n  };\r\n\r\n  //обработчик окончания времени хода игрока\r\n  const handlePlayerTimeOver = (symbol) => {\r\n    setGameState((lastGameState) => {\r\n      return {\r\n        ...lastGameState,\r\n        playersTimeOver: [...lastGameState.playersTimeOver, symbol],\r\n        currentMove: getNextMove(\r\n          lastGameState.currentMove,\r\n          playersCount,\r\n          lastGameState.playersTimeOver\r\n        ),\r\n      };\r\n    });\r\n  };\r\n\r\n\treturn{\r\n\t\tcells, \r\n\t\tcurrentMove, \r\n\t\tnextMove, \r\n\t\thandleCellClick, \r\n\t\thandlePlayerTimeOver,\r\n\t\twinnerSequence,\r\n\t\twinnerSymbol\r\n\t};\r\n  */ \n_s(useGameState, \"j2Lc7qLkPsIkuOKspfGyGEqTTbo=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL3VzZS1nYW1lLXN0YXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBNEM7QUFDWDtBQUM2QjtBQUV2RCxNQUFNSSxxQkFBcUI7SUFDaENDLFlBQVk7QUFDZCxFQUFDO0FBRUQsZUFBZTtBQUNmLE1BQU1DLG1CQUFtQixDQUFDQyxPQUFPQztJQUMvQixPQUFPRDtBQUNUO0FBRUEsTUFBTUUsZ0JBQWdCO1FBQUMsRUFBRTtXQUFNO1FBQzNCQyxPQUFPLElBQUlDLE1BQU0sS0FBSyxJQUFJQyxJQUFJLENBQUM7UUFDL0JDLGFBQWFiLG9EQUFZQSxDQUFDYyxLQUFLO1FBQy9CQyxpQkFBaUIsRUFBRTtJQUN2Qjs7QUFFTyxTQUFTQyxhQUFhQyxZQUFZOztJQUN2QyxNQUFNLENBQUNDLFdBQVdDLFNBQVMsR0FBR0MsV0FBV2Qsa0JBQWtCLENBQUMsR0FBR0c7SUFDL0QsTUFBTVksaUJBQWlCbkIsMERBQWFBLENBQUNRO0lBQ3RDLHlHQUF5RztJQUN6RyxNQUFNWSxXQUFXbkIsd0RBQVdBLENBQUNVLGFBQWFJLGNBQWNGO0lBQ3ZELE1BQU1RLGVBQ0hELGFBQWFULGNBQWNBLGNBQWNILEtBQUssQ0FBQ1csMkJBQUFBLHFDQUFBQSxjQUFnQixDQUFDLEVBQUUsQ0FBQztJQUV4RSxPQUFNO1FBQ0pYLE9BQU9RLFVBQVVSLEtBQUs7UUFDdEJHLGFBQWFLLFVBQVVMLFdBQVc7UUFDbENTO1FBQ0FEO1FBQ0FFO1FBQ0VKO0lBQ0g7QUFDRCxFQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBZ0VDO0dBakZjSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUtbmV3L21vZGVsL3VzZS1nYW1lLXN0YXRlLmpzPzJkMWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR0FNRV9TWU1CT0xTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbXB1dGVXaW5uZXIsIGdldE5leHRNb3ZlIH0gZnJvbSAnLi4vLi4vZ2FtZS9tb2RlbCc7XHJcblxyXG5leHBvcnQgY29uc3QgR0FNRV9TVEFURV9BQ1RJT05TID0ge1xyXG4gIENFTExfQ0xJQ0s6ICdjZWxsLWNsaWNrJ1xyXG59XHJcblxyXG4vL9C60LDRgdGC0L7QvNC90YvQuSDRhdGD0LpcclxuY29uc3QgZ2FtZVN0YXRlUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgcmV0dXJuIHN0YXRlO1xyXG59O1xyXG5cclxuY29uc3QgaW5pdEdhbWVTdGF0ZSA9ICh7fSkgPT4gKHtcclxuICAgIGNlbGxzOiBuZXcgQXJyYXkoMTkgKiAxOSkuZmlsbChudWxsKSxcclxuICAgIGN1cnJlbnRNb3ZlOiBHQU1FX1NZTUJPTFMuQ1JPU1MsXHJcbiAgICBwbGF5ZXJzVGltZU92ZXI6IFtdLFxyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VHYW1lU3RhdGUocGxheWVyc0NvdW50KSB7XHJcbiAgY29uc3QgW2dhbWVTdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihnYW1lU3RhdGVSZWR1Y2VyLCB7fSwgaW5pdEdhbWVTdGF0ZSk7XHJcbiAgY29uc3Qgd2lubmVyU2VxdWVuY2UgPSBjb21wdXRlV2lubmVyKGNlbGxzKTtcclxuXHQvL9GB0L7RgdGC0L7Rj9C90LjQtSDQutCw0LrQvtC5INGB0LvQtdC00YPRjtGJ0LjQuSDRhdC+0LQuINCd0LUg0LfQsNCy0L7QtNC40Lwg0LrQvtC/0LjRjiDRgdC+0YHRgtC+0Y/QvdC40Y8gY3VycmVudE1vdmUsINCwINGA0LDRgdGH0LjRgtGL0LLQsNC10Lwg0L/RgNGP0LzQviDQv9GA0Lgg0YDQtdC90LTQtdGA0LUuXHJcblx0Y29uc3QgbmV4dE1vdmUgPSBnZXROZXh0TW92ZShjdXJyZW50TW92ZSwgcGxheWVyc0NvdW50LCBwbGF5ZXJzVGltZU92ZXIpO1xyXG4gIGNvbnN0IHdpbm5lclN5bWJvbCA9XHJcbiAgIFx0IG5leHRNb3ZlID09PSBjdXJyZW50TW92ZSA/IGN1cnJlbnRNb3ZlIDogY2VsbHNbd2lubmVyU2VxdWVuY2U/LlswXV07XHJcblxyXG5yZXR1cm57XHJcblx0XHRjZWxsczogZ2FtZVN0YXRlLmNlbGxzLCBcclxuXHRcdGN1cnJlbnRNb3ZlOiBnYW1lU3RhdGUuY3VycmVudE1vdmUsIFxyXG5cdFx0bmV4dE1vdmUsIFxyXG5cdFx0d2lubmVyU2VxdWVuY2UsXHJcblx0XHR3aW5uZXJTeW1ib2wsIFxyXG4gICAgZGlzcGF0Y2hcclxuXHR9O1xyXG59XHJcbiAvKiBcclxuLy/QodCe0KHQotCe0K/QndCY0K9cdFxyXG5cdC8v0L7QsdGK0LXQtNC40L3QtdC90L3QvtC1INGB0L7RgdGC0L7Rj9C90LjQtTog0YHQvtGB0YLQvtGP0L3QuNC1INC40LPRgNC+0LLQvtCz0L4g0L/QvtC70Y8sINGB0L7RgdGC0L7Rj9C90LjQtSDQutCw0LrQvtC5INGC0LXQutGD0YnQuNC5INGF0L7QtCBcclxuXHQvL9C90LDRh9Cw0LvRjNC90L7QtSDQt9C90LDRh9C10L3QuNC1IHVzZVN0YXRlIC0g0L7RgtGA0LjRgdC+0LLRi9Cy0LDQtdC8INC+0LTQuNC9INGA0LDQtyDQv9GD0YHRgtC+0LUg0LjQs9GA0L7QstC+0LUg0L/QvtC70LUgKNC80LDRgdGB0LjQsiDQutC70LXRgtC+0YfQtdC6IDE50YUxOSkg0L/RgNC4INC/0LXRgNCy0L7QvdCw0YfQsNC70YzQvdC+0Lwg0YDQtdC90LTQtdGA0LUg0LrQvtC80L/QvtC90LXQvdGC0LBcclxuICBjb25zdCBbeyBjZWxscywgY3VycmVudE1vdmUsIHBsYXllcnNUaW1lT3ZlciB9LCBzZXRHYW1lU3RhdGVdID0gdXNlU3RhdGUoXHJcbiAgICAoKSA9PiAoe1xyXG4gICAgICBjZWxsczogbmV3IEFycmF5KDE5ICogMTkpLmZpbGwobnVsbCksXHJcbiAgICAgIGN1cnJlbnRNb3ZlOiBHQU1FX1NZTUJPTFMuQ1JPU1MsXHJcbiAgICAgIHBsYXllcnNUaW1lT3ZlcjogW10sXHJcbiAgICB9KVxyXG4gICk7XHJcblxyXG5cdGNvbnN0IHdpbm5lclNlcXVlbmNlID0gY29tcHV0ZVdpbm5lcihjZWxscyk7XHJcblx0Ly/RgdC+0YHRgtC+0Y/QvdC40LUg0LrQsNC60L7QuSDRgdC70LXQtNGD0Y7RidC40Lkg0YXQvtC0LiDQndC1INC30LDQstC+0LTQuNC8INC60L7Qv9C40Y4g0YHQvtGB0YLQvtGP0L3QuNGPIGN1cnJlbnRNb3ZlLCDQsCDRgNCw0YHRh9C40YLRi9Cy0LDQtdC8INC/0YDRj9C80L4g0L/RgNC4INGA0LXQvdC00LXRgNC1LlxyXG5cdGNvbnN0IG5leHRNb3ZlID0gZ2V0TmV4dE1vdmUoY3VycmVudE1vdmUsIHBsYXllcnNDb3VudCwgcGxheWVyc1RpbWVPdmVyKTtcclxuXHJcbiAgY29uc3Qgd2lubmVyU3ltYm9sID1cclxuICAgXHQgbmV4dE1vdmUgPT09IGN1cnJlbnRNb3ZlID8gY3VycmVudE1vdmUgOiBjZWxsc1t3aW5uZXJTZXF1ZW5jZT8uWzBdXTtcclxuXHJcblx0Ly/QvtCx0YDQsNCx0L7RgtGH0LjQuiDQutC70LjQutCwINC/0L4g0LrQu9C10YLQutC1ICjRhdC+0LTQsClcclxuXHRjb25zdCBoYW5kbGVDZWxsQ2xpY2sgPSAoaW5kZXgpID0+IHtcclxuICAgIHNldEdhbWVTdGF0ZSgobGFzdEdhbWVTdGF0ZSkgPT4ge1xyXG4gICAgICBpZiAobGFzdEdhbWVTdGF0ZS5jZWxsc1tpbmRleF0pIHtcclxuICAgICAgICByZXR1cm4gbGFzdEdhbWVTdGF0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5sYXN0R2FtZVN0YXRlLFxyXG4gICAgICAgIGN1cnJlbnRNb3ZlOiBnZXROZXh0TW92ZShcclxuICAgICAgICAgIGxhc3RHYW1lU3RhdGUuY3VycmVudE1vdmUsXHJcbiAgICAgICAgICBwbGF5ZXJzQ291bnQsXHJcbiAgICAgICAgICBsYXN0R2FtZVN0YXRlLnBsYXllcnNUaW1lT3ZlclxyXG4gICAgICAgICksXHJcbiAgICAgICAgY2VsbHM6IGxhc3RHYW1lU3RhdGUuY2VsbHMubWFwKChjZWxsLCBpKSA9PlxyXG4gICAgICAgICAgaSA9PT0gaW5kZXggPyBsYXN0R2FtZVN0YXRlLmN1cnJlbnRNb3ZlIDogY2VsbFxyXG4gICAgICAgICksXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvL9C+0LHRgNCw0LHQvtGC0YfQuNC6INC+0LrQvtC90YfQsNC90LjRjyDQstGA0LXQvNC10L3QuCDRhdC+0LTQsCDQuNCz0YDQvtC60LBcclxuICBjb25zdCBoYW5kbGVQbGF5ZXJUaW1lT3ZlciA9IChzeW1ib2wpID0+IHtcclxuICAgIHNldEdhbWVTdGF0ZSgobGFzdEdhbWVTdGF0ZSkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmxhc3RHYW1lU3RhdGUsXHJcbiAgICAgICAgcGxheWVyc1RpbWVPdmVyOiBbLi4ubGFzdEdhbWVTdGF0ZS5wbGF5ZXJzVGltZU92ZXIsIHN5bWJvbF0sXHJcbiAgICAgICAgY3VycmVudE1vdmU6IGdldE5leHRNb3ZlKFxyXG4gICAgICAgICAgbGFzdEdhbWVTdGF0ZS5jdXJyZW50TW92ZSxcclxuICAgICAgICAgIHBsYXllcnNDb3VudCxcclxuICAgICAgICAgIGxhc3RHYW1lU3RhdGUucGxheWVyc1RpbWVPdmVyXHJcbiAgICAgICAgKSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG5cdHJldHVybntcclxuXHRcdGNlbGxzLCBcclxuXHRcdGN1cnJlbnRNb3ZlLCBcclxuXHRcdG5leHRNb3ZlLCBcclxuXHRcdGhhbmRsZUNlbGxDbGljaywgXHJcblx0XHRoYW5kbGVQbGF5ZXJUaW1lT3ZlcixcclxuXHRcdHdpbm5lclNlcXVlbmNlLFxyXG5cdFx0d2lubmVyU3ltYm9sXHJcblx0fTtcclxuICAqL1xyXG4iXSwibmFtZXMiOlsiR0FNRV9TWU1CT0xTIiwidXNlU3RhdGUiLCJjb21wdXRlV2lubmVyIiwiZ2V0TmV4dE1vdmUiLCJHQU1FX1NUQVRFX0FDVElPTlMiLCJDRUxMX0NMSUNLIiwiZ2FtZVN0YXRlUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiaW5pdEdhbWVTdGF0ZSIsImNlbGxzIiwiQXJyYXkiLCJmaWxsIiwiY3VycmVudE1vdmUiLCJDUk9TUyIsInBsYXllcnNUaW1lT3ZlciIsInVzZUdhbWVTdGF0ZSIsInBsYXllcnNDb3VudCIsImdhbWVTdGF0ZSIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsIndpbm5lclNlcXVlbmNlIiwibmV4dE1vdmUiLCJ3aW5uZXJTeW1ib2wiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game-new/model/use-game-state.js\n"));

/***/ })

});