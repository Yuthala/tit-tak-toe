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

/***/ "./components/game/use-game-state.js":
/*!*******************************************!*\
  !*** ./components/game/use-game-state.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _s = $RefreshSig$();\n\n\n//кастомный хук\nfunction useGameState(playersCount) {\n    _s();\n    //СОСТОЯНИЯ\t\n    //объединенное состояние: состояние игрового поля, состояние какой текущий ход \n    //начальное значение useState - отрисовываем один раз пустое игровое поле (массив клеточек 19х19) при первоначальном рендере компонента\n    const [{ cells, currentMove }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>({\n            cells: new Array(19 * 19).fill(null),\n            currentMove: _constants__WEBPACK_IMPORTED_MODULE_0__.GAME_SYMBOLS.CROSS\n        }));\n    //состояние какой следующий ход. Не заводим копию состояния currentMove, а расчитываем прямо при рендере.\n    const nextMove = getNextMove(currentMove, playersCount);\n    //обработчик клика по клетке (хода)\n    const handleCellClick = (index)=>{\n        setGameState((lastGameState)=>{\n            if (lastGameState.cells[index]) {\n                return lastGameState;\n            }\n            return {\n                ...lastGameState,\n                currentMove: getNextMove(lastGameState.currentMove, playersCount),\n                cells: lastGameState.cells.map((cell, i)=>i === index ? lastGameState.currentMove : cell)\n            };\n        });\n    };\n    return {\n        cells,\n        currentMove,\n        nextMove,\n        handleCellClick\n    };\n}\n_s(useGameState, \"U1Tm7hX355ctsX6ckaljSZQX4b8=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvdXNlLWdhbWUtc3RhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMkM7QUFDVjtBQUlqQyxlQUFlO0FBQ1IsU0FBU0UsYUFBYUMsWUFBWTs7SUFDekMsWUFBWTtJQUNYLCtFQUErRTtJQUMvRSx1SUFBdUk7SUFDdkksTUFBTSxDQUFDLEVBQUNDLEtBQUssRUFBRUMsV0FBVyxFQUFDLEVBQUVDLGFBQWEsR0FBR0wsK0NBQVFBLENBQUMsSUFBTztZQUM1REcsT0FBTyxJQUFJRyxNQUFNLEtBQUssSUFBSUMsSUFBSSxDQUFDO1lBQy9CSCxhQUFhTCxvREFBWUEsQ0FBQ1MsS0FBSztRQUNoQztJQUVBLHlHQUF5RztJQUN6RyxNQUFNQyxXQUFXQyxZQUFZTixhQUFhRjtJQUUxQyxtQ0FBbUM7SUFDbkMsTUFBTVMsa0JBQWtCLENBQUNDO1FBQ3hCUCxhQUFhLENBQUNRO1lBRWIsSUFBR0EsY0FBY1YsS0FBSyxDQUFDUyxNQUFNLEVBQUM7Z0JBQzdCLE9BQU9DO1lBQ1I7WUFFQSxPQUFPO2dCQUNOLEdBQUdBLGFBQWE7Z0JBQ2hCVCxhQUFhTSxZQUFZRyxjQUFjVCxXQUFXLEVBQUVGO2dCQUNwREMsT0FBT1UsY0FBY1YsS0FBSyxDQUFDVyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsSUFBTUEsTUFBTUosUUFBUUMsY0FBY1QsV0FBVyxHQUFHVztZQUV4RjtRQUNBO0lBQ0Q7SUFFQSxPQUFNO1FBQ0xaO1FBQ0FDO1FBQ0FLO1FBQ0FFO0lBQ0Q7QUFDRDtHQW5DZ0JWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS91c2UtZ2FtZS1zdGF0ZS5qcz8xMTAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdBTUVfU1lNQk9MUyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuXHJcbi8v0LrQsNGB0YLQvtC80L3Ri9C5INGF0YPQulxyXG5leHBvcnQgZnVuY3Rpb24gdXNlR2FtZVN0YXRlKHBsYXllcnNDb3VudCkge1xyXG4vL9Ch0J7QodCi0J7Qr9Cd0JjQr1x0XHJcblx0Ly/QvtCx0YrQtdC00LjQvdC10L3QvdC+0LUg0YHQvtGB0YLQvtGP0L3QuNC1OiDRgdC+0YHRgtC+0Y/QvdC40LUg0LjQs9GA0L7QstC+0LPQviDQv9C+0LvRjywg0YHQvtGB0YLQvtGP0L3QuNC1INC60LDQutC+0Lkg0YLQtdC60YPRidC40Lkg0YXQvtC0IFxyXG5cdC8v0L3QsNGH0LDQu9GM0L3QvtC1INC30L3QsNGH0LXQvdC40LUgdXNlU3RhdGUgLSDQvtGC0YDQuNGB0L7QstGL0LLQsNC10Lwg0L7QtNC40L0g0YDQsNC3INC/0YPRgdGC0L7QtSDQuNCz0YDQvtCy0L7QtSDQv9C+0LvQtSAo0LzQsNGB0YHQuNCyINC60LvQtdGC0L7Rh9C10LogMTnRhTE5KSDQv9GA0Lgg0L/QtdGA0LLQvtC90LDRh9Cw0LvRjNC90L7QvCDRgNC10L3QtNC10YDQtSDQutC+0LzQv9C+0L3QtdC90YLQsFxyXG5cdGNvbnN0IFt7Y2VsbHMsIGN1cnJlbnRNb3ZlfSwgc2V0R2FtZVN0YXRlXSA9IHVzZVN0YXRlKCgpID0+ICh7XHJcblx0XHRjZWxsczogbmV3IEFycmF5KDE5ICogMTkpLmZpbGwobnVsbCksXHJcblx0XHRjdXJyZW50TW92ZTogR0FNRV9TWU1CT0xTLkNST1NTXHJcblx0fSkpO1xyXG5cclxuXHQvL9GB0L7RgdGC0L7Rj9C90LjQtSDQutCw0LrQvtC5INGB0LvQtdC00YPRjtGJ0LjQuSDRhdC+0LQuINCd0LUg0LfQsNCy0L7QtNC40Lwg0LrQvtC/0LjRjiDRgdC+0YHRgtC+0Y/QvdC40Y8gY3VycmVudE1vdmUsINCwINGA0LDRgdGH0LjRgtGL0LLQsNC10Lwg0L/RgNGP0LzQviDQv9GA0Lgg0YDQtdC90LTQtdGA0LUuXHJcblx0Y29uc3QgbmV4dE1vdmUgPSBnZXROZXh0TW92ZShjdXJyZW50TW92ZSwgcGxheWVyc0NvdW50KTtcclxuXHJcblx0Ly/QvtCx0YDQsNCx0L7RgtGH0LjQuiDQutC70LjQutCwINC/0L4g0LrQu9C10YLQutC1ICjRhdC+0LTQsClcclxuXHRjb25zdCBoYW5kbGVDZWxsQ2xpY2sgPSAoaW5kZXgpID0+IHtcclxuXHRcdHNldEdhbWVTdGF0ZSgobGFzdEdhbWVTdGF0ZSkgPT4ge1xyXG5cclxuXHRcdFx0aWYobGFzdEdhbWVTdGF0ZS5jZWxsc1tpbmRleF0pe1xyXG5cdFx0XHRcdHJldHVybiBsYXN0R2FtZVN0YXRlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLmxhc3RHYW1lU3RhdGUsXHJcblx0XHRcdFx0Y3VycmVudE1vdmU6IGdldE5leHRNb3ZlKGxhc3RHYW1lU3RhdGUuY3VycmVudE1vdmUsIHBsYXllcnNDb3VudCksXHJcblx0XHRcdFx0Y2VsbHM6IGxhc3RHYW1lU3RhdGUuY2VsbHMubWFwKChjZWxsLCBpKSA9PiBpID09PSBpbmRleCA/IGxhc3RHYW1lU3RhdGUuY3VycmVudE1vdmUgOiBjZWxsXHJcblx0XHRcdCksXHJcblx0XHR9O1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJue1xyXG5cdFx0Y2VsbHMsIFxyXG5cdFx0Y3VycmVudE1vdmUsIFxyXG5cdFx0bmV4dE1vdmUsIFxyXG5cdFx0aGFuZGxlQ2VsbENsaWNrXHJcblx0fVxyXG59Il0sIm5hbWVzIjpbIkdBTUVfU1lNQk9MUyIsInVzZVN0YXRlIiwidXNlR2FtZVN0YXRlIiwicGxheWVyc0NvdW50IiwiY2VsbHMiLCJjdXJyZW50TW92ZSIsInNldEdhbWVTdGF0ZSIsIkFycmF5IiwiZmlsbCIsIkNST1NTIiwibmV4dE1vdmUiLCJnZXROZXh0TW92ZSIsImhhbmRsZUNlbGxDbGljayIsImluZGV4IiwibGFzdEdhbWVTdGF0ZSIsIm1hcCIsImNlbGwiLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/use-game-state.js\n"));

/***/ })

});