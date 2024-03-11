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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameCell: function() { return /* binding */ GameCell; },\n/* harmony export */   GameInfo: function() { return /* binding */ GameInfo; },\n/* harmony export */   GameSymbol: function() { return /* binding */ GameSymbol; },\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_game_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/game.module.css */ \"./styles/game.module.css\");\n/* harmony import */ var _styles_game_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_game_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst SYMBOL_X = \"X\";\nconst SYMBOL_O = \"O\";\nconst computeWinner = (cells)=>{\n    const lines = [\n        [\n            0,\n            1,\n            2\n        ],\n        [\n            3,\n            4,\n            5\n        ],\n        [\n            6,\n            7,\n            8\n        ],\n        [\n            0,\n            3,\n            6\n        ],\n        [\n            1,\n            4,\n            7\n        ],\n        [\n            2,\n            5,\n            8\n        ],\n        [\n            0,\n            4,\n            8\n        ],\n        [\n            2,\n            4,\n            6\n        ]\n    ];\n    for(let i = 0; i < lines.length; i++){\n        const [a, b, c] = lines[i];\n        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {\n            return [\n                a,\n                b,\n                c\n            ];\n        }\n    }\n};\nfunction useGameState() {\n    _s();\n    const [cells, setCells] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        null,\n        null,\n        null,\n        null,\n        null,\n        null,\n        null,\n        null,\n        null\n    ]);\n    const [currentStep, setCurrentStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(SYMBOL_X);\n    const [winnerSequence1, setWinnerSequence] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const cellsCopy = cells.slice(); //создать копию массива cells (иммутабельность React)\n    const handleCellClick1 = (index)=>{\n        if (cells[index] || winnerSequence1) {\n            return;\n        }\n        cellsCopy[index] = currentStep;\n        console.log(cellsCopy);\n        const winner = computeWinner(cellsCopy);\n        setCells(cellsCopy);\n        setCurrentStep(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O);\n        setWinnerSequence(winner);\n    };\n    //сброс на новую партию\n    const handleResetClick1 = ()=>{\n        //setCells([null, null, null, null, null, null, null, null, null]);\n        setCells(Array.from({\n            length: 9\n        }, ()=>null));\n        setCurrentStep(SYMBOL_X);\n        setWinnerSequence(undefined);\n    };\n    //const cellsCopy = cells.slice(); //создать копию массива cells (иммутабельность React)\n    const winnerSymbol = winnerSequence1 ? cells[winnerSequence1[0]] : undefined;\n    //условие ничьи - нет winnreSequence и все клетки заполнены\n    const isDraw = !winnerSequence1 && !cellsCopy.includes(null);\n    //возвращаем начения для дальнейшего использования в компонентах\n    return cells, currentStep, winnerSequence1, handleCellClick1, handleResetClick1, winnerSymbol, isDraw;\n}\n_s(useGameState, \"odHvMTNqDg40IomPNCd/CsQ6psA=\");\nfunction HomePage() {\n    _s1();\n    const { cells, currentStep, winnerSymbol, isDraw, resetGame, toggleCell, getWinnerCell } = useGameState();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_game_module_css__WEBPACK_IMPORTED_MODULE_2___default().game),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameInfo, {\n                isDraw: isDraw,\n                winnerSymbol: winnerSymbol,\n                currentStep: currentStep\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/pages/index.jsx\",\n                lineNumber: 93,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_game_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"game-field\"]),\n                children: cells.map((symbol, index)=>{\n                    var _winnerSequence;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameCell, {\n                        symbol: symbol,\n                        isWinner: (_winnerSequence = winnerSequence) === null || _winnerSequence === void 0 ? void 0 : _winnerSequence.includes(index),\n                        onClick: ()=>handleCellClick(index)\n                    }, void 0, false, {\n                        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/pages/index.jsx\",\n                        lineNumber: 101,\n                        columnNumber: 7\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/pages/index.jsx\",\n                lineNumber: 98,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleResetClick,\n                className: \"btn\",\n                children: \"Начать заново\"\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/pages/index.jsx\",\n                lineNumber: 109,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/pages/index.jsx\",\n        lineNumber: 92,\n        columnNumber: 3\n    }, this);\n}\n_s1(HomePage, \"TZT3mJUuFUJzrsApZSpmWRvYglw=\", false, function() {\n    return [\n        useGameState\n    ];\n});\n_c = HomePage;\n//Отдельные компоненты\n// функция отрисовки верхней строки\nfunction GameInfo(param) {\n    let { isDraw, winnerSymbol, currentStep } = param;\n    if (isDraw) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_game_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"game-info\"]),\n            children: \"Ничья\"\n        }, void 0, false, {\n            fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/pages/index.jsx\",\n            lineNumber: 118,\n            columnNumber: 3\n        }, this);\n    }\n    if (winnerSymbol) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_game_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"game-info\"]),\n            children: [\n                \"Победитель: \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameSymbol, {\n                    symbol: winnerSymbol\n                }, void 0, false, {\n                    fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/pages/index.jsx\",\n                    lineNumber: 127,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/pages/index.jsx\",\n            lineNumber: 126,\n            columnNumber: 3\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_game_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"game-info\"]),\n        children: [\n            \"Ход: \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameSymbol, {\n                symbol: currentStep\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/pages/index.jsx\",\n                lineNumber: 134,\n                columnNumber: 8\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/pages/index.jsx\",\n        lineNumber: 133,\n        columnNumber: 4\n    }, this);\n}\n_c1 = GameInfo;\n//компонент Cell\nfunction GameCell(param) {\n    let { isWinner, onClick, symbol } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"\".concat((_styles_game_module_css__WEBPACK_IMPORTED_MODULE_2___default().cell), \" \").concat(isWinner ? (_styles_game_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"cell--win\"]) : \"\"),\n        onClick: onClick,\n        children: symbol ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameSymbol, {\n            symbol: symbol\n        }, void 0, false, {\n            fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/pages/index.jsx\",\n            lineNumber: 146,\n            columnNumber: 13\n        }, this) : null\n    }, void 0, false, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/pages/index.jsx\",\n        lineNumber: 142,\n        columnNumber: 4\n    }, this);\n}\n_c2 = GameCell;\n//Компонента для отрисовки символа игры \nfunction GameSymbol(param) {\n    let { symbol } = param;\n    const getSymbolClassName = (symbol)=>{\n        if (symbol === SYMBOL_O) return (_styles_game_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"symbol--o\"]);\n        if (symbol === SYMBOL_X) return (_styles_game_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"symbol--x\"]);\n        return \"\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"\".concat((_styles_game_module_css__WEBPACK_IMPORTED_MODULE_2___default().symbol), \" \").concat(getSymbolClassName(symbol)),\n        children: symbol\n    }, void 0, false, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/pages/index.jsx\",\n        lineNumber: 158,\n        columnNumber: 9\n    }, this);\n}\n_c3 = GameSymbol;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"HomePage\");\n$RefreshReg$(_c1, \"GameInfo\");\n$RefreshReg$(_c2, \"GameCell\");\n$RefreshReg$(_c3, \"GameSymbol\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSUEsV0FBV3JDLFVBQVUsT0FBT0YsNkVBQW1CO1FBQ25ELElBQUl1QyxXQUFXdEMsVUFBVSxPQUFPRCw2RUFBbUI7UUFDbkQsT0FBTztJQUNUO0lBQ0EscUJBQU8sOERBQUM4QztRQUFLVixXQUFXLEdBQXVCUyxPQUFwQjdDLHVFQUFnQixFQUFDLEtBQThCLE9BQTNCNkMsbUJBQW1CTjtrQkFBWUE7Ozs7OztBQUM3RTtNQVBjSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2dhbWUubW9kdWxlLmNzcydcblxuXG5jb25zdCBTWU1CT0xfWCA9ICdYJztcbmNvbnN0IFNZTUJPTF9PID0gJ08nO1xuXG5jb25zdCBjb21wdXRlV2lubmVyID0gKGNlbGxzKSA9PiB7XG5cdGNvbnN0IGxpbmVzID0gW1xuXHRcdFswLCAxLCAyXSxcblx0XHRbMywgNCwgNV0sXG5cdFx0WzYsIDcsIDhdLFxuXHRcdFswLCAzLCA2XSxcblx0XHRbMSwgNCwgN10sXG5cdFx0WzIsIDUsIDhdLFxuXHRcdFswLCA0LCA4XSxcblx0XHRbMiwgNCwgNl1cblx0XTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgW2EsIGIsIGNdID0gbGluZXNbaV07XG5cdFx0aWYgKFxuXHRcdFx0Y2VsbHNbYV0gJiZcblx0XHRcdGNlbGxzW2FdID09PSBjZWxsc1tiXSAmJlxuXHRcdFx0Y2VsbHNbYV0gPT09IGNlbGxzW2NdXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gW2EsIGIsIGNdXG5cdFx0fVxuXHR9XG59XG5cblxuZnVuY3Rpb24gdXNlR2FtZVN0YXRlKCkge1xuXHRjb25zdCBbY2VsbHMsIHNldENlbGxzXSA9IHVzZVN0YXRlKFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsXSk7XG5cdCAgY29uc3QgW2N1cnJlbnRTdGVwLCBzZXRDdXJyZW50U3RlcF0gPSB1c2VTdGF0ZShTWU1CT0xfWCk7XG5cdGNvbnN0IFt3aW5uZXJTZXF1ZW5jZSwgc2V0V2lubmVyU2VxdWVuY2VdID0gdXNlU3RhdGUoKTtcblx0Y29uc3QgY2VsbHNDb3B5ID0gY2VsbHMuc2xpY2UoKTsgLy/RgdC+0LfQtNCw0YLRjCDQutC+0L/QuNGOINC80LDRgdGB0LjQstCwIGNlbGxzICjQuNC80LzRg9GC0LDQsdC10LvRjNC90L7RgdGC0YwgUmVhY3QpXG5cblx0Y29uc3QgaGFuZGxlQ2VsbENsaWNrID0gKGluZGV4KSA9PiB7XG5cdFx0aWYoY2VsbHNbaW5kZXhdIHx8IHdpbm5lclNlcXVlbmNlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fSBcblx0XHRcblx0XHRjZWxsc0NvcHlbaW5kZXhdID0gY3VycmVudFN0ZXA7XG5cdFx0Y29uc29sZS5sb2coY2VsbHNDb3B5KTtcblxuXHRcdGNvbnN0IHdpbm5lciA9IGNvbXB1dGVXaW5uZXIoY2VsbHNDb3B5KTtcblxuXHRcdHNldENlbGxzKGNlbGxzQ29weSk7XG5cdFx0c2V0Q3VycmVudFN0ZXAoY3VycmVudFN0ZXAgPT09IFNZTUJPTF9PID8gU1lNQk9MX1ggOiBTWU1CT0xfTyk7XG5cdFx0c2V0V2lubmVyU2VxdWVuY2Uod2lubmVyKTtcblx0fVxuXG5cdC8v0YHQsdGA0L7RgSDQvdCwINC90L7QstGD0Y4g0L/QsNGA0YLQuNGOXG5cdGNvbnN0IGhhbmRsZVJlc2V0Q2xpY2sgPSAoKSA9PiB7XG5cdFx0Ly9zZXRDZWxscyhbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0pO1xuXHRcdHNldENlbGxzKEFycmF5LmZyb20oeyBsZW5ndGg6IDl9LCAoKSA9PiBudWxsKSk7XG5cdFx0c2V0Q3VycmVudFN0ZXAoU1lNQk9MX1gpO1xuXHRcdHNldFdpbm5lclNlcXVlbmNlKHVuZGVmaW5lZCk7XG5cdH1cblxuXHQvL2NvbnN0IGNlbGxzQ29weSA9IGNlbGxzLnNsaWNlKCk7IC8v0YHQvtC30LTQsNGC0Ywg0LrQvtC/0LjRjiDQvNCw0YHRgdC40LLQsCBjZWxscyAo0LjQvNC80YPRgtCw0LHQtdC70YzQvdC+0YHRgtGMIFJlYWN0KVxuXHRjb25zdCB3aW5uZXJTeW1ib2wgPSB3aW5uZXJTZXF1ZW5jZSA/IGNlbGxzW3dpbm5lclNlcXVlbmNlWzBdXSA6IHVuZGVmaW5lZDtcblx0Ly/Rg9GB0LvQvtCy0LjQtSDQvdC40YfRjNC4IC0g0L3QtdGCIHdpbm5yZVNlcXVlbmNlINC4INCy0YHQtSDQutC70LXRgtC60Lgg0LfQsNC/0L7Qu9C90LXQvdGLXG5cdGNvbnN0IGlzRHJhdyA9ICF3aW5uZXJTZXF1ZW5jZSAmJiAhY2VsbHNDb3B5LmluY2x1ZGVzKG51bGwpO1xuXG5cdC8v0LLQvtC30LLRgNCw0YnQsNC10Lwg0L3QsNGH0LXQvdC40Y8g0LTQu9GPINC00LDQu9GM0L3QtdC50YjQtdCz0L4g0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40Y8g0LIg0LrQvtC80L/QvtC90LXQvdGC0LDRhVxuXHRyZXR1cm4gKFxuXHRcdGNlbGxzLFxuXHRcdGN1cnJlbnRTdGVwLFxuXHRcdHdpbm5lclNlcXVlbmNlLFxuXHRcdGhhbmRsZUNlbGxDbGljayxcblx0XHRoYW5kbGVSZXNldENsaWNrLFxuXHRcdHdpbm5lclN5bWJvbCxcblx0XHRpc0RyYXdcblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcblxuXHRjb25zdCB7XG5cdFx0Y2VsbHMsXG5cdFx0Y3VycmVudFN0ZXAsXG5cdFx0d2lubmVyU3ltYm9sLFxuXHRcdGlzRHJhdyxcblx0XHRyZXNldEdhbWUsXG5cdFx0dG9nZ2xlQ2VsbCxcblx0XHRnZXRXaW5uZXJDZWxsXG5cdCAgfSA9IHVzZUdhbWVTdGF0ZSgpO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlc1snZ2FtZSddfT5cblx0XHRcdDxHYW1lSW5mbyBcblx0XHRcdFx0aXNEcmF3PXtpc0RyYXd9IFxuXHRcdFx0XHR3aW5uZXJTeW1ib2w9e3dpbm5lclN5bWJvbH0gXG5cdFx0XHRcdGN1cnJlbnRTdGVwPXtjdXJyZW50U3RlcH0gXG5cdFx0XHQvPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlc1snZ2FtZS1maWVsZCddfT5cblx0XHRcdFx0e2NlbGxzLm1hcCggKHN5bWJvbCwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PEdhbWVDZWxsIFxuXHRcdFx0XHRcdFx0XHRzeW1ib2w9e3N5bWJvbH0gXG5cdFx0XHRcdFx0XHRcdGlzV2lubmVyPXt3aW5uZXJTZXF1ZW5jZT8uaW5jbHVkZXMoaW5kZXgpfSBcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gaGFuZGxlQ2VsbENsaWNrKGluZGV4KX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0KVxuXHRcdFx0XHR9KX1cblx0XHRcdCAgPC9kaXY+XG5cdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVJlc2V0Q2xpY2t9IGNsYXNzTmFtZT0nYnRuJz7QndCw0YfQsNGC0Ywg0LfQsNC90L7QstC+PC9idXR0b24+XG5cdFx0PC9kaXY+XG5cdClcbn1cbi8v0J7RgtC00LXQu9GM0L3Ri9C1INC60L7QvNC/0L7QvdC10L3RgtGLXG4vLyDRhNGD0L3QutGG0LjRjyDQvtGC0YDQuNGB0L7QstC60Lgg0LLQtdGA0YXQvdC10Lkg0YHRgtGA0L7QutC4XG5leHBvcnQgZnVuY3Rpb24gR2FtZUluZm8oeyBpc0RyYXcsIHdpbm5lclN5bWJvbCwgY3VycmVudFN0ZXAgfSkge1xuXHRpZiAoaXNEcmF3KSB7XG5cdCAgcmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiZ2FtZS1pbmZvXCJdfT5cblx0XHQgINCd0LjRh9GM0Y9cblx0XHQ8L2Rpdj5cblx0ICApXG5cdH1cbiAgXG5cdGlmICh3aW5uZXJTeW1ib2wpIHtcblx0ICByZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJnYW1lLWluZm9cIl19PlxuXHRcdCAg0J/QvtCx0LXQtNC40YLQtdC70Yw6IDxHYW1lU3ltYm9sIHN5bWJvbD17d2lubmVyU3ltYm9sfSAvPlxuXHRcdDwvZGl2PlxuXHQgIClcblx0fVxuICBcblx0cmV0dXJuIChcblx0ICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiZ2FtZS1pbmZvXCJdfT5cblx0XHTQpdC+0LQ6IDxHYW1lU3ltYm9sIHN5bWJvbD17Y3VycmVudFN0ZXB9IC8+XG5cdCAgPC9kaXY+XG5cdClcbiAgfVxuXG4vL9C60L7QvNC/0L7QvdC10L3RgiBDZWxsXG5leHBvcnQgZnVuY3Rpb24gR2FtZUNlbGwoeyBpc1dpbm5lciwgb25DbGljaywgc3ltYm9sIH0pIHtcblx0cmV0dXJuIChcblx0ICA8YnV0dG9uXG5cdFx0Y2xhc3NOYW1lPXtgJHtzdHlsZXNbJ2NlbGwnXX0gJHtpc1dpbm5lciA/IHN0eWxlc1snY2VsbC0td2luJ10gOiAnJ31gfVxuXHRcdG9uQ2xpY2s9e29uQ2xpY2t9XG5cdCAgPlxuXHRcdHtzeW1ib2wgPyA8R2FtZVN5bWJvbCBzeW1ib2w9e3N5bWJvbH0gLz4gOiBudWxsfVxuXHQgIDwvYnV0dG9uPlxuXHQpXG4gIH0gXG5cbi8v0JrQvtC80L/QvtC90LXQvdGC0LAg0LTQu9GPINC+0YLRgNC40YHQvtCy0LrQuCDRgdC40LzQstC+0LvQsCDQuNCz0YDRiyBcbmV4cG9ydCBmdW5jdGlvbiBHYW1lU3ltYm9sKHsgc3ltYm9sIH0pIHtcblx0Y29uc3QgZ2V0U3ltYm9sQ2xhc3NOYW1lID0gKHN5bWJvbCkgPT4ge1xuXHQgIGlmIChzeW1ib2wgPT09IFNZTUJPTF9PKSByZXR1cm4gc3R5bGVzWydzeW1ib2wtLW8nXTtcblx0ICBpZiAoc3ltYm9sID09PSBTWU1CT0xfWCkgcmV0dXJuIHN0eWxlc1snc3ltYm9sLS14J107XG5cdCAgcmV0dXJuICcnO1xuXHR9XG5cdHJldHVybiA8c3BhbiBjbGFzc05hbWU9e2Ake3N0eWxlc1snc3ltYm9sJ119ICR7Z2V0U3ltYm9sQ2xhc3NOYW1lKHN5bWJvbCl9YH0+e3N5bWJvbH08L3NwYW4+XG4gIH0gXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZXMiLCJTWU1CT0xfWCIsIlNZTUJPTF9PIiwiY29tcHV0ZVdpbm5lciIsImNlbGxzIiwibGluZXMiLCJpIiwibGVuZ3RoIiwiYSIsImIiLCJjIiwidXNlR2FtZVN0YXRlIiwic2V0Q2VsbHMiLCJjdXJyZW50U3RlcCIsInNldEN1cnJlbnRTdGVwIiwid2lubmVyU2VxdWVuY2UiLCJzZXRXaW5uZXJTZXF1ZW5jZSIsImNlbGxzQ29weSIsInNsaWNlIiwiaGFuZGxlQ2VsbENsaWNrIiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwid2lubmVyIiwiaGFuZGxlUmVzZXRDbGljayIsIkFycmF5IiwiZnJvbSIsInVuZGVmaW5lZCIsIndpbm5lclN5bWJvbCIsImlzRHJhdyIsImluY2x1ZGVzIiwiSG9tZVBhZ2UiLCJyZXNldEdhbWUiLCJ0b2dnbGVDZWxsIiwiZ2V0V2lubmVyQ2VsbCIsImRpdiIsImNsYXNzTmFtZSIsIkdhbWVJbmZvIiwibWFwIiwic3ltYm9sIiwiR2FtZUNlbGwiLCJpc1dpbm5lciIsIm9uQ2xpY2siLCJidXR0b24iLCJHYW1lU3ltYm9sIiwiZ2V0U3ltYm9sQ2xhc3NOYW1lIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});