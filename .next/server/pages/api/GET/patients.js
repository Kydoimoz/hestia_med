"use strict";
(() => {
var exports = {};
exports.id = 443;
exports.ids = [443];
exports.modules = {

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 7189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'next-auth/next'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _libs_medical_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7966);
/* harmony import */ var _models_Patient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(635);
/* harmony import */ var _models_Patient__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_Patient__WEBPACK_IMPORTED_MODULE_2__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'mongoose'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'next-auth/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _auth_nextauth___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5222);
"use client";






async function handler(req, res) {
    if (req.method === "GET") {
        try {
            await (0,_libs_medical_db__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
            const practice_id = req.query.practice_id;
            console.log(practice_id);
            const patients = await _models_Patient__WEBPACK_IMPORTED_MODULE_2___default().find({
                practice: practice_id
            }).sort({
                createdAt: "asc"
            });
            console.log(patients);
            res.status(200).json(patients);
        } catch (err) {
            console.error("Fehler beim Abrufen der Patienten:", err);
            res.status(500).json({
                message: "Interner Serverfehler"
            });
        }
    } else {
        res.status(405).json({
            message: `Methode ${req.method} nicht erlaubt`
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6309,9840,5222], () => (__webpack_exec__(7189)));
module.exports = __webpack_exports__;

})();