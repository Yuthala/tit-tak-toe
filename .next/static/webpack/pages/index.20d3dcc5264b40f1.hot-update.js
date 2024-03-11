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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_game_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/game.module.css */ \"./styles/game.module.css\");\n/* harmony import */ var _styles_game_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_game_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst SYMBOL_X = \"X\";\nconst SYMBOL_O = \"O\";\nconst computeWinner = (cells)=>{\n    const lines = [\n        [\n            0,\n            1,\n            2\n        ],\n        [\n            3,\n            4,\n            5\n        ],\n        [\n            6,\n            7,\n            8\n        ],\n        [\n            0,\n            3,\n            6\n        ],\n        [\n            1,\n            4,\n            7\n        ],\n        [\n            2,\n            5,\n            8\n        ],\n        [\n            0,\n            4,\n            8\n        ],\n        [\n            2,\n            4,\n            6\n        ]\n    ];\n    for(let i = 0; i < lines.length; i++){\n        const [a, b, c] = lines[i];\n        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {\n            return [\n                a,\n                b,\n                c\n            ];\n        }\n    }\n};\nfunction useGameState() {\n    _s();\n    const [cells, setCells] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        null,\n        null,\n        null,\n        null,\n        null,\n        null,\n        null,\n        null,\n        null\n    ]);\n    const [currentStep, setCurrentStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(SYMBOL_X);\n    const [winnerSequence, setWinnerSequence] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const cellsCopy = cells.slice(); //создать копию массива cells (иммутабельность React)\n    const handleCellClick = (index)=>{\n        if (cells[index] || winnerSequence) {\n            return;\n        }\n        cellsCopy[index] = currentStep;\n        console.log(cellsCopy);\n        const winner = computeWinner(cellsCopy);\n        setCells(cellsCopy);\n        setCurrentStep(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O);\n        setWinnerSequence(winner);\n    };\n    //сброс на новую партию\n    const handleResetClick = ()=>{\n        //setCells([null, null, null, null, null, null, null, null, null]);\n        setCells(Array.from({\n            length: 9\n        }, ()=>null));\n        setCurrentStep(SYMBOL_X);\n        setWinnerSequence(undefined);\n    };\n    //const cellsCopy = cells.slice(); //создать копию массива cells (иммутабельность React)\n    const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : undefined;\n    //условие ничьи - нет winnreSequence и все клетки заполнены\n    const isDraw = !winnerSequence && !cellsCopy.includes(null);\n    //возвращаем начения для дальнейшего использования в компонентах\n    return cells, currentStep, winnerSequence, handleCellClick, handleResetClick, winnerSymbol, isDraw;\n}\n_s(useGameState, \"odHvMTNqDg40IomPNCd/CsQ6psA=\");\nfunction HomePage() {\n    _s1();\n    const { cells, currentStep, winnerSequence, handleCellClick, handleResetClick, winnerSymbol, isDraw } = useGameState();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_game_module_css__WEBPACK_IMPORTED_MODULE_2___default().game),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameInfo, {\n                isDraw: isDraw,\n                winnerSymbol: winnerSymbol,\n                currentStep: currentStep\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/pages/index.jsx\",\n                lineNumber: 93,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_game_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"game-field\"]),\n                children: cells.map((symbol, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameCell, {\n                        symbol: symbol,\n                        isWinner: winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence.includes(index),\n                        onClick: ()=>handleCellClick(index)\n                    }, void 0, false, {\n                        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/pages/index.jsx\",\n                        lineNumber: 101,\n                        columnNumber: 7\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/pages/index.jsx\",\n                lineNumber: 98,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleResetClick,\n                className: \"btn\",\n                children: \"Начать заново\"\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/pages/index.jsx\",\n                lineNumber: 109,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/pages/index.jsx\",\n        lineNumber: 92,\n        columnNumber: 3\n    }, this);\n}\n_s1(HomePage, \"KGJ1xg8pZypaWjLCFyMf/PWDTfc=\", false, function() {\n    return [\n        useGameState\n    ];\n});\n_c = HomePage;\n//Отдельные компоненты\n// функция отрисовки верхней строки\nfunction GameInfo(param) {\n    let { isDraw, winnerSymbol, currentStep } = param;\n    if (isDraw) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_game_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"game-info\"]),\n            children: \"Ничья\"\n        }, void 0, false, {\n            fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/pages/index.jsx\",\n            lineNumber: 118,\n            columnNumber: 2\n        }, this);\n    }\n    if (winnerSymbol) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_game_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"game-info\"]),\n            children: [\n                \"'Победитель: \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameSymbol, {\n                    symbol: winnerSymbol\n                }, void 0, false, {\n                    fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/pages/index.jsx\",\n                    lineNumber: 125,\n                    columnNumber: 16\n                }, this),\n                \"'\"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/pages/index.jsx\",\n            lineNumber: 124,\n            columnNumber: 2\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_game_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"game-info\"]),\n        children: [\n            \"'Ход:  \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameSymbol, {\n                symbol: currentStep\n            }, void 0, false, {\n                fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/pages/index.jsx\",\n                lineNumber: 130,\n                columnNumber: 11\n            }, this),\n            \"'\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/pages/index.jsx\",\n        lineNumber: 129,\n        columnNumber: 3\n    }, this);\n}\n_c1 = GameInfo;\n//компонент Cell\nfunction GameCell(param) {\n    let { isWinner, onClick, symbol } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: onClick,\n        className: \"cell \".concat(isWinner ? \"cell--win\" : \"\"),\n        children: symbol ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameSymbol, {\n            symbol: symbol\n        }, void 0, false, {\n            fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/pages/index.jsx\",\n            lineNumber: 141,\n            columnNumber: 13\n        }, this) : null\n    }, void 0, false, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/pages/index.jsx\",\n        lineNumber: 137,\n        columnNumber: 9\n    }, this);\n}\n_c2 = GameCell;\n//Компонента для отрисовки символа игры \nfunction GameSymbol(param) {\n    let { symbol } = param;\n    //функция для отрисовки x или o\n    const getSymbolClassName = (symbol)=>{\n        if (symbol === SYMBOL_O) return \"symbol--o\";\n        if (symbol === SYMBOL_X) return \"symbol--x\";\n        return \"\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"symbol \".concat(getSymbolClassName(symbol)),\n        children: symbol\n    }, void 0, false, {\n        fileName: \"/Users/dina/Frontend/GitHub/react_projects/tik-tak-toe/pages/index.jsx\",\n        lineNumber: 153,\n        columnNumber: 8\n    }, this);\n}\n_c3 = GameSymbol;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"HomePage\");\n$RefreshReg$(_c1, \"GameInfo\");\n$RefreshReg$(_c2, \"GameCell\");\n$RefreshReg$(_c3, \"GameSymbol\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUlrQyxXQUFXbkMsVUFBVSxPQUFPO1FBQ2hDLE9BQU87SUFDUDtJQUNBLHFCQUFPLDhEQUFDMEM7UUFBS1YsV0FBVyxVQUFxQyxPQUEzQlMsbUJBQW1CTjtrQkFBWUE7Ozs7OztBQUNqRTtNQVJTSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2dhbWUubW9kdWxlLmNzcydcblxuXG5jb25zdCBTWU1CT0xfWCA9ICdYJztcbmNvbnN0IFNZTUJPTF9PID0gJ08nO1xuXG5jb25zdCBjb21wdXRlV2lubmVyID0gKGNlbGxzKSA9PiB7XG5cdGNvbnN0IGxpbmVzID0gW1xuXHRcdFswLCAxLCAyXSxcblx0XHRbMywgNCwgNV0sXG5cdFx0WzYsIDcsIDhdLFxuXHRcdFswLCAzLCA2XSxcblx0XHRbMSwgNCwgN10sXG5cdFx0WzIsIDUsIDhdLFxuXHRcdFswLCA0LCA4XSxcblx0XHRbMiwgNCwgNl1cblx0XTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgW2EsIGIsIGNdID0gbGluZXNbaV07XG5cdFx0aWYgKFxuXHRcdFx0Y2VsbHNbYV0gJiZcblx0XHRcdGNlbGxzW2FdID09PSBjZWxsc1tiXSAmJlxuXHRcdFx0Y2VsbHNbYV0gPT09IGNlbGxzW2NdXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gW2EsIGIsIGNdXG5cdFx0fVxuXHR9XG59XG5cblxuZnVuY3Rpb24gdXNlR2FtZVN0YXRlKCkge1xuXHRjb25zdCBbY2VsbHMsIHNldENlbGxzXSA9IHVzZVN0YXRlKFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsXSk7XG5cdCAgY29uc3QgW2N1cnJlbnRTdGVwLCBzZXRDdXJyZW50U3RlcF0gPSB1c2VTdGF0ZShTWU1CT0xfWCk7XG5cdGNvbnN0IFt3aW5uZXJTZXF1ZW5jZSwgc2V0V2lubmVyU2VxdWVuY2VdID0gdXNlU3RhdGUoKTtcblx0Y29uc3QgY2VsbHNDb3B5ID0gY2VsbHMuc2xpY2UoKTsgLy/RgdC+0LfQtNCw0YLRjCDQutC+0L/QuNGOINC80LDRgdGB0LjQstCwIGNlbGxzICjQuNC80LzRg9GC0LDQsdC10LvRjNC90L7RgdGC0YwgUmVhY3QpXG5cblx0Y29uc3QgaGFuZGxlQ2VsbENsaWNrID0gKGluZGV4KSA9PiB7XG5cdFx0aWYoY2VsbHNbaW5kZXhdIHx8IHdpbm5lclNlcXVlbmNlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fSBcblx0XHRcblx0XHRjZWxsc0NvcHlbaW5kZXhdID0gY3VycmVudFN0ZXA7XG5cdFx0Y29uc29sZS5sb2coY2VsbHNDb3B5KTtcblxuXHRcdGNvbnN0IHdpbm5lciA9IGNvbXB1dGVXaW5uZXIoY2VsbHNDb3B5KTtcblxuXHRcdHNldENlbGxzKGNlbGxzQ29weSk7XG5cdFx0c2V0Q3VycmVudFN0ZXAoY3VycmVudFN0ZXAgPT09IFNZTUJPTF9PID8gU1lNQk9MX1ggOiBTWU1CT0xfTyk7XG5cdFx0c2V0V2lubmVyU2VxdWVuY2Uod2lubmVyKTtcblx0fVxuXG5cdC8v0YHQsdGA0L7RgSDQvdCwINC90L7QstGD0Y4g0L/QsNGA0YLQuNGOXG5cdGNvbnN0IGhhbmRsZVJlc2V0Q2xpY2sgPSAoKSA9PiB7XG5cdFx0Ly9zZXRDZWxscyhbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0pO1xuXHRcdHNldENlbGxzKEFycmF5LmZyb20oeyBsZW5ndGg6IDl9LCAoKSA9PiBudWxsKSk7XG5cdFx0c2V0Q3VycmVudFN0ZXAoU1lNQk9MX1gpO1xuXHRcdHNldFdpbm5lclNlcXVlbmNlKHVuZGVmaW5lZCk7XG5cdH1cblxuXHQvL2NvbnN0IGNlbGxzQ29weSA9IGNlbGxzLnNsaWNlKCk7IC8v0YHQvtC30LTQsNGC0Ywg0LrQvtC/0LjRjiDQvNCw0YHRgdC40LLQsCBjZWxscyAo0LjQvNC80YPRgtCw0LHQtdC70YzQvdC+0YHRgtGMIFJlYWN0KVxuXHRjb25zdCB3aW5uZXJTeW1ib2wgPSB3aW5uZXJTZXF1ZW5jZSA/IGNlbGxzW3dpbm5lclNlcXVlbmNlWzBdXSA6IHVuZGVmaW5lZDtcblx0Ly/Rg9GB0LvQvtCy0LjQtSDQvdC40YfRjNC4IC0g0L3QtdGCIHdpbm5yZVNlcXVlbmNlINC4INCy0YHQtSDQutC70LXRgtC60Lgg0LfQsNC/0L7Qu9C90LXQvdGLXG5cdGNvbnN0IGlzRHJhdyA9ICF3aW5uZXJTZXF1ZW5jZSAmJiAhY2VsbHNDb3B5LmluY2x1ZGVzKG51bGwpO1xuXG5cdC8v0LLQvtC30LLRgNCw0YnQsNC10Lwg0L3QsNGH0LXQvdC40Y8g0LTQu9GPINC00LDQu9GM0L3QtdC50YjQtdCz0L4g0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40Y8g0LIg0LrQvtC80L/QvtC90LXQvdGC0LDRhVxuXHRyZXR1cm4gKFxuXHRcdGNlbGxzLFxuXHRcdGN1cnJlbnRTdGVwLFxuXHRcdHdpbm5lclNlcXVlbmNlLFxuXHRcdGhhbmRsZUNlbGxDbGljayxcblx0XHRoYW5kbGVSZXNldENsaWNrLFxuXHRcdHdpbm5lclN5bWJvbCxcblx0XHRpc0RyYXdcblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcblxuXHRjb25zdCB7XG5cdFx0Y2VsbHMsXG5cdFx0Y3VycmVudFN0ZXAsXG5cdFx0d2lubmVyU2VxdWVuY2UsXG5cdFx0aGFuZGxlQ2VsbENsaWNrLFxuXHRcdGhhbmRsZVJlc2V0Q2xpY2ssXG5cdFx0d2lubmVyU3ltYm9sLFxuXHRcdGlzRHJhd1xuXHR9ID0gdXNlR2FtZVN0YXRlKCk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydnYW1lJ119PlxuXHRcdFx0PEdhbWVJbmZvIFxuXHRcdFx0XHRpc0RyYXc9e2lzRHJhd30gXG5cdFx0XHRcdHdpbm5lclN5bWJvbD17d2lubmVyU3ltYm9sfSBcblx0XHRcdFx0Y3VycmVudFN0ZXA9e2N1cnJlbnRTdGVwfSBcblx0XHRcdC8+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydnYW1lLWZpZWxkJ119PlxuXHRcdFx0XHR7Y2VsbHMubWFwKCAoc3ltYm9sLCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8R2FtZUNlbGwgXG5cdFx0XHRcdFx0XHRcdHN5bWJvbD17c3ltYm9sfSBcblx0XHRcdFx0XHRcdFx0aXNXaW5uZXI9e3dpbm5lclNlcXVlbmNlPy5pbmNsdWRlcyhpbmRleCl9IFxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVDZWxsQ2xpY2soaW5kZXgpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpXG5cdFx0XHRcdH0pfVxuXHRcdFx0ICA8L2Rpdj5cblx0XHRcdDxidXR0b24gb25DbGljaz17aGFuZGxlUmVzZXRDbGlja30gY2xhc3NOYW1lPSdidG4nPtCd0LDRh9Cw0YLRjCDQt9Cw0L3QvtCy0L48L2J1dHRvbj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuLy/QntGC0LTQtdC70YzQvdGL0LUg0LrQvtC80L/QvtC90LXQvdGC0Ytcbi8vINGE0YPQvdC60YbQuNGPINC+0YLRgNC40YHQvtCy0LrQuCDQstC10YDRhdC90LXQuSDRgdGC0YDQvtC60LhcbmZ1bmN0aW9uIEdhbWVJbmZvKHtpc0RyYXcsIHdpbm5lclN5bWJvbCwgY3VycmVudFN0ZXB9KSB7XG5pZihpc0RyYXcpIHtcblx0cmV0dXJuIChcblx0PGRpdiBjbGFzc05hbWU9e3N0eWxlc1snZ2FtZS1pbmZvJ119PlxuXHRcdNCd0LjRh9GM0Y9cblx0PC9kaXY+XG5cdClcbn0gaWYgKHdpbm5lclN5bWJvbCkge1xuXHRyZXR1cm4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydnYW1lLWluZm8nXX0+XG5cdFx0J9Cf0L7QsdC10LTQuNGC0LXQu9GMOiA8R2FtZVN5bWJvbCBzeW1ib2w9e3dpbm5lclN5bWJvbH0gLz4nXG5cdDwvZGl2PlxuXHQpXG59XHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2dhbWUtaW5mbyddfT5cblx0XHRcdCfQpdC+0LQ6ICA8R2FtZVN5bWJvbCBzeW1ib2w9e2N1cnJlbnRTdGVwfSAvPidcblx0XHQ8L2Rpdj5cbilcbn1cblxuLy/QutC+0LzQv9C+0L3QtdC90YIgQ2VsbFxuZnVuY3Rpb24gR2FtZUNlbGwoe2lzV2lubmVyLCBvbkNsaWNrLCBzeW1ib2x9KSB7XG5cdHJldHVybiA8YnV0dG9uICBcblx0XHRvbkNsaWNrPXtvbkNsaWNrfSBcblx0XHRjbGFzc05hbWU9e2BjZWxsICR7aXNXaW5uZXIgPyAnY2VsbC0td2luJyA6ICcnfWB9XG5cdD5cblx0XHR7c3ltYm9sID8gPEdhbWVTeW1ib2wgc3ltYm9sPXtzeW1ib2x9IC8+OiBudWxsfVxuXHQ8L2J1dHRvbj5cbn1cblxuLy/QmtC+0LzQv9C+0L3QtdC90YLQsCDQtNC70Y8g0L7RgtGA0LjRgdC+0LLQutC4INGB0LjQvNCy0L7Qu9CwINC40LPRgNGLIFxuZnVuY3Rpb24gR2FtZVN5bWJvbCh7c3ltYm9sfSkge1xuLy/RhNGD0L3QutGG0LjRjyDQtNC70Y8g0L7RgtGA0LjRgdC+0LLQutC4IHgg0LjQu9C4IG9cbmNvbnN0IGdldFN5bWJvbENsYXNzTmFtZSA9IChzeW1ib2wpID0+IHtcbmlmIChzeW1ib2wgPT09IFNZTUJPTF9PKSByZXR1cm4gJ3N5bWJvbC0tbyc7XG5pZiAoc3ltYm9sID09PSBTWU1CT0xfWCkgcmV0dXJuICdzeW1ib2wtLXgnO1xucmV0dXJuICcnO1xufVxucmV0dXJuIDxzcGFuIGNsYXNzTmFtZT17YHN5bWJvbCAke2dldFN5bWJvbENsYXNzTmFtZShzeW1ib2wpfWB9PntzeW1ib2x9PC9zcGFuPlxufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwiU1lNQk9MX1giLCJTWU1CT0xfTyIsImNvbXB1dGVXaW5uZXIiLCJjZWxscyIsImxpbmVzIiwiaSIsImxlbmd0aCIsImEiLCJiIiwiYyIsInVzZUdhbWVTdGF0ZSIsInNldENlbGxzIiwiY3VycmVudFN0ZXAiLCJzZXRDdXJyZW50U3RlcCIsIndpbm5lclNlcXVlbmNlIiwic2V0V2lubmVyU2VxdWVuY2UiLCJjZWxsc0NvcHkiLCJzbGljZSIsImhhbmRsZUNlbGxDbGljayIsImluZGV4IiwiY29uc29sZSIsImxvZyIsIndpbm5lciIsImhhbmRsZVJlc2V0Q2xpY2siLCJBcnJheSIsImZyb20iLCJ1bmRlZmluZWQiLCJ3aW5uZXJTeW1ib2wiLCJpc0RyYXciLCJpbmNsdWRlcyIsIkhvbWVQYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiR2FtZUluZm8iLCJtYXAiLCJzeW1ib2wiLCJHYW1lQ2VsbCIsImlzV2lubmVyIiwib25DbGljayIsImJ1dHRvbiIsIkdhbWVTeW1ib2wiLCJnZXRTeW1ib2xDbGFzc05hbWUiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});