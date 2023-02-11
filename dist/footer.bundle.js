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

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ footer)\n/* harmony export */ });\nfunction footer() {\r\n    const container = document.createElement('div');\r\n    container.classList = 'containerMoreInfo';\r\n\r\n    const contactContainer = document.createElement('div');\r\n    contactContainer.classList = 'containerContact';\r\n    container.appendChild(contactContainer);\r\n\r\n    const headerText = document.createElement('h2');\r\n    headerText.classList = 'headerContact';\r\n    headerText.innerHTML = 'Contact';\r\n    contactContainer.appendChild(headerText);\r\n\r\n    const contactText = document.createElement('h3');\r\n    contactText.classList = 'textContact';\r\n    contactText.innerHTML = 'Call +76 (094) 754 43 7I';\r\n    contactContainer.append(contactText);\r\n\r\n    const hoursText = document.createElement('h3');\r\n    hoursText.classList = 'textContact';\r\n    hoursText.innerHTML = 'Business Hours: 10am - 11pm Every Day';\r\n    contactContainer.append(hoursText);\r\n\r\n    const locationText = document.createElement('h3');\r\n    locationText.classList = 'textContact';\r\n    locationText.innerHTML = 'Location: 817 N California Ave Chicago IL';\r\n    contactContainer.append(locationText);\r\n\r\n    const subscribeContainer = document.createElement('div');\r\n    subscribeContainer.classList = \"containerSubscribe\";\r\n    container.appendChild(subscribeContainer);\r\n\r\n    const subscribeHeader = document.createElement('h2');\r\n    subscribeHeader.classList = 'headerSubscribe';\r\n    subscribeHeader.innerHTML = 'Subscribe';\r\n    subscribeContainer.appendChild(subscribeHeader);\r\n\r\n    const subscribeForm = document.createElement('form');\r\n    subscribeForm.action = '#';\r\n    subscribeForm.classList = 'formSubscribe';\r\n    subscribeContainer.appendChild(subscribeForm);\r\n\r\n    const formText = document.createElement('input');\r\n    formText.classList = 'emailSubscribe';\r\n    formText.placeholder = 'Email';\r\n    formText.type = 'email';\r\n    subscribeForm.appendChild(formText);\r\n\r\n    const formButton = document.createElement('input');\r\n    formButton.classList = 'submitSubscribe';\r\n    formButton.innerHTML = 'Subscribe';\r\n    formButton.value = 'submit';\r\n    formButton.textContent = 'Submit';\r\n    subscribeForm.appendChild(formButton);\r\n\r\n    return(container);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/components/footer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/components/footer.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;