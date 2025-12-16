/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/main.js":
/*!***************************!*\
  !*** ./public/js/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Timer */ \"./public/js/modules/Timer.js\");\n/* harmony import */ var _modules_Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Todo */ \"./public/js/modules/Todo.js\");\n\n\n\n// Timer Variables\nconst timerOutput = document.querySelector('.timer');\nconst selectTimer = document.querySelector(\".select-timer\");\nlet timer = null;\n\n// Todo Variables\nlet todo = null;\nconst todoInput = document.querySelector(\".inputTxtTask\");\nconst todoOutput = document.querySelector(\".ul-todo-output\");\nlet list = [];\ndocument.addEventListener(\"click\", e => {\n  // -- Timer Button -- //\n  if (e.target.classList.contains(\"btn-start-timer\")) {\n    if (!Number(selectTimer.value)) return;\n    if (!timer) {\n      timer = new _modules_Timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](selectTimer.value, timerOutput);\n    }\n    timer.start();\n  }\n  ;\n  if (e.target.classList.contains(\"btn-stop\")) {\n    if (!timer) return;\n    timer.stop();\n  }\n  if (e.target.classList.contains(\"btn-pause\")) {\n    if (!timer) return;\n    timer.pause();\n  }\n  ;\n  // -- End of Timer Events -- //\n\n  // --- Todo Events --- //\n  if (e.target.classList.contains(\"btnInsertTask\")) {\n    const task = todoInput.value;\n    if (task == \"\") return;\n    const todo = new _modules_Todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"](task, list, todoOutput);\n    todo.addToList();\n    todoInput.value = \"\";\n  }\n});\n\n// Heard the change in Select Time to update timer.\ndocument.addEventListener(\"change\", () => {\n  if (!timer) return;\n  timer.stop();\n  timer.updateTime(selectTimer.value);\n});\n\n//# sourceURL=webpack://dev-jr-s-to-do-list/./public/js/main.js?\n}");

/***/ }),

/***/ "./public/js/modules/Timer.js":
/*!************************************!*\
  !*** ./public/js/modules/Timer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Timer)\n/* harmony export */ });\nclass Timer {\n  constructor(timeInMin, elementOutput) {\n    this.timeInMin = timeInMin * 60;\n    this.timeInScreen = timeInMin * 60;\n    this.elementOutput = elementOutput;\n    this.isRunning = false;\n    this.timeOut = null;\n  }\n  start() {\n    if (this.isRunning) return;\n    this.isRunning = true;\n    this.timer();\n  }\n  pause() {\n    if (this.isRunning) {\n      this.isRunning = false;\n      clearTimeout(this.timeOut);\n    } else {\n      this.isRunning = true;\n      this.timer();\n    }\n  }\n  stop() {\n    this.pause();\n    this.timeInScreen = this.timeInMin;\n    this.render();\n  }\n  timer() {\n    if (!this.isRunning) return;\n    this.render();\n    if (this.timeInScreen <= 0) {\n      this.isRunning = false;\n      this.timeInScreen = this.timeInMin;\n      return;\n    }\n    this.timeInScreen--;\n    this.timeOut = setTimeout(() => this.timer(), 1000);\n  }\n  render() {\n    this.elementOutput.innerText = this.formatTime(this.timeInScreen);\n  }\n  formatTime(seconds) {\n    const min = Math.floor(seconds / 60);\n    const sec = seconds % 60;\n    return `${String(min).padStart('2', 0)} : ${String(sec).padStart('2', 0)}`;\n  }\n  updateTime(minutes) {\n    this.timeInMin = minutes * 60;\n    this.timeInScreen = this.timeInMin;\n    this.render();\n  }\n}\n;\n\n//# sourceURL=webpack://dev-jr-s-to-do-list/./public/js/modules/Timer.js?\n}");

/***/ }),

/***/ "./public/js/modules/Todo.js":
/*!***********************************!*\
  !*** ./public/js/modules/Todo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\n  constructor(task, list, elementOutput) {\n    this.task = task;\n    this.list = list;\n    this.elementOutput = elementOutput;\n  }\n  addToList() {\n    this.list.push(this.task);\n    this.renderList();\n  }\n  removeTask(id) {}\n  renderList() {\n    this.elementOutput.innerHTML = \"\";\n    this.list.forEach((task, index) => {\n      this.elementOutput.innerHTML += `\n                <li class=\"list-group-item d-flex align-items-center\" id=\"${index}\"> ${task}\n                \n                    <div class=\"ms-auto\">\n                        <button type=\"button\" class=\"btn btn-success align-end\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-check\" viewBox=\"0 0 16 16\">\n                            <path d=\"M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z\"/>\n                            </svg>\n                        </button>\n\n                        <button type=\"button\" class=\"btn btn-danger align-end\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-x\" viewBox=\"0 0 16 16\">\n                            <path d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708\"/>\n                            </svg>\n                        </button>\n                    </div>\n                </li>\n            `;\n    });\n  }\n}\n\n//# sourceURL=webpack://dev-jr-s-to-do-list/./public/js/modules/Todo.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public/js/main.js");
/******/ 	
/******/ })()
;