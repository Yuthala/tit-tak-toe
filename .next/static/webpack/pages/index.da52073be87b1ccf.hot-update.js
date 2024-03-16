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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useGameState: function() { return /* binding */ useGameState; }\n/* harmony export */ });\n//кастомный хук\nvar _s = $RefreshSig$();\nfunction useGameState() {\n    _s();\n    //СОСТОЯНИЯ\t\n    //объединенное состояние: состояние игрового поля, состояние какой текущий ход \n    //начальное значение useState - отрисовываем один раз пустое игровое поле (массив клеточек 19х19) при первоначальном рендере компонента\n    const [{ cells, currentMove }, setGameState] = useState(()=>({\n            cells: new Array(19 * 19).fill(null),\n            currentMove: GAME_SYMBOLS.CROSS\n        }));\n    //состояние какой следующий ход. Не заводим копию состояния currentMove, а расчитываем прямо при рендере.\n    const nextMove = getNextMove(currentMove);\n    //обработчик клика по клетке (хода)\n    const handleCellClick = (index)=>{\n        setGameState((lastGameState)=>({\n                ...lastGameState,\n                currentMove: getNextMove(lastGameState.currentMove),\n                cells: lastGameState.cells.map((cell, i)=>i === index ? lastGameState.currentMove : cell)\n            }));\n    };\n}\n_s(useGameState, \"JTZ7wGcKYyZ3wCMTJrXOAy2Fi1E=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvdXNlLWdhbWUtc3RhdGUuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGVBQWU7O0FBQ1IsU0FBU0E7O0lBQ2hCLFlBQVk7SUFDWCwrRUFBK0U7SUFDL0UsdUlBQXVJO0lBQ3ZJLE1BQU0sQ0FBQyxFQUFDQyxLQUFLLEVBQUVDLFdBQVcsRUFBQyxFQUFFQyxhQUFhLEdBQUdDLFNBQVMsSUFBTztZQUM1REgsT0FBTyxJQUFJSSxNQUFNLEtBQUssSUFBSUMsSUFBSSxDQUFDO1lBQy9CSixhQUFhSyxhQUFhQyxLQUFLO1FBQ2hDO0lBRUEseUdBQXlHO0lBQ3pHLE1BQU1DLFdBQVdDLFlBQVlSO0lBRTdCLG1DQUFtQztJQUNuQyxNQUFNUyxrQkFBa0IsQ0FBQ0M7UUFDeEJULGFBQWFVLENBQUFBLGdCQUFrQjtnQkFDOUIsR0FBR0EsYUFBYTtnQkFDaEJYLGFBQWFRLFlBQVlHLGNBQWNYLFdBQVc7Z0JBQ2xERCxPQUFPWSxjQUFjWixLQUFLLENBQUNhLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxJQUFNQSxNQUFNSixRQUFRQyxjQUFjWCxXQUFXLEdBQUdhO1lBQ3ZGO0lBQ0Q7QUFFRDtHQXJCZ0JmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2FtZS91c2UtZ2FtZS1zdGF0ZS5qcz8xMTAyIl0sInNvdXJjZXNDb250ZW50IjpbIi8v0LrQsNGB0YLQvtC80L3Ri9C5INGF0YPQulxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdhbWVTdGF0ZSgpIHtcbi8v0KHQntCh0KLQntCv0J3QmNCvXHRcblx0Ly/QvtCx0YrQtdC00LjQvdC10L3QvdC+0LUg0YHQvtGB0YLQvtGP0L3QuNC1OiDRgdC+0YHRgtC+0Y/QvdC40LUg0LjQs9GA0L7QstC+0LPQviDQv9C+0LvRjywg0YHQvtGB0YLQvtGP0L3QuNC1INC60LDQutC+0Lkg0YLQtdC60YPRidC40Lkg0YXQvtC0IFxuXHQvL9C90LDRh9Cw0LvRjNC90L7QtSDQt9C90LDRh9C10L3QuNC1IHVzZVN0YXRlIC0g0L7RgtGA0LjRgdC+0LLRi9Cy0LDQtdC8INC+0LTQuNC9INGA0LDQtyDQv9GD0YHRgtC+0LUg0LjQs9GA0L7QstC+0LUg0L/QvtC70LUgKNC80LDRgdGB0LjQsiDQutC70LXRgtC+0YfQtdC6IDE50YUxOSkg0L/RgNC4INC/0LXRgNCy0L7QvdCw0YfQsNC70YzQvdC+0Lwg0YDQtdC90LTQtdGA0LUg0LrQvtC80L/QvtC90LXQvdGC0LBcblx0Y29uc3QgW3tjZWxscywgY3VycmVudE1vdmV9LCBzZXRHYW1lU3RhdGVdID0gdXNlU3RhdGUoKCkgPT4gKHtcblx0XHRjZWxsczogbmV3IEFycmF5KDE5ICogMTkpLmZpbGwobnVsbCksXG5cdFx0Y3VycmVudE1vdmU6IEdBTUVfU1lNQk9MUy5DUk9TU1xuXHR9KSk7XG5cblx0Ly/RgdC+0YHRgtC+0Y/QvdC40LUg0LrQsNC60L7QuSDRgdC70LXQtNGD0Y7RidC40Lkg0YXQvtC0LiDQndC1INC30LDQstC+0LTQuNC8INC60L7Qv9C40Y4g0YHQvtGB0YLQvtGP0L3QuNGPIGN1cnJlbnRNb3ZlLCDQsCDRgNCw0YHRh9C40YLRi9Cy0LDQtdC8INC/0YDRj9C80L4g0L/RgNC4INGA0LXQvdC00LXRgNC1LlxuXHRjb25zdCBuZXh0TW92ZSA9IGdldE5leHRNb3ZlKGN1cnJlbnRNb3ZlKTtcblxuXHQvL9C+0LHRgNCw0LHQvtGC0YfQuNC6INC60LvQuNC60LAg0L/QviDQutC70LXRgtC60LUgKNGF0L7QtNCwKVxuXHRjb25zdCBoYW5kbGVDZWxsQ2xpY2sgPSAoaW5kZXgpID0+IHtcblx0XHRzZXRHYW1lU3RhdGUobGFzdEdhbWVTdGF0ZSA9PiAoe1xuXHRcdFx0Li4ubGFzdEdhbWVTdGF0ZSxcblx0XHRcdGN1cnJlbnRNb3ZlOiBnZXROZXh0TW92ZShsYXN0R2FtZVN0YXRlLmN1cnJlbnRNb3ZlKSxcblx0XHRcdGNlbGxzOiBsYXN0R2FtZVN0YXRlLmNlbGxzLm1hcCgoY2VsbCwgaSkgPT4gaSA9PT0gaW5kZXggPyBsYXN0R2FtZVN0YXRlLmN1cnJlbnRNb3ZlIDogY2VsbCkgXG5cdFx0fSkpXG5cdH07XG5cbn0iXSwibmFtZXMiOlsidXNlR2FtZVN0YXRlIiwiY2VsbHMiLCJjdXJyZW50TW92ZSIsInNldEdhbWVTdGF0ZSIsInVzZVN0YXRlIiwiQXJyYXkiLCJmaWxsIiwiR0FNRV9TWU1CT0xTIiwiQ1JPU1MiLCJuZXh0TW92ZSIsImdldE5leHRNb3ZlIiwiaGFuZGxlQ2VsbENsaWNrIiwiaW5kZXgiLCJsYXN0R2FtZVN0YXRlIiwibWFwIiwiY2VsbCIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/use-game-state.js\n"));

/***/ })

});