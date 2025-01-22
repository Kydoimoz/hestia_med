"use strict";
(() => {
var exports = {};
exports.id = 3748;
exports.ids = [3748];
exports.modules = {

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

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


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6309,5222], () => (__webpack_exec__(5222)));
module.exports = __webpack_exports__;

})();