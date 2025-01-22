"use strict";
(() => {
var exports = {};
exports.id = 749;
exports.ids = [749];
exports.modules = {

/***/ 7966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'mongoose'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

/**
 * 
 * @async
 * @returns {Promise<void>}
 * @throws {Error} 
 */ const connectDB = async ()=>{
    try {
        await Object(function webpackMissingModule() { var e = new Error("Cannot find module 'mongoose'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Erfolgreich mit der MongoDB-Datenbank verbunden.");
    } catch (err) {
        console.error(`Fehler beim Verbinden mit der MongoDB-Datenbank: ${err.message}`);
        console.error("Stack-Trace: ", err.stack);
        throw new Error("Verbindung zur MongoDB fehlgeschlagen.");
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);


/***/ }),

/***/ 8028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchUpdatedUserData": () => (/* binding */ fetchUpdatedUserData)
/* harmony export */ });
/* harmony import */ var _libs_medical_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7966);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6309);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_User__WEBPACK_IMPORTED_MODULE_1__);


async function fetchUpdatedUserData(userID) {
    try {
        // Verbindung zur DB herstellen
        await (0,_libs_medical_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
        // Benutzer basierend auf der ID abrufen und sicherstellen, dass die Practice auch mitgeliefert wird
        const updatedUser = await _models_User__WEBPACK_IMPORTED_MODULE_1___default().findById(userID).populate("practice");
        // Falls kein Benutzer gefunden wurde, Fehler werfen
        if (!updatedUser) {
            throw new Error("Benutzer nicht gefunden");
        }
        return updatedUser;
    } catch (error) {
        console.error("Fehler beim Abrufen der Benutzerdaten:", error);
        throw new Error("Fehler beim Abrufen der Benutzerdaten");
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6309], () => (__webpack_exec__(8028)));
module.exports = __webpack_exports__;

})();