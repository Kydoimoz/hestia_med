"use strict";
(() => {
var exports = {};
exports.id = 9844;
exports.ids = [9844];
exports.modules = {

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 4444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'mongoose'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _libs_medical_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7966);
/* harmony import */ var _models_Patient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(635);
/* harmony import */ var _models_Patient__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_models_Patient__WEBPACK_IMPORTED_MODULE_3__);




async function handler(req, res) {
    res.setHeader("Content-Type", "application/json");
    try {
        await (0,_libs_medical_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
        const { id  } = req.query;
        console.log("Received request for user with ID:", id);
        if (!id || !Object(function webpackMissingModule() { var e = new Error("Cannot find module 'mongoose'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(id)) {
            return res.status(400).json({
                message: "Invalid ID format"
            });
        }
        if (!id) {
            return res.status(400).json({
                error: "Missing user ID"
            });
        }
        const user = await _models_Patient__WEBPACK_IMPORTED_MODULE_3___default().findOne({
            _id: id
        });
        console.log(user);
        if (!user) {
            console.log("Patient not found in MongoDB for ID:", id);
            return res.status(404).json({
                error: "Patient not found in MongoDB"
            });
        }
        return res.status(200).json(user);
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({
            error: `Internal Server Error: ${error.message}`
        });
    }
}


/***/ }),

/***/ 4956:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = _interopRequireDefault;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9840], () => (__webpack_exec__(4444)));
module.exports = __webpack_exports__;

})();