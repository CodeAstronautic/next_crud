module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/employees/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./models/Employee.js":
/*!****************************!*\
  !*** ./models/Employee.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst EmployeeSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    required: [true, \"Name is required!\"],\n    trim: true\n  },\n  email: {\n    type: String,\n    required: [true, \"Email is required!\"],\n    trim: true\n  },\n  address: {\n    type: String,\n    required: [true, \"Address is required!\"],\n    trim: true\n  },\n  phone: {\n    type: String,\n    required: [true, \"Phone is required!\"],\n    trim: true\n  },\n  createdAt: {\n    type: Date,\n    default: Date.now\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Employee || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model(\"Employee\", EmployeeSchema));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvRW1wbG95ZWUuanM/N2Q0ZiJdLCJuYW1lcyI6WyJFbXBsb3llZVNjaGVtYSIsIm1vbmdvb3NlIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInRyaW0iLCJlbWFpbCIsImFkZHJlc3MiLCJwaG9uZSIsImNyZWF0ZWRBdCIsIkRhdGUiLCJkZWZhdWx0Iiwibm93IiwibW9kZWxzIiwiRW1wbG95ZWUiLCJtb2RlbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxjQUFjLEdBQUcsSUFBSUMsK0NBQVEsQ0FBQ0MsTUFBYixDQUFvQjtBQUMxQ0MsTUFBSSxFQUFFO0FBQ0xDLFFBQUksRUFBRUMsTUFERDtBQUVMQyxZQUFRLEVBQUUsQ0FBQyxJQUFELEVBQU8sbUJBQVAsQ0FGTDtBQUdMQyxRQUFJLEVBQUU7QUFIRCxHQURvQztBQU0xQ0MsT0FBSyxFQUFFO0FBQ05KLFFBQUksRUFBRUMsTUFEQTtBQUVOQyxZQUFRLEVBQUUsQ0FBQyxJQUFELEVBQU8sb0JBQVAsQ0FGSjtBQUdOQyxRQUFJLEVBQUU7QUFIQSxHQU5tQztBQVcxQ0UsU0FBTyxFQUFFO0FBQ1JMLFFBQUksRUFBRUMsTUFERTtBQUVSQyxZQUFRLEVBQUUsQ0FBQyxJQUFELEVBQU8sc0JBQVAsQ0FGRjtBQUdSQyxRQUFJLEVBQUU7QUFIRSxHQVhpQztBQWdCMUNHLE9BQUssRUFBRTtBQUNOTixRQUFJLEVBQUVDLE1BREE7QUFFTkMsWUFBUSxFQUFFLENBQUMsSUFBRCxFQUFPLG9CQUFQLENBRko7QUFHTkMsUUFBSSxFQUFFO0FBSEEsR0FoQm1DO0FBcUIxQ0ksV0FBUyxFQUFFO0FBQUVQLFFBQUksRUFBRVEsSUFBUjtBQUFjQyxXQUFPLEVBQUVELElBQUksQ0FBQ0U7QUFBNUI7QUFyQitCLENBQXBCLENBQXZCO0FBd0JlYiw4R0FBUSxDQUFDYyxNQUFULENBQWdCQyxRQUFoQixJQUNkZiwrQ0FBUSxDQUFDZ0IsS0FBVCxDQUFlLFVBQWYsRUFBMkJqQixjQUEzQixDQUREIiwiZmlsZSI6Ii4vbW9kZWxzL0VtcGxveWVlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBFbXBsb3llZVNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuXHRuYW1lOiB7XG5cdFx0dHlwZTogU3RyaW5nLFxuXHRcdHJlcXVpcmVkOiBbdHJ1ZSwgXCJOYW1lIGlzIHJlcXVpcmVkIVwiXSxcblx0XHR0cmltOiB0cnVlLFxuXHR9LFxuXHRlbWFpbDoge1xuXHRcdHR5cGU6IFN0cmluZyxcblx0XHRyZXF1aXJlZDogW3RydWUsIFwiRW1haWwgaXMgcmVxdWlyZWQhXCJdLFxuXHRcdHRyaW06IHRydWUsXG5cdH0sXG5cdGFkZHJlc3M6IHtcblx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0cmVxdWlyZWQ6IFt0cnVlLCBcIkFkZHJlc3MgaXMgcmVxdWlyZWQhXCJdLFxuXHRcdHRyaW06IHRydWUsXG5cdH0sXG5cdHBob25lOiB7XG5cdFx0dHlwZTogU3RyaW5nLFxuXHRcdHJlcXVpcmVkOiBbdHJ1ZSwgXCJQaG9uZSBpcyByZXF1aXJlZCFcIl0sXG5cdFx0dHJpbTogdHJ1ZSxcblx0fSxcblx0Y3JlYXRlZEF0OiB7IHR5cGU6IERhdGUsIGRlZmF1bHQ6IERhdGUubm93IH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLkVtcGxveWVlIHx8XG5cdG1vbmdvb3NlLm1vZGVsKFwiRW1wbG95ZWVcIiwgRW1wbG95ZWVTY2hlbWEpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./models/Employee.js\n");

/***/ }),

/***/ "./pages/api/employees/[id].js":
/*!*************************************!*\
  !*** ./pages/api/employees/[id].js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_Employee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/Employee */ \"./models/Employee.js\");\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/dbConnect */ \"./utils/dbConnect.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const {\n    query: {\n      id\n    },\n    method\n  } = req;\n\n  switch (method) {\n    case \"GET\":\n      try {\n        const employee = await _models_Employee__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id);\n        return res.status(200).json({\n          success: true,\n          data: employee\n        });\n      } catch (error) {\n        return res.status(404).json({\n          success: false\n        });\n      }\n\n    case \"PUT\":\n      try {\n        const employee = await _models_Employee__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(id, req.body, {\n          new: true,\n          runValidators: true\n        });\n        return res.status(200).json({\n          success: true,\n          data: employee\n        });\n      } catch (error) {\n        return res.status(400).json({\n          success: false\n        });\n      }\n\n    case \"DELETE\":\n      try {\n        await _models_Employee__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteOne({\n          _id: id\n        });\n        return res.status(200).json({\n          success: true,\n          data: {\n            id\n          }\n        });\n      } catch (error) {\n        return res.status(400).json({\n          success: false\n        });\n      }\n\n    default:\n      res.setHeaders(\"Allow\", [\"GET\", \"PUT\", \"DELETE\"]);\n      return res.status(405).json({\n        success: false\n      }).end(`Method ${method} Not Allowed`);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZW1wbG95ZWVzLy5qcz8yMGMyIl0sIm5hbWVzIjpbInJlcSIsInJlcyIsInF1ZXJ5IiwiaWQiLCJtZXRob2QiLCJlbXBsb3llZSIsIkVtcGxveWVlIiwiZmluZEJ5SWQiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsImRhdGEiLCJlcnJvciIsImZpbmRCeUlkQW5kVXBkYXRlIiwiYm9keSIsIm5ldyIsInJ1blZhbGlkYXRvcnMiLCJkZWxldGVPbmUiLCJfaWQiLCJzZXRIZWFkZXJzIiwiZW5kIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRWUsc0VBQU9BLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNsQyxRQUFNO0FBQ0xDLFNBQUssRUFBRTtBQUFFQztBQUFGLEtBREY7QUFFTEM7QUFGSyxNQUdGSixHQUhKOztBQUtBLFVBQVFJLE1BQVI7QUFDQyxTQUFLLEtBQUw7QUFDQyxVQUFJO0FBQ0gsY0FBTUMsUUFBUSxHQUFHLE1BQU1DLHdEQUFRLENBQUNDLFFBQVQsQ0FBa0JKLEVBQWxCLENBQXZCO0FBRUEsZUFBT0YsR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDM0JDLGlCQUFPLEVBQUUsSUFEa0I7QUFFM0JDLGNBQUksRUFBRU47QUFGcUIsU0FBckIsQ0FBUDtBQUlBLE9BUEQsQ0FPRSxPQUFPTyxLQUFQLEVBQWM7QUFDZixlQUFPWCxHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUMzQkMsaUJBQU8sRUFBRTtBQURrQixTQUFyQixDQUFQO0FBR0E7O0FBQ0YsU0FBSyxLQUFMO0FBQ0MsVUFBSTtBQUNILGNBQU1MLFFBQVEsR0FBRyxNQUFNQyx3REFBUSxDQUFDTyxpQkFBVCxDQUEyQlYsRUFBM0IsRUFBK0JILEdBQUcsQ0FBQ2MsSUFBbkMsRUFBeUM7QUFDL0RDLGFBQUcsRUFBRSxJQUQwRDtBQUUvREMsdUJBQWEsRUFBRTtBQUZnRCxTQUF6QyxDQUF2QjtBQUtBLGVBQU9mLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQzNCQyxpQkFBTyxFQUFFLElBRGtCO0FBRTNCQyxjQUFJLEVBQUVOO0FBRnFCLFNBQXJCLENBQVA7QUFJQSxPQVZELENBVUUsT0FBT08sS0FBUCxFQUFjO0FBQ2YsZUFBT1gsR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDM0JDLGlCQUFPLEVBQUU7QUFEa0IsU0FBckIsQ0FBUDtBQUdBOztBQUNGLFNBQUssUUFBTDtBQUNDLFVBQUk7QUFDSCxjQUFNSix3REFBUSxDQUFDVyxTQUFULENBQW1CO0FBQUVDLGFBQUcsRUFBRWY7QUFBUCxTQUFuQixDQUFOO0FBRUEsZUFBT0YsR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDM0JDLGlCQUFPLEVBQUUsSUFEa0I7QUFFM0JDLGNBQUksRUFBRTtBQUFFUjtBQUFGO0FBRnFCLFNBQXJCLENBQVA7QUFJQSxPQVBELENBT0UsT0FBT1MsS0FBUCxFQUFjO0FBQ2YsZUFBT1gsR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDM0JDLGlCQUFPLEVBQUU7QUFEa0IsU0FBckIsQ0FBUDtBQUdBOztBQUNGO0FBQ0NULFNBQUcsQ0FBQ2tCLFVBQUosQ0FBZSxPQUFmLEVBQXdCLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxRQUFmLENBQXhCO0FBQ0EsYUFBT2xCLEdBQUcsQ0FDUk8sTUFESyxDQUNFLEdBREYsRUFFTEMsSUFGSyxDQUVBO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BRkEsRUFHTFUsR0FISyxDQUdBLFVBQVNoQixNQUFPLGNBSGhCLENBQVA7QUE3Q0Y7QUFrREEsQ0F4REQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvZW1wbG95ZWVzL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRW1wbG95ZWUgZnJvbSBcIkAvbW9kZWxzL0VtcGxveWVlXCI7XG5pbXBvcnQgXCJAL3V0aWxzL2RiQ29ubmVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcblx0Y29uc3Qge1xuXHRcdHF1ZXJ5OiB7IGlkIH0sXG5cdFx0bWV0aG9kLFxuXHR9ID0gcmVxO1xuXG5cdHN3aXRjaCAobWV0aG9kKSB7XG5cdFx0Y2FzZSBcIkdFVFwiOlxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgZW1wbG95ZWUgPSBhd2FpdCBFbXBsb3llZS5maW5kQnlJZChpZCk7XG5cblx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcblx0XHRcdFx0XHRzdWNjZXNzOiB0cnVlLFxuXHRcdFx0XHRcdGRhdGE6IGVtcGxveWVlLFxuXHRcdFx0XHR9KTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7XG5cdFx0XHRcdFx0c3VjY2VzczogZmFsc2UsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdGNhc2UgXCJQVVRcIjpcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IGVtcGxveWVlID0gYXdhaXQgRW1wbG95ZWUuZmluZEJ5SWRBbmRVcGRhdGUoaWQsIHJlcS5ib2R5LCB7XG5cdFx0XHRcdFx0bmV3OiB0cnVlLFxuXHRcdFx0XHRcdHJ1blZhbGlkYXRvcnM6IHRydWUsXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XG5cdFx0XHRcdFx0c3VjY2VzczogdHJ1ZSxcblx0XHRcdFx0XHRkYXRhOiBlbXBsb3llZSxcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe1xuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZhbHNlLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRjYXNlIFwiREVMRVRFXCI6XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBFbXBsb3llZS5kZWxldGVPbmUoeyBfaWQ6IGlkIH0pO1xuXG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XG5cdFx0XHRcdFx0c3VjY2VzczogdHJ1ZSxcblx0XHRcdFx0XHRkYXRhOiB7IGlkIH0sXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtcblx0XHRcdFx0XHRzdWNjZXNzOiBmYWxzZSxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJlcy5zZXRIZWFkZXJzKFwiQWxsb3dcIiwgW1wiR0VUXCIsIFwiUFVUXCIsIFwiREVMRVRFXCJdKTtcblx0XHRcdHJldHVybiByZXNcblx0XHRcdFx0LnN0YXR1cyg0MDUpXG5cdFx0XHRcdC5qc29uKHsgc3VjY2VzczogZmFsc2UgfSlcblx0XHRcdFx0LmVuZChgTWV0aG9kICR7bWV0aG9kfSBOb3QgQWxsb3dlZGApO1xuXHR9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/employees/[id].js\n");

/***/ }),

/***/ "./utils/dbConnect.js":
/*!****************************!*\
  !*** ./utils/dbConnect.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\n\n(async function dbConnect() {\n  if (connection.isConnected) {\n    return;\n  }\n\n  try {\n    const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(\"mongodb+srv://PM:OQoRqlb9TKTRzxRz@cluster0.hawin.mongodb.net/next_demo?retryWrites=true&w=majority\", {\n      useNewUrlParser: true,\n      useUnifiedTopology: true,\n      useCreateIndex: true,\n      useFindAndModify: false\n    });\n    connection.isConnected = db.connections[0].readyState;\n    console.log(\"MongoDB Connected\");\n  } catch (error) {\n    console.log(error);\n  }\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9kYkNvbm5lY3QuanM/NDZlMiJdLCJuYW1lcyI6WyJjb25uZWN0aW9uIiwiZGJDb25uZWN0IiwiaXNDb25uZWN0ZWQiLCJkYiIsIm1vbmdvb3NlIiwiY29ubmVjdCIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsInVzZUNyZWF0ZUluZGV4IiwidXNlRmluZEFuZE1vZGlmeSIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxVQUFVLEdBQUcsRUFBbkI7O0FBRUEsQ0FBQyxlQUFlQyxTQUFmLEdBQTJCO0FBQzNCLE1BQUlELFVBQVUsQ0FBQ0UsV0FBZixFQUE0QjtBQUMzQjtBQUNBOztBQUVELE1BQUk7QUFDSCxVQUFNQyxFQUFFLEdBQUcsTUFBTUMsK0NBQVEsQ0FBQ0MsT0FBVCxDQUFpQixvR0FBakIsRUFBdUg7QUFDdklDLHFCQUFlLEVBQUUsSUFEc0g7QUFFdklDLHdCQUFrQixFQUFFLElBRm1IO0FBR3ZJQyxvQkFBYyxFQUFFLElBSHVIO0FBSXZJQyxzQkFBZ0IsRUFBRTtBQUpxSCxLQUF2SCxDQUFqQjtBQU9BVCxjQUFVLENBQUNFLFdBQVgsR0FBeUJDLEVBQUUsQ0FBQ08sV0FBSCxDQUFlLENBQWYsRUFBa0JDLFVBQTNDO0FBRUFDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBQ0EsR0FYRCxDQVdFLE9BQU9DLEtBQVAsRUFBYztBQUNmRixXQUFPLENBQUNDLEdBQVIsQ0FBWUMsS0FBWjtBQUNBO0FBQ0QsQ0FuQkQiLCJmaWxlIjoiLi91dGlscy9kYkNvbm5lY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IGNvbm5lY3Rpb24gPSB7fTtcblxuKGFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpIHtcblx0aWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR0cnkge1xuXHRcdGNvbnN0IGRiID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChcIm1vbmdvZGIrc3J2Oi8vUE06T1FvUnFsYjlUS1RSenhSekBjbHVzdGVyMC5oYXdpbi5tb25nb2RiLm5ldC9uZXh0X2RlbW8/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCIsIHtcblx0XHRcdHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcblx0XHRcdHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcblx0XHRcdHVzZUNyZWF0ZUluZGV4OiB0cnVlLFxuXHRcdFx0dXNlRmluZEFuZE1vZGlmeTogZmFsc2UsXG5cdFx0fSk7XG5cblx0XHRjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gZGIuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZTtcblxuXHRcdGNvbnNvbGUubG9nKFwiTW9uZ29EQiBDb25uZWN0ZWRcIik7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHR9XG59KSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/dbConnect.js\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ })

/******/ });