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

/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\nfunction home() {\r\n    const mainContainer = document.createElement('div');\r\n    mainContainer.classList = 'containerMain';\r\n\r\n    const mainOverlay = document.createElement('div');\r\n    mainOverlay.classList = 'overlayMain';\r\n    mainContainer.appendChild(mainOverlay);\r\n\r\n    const mainContent = document.createElement('div');\r\n    mainContent.classList = 'contentMain';\r\n    mainOverlay.appendChild(mainContent);\r\n\r\n    const mainText = document.createElement('h1');\r\n    mainText.classList = 'textMain';\r\n    mainText.innerHTML = 'Pizzaria';\r\n    mainContent.appendChild(mainText);\r\n\r\n    const subText = document.createElement('h3');\r\n    subText.classList = 'subtextMain';\r\n    subText.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';\r\n    mainContent.appendChild(subText);\r\n\r\n    return mainContainer;\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/components/home.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home */ \"./src/components/home.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer */ \"./src/components/footer.js\");\n\r\n\r\n\r\nfunction navbar() {\r\n    const header = document.createElement('div');\r\n    header.classList = 'header';\r\n\r\n    const logo = document.createElement('h1');\r\n    logo.classList = 'logo';\r\n\r\n    const logoText = document.createElement('div');\r\n    logoText.innerHTML = 'Pizza';\r\n\r\n    logo.appendChild(logoText);\r\n    header.appendChild(logo);\r\n\r\n    const navbar = document.createElement('nav');\r\n    navbar.classList = 'navbar';\r\n\r\n    const homeNav = document.createElement('p');\r\n    homeNav.innerHTML = 'Home';\r\n    navbar.appendChild(homeNav);\r\n\r\n    const menuNav = document.createElement('p');\r\n    menuNav.innerHTML = 'Menu';\r\n    navbar.appendChild(menuNav);\r\n\r\n    const aboutNav = document.createElement('p');\r\n    aboutNav.innerHTML = 'About';\r\n    navbar.appendChild(aboutNav);\r\n\r\n    header.appendChild(navbar);\r\n\r\n    return header;\r\n}\r\n\r\nfunction website() {\r\n    const content = document.createElement('div');\r\n    content.id = 'content';\r\n\r\n    content.appendChild(navbar());\r\n    content.appendChild((0,_components_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n    content.appendChild((0,_components_footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n\r\n    return content;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (website);\n\n//# sourceURL=webpack://restaurant-page/./src/website.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/website.js");
/******/ 	
/******/ })()
;