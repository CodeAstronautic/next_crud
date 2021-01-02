module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store */ \"./store/index.js\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/main.scss */ \"./styles/main.scss\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/globalia/Downloads/next-crud-master/pages/_app.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nfunction App({\n  Component,\n  pageProps\n}) {\n  return __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_store__WEBPACK_IMPORTED_MODULE_1__[\"wrapper\"].withRedux(App));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwid3JhcHBlciIsIndpdGhSZWR1eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxTQUFTQSxHQUFULENBQWE7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWIsRUFBdUM7QUFDdEMsU0FBTyxNQUFDLFNBQUQsZUFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVA7QUFDQTs7QUFFY0MsNkdBQU8sQ0FBQ0MsU0FBUixDQUFrQkosR0FBbEIsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSBcIkAvc3RvcmVcIjtcblxuaW1wb3J0IFwiQC9zdHlsZXMvbWFpbi5zY3NzXCI7XG5cbmZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcblx0cmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEFwcCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./store/actions/employee.js":
/*!***********************************!*\
  !*** ./store/actions/employee.js ***!
  \***********************************/
/*! exports provided: setModalOpen, fetchEmployees, addEmployee, updateEmployee, deleteEmployee, setSelectedEmployee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setModalOpen\", function() { return setModalOpen; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchEmployees\", function() { return fetchEmployees; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addEmployee\", function() { return addEmployee; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateEmployee\", function() { return updateEmployee; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteEmployee\", function() { return deleteEmployee; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setSelectedEmployee\", function() { return setSelectedEmployee; });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ \"./store/types.js\");\n\nconst setModalOpen = isModalOpen => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__[\"MODAL_OPEN\"],\n    payload: isModalOpen\n  };\n};\nconst fetchEmployees = () => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__[\"EMPLOYEE_FETCH_REQUESTED\"]\n  };\n};\nconst addEmployee = employee => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__[\"EMPLOYEE_ADD_REQUESTED\"],\n    payload: employee\n  };\n};\nconst updateEmployee = employee => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__[\"EMPLOYEE_UPDATE_REQUESTED\"],\n    payload: employee\n  };\n};\nconst deleteEmployee = id => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__[\"EMPLOYEE_DELETE_REQUESTED\"],\n    payload: id\n  };\n};\nconst setSelectedEmployee = id => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__[\"EMPLOYEE_SELECTED\"],\n    payload: id\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL2VtcGxveWVlLmpzP2FlM2UiXSwibmFtZXMiOlsic2V0TW9kYWxPcGVuIiwiaXNNb2RhbE9wZW4iLCJ0eXBlIiwidCIsInBheWxvYWQiLCJmZXRjaEVtcGxveWVlcyIsIkVNUExPWUVFX0ZFVENIX1JFUVVFU1RFRCIsImFkZEVtcGxveWVlIiwiZW1wbG95ZWUiLCJ1cGRhdGVFbXBsb3llZSIsImRlbGV0ZUVtcGxveWVlIiwiaWQiLCJzZXRTZWxlY3RlZEVtcGxveWVlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNQSxZQUFZLEdBQUlDLFdBQUQsSUFBaUI7QUFDNUMsU0FBTztBQUNOQyxRQUFJLEVBQUVDLGlEQURBO0FBRU5DLFdBQU8sRUFBRUg7QUFGSCxHQUFQO0FBSUEsQ0FMTTtBQU9BLE1BQU1JLGNBQWMsR0FBRyxNQUFNO0FBQ25DLFNBQU87QUFDTkgsUUFBSSxFQUFFQywrREFBMEJHO0FBRDFCLEdBQVA7QUFHQSxDQUpNO0FBTUEsTUFBTUMsV0FBVyxHQUFJQyxRQUFELElBQWM7QUFDeEMsU0FBTztBQUNOTixRQUFJLEVBQUVDLDZEQURBO0FBRU5DLFdBQU8sRUFBRUk7QUFGSCxHQUFQO0FBSUEsQ0FMTTtBQU9BLE1BQU1DLGNBQWMsR0FBSUQsUUFBRCxJQUFjO0FBQzNDLFNBQU87QUFDTk4sUUFBSSxFQUFFQyxnRUFEQTtBQUVOQyxXQUFPLEVBQUVJO0FBRkgsR0FBUDtBQUlBLENBTE07QUFPQSxNQUFNRSxjQUFjLEdBQUlDLEVBQUQsSUFBUTtBQUNyQyxTQUFPO0FBQ05ULFFBQUksRUFBRUMsZ0VBREE7QUFFTkMsV0FBTyxFQUFFTztBQUZILEdBQVA7QUFJQSxDQUxNO0FBT0EsTUFBTUMsbUJBQW1CLEdBQUlELEVBQUQsSUFBUTtBQUMxQyxTQUFPO0FBQ05ULFFBQUksRUFBRUMsd0RBREE7QUFFTkMsV0FBTyxFQUFFTztBQUZILEdBQVA7QUFJQSxDQUxNIiwiZmlsZSI6Ii4vc3RvcmUvYWN0aW9ucy9lbXBsb3llZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHQgZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBzZXRNb2RhbE9wZW4gPSAoaXNNb2RhbE9wZW4pID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiB0Lk1PREFMX09QRU4sXG5cdFx0cGF5bG9hZDogaXNNb2RhbE9wZW4sXG5cdH07XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hFbXBsb3llZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogdC5FTVBMT1lFRV9GRVRDSF9SRVFVRVNURUQsXG5cdH07XG59O1xuXG5leHBvcnQgY29uc3QgYWRkRW1wbG95ZWUgPSAoZW1wbG95ZWUpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiB0LkVNUExPWUVFX0FERF9SRVFVRVNURUQsXG5cdFx0cGF5bG9hZDogZW1wbG95ZWUsXG5cdH07XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlRW1wbG95ZWUgPSAoZW1wbG95ZWUpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiB0LkVNUExPWUVFX1VQREFURV9SRVFVRVNURUQsXG5cdFx0cGF5bG9hZDogZW1wbG95ZWUsXG5cdH07XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlRW1wbG95ZWUgPSAoaWQpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiB0LkVNUExPWUVFX0RFTEVURV9SRVFVRVNURUQsXG5cdFx0cGF5bG9hZDogaWQsXG5cdH07XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0U2VsZWN0ZWRFbXBsb3llZSA9IChpZCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IHQuRU1QTE9ZRUVfU0VMRUNURUQsXG5cdFx0cGF5bG9hZDogaWQsXG5cdH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/actions/employee.js\n");

/***/ }),

/***/ "./store/actions/index.js":
/*!********************************!*\
  !*** ./store/actions/index.js ***!
  \********************************/
/*! exports provided: setModalOpen, fetchEmployees, addEmployee, updateEmployee, deleteEmployee, setSelectedEmployee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _employee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee */ \"./store/actions/employee.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"setModalOpen\", function() { return _employee__WEBPACK_IMPORTED_MODULE_0__[\"setModalOpen\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"fetchEmployees\", function() { return _employee__WEBPACK_IMPORTED_MODULE_0__[\"fetchEmployees\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"addEmployee\", function() { return _employee__WEBPACK_IMPORTED_MODULE_0__[\"addEmployee\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"updateEmployee\", function() { return _employee__WEBPACK_IMPORTED_MODULE_0__[\"updateEmployee\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deleteEmployee\", function() { return _employee__WEBPACK_IMPORTED_MODULE_0__[\"deleteEmployee\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"setSelectedEmployee\", function() { return _employee__WEBPACK_IMPORTED_MODULE_0__[\"setSelectedEmployee\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL2luZGV4LmpzPzVlOWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL3N0b3JlL2FjdGlvbnMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLi9lbXBsb3llZVwiO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/actions/index.js\n");

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/*! exports provided: wrapper, setModalOpen, fetchEmployees, addEmployee, updateEmployee, deleteEmployee, setSelectedEmployee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ \"./store/store.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"wrapper\", function() { return _store__WEBPACK_IMPORTED_MODULE_0__[\"wrapper\"]; });\n\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ \"./store/actions/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"setModalOpen\", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__[\"setModalOpen\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"fetchEmployees\", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__[\"fetchEmployees\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"addEmployee\", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__[\"addEmployee\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"updateEmployee\", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__[\"updateEmployee\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deleteEmployee\", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__[\"deleteEmployee\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"setSelectedEmployee\", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__[\"setSelectedEmployee\"]; });\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9pbmRleC5qcz85MTAxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL3N0b3JlL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4vc3RvcmVcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2FjdGlvbnNcIjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/index.js\n");

/***/ }),

/***/ "./store/reducers/employee.js":
/*!************************************!*\
  !*** ./store/reducers/employee.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ \"./store/types.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst initialState = {\n  employeeList: [],\n  selectedEmployee: undefined,\n  isModalOpen: false\n};\n\nconst mainReducer = (state = initialState, action) => {\n  switch (action.type) {\n    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"HYDRATE\"]:\n      return _objectSpread(_objectSpread({}, state), action.payload);\n\n    case _types__WEBPACK_IMPORTED_MODULE_1__[\"MODAL_OPEN\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isModalOpen: action.payload\n      });\n\n    case _types__WEBPACK_IMPORTED_MODULE_1__[\"EMPLOYEE_FETCH_SUCCEEDED\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        employeeList: action.payload\n      });\n\n    case _types__WEBPACK_IMPORTED_MODULE_1__[\"EMPLOYEE_ADD_SUCCEEDED\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        employeeList: [action.payload, ...state.employeeList]\n      });\n\n    case _types__WEBPACK_IMPORTED_MODULE_1__[\"EMPLOYEE_UPDATE_SUCCEEDED\"]:\n      const updatedEmployee = state.employeeList.map(employee => {\n        if (employee._id === action.payload._id) {\n          return _objectSpread(_objectSpread({}, employee), {}, {\n            name: action.payload.name,\n            email: action.payload.email,\n            address: action.payload.address,\n            phone: action.payload.phone\n          });\n        }\n\n        return employee;\n      });\n      return _objectSpread(_objectSpread({}, state), {}, {\n        employeeList: updatedEmployee\n      });\n\n    case _types__WEBPACK_IMPORTED_MODULE_1__[\"EMPLOYEE_DELETE_SUCCEEDED\"]:\n      const newEmployeeList = state.employeeList.filter(employee => employee._id !== action.payload);\n      return _objectSpread(_objectSpread({}, state), {}, {\n        employeeList: newEmployeeList\n      });\n\n    case _types__WEBPACK_IMPORTED_MODULE_1__[\"EMPLOYEE_SELECTED\"]:\n      const selectedEmployee = state.employeeList.find(employee => employee._id === action.payload);\n      return _objectSpread(_objectSpread({}, state), {}, {\n        selectedEmployee\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mainReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9lbXBsb3llZS5qcz82MWJjIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImVtcGxveWVlTGlzdCIsInNlbGVjdGVkRW1wbG95ZWUiLCJ1bmRlZmluZWQiLCJpc01vZGFsT3BlbiIsIm1haW5SZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsInBheWxvYWQiLCJ0IiwidXBkYXRlZEVtcGxveWVlIiwibWFwIiwiZW1wbG95ZWUiLCJfaWQiLCJuYW1lIiwiZW1haWwiLCJhZGRyZXNzIiwicGhvbmUiLCJuZXdFbXBsb3llZUxpc3QiLCJmaWx0ZXIiLCJmaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1BLFlBQVksR0FBRztBQUNwQkMsY0FBWSxFQUFFLEVBRE07QUFFcEJDLGtCQUFnQixFQUFFQyxTQUZFO0FBR3BCQyxhQUFXLEVBQUU7QUFITyxDQUFyQjs7QUFNQSxNQUFNQyxXQUFXLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHTixZQUFULEVBQXVCTyxNQUF2QixLQUFrQztBQUNyRCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDQyxTQUFLQywwREFBTDtBQUNDLDZDQUFZSCxLQUFaLEdBQXNCQyxNQUFNLENBQUNHLE9BQTdCOztBQUNELFNBQUtDLGlEQUFMO0FBQ0MsNkNBQ0lMLEtBREo7QUFFQ0YsbUJBQVcsRUFBRUcsTUFBTSxDQUFDRztBQUZyQjs7QUFJRCxTQUFLQywrREFBTDtBQUNDLDZDQUNJTCxLQURKO0FBRUNMLG9CQUFZLEVBQUVNLE1BQU0sQ0FBQ0c7QUFGdEI7O0FBSUQsU0FBS0MsNkRBQUw7QUFDQyw2Q0FDSUwsS0FESjtBQUVDTCxvQkFBWSxFQUFFLENBQUNNLE1BQU0sQ0FBQ0csT0FBUixFQUFpQixHQUFHSixLQUFLLENBQUNMLFlBQTFCO0FBRmY7O0FBSUQsU0FBS1UsZ0VBQUw7QUFDQyxZQUFNQyxlQUFlLEdBQUdOLEtBQUssQ0FBQ0wsWUFBTixDQUFtQlksR0FBbkIsQ0FBd0JDLFFBQUQsSUFBYztBQUM1RCxZQUFJQSxRQUFRLENBQUNDLEdBQVQsS0FBaUJSLE1BQU0sQ0FBQ0csT0FBUCxDQUFlSyxHQUFwQyxFQUF5QztBQUN4QyxpREFDSUQsUUFESjtBQUVDRSxnQkFBSSxFQUFFVCxNQUFNLENBQUNHLE9BQVAsQ0FBZU0sSUFGdEI7QUFHQ0MsaUJBQUssRUFBRVYsTUFBTSxDQUFDRyxPQUFQLENBQWVPLEtBSHZCO0FBSUNDLG1CQUFPLEVBQUVYLE1BQU0sQ0FBQ0csT0FBUCxDQUFlUSxPQUp6QjtBQUtDQyxpQkFBSyxFQUFFWixNQUFNLENBQUNHLE9BQVAsQ0FBZVM7QUFMdkI7QUFPQTs7QUFDRCxlQUFPTCxRQUFQO0FBQ0EsT0FYdUIsQ0FBeEI7QUFhQSw2Q0FBWVIsS0FBWjtBQUFtQkwsb0JBQVksRUFBRVc7QUFBakM7O0FBQ0QsU0FBS0QsZ0VBQUw7QUFDQyxZQUFNUyxlQUFlLEdBQUdkLEtBQUssQ0FBQ0wsWUFBTixDQUFtQm9CLE1BQW5CLENBQ3RCUCxRQUFELElBQWNBLFFBQVEsQ0FBQ0MsR0FBVCxLQUFpQlIsTUFBTSxDQUFDRyxPQURmLENBQXhCO0FBR0EsNkNBQ0lKLEtBREo7QUFFQ0wsb0JBQVksRUFBRW1CO0FBRmY7O0FBSUQsU0FBS1Qsd0RBQUw7QUFDQyxZQUFNVCxnQkFBZ0IsR0FBR0ksS0FBSyxDQUFDTCxZQUFOLENBQW1CcUIsSUFBbkIsQ0FDdkJSLFFBQUQsSUFBY0EsUUFBUSxDQUFDQyxHQUFULEtBQWlCUixNQUFNLENBQUNHLE9BRGQsQ0FBekI7QUFHQSw2Q0FDSUosS0FESjtBQUVDSjtBQUZEOztBQUlEO0FBQ0MsYUFBT0ksS0FBUDtBQWxERjtBQW9EQSxDQXJERDs7QUF1RGVELDBFQUFmIiwiZmlsZSI6Ii4vc3RvcmUvcmVkdWNlcnMvZW1wbG95ZWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuaW1wb3J0ICogYXMgdCBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuXHRlbXBsb3llZUxpc3Q6IFtdLFxuXHRzZWxlY3RlZEVtcGxveWVlOiB1bmRlZmluZWQsXG5cdGlzTW9kYWxPcGVuOiBmYWxzZSxcbn07XG5cbmNvbnN0IG1haW5SZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgSFlEUkFURTpcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xuXHRcdGNhc2UgdC5NT0RBTF9PUEVOOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGlzTW9kYWxPcGVuOiBhY3Rpb24ucGF5bG9hZCxcblx0XHRcdH07XG5cdFx0Y2FzZSB0LkVNUExPWUVFX0ZFVENIX1NVQ0NFRURFRDpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRlbXBsb3llZUxpc3Q6IGFjdGlvbi5wYXlsb2FkLFxuXHRcdFx0fTtcblx0XHRjYXNlIHQuRU1QTE9ZRUVfQUREX1NVQ0NFRURFRDpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRlbXBsb3llZUxpc3Q6IFthY3Rpb24ucGF5bG9hZCwgLi4uc3RhdGUuZW1wbG95ZWVMaXN0XSxcblx0XHRcdH07XG5cdFx0Y2FzZSB0LkVNUExPWUVFX1VQREFURV9TVUNDRUVERUQ6XG5cdFx0XHRjb25zdCB1cGRhdGVkRW1wbG95ZWUgPSBzdGF0ZS5lbXBsb3llZUxpc3QubWFwKChlbXBsb3llZSkgPT4ge1xuXHRcdFx0XHRpZiAoZW1wbG95ZWUuX2lkID09PSBhY3Rpb24ucGF5bG9hZC5faWQpIHtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0Li4uZW1wbG95ZWUsXG5cdFx0XHRcdFx0XHRuYW1lOiBhY3Rpb24ucGF5bG9hZC5uYW1lLFxuXHRcdFx0XHRcdFx0ZW1haWw6IGFjdGlvbi5wYXlsb2FkLmVtYWlsLFxuXHRcdFx0XHRcdFx0YWRkcmVzczogYWN0aW9uLnBheWxvYWQuYWRkcmVzcyxcblx0XHRcdFx0XHRcdHBob25lOiBhY3Rpb24ucGF5bG9hZC5waG9uZSxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBlbXBsb3llZTtcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgZW1wbG95ZWVMaXN0OiB1cGRhdGVkRW1wbG95ZWUgfTtcblx0XHRjYXNlIHQuRU1QTE9ZRUVfREVMRVRFX1NVQ0NFRURFRDpcblx0XHRcdGNvbnN0IG5ld0VtcGxveWVlTGlzdCA9IHN0YXRlLmVtcGxveWVlTGlzdC5maWx0ZXIoXG5cdFx0XHRcdChlbXBsb3llZSkgPT4gZW1wbG95ZWUuX2lkICE9PSBhY3Rpb24ucGF5bG9hZFxuXHRcdFx0KTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRlbXBsb3llZUxpc3Q6IG5ld0VtcGxveWVlTGlzdCxcblx0XHRcdH07XG5cdFx0Y2FzZSB0LkVNUExPWUVFX1NFTEVDVEVEOlxuXHRcdFx0Y29uc3Qgc2VsZWN0ZWRFbXBsb3llZSA9IHN0YXRlLmVtcGxveWVlTGlzdC5maW5kKFxuXHRcdFx0XHQoZW1wbG95ZWUpID0+IGVtcGxveWVlLl9pZCA9PT0gYWN0aW9uLnBheWxvYWRcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0c2VsZWN0ZWRFbXBsb3llZSxcblx0XHRcdH07XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFpblJlZHVjZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/reducers/employee.js\n");

/***/ }),

/***/ "./store/reducers/index.js":
/*!*********************************!*\
  !*** ./store/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _employee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee */ \"./store/reducers/employee.js\");\n\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  employee: _employee__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9pbmRleC5qcz8zODM5Il0sIm5hbWVzIjpbInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiZW1wbG95ZWUiLCJlbXBsb3llZVJlZHVjZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU1BLFdBQVcsR0FBR0MsNkRBQWUsQ0FBQztBQUNuQ0MsVUFBUSxFQUFFQyxpREFBZUE7QUFEVSxDQUFELENBQW5DO0FBSWVILDBFQUFmIiwiZmlsZSI6Ii4vc3RvcmUvcmVkdWNlcnMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCBlbXBsb3llZVJlZHVjZXIgZnJvbSBcIi4vZW1wbG95ZWVcIjtcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuXHRlbXBsb3llZTogZW1wbG95ZWVSZWR1Y2VyLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/reducers/index.js\n");

/***/ }),

/***/ "./store/sagas/employee.js":
/*!*********************************!*\
  !*** ./store/sagas/employee.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return rootSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ \"./store/types.js\");\n\n\n\nfunction* fetchEmployees() {\n  try {\n    const response = yield fetch(\"/api/employees\");\n    const employeeList = yield response.json();\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _types__WEBPACK_IMPORTED_MODULE_1__[\"EMPLOYEE_FETCH_SUCCEEDED\"],\n      payload: employeeList.data\n    });\n  } catch (error) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _types__WEBPACK_IMPORTED_MODULE_1__[\"EMPLOYEE_FETCH_FAILED\"],\n      payload: error.message\n    });\n  }\n}\n\nfunction* watchFetchEmployees() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_types__WEBPACK_IMPORTED_MODULE_1__[\"EMPLOYEE_FETCH_REQUESTED\"], fetchEmployees);\n}\n\nfunction* addEmployee(action) {\n  try {\n    const response = yield fetch(\"/api/employees\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify(action.payload)\n    });\n    const newEmployee = yield response.json();\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _types__WEBPACK_IMPORTED_MODULE_1__[\"EMPLOYEE_ADD_SUCCEEDED\"],\n      payload: newEmployee.data\n    });\n  } catch (error) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _types__WEBPACK_IMPORTED_MODULE_1__[\"EMPLOYEE_ADD_FAILED\"],\n      payload: error.message\n    });\n  }\n}\n\nfunction* watchAddEmployee() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_types__WEBPACK_IMPORTED_MODULE_1__[\"EMPLOYEE_ADD_REQUESTED\"], addEmployee);\n}\n\nfunction* deleteEmployee(action) {\n  try {\n    const response = yield fetch(\"/api/employees/\" + action.payload, {\n      method: \"DELETE\"\n    });\n    const deletedEmployee = yield response.json();\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _types__WEBPACK_IMPORTED_MODULE_1__[\"EMPLOYEE_DELETE_SUCCEEDED\"],\n      payload: deletedEmployee.data.id\n    });\n  } catch (error) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _types__WEBPACK_IMPORTED_MODULE_1__[\"EMPLOYEE_DELETE_FAILED\"],\n      payload: error.message\n    });\n  }\n}\n\nfunction* watchRemoveEmployee() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_types__WEBPACK_IMPORTED_MODULE_1__[\"EMPLOYEE_DELETE_REQUESTED\"], deleteEmployee);\n}\n\nfunction* updateEmployee(action) {\n  try {\n    const response = yield fetch(\"/api/employees/\" + action.payload._id, {\n      method: \"PUT\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify(action.payload)\n    });\n    const updatedEmployee = yield response.json();\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _types__WEBPACK_IMPORTED_MODULE_1__[\"EMPLOYEE_UPDATE_SUCCEEDED\"],\n      payload: updatedEmployee.data\n    });\n  } catch (error) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _types__WEBPACK_IMPORTED_MODULE_1__[\"EMPLOYEE_UPDATE_FAILED\"],\n      payload: error.message\n    });\n  }\n}\n\nfunction* watchUpdateEmployee() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_types__WEBPACK_IMPORTED_MODULE_1__[\"EMPLOYEE_UPDATE_REQUESTED\"], updateEmployee);\n}\n\nfunction* rootSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([watchFetchEmployees(), watchAddEmployee(), watchRemoveEmployee(), watchUpdateEmployee()]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9zYWdhcy9lbXBsb3llZS5qcz85YWYzIl0sIm5hbWVzIjpbImZldGNoRW1wbG95ZWVzIiwicmVzcG9uc2UiLCJmZXRjaCIsImVtcGxveWVlTGlzdCIsImpzb24iLCJwdXQiLCJ0eXBlIiwidCIsInBheWxvYWQiLCJkYXRhIiwiZXJyb3IiLCJtZXNzYWdlIiwid2F0Y2hGZXRjaEVtcGxveWVlcyIsInRha2VMYXRlc3QiLCJhZGRFbXBsb3llZSIsImFjdGlvbiIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5ld0VtcGxveWVlIiwid2F0Y2hBZGRFbXBsb3llZSIsImRlbGV0ZUVtcGxveWVlIiwiZGVsZXRlZEVtcGxveWVlIiwiaWQiLCJ3YXRjaFJlbW92ZUVtcGxveWVlIiwidXBkYXRlRW1wbG95ZWUiLCJfaWQiLCJ1cGRhdGVkRW1wbG95ZWUiLCJ3YXRjaFVwZGF0ZUVtcGxveWVlIiwicm9vdFNhZ2EiLCJhbGwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBLFVBQVVBLGNBQVYsR0FBMkI7QUFDMUIsTUFBSTtBQUNILFVBQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsZ0JBQUQsQ0FBNUI7QUFFQSxVQUFNQyxZQUFZLEdBQUcsTUFBTUYsUUFBUSxDQUFDRyxJQUFULEVBQTNCO0FBRUEsVUFBTUMsOERBQUcsQ0FBQztBQUNUQyxVQUFJLEVBQUVDLCtEQURHO0FBRVRDLGFBQU8sRUFBRUwsWUFBWSxDQUFDTTtBQUZiLEtBQUQsQ0FBVDtBQUlBLEdBVEQsQ0FTRSxPQUFPQyxLQUFQLEVBQWM7QUFDZixVQUFNTCw4REFBRyxDQUFDO0FBQ1RDLFVBQUksRUFBRUMsNERBREc7QUFFVEMsYUFBTyxFQUFFRSxLQUFLLENBQUNDO0FBRk4sS0FBRCxDQUFUO0FBSUE7QUFDRDs7QUFFRCxVQUFVQyxtQkFBVixHQUFnQztBQUMvQixRQUFNQyxx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QixtQkFBbUIsRUFEVixFQUVUVSxnQkFBZ0IsRUFGUCxFQUdUSSxtQkFBbUIsRUFIVixFQUlUSSxtQkFBbUIsRUFKVixDQUFELENBQVQ7QUFNQSIsImZpbGUiOiIuL3N0b3JlL3NhZ2FzL2VtcGxveWVlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBwdXQsIHRha2VMYXRlc3QgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XG5pbXBvcnQgKiBhcyB0IGZyb20gXCIuLi90eXBlc1wiO1xuXG5mdW5jdGlvbiogZmV0Y2hFbXBsb3llZXMoKSB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChcIi9hcGkvZW1wbG95ZWVzXCIpO1xuXG5cdFx0Y29uc3QgZW1wbG95ZWVMaXN0ID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuXG5cdFx0eWllbGQgcHV0KHtcblx0XHRcdHR5cGU6IHQuRU1QTE9ZRUVfRkVUQ0hfU1VDQ0VFREVELFxuXHRcdFx0cGF5bG9hZDogZW1wbG95ZWVMaXN0LmRhdGEsXG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0eWllbGQgcHV0KHtcblx0XHRcdHR5cGU6IHQuRU1QTE9ZRUVfRkVUQ0hfRkFJTEVELFxuXHRcdFx0cGF5bG9hZDogZXJyb3IubWVzc2FnZSxcblx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiogd2F0Y2hGZXRjaEVtcGxveWVlcygpIHtcblx0eWllbGQgdGFrZUxhdGVzdCh0LkVNUExPWUVFX0ZFVENIX1JFUVVFU1RFRCwgZmV0Y2hFbXBsb3llZXMpO1xufVxuXG5mdW5jdGlvbiogYWRkRW1wbG95ZWUoYWN0aW9uKSB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChcIi9hcGkvZW1wbG95ZWVzXCIsIHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuXHRcdFx0fSxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KGFjdGlvbi5wYXlsb2FkKSxcblx0XHR9KTtcblxuXHRcdGNvbnN0IG5ld0VtcGxveWVlID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuXG5cdFx0eWllbGQgcHV0KHtcblx0XHRcdHR5cGU6IHQuRU1QTE9ZRUVfQUREX1NVQ0NFRURFRCxcblx0XHRcdHBheWxvYWQ6IG5ld0VtcGxveWVlLmRhdGEsXG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0eWllbGQgcHV0KHtcblx0XHRcdHR5cGU6IHQuRU1QTE9ZRUVfQUREX0ZBSUxFRCxcblx0XHRcdHBheWxvYWQ6IGVycm9yLm1lc3NhZ2UsXG5cdFx0fSk7XG5cdH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoQWRkRW1wbG95ZWUoKSB7XG5cdHlpZWxkIHRha2VMYXRlc3QodC5FTVBMT1lFRV9BRERfUkVRVUVTVEVELCBhZGRFbXBsb3llZSk7XG59XG5cbmZ1bmN0aW9uKiBkZWxldGVFbXBsb3llZShhY3Rpb24pIHtcblx0dHJ5IHtcblx0XHRjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKFwiL2FwaS9lbXBsb3llZXMvXCIgKyBhY3Rpb24ucGF5bG9hZCwge1xuXHRcdFx0bWV0aG9kOiBcIkRFTEVURVwiLFxuXHRcdH0pO1xuXG5cdFx0Y29uc3QgZGVsZXRlZEVtcGxveWVlID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuXG5cdFx0eWllbGQgcHV0KHtcblx0XHRcdHR5cGU6IHQuRU1QTE9ZRUVfREVMRVRFX1NVQ0NFRURFRCxcblx0XHRcdHBheWxvYWQ6IGRlbGV0ZWRFbXBsb3llZS5kYXRhLmlkLFxuXHRcdH0pO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHlpZWxkIHB1dCh7XG5cdFx0XHR0eXBlOiB0LkVNUExPWUVFX0RFTEVURV9GQUlMRUQsXG5cdFx0XHRwYXlsb2FkOiBlcnJvci5tZXNzYWdlLFxuXHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZUVtcGxveWVlKCkge1xuXHR5aWVsZCB0YWtlTGF0ZXN0KHQuRU1QTE9ZRUVfREVMRVRFX1JFUVVFU1RFRCwgZGVsZXRlRW1wbG95ZWUpO1xufVxuXG5mdW5jdGlvbiogdXBkYXRlRW1wbG95ZWUoYWN0aW9uKSB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChcIi9hcGkvZW1wbG95ZWVzL1wiICsgYWN0aW9uLnBheWxvYWQuX2lkLCB7XG5cdFx0XHRtZXRob2Q6IFwiUFVUXCIsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuXHRcdFx0fSxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KGFjdGlvbi5wYXlsb2FkKSxcblx0XHR9KTtcblxuXHRcdGNvbnN0IHVwZGF0ZWRFbXBsb3llZSA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcblxuXHRcdHlpZWxkIHB1dCh7XG5cdFx0XHR0eXBlOiB0LkVNUExPWUVFX1VQREFURV9TVUNDRUVERUQsXG5cdFx0XHRwYXlsb2FkOiB1cGRhdGVkRW1wbG95ZWUuZGF0YSxcblx0XHR9KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHR5aWVsZCBwdXQoe1xuXHRcdFx0dHlwZTogdC5FTVBMT1lFRV9VUERBVEVfRkFJTEVELFxuXHRcdFx0cGF5bG9hZDogZXJyb3IubWVzc2FnZSxcblx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiogd2F0Y2hVcGRhdGVFbXBsb3llZSgpIHtcblx0eWllbGQgdGFrZUxhdGVzdCh0LkVNUExPWUVFX1VQREFURV9SRVFVRVNURUQsIHVwZGF0ZUVtcGxveWVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xuXHR5aWVsZCBhbGwoW1xuXHRcdHdhdGNoRmV0Y2hFbXBsb3llZXMoKSxcblx0XHR3YXRjaEFkZEVtcGxveWVlKCksXG5cdFx0d2F0Y2hSZW1vdmVFbXBsb3llZSgpLFxuXHRcdHdhdGNoVXBkYXRlRW1wbG95ZWUoKSxcblx0XSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/sagas/employee.js\n");

/***/ }),

/***/ "./store/sagas/index.js":
/*!******************************!*\
  !*** ./store/sagas/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _employee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee */ \"./store/sagas/employee.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _employee__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9zYWdhcy9pbmRleC5qcz9hNDA5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vc3RvcmUvc2FnYXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vZW1wbG95ZWVcIjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/sagas/index.js\n");

/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wrapper\", function() { return wrapper; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers */ \"./store/reducers/index.js\");\n/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sagas */ \"./store/sagas/index.js\");\n\n\n\n\n\n\nconst sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();\nconst store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_4__[\"default\"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(sagaMiddleware)));\nsagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n\nconst makeStore = () => store;\n\nconst wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__[\"createWrapper\"])(makeStore);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9zdG9yZS5qcz80MmEyIl0sIm5hbWVzIjpbInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlTWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJyb290UmVkdWNlciIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJydW4iLCJyb290U2FnYSIsIm1ha2VTdG9yZSIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxNQUFNQSxjQUFjLEdBQUdDLGlEQUFnQixFQUF2QztBQUVBLE1BQU1DLEtBQUssR0FBR0MseURBQVcsQ0FDeEJDLGlEQUR3QixFQUV4QkMsb0ZBQW1CLENBQUNDLDZEQUFlLENBQUNOLGNBQUQsQ0FBaEIsQ0FGSyxDQUF6QjtBQUtBQSxjQUFjLENBQUNPLEdBQWYsQ0FBbUJDLDhDQUFuQjs7QUFFQSxNQUFNQyxTQUFTLEdBQUcsTUFBTVAsS0FBeEI7O0FBRU8sTUFBTVEsT0FBTyxHQUFHQyx3RUFBYSxDQUFDRixTQUFELENBQTdCIiwiZmlsZSI6Ii4vc3RvcmUvc3RvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcbmltcG9ydCBjcmVhdGVNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC1zYWdhXCI7XG5cbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi9yZWR1Y2Vyc1wiO1xuaW1wb3J0IHJvb3RTYWdhIGZyb20gXCIuL3NhZ2FzXCI7XG5cbmNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlTWlkZGxld2FyZSgpO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuXHRyb290UmVkdWNlcixcblx0Y29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoc2FnYU1pZGRsZXdhcmUpKVxuKTtcblxuc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcblxuY29uc3QgbWFrZVN0b3JlID0gKCkgPT4gc3RvcmU7XG5cbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihtYWtlU3RvcmUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/store.js\n");

/***/ }),

/***/ "./store/types.js":
/*!************************!*\
  !*** ./store/types.js ***!
  \************************/
/*! exports provided: MODAL_OPEN, EMPLOYEE_SELECTED, EMPLOYEE_FETCH_REQUESTED, EMPLOYEE_FETCH_SUCCEEDED, EMPLOYEE_FETCH_FAILED, EMPLOYEE_ADD_REQUESTED, EMPLOYEE_ADD_SUCCEEDED, EMPLOYEE_ADD_FAILED, EMPLOYEE_UPDATE_REQUESTED, EMPLOYEE_UPDATE_SUCCEEDED, EMPLOYEE_UPDATE_FAILED, EMPLOYEE_DELETE_REQUESTED, EMPLOYEE_DELETE_SUCCEEDED, EMPLOYEE_DELETE_FAILED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MODAL_OPEN\", function() { return MODAL_OPEN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EMPLOYEE_SELECTED\", function() { return EMPLOYEE_SELECTED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EMPLOYEE_FETCH_REQUESTED\", function() { return EMPLOYEE_FETCH_REQUESTED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EMPLOYEE_FETCH_SUCCEEDED\", function() { return EMPLOYEE_FETCH_SUCCEEDED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EMPLOYEE_FETCH_FAILED\", function() { return EMPLOYEE_FETCH_FAILED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EMPLOYEE_ADD_REQUESTED\", function() { return EMPLOYEE_ADD_REQUESTED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EMPLOYEE_ADD_SUCCEEDED\", function() { return EMPLOYEE_ADD_SUCCEEDED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EMPLOYEE_ADD_FAILED\", function() { return EMPLOYEE_ADD_FAILED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EMPLOYEE_UPDATE_REQUESTED\", function() { return EMPLOYEE_UPDATE_REQUESTED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EMPLOYEE_UPDATE_SUCCEEDED\", function() { return EMPLOYEE_UPDATE_SUCCEEDED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EMPLOYEE_UPDATE_FAILED\", function() { return EMPLOYEE_UPDATE_FAILED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EMPLOYEE_DELETE_REQUESTED\", function() { return EMPLOYEE_DELETE_REQUESTED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EMPLOYEE_DELETE_SUCCEEDED\", function() { return EMPLOYEE_DELETE_SUCCEEDED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EMPLOYEE_DELETE_FAILED\", function() { return EMPLOYEE_DELETE_FAILED; });\nconst MODAL_OPEN = \"MODAL_OPEN\";\nconst EMPLOYEE_SELECTED = \"EMPLOYEE_SELECTED\";\nconst EMPLOYEE_FETCH_REQUESTED = \"EMPLOYEE_FETCH_REQUESTED\";\nconst EMPLOYEE_FETCH_SUCCEEDED = \"EMPLOYEE_FETCH_SUCCEEDED\";\nconst EMPLOYEE_FETCH_FAILED = \"EMPLOYEE_FETCH_FAILED\";\nconst EMPLOYEE_ADD_REQUESTED = \"EMPLOYEE_ADD_REQUESTED\";\nconst EMPLOYEE_ADD_SUCCEEDED = \"EMPLOYEE_ADD_SUCCEEDED\";\nconst EMPLOYEE_ADD_FAILED = \"EMPLOYEE_ADD_FAILED\";\nconst EMPLOYEE_UPDATE_REQUESTED = \"EMPLOYEE_UPDATE_REQUESTED\";\nconst EMPLOYEE_UPDATE_SUCCEEDED = \"EMPLOYEE_UPDATE_SUCCEEDED\";\nconst EMPLOYEE_UPDATE_FAILED = \"EMPLOYEE_UPDATE_FAILED\";\nconst EMPLOYEE_DELETE_REQUESTED = \"EMPLOYEE_DELETE_REQUESTED\";\nconst EMPLOYEE_DELETE_SUCCEEDED = \"EMPLOYEE_DELETE_SUCCEEDED\";\nconst EMPLOYEE_DELETE_FAILED = \"EMPLOYEE_DELETE_FAILED\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS90eXBlcy5qcz8wYzdmIl0sIm5hbWVzIjpbIk1PREFMX09QRU4iLCJFTVBMT1lFRV9TRUxFQ1RFRCIsIkVNUExPWUVFX0ZFVENIX1JFUVVFU1RFRCIsIkVNUExPWUVFX0ZFVENIX1NVQ0NFRURFRCIsIkVNUExPWUVFX0ZFVENIX0ZBSUxFRCIsIkVNUExPWUVFX0FERF9SRVFVRVNURUQiLCJFTVBMT1lFRV9BRERfU1VDQ0VFREVEIiwiRU1QTE9ZRUVfQUREX0ZBSUxFRCIsIkVNUExPWUVFX1VQREFURV9SRVFVRVNURUQiLCJFTVBMT1lFRV9VUERBVEVfU1VDQ0VFREVEIiwiRU1QTE9ZRUVfVVBEQVRFX0ZBSUxFRCIsIkVNUExPWUVFX0RFTEVURV9SRVFVRVNURUQiLCJFTVBMT1lFRV9ERUxFVEVfU1VDQ0VFREVEIiwiRU1QTE9ZRUVfREVMRVRFX0ZBSUxFRCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTUEsVUFBVSxHQUFHLFlBQW5CO0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRUEsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBRUEsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBQ0EsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBRUEsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBRUEsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CIiwiZmlsZSI6Ii4vc3RvcmUvdHlwZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgTU9EQUxfT1BFTiA9IFwiTU9EQUxfT1BFTlwiO1xuXG5leHBvcnQgY29uc3QgRU1QTE9ZRUVfU0VMRUNURUQgPSBcIkVNUExPWUVFX1NFTEVDVEVEXCI7XG5cbmV4cG9ydCBjb25zdCBFTVBMT1lFRV9GRVRDSF9SRVFVRVNURUQgPSBcIkVNUExPWUVFX0ZFVENIX1JFUVVFU1RFRFwiO1xuZXhwb3J0IGNvbnN0IEVNUExPWUVFX0ZFVENIX1NVQ0NFRURFRCA9IFwiRU1QTE9ZRUVfRkVUQ0hfU1VDQ0VFREVEXCI7XG5leHBvcnQgY29uc3QgRU1QTE9ZRUVfRkVUQ0hfRkFJTEVEID0gXCJFTVBMT1lFRV9GRVRDSF9GQUlMRURcIjtcblxuZXhwb3J0IGNvbnN0IEVNUExPWUVFX0FERF9SRVFVRVNURUQgPSBcIkVNUExPWUVFX0FERF9SRVFVRVNURURcIjtcbmV4cG9ydCBjb25zdCBFTVBMT1lFRV9BRERfU1VDQ0VFREVEID0gXCJFTVBMT1lFRV9BRERfU1VDQ0VFREVEXCI7XG5leHBvcnQgY29uc3QgRU1QTE9ZRUVfQUREX0ZBSUxFRCA9IFwiRU1QTE9ZRUVfQUREX0ZBSUxFRFwiO1xuXG5leHBvcnQgY29uc3QgRU1QTE9ZRUVfVVBEQVRFX1JFUVVFU1RFRCA9IFwiRU1QTE9ZRUVfVVBEQVRFX1JFUVVFU1RFRFwiO1xuZXhwb3J0IGNvbnN0IEVNUExPWUVFX1VQREFURV9TVUNDRUVERUQgPSBcIkVNUExPWUVFX1VQREFURV9TVUNDRUVERURcIjtcbmV4cG9ydCBjb25zdCBFTVBMT1lFRV9VUERBVEVfRkFJTEVEID0gXCJFTVBMT1lFRV9VUERBVEVfRkFJTEVEXCI7XG5cbmV4cG9ydCBjb25zdCBFTVBMT1lFRV9ERUxFVEVfUkVRVUVTVEVEID0gXCJFTVBMT1lFRV9ERUxFVEVfUkVRVUVTVEVEXCI7XG5leHBvcnQgY29uc3QgRU1QTE9ZRUVfREVMRVRFX1NVQ0NFRURFRCA9IFwiRU1QTE9ZRUVfREVMRVRFX1NVQ0NFRURFRFwiO1xuZXhwb3J0IGNvbnN0IEVNUExPWUVFX0RFTEVURV9GQUlMRUQgPSBcIkVNUExPWUVFX0RFTEVURV9GQUlMRURcIjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/types.js\n");

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9tYWluLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/main.scss\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIj8wMWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtd3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-wrapper\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCI/Mzg3YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWR1eC1zYWdhLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga\n");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga/effects\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIj80MGI3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LXNhZ2EvZWZmZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga/effects\n");

/***/ })

/******/ });