"use strict";
(() => {
var exports = {};
exports.id = 7401;
exports.ids = [7401];
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

/***/ 2727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _libs_medical_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7966);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6309);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_User__WEBPACK_IMPORTED_MODULE_1__);


async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method Not Allowed"
        });
    }
    const { code , token  } = req.body;
    try {
        await (0,_libs_medical_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
        const user = await _models_User__WEBPACK_IMPORTED_MODULE_1___default().findOne({
            verificationCode: code,
            verificationToken: token,
            expirationTime: {
                $gte: new Date()
            },
            isVerified: false
        });
        if (!user) {
            return res.status(400).json({
                error: "Ung\xfcltiger oder abgelaufener Code oder Token."
            });
        }
        await _models_User__WEBPACK_IMPORTED_MODULE_1___default().updateOne({
            _id: user._id
        }, {
            $set: {
                isVerified: true
            },
            $unset: {
                verificationCode: "",
                verificationToken: "",
                expirationTime: ""
            }
        });
        return res.status(200).json({
            message: "E-Mail erfolgreich verifiziert."
        });
    } catch (error) {
        console.error("Verifizierungsfehler:", error);
        return res.status(500).json({
            error: "Interner Serverfehler."
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
var __webpack_exports__ = __webpack_require__.X(0, [6309], () => (__webpack_exec__(2727)));
module.exports = __webpack_exports__;

})();