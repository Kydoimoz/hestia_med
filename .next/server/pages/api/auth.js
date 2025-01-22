"use strict";
(() => {
var exports = {};
exports.id = 2508;
exports.ids = [2508];
exports.modules = {

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6309);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_User__WEBPACK_IMPORTED_MODULE_1__);


const queryData = async (email)=>{
    try {
        const user = await _models_User__WEBPACK_IMPORTED_MODULE_1___default().findOne({
            email
        });
        if (user) {
            const { first_name , surname  } = user;
            console.log("User Info from queryData:", {
                first_name,
                surname
            });
            return Promise.resolve({
                first_name,
                surname
            });
        }
        return Promise.resolve({});
    } catch (err) {
        console.error("Error in queryData:", err);
        return Promise.resolve({});
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (queryData);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6309], () => (__webpack_exec__(9590)));
module.exports = __webpack_exports__;

})();