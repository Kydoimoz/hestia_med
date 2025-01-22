"use strict";
(() => {
var exports = {};
exports.id = 8235;
exports.ids = [8235];
exports.modules = {

/***/ 9558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6309);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_models_User__WEBPACK_IMPORTED_MODULE_0__);

async function fetchUpdatedUserData(userId) {
    try {
        const updatedUser = await User.findById(userId);
        if (!updatedUser) {
            throw new Error("User not found");
        }
        return updatedUser;
    } catch (error) {
        console.error("Error fetching updated user data:", error);
        throw error;
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6309], () => (__webpack_exec__(9558)));
module.exports = __webpack_exports__;

})();