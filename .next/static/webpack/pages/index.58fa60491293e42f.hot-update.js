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

/***/ "./components/game/model.js":
/*!**********************************!*\
  !*** ./components/game/model.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computeWinner: function() { return /* binding */ computeWinner; },\n/* harmony export */   getNextMove: function() { return /* binding */ getNextMove; }\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./components/game/constants.js\");\n\n//функция расчета состояния следующего хода на основании currentMove\nfunction getNextMove(currentMove, playersCount) {\n    const slicedMoveOrder = _constants__WEBPACK_IMPORTED_MODULE_0__.MOVE_ORDER.slice(0, playersCount);\n    const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;\n    var _slicedMoveOrder_nextMoveIndex;\n    //если slicedMoveOrder[nextMoveIndex] > 3, надо установить индекс 0 (ходит опять \"крестик\")\n    return (_slicedMoveOrder_nextMoveIndex = slicedMoveOrder[nextMoveIndex]) !== null && _slicedMoveOrder_nextMoveIndex !== void 0 ? _slicedMoveOrder_nextMoveIndex : slicedMoveOrder[0];\n}\n//функция определения победителя\nfunction computeWinner(cells) {\n    let sequenceSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5, fieldSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 5;\n    const gap = Math.floor(sequenceSize / 2);\n    function compareElementIndexes(indexes) {\n        let result = true;\n        for(let i = 1; i < indexes.length; i++){\n            result && (result = !!cells[indexes[i]]);\n            result && (result = cells[indexes[i]] === cells[indexes[i - 1]]);\n        }\n        return result;\n    }\n    function getSequenceIndexes(i) {\n        const res = [\n            [],\n            [],\n            [],\n            [] // |\n        ];\n        for(let j = 0; j < sequenceSize; j++){\n            res[0].push(j - gap + i);\n            res[1].push(fieldSize * (j - gap) + (j - gap) + i);\n            res[2].push(-fieldSize * (j - gap) + (j - gap) + i);\n            res[3].push(fieldSize * (j - gap) + i);\n        }\n        return res;\n    }\n    for(let i = 0; i < cells.length; i++){\n        if (cells[i]) {\n            const indexRows = getSequenceIndexes(i);\n            const winnerIndexes = indexRows.find((row)=>compareElementIndexes(row));\n            if (winnerIndexes) {\n                return winnerIndexes;\n            }\n        }\n    }\n    return undefined;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvbW9kZWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlDO0FBRXpDLG9FQUFvRTtBQUM3RCxTQUFTQyxZQUFZQyxXQUFXLEVBQUVDLFlBQVk7SUFFcEQsTUFBTUMsa0JBQWtCSixrREFBVUEsQ0FBQ0ssS0FBSyxDQUFDLEdBQUdGO0lBRTVDLE1BQU1HLGdCQUFnQkYsZ0JBQWdCRyxPQUFPLENBQUNMLGVBQWU7UUFFdERFO0lBRFAsMkZBQTJGO0lBQzNGLE9BQU9BLENBQUFBLGlDQUFBQSxlQUFlLENBQUNFLGNBQWMsY0FBOUJGLDRDQUFBQSxpQ0FBa0NBLGVBQWUsQ0FBQyxFQUFFO0FBQzVEO0FBRUEsZ0NBQWdDO0FBQ3pCLFNBQVNJLGNBQWNDLEtBQUs7UUFBRUMsZUFBQUEsaUVBQWUsR0FBR0MsWUFBQUEsaUVBQVk7SUFFbEUsTUFBTUMsTUFBTUMsS0FBS0MsS0FBSyxDQUFDSixlQUFlO0lBRXRDLFNBQVNLLHNCQUFzQkMsT0FBTztRQUNyQyxJQUFJQyxTQUFTO1FBRWIsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlGLFFBQVFHLE1BQU0sRUFBRUQsSUFBSztZQUN4Q0QsV0FBQUEsU0FBVyxDQUFDLENBQUNSLEtBQUssQ0FBQ08sT0FBTyxDQUFDRSxFQUFFLENBQUM7WUFDOUJELFdBQUFBLFNBQVdSLEtBQUssQ0FBQ08sT0FBTyxDQUFDRSxFQUFFLENBQUMsS0FBS1QsS0FBSyxDQUFDTyxPQUFPLENBQUNFLElBQUksRUFBRSxDQUFDO1FBQ3ZEO1FBQ0EsT0FBT0Q7SUFDUjtJQUVBLFNBQVNHLG1CQUFtQkYsQ0FBQztRQUM1QixNQUFNRyxNQUFNO1lBQ1gsRUFBRTtZQUNGLEVBQUU7WUFDRixFQUFFO1lBQ0YsRUFBRSxDQUFDLElBQUk7U0FDUDtRQUVELElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJWixjQUFjWSxJQUFLO1lBQ3RDRCxHQUFHLENBQUMsRUFBRSxDQUFDRSxJQUFJLENBQUNELElBQUlWLE1BQU1NO1lBQ3RCRyxHQUFHLENBQUMsRUFBRSxDQUFDRSxJQUFJLENBQUNaLFlBQWFXLENBQUFBLElBQUlWLEdBQUUsSUFBTVUsQ0FBQUEsSUFBSVYsR0FBRSxJQUFLTTtZQUNoREcsR0FBRyxDQUFDLEVBQUUsQ0FBQ0UsSUFBSSxDQUFDLENBQUNaLFlBQWFXLENBQUFBLElBQUlWLEdBQUUsSUFBTVUsQ0FBQUEsSUFBSVYsR0FBRSxJQUFLTTtZQUNqREcsR0FBRyxDQUFDLEVBQUUsQ0FBQ0UsSUFBSSxDQUFDWixZQUFhVyxDQUFBQSxJQUFJVixHQUFFLElBQUtNO1FBQ3JDO1FBQ0EsT0FBT0c7SUFDUjtJQUVBLElBQUssSUFBSUgsSUFBSSxHQUFHQSxJQUFJVCxNQUFNVSxNQUFNLEVBQUVELElBQUs7UUFDdEMsSUFBR1QsS0FBSyxDQUFDUyxFQUFFLEVBQUU7WUFDWixNQUFNTSxZQUFZSixtQkFBbUJGO1lBQ3JDLE1BQU1PLGdCQUFnQkQsVUFBVUUsSUFBSSxDQUFDQyxDQUFBQSxNQUFPWixzQkFBc0JZO1lBRWxFLElBQUdGLGVBQWU7Z0JBQ2pCLE9BQU9BO1lBQ1I7UUFDRDtJQUNEO0lBQ0EsT0FBT0c7QUFDUiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvbW9kZWwuanM/ZTRmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNT1ZFX09SREVSIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuLy/RhNGD0L3QutGG0LjRjyDRgNCw0YHRh9C10YLQsCDRgdC+0YHRgtC+0Y/QvdC40Y8g0YHQu9C10LTRg9GO0YnQtdCz0L4g0YXQvtC00LAg0L3QsCDQvtGB0L3QvtCy0LDQvdC40LggY3VycmVudE1vdmVcclxuZXhwb3J0IGZ1bmN0aW9uIGdldE5leHRNb3ZlKGN1cnJlbnRNb3ZlLCBwbGF5ZXJzQ291bnQpIHtcclxuXHJcblx0Y29uc3Qgc2xpY2VkTW92ZU9yZGVyID0gTU9WRV9PUkRFUi5zbGljZSgwLCBwbGF5ZXJzQ291bnQpO1xyXG5cclxuXHRjb25zdCBuZXh0TW92ZUluZGV4ID0gc2xpY2VkTW92ZU9yZGVyLmluZGV4T2YoY3VycmVudE1vdmUpICsgMVxyXG5cdC8v0LXRgdC70Lggc2xpY2VkTW92ZU9yZGVyW25leHRNb3ZlSW5kZXhdID4gMywg0L3QsNC00L4g0YPRgdGC0LDQvdC+0LLQuNGC0Ywg0LjQvdC00LXQutGBIDAgKNGF0L7QtNC40YIg0L7Qv9GP0YLRjCBcItC60YDQtdGB0YLQuNC6XCIpXHJcblx0cmV0dXJuIHNsaWNlZE1vdmVPcmRlcltuZXh0TW92ZUluZGV4XSA/PyBzbGljZWRNb3ZlT3JkZXJbMF07XHJcbn1cclxuXHJcbi8v0YTRg9C90LrRhtC40Y8g0L7Qv9GA0LXQtNC10LvQtdC90LjRjyDQv9C+0LHQtdC00LjRgtC10LvRj1xyXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZVdpbm5lcihjZWxscywgc2VxdWVuY2VTaXplID0gNSwgZmllbGRTaXplID0gNSkge1xyXG5cclxuXHRjb25zdCBnYXAgPSBNYXRoLmZsb29yKHNlcXVlbmNlU2l6ZSAvIDIpO1xyXG5cclxuXHRmdW5jdGlvbiBjb21wYXJlRWxlbWVudEluZGV4ZXMoaW5kZXhlcykge1xyXG5cdFx0bGV0IHJlc3VsdCA9IHRydWU7XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBpbmRleGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHJlc3VsdCAmJj0gISFjZWxsc1tpbmRleGVzW2ldXTtcclxuXHRcdFx0cmVzdWx0ICYmPSBjZWxsc1tpbmRleGVzW2ldXSA9PT0gY2VsbHNbaW5kZXhlc1tpIC0gMV1dO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGdldFNlcXVlbmNlSW5kZXhlcyhpKSB7XHJcblx0XHRjb25zdCByZXMgPSBbXHJcblx0XHRcdFtdLCAvLyAtXHJcblx0XHRcdFtdLCAvLyBcXFxyXG5cdFx0XHRbXSwgLy8gL1xyXG5cdFx0XHRbXSAvLyB8XHJcblx0XHRdO1xyXG5cclxuXHRcdGZvciAobGV0IGogPSAwOyBqIDwgc2VxdWVuY2VTaXplOyBqKyspIHtcclxuXHRcdFx0cmVzWzBdLnB1c2goaiAtIGdhcCArIGkpO1xyXG5cdFx0XHRyZXNbMV0ucHVzaChmaWVsZFNpemUgKiAoaiAtIGdhcCkgKyAoaiAtIGdhcCkgKyBpKTtcclxuXHRcdFx0cmVzWzJdLnB1c2goLWZpZWxkU2l6ZSAqIChqIC0gZ2FwKSArIChqIC0gZ2FwKSArIGkpO1xyXG5cdFx0XHRyZXNbM10ucHVzaChmaWVsZFNpemUgKiAoaiAtIGdhcCkgKyBpKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXM7XHJcblx0fVxyXG5cclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRpZihjZWxsc1tpXSkge1xyXG5cdFx0XHRjb25zdCBpbmRleFJvd3MgPSBnZXRTZXF1ZW5jZUluZGV4ZXMoaSk7XHJcblx0XHRcdGNvbnN0IHdpbm5lckluZGV4ZXMgPSBpbmRleFJvd3MuZmluZChyb3cgPT4gY29tcGFyZUVsZW1lbnRJbmRleGVzKHJvdykpO1xyXG5cclxuXHRcdFx0aWYod2lubmVySW5kZXhlcykge1xyXG5cdFx0XHRcdHJldHVybiB3aW5uZXJJbmRleGVzO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJNT1ZFX09SREVSIiwiZ2V0TmV4dE1vdmUiLCJjdXJyZW50TW92ZSIsInBsYXllcnNDb3VudCIsInNsaWNlZE1vdmVPcmRlciIsInNsaWNlIiwibmV4dE1vdmVJbmRleCIsImluZGV4T2YiLCJjb21wdXRlV2lubmVyIiwiY2VsbHMiLCJzZXF1ZW5jZVNpemUiLCJmaWVsZFNpemUiLCJnYXAiLCJNYXRoIiwiZmxvb3IiLCJjb21wYXJlRWxlbWVudEluZGV4ZXMiLCJpbmRleGVzIiwicmVzdWx0IiwiaSIsImxlbmd0aCIsImdldFNlcXVlbmNlSW5kZXhlcyIsInJlcyIsImoiLCJwdXNoIiwiaW5kZXhSb3dzIiwid2lubmVySW5kZXhlcyIsImZpbmQiLCJyb3ciLCJ1bmRlZmluZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/game/model.js\n"));

/***/ })

});