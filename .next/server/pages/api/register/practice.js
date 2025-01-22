"use strict";
(() => {
var exports = {};
exports.id = 567;
exports.ids = [567];
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

/***/ 626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'mongoose'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

const practiceSchema = new Object(function webpackMissingModule() { var e = new Error("Cannot find module 'mongoose'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    name: {
        type: String,
        required: true,
        unique: true
    },
    practice_address: {
        type: String,
        required: true
    },
    practice_phoneNumber: {
        type: String,
        required: true
    },
    appointments: {
        type: [
            Object(function webpackMissingModule() { var e = new Error("Cannot find module 'mongoose'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        ],
        ref: "Appointment",
        default: []
    }
});
const Practice = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'mongoose'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) || Object(function webpackMissingModule() { var e = new Error("Cannot find module 'mongoose'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("Practice", practiceSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Practice);


/***/ }),

/***/ 4849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _libs_medical_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7966);
/* harmony import */ var _models_Practice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(626);


async function handler(req, res) {
    if (req.method === "POST") {
        try {
            await (0,_libs_medical_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
            const { practice_name , practice_address , practice_phoneNumber  } = req.body;
            console.log(practice_name, practice_address, practice_phoneNumber);
            let _practice = await _models_Practice__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findOne */ .Z.findOne({
                name: practice_name
            });
            console.log(_practice);
            if (_practice) {
                console.log("Praxis existiert bereits");
                return res.status(400).json({
                    message: "Praxis existiert bereits"
                });
            }
            // Erstelle eine neue Praxis
            _practice = new _models_Practice__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z({
                name: practice_name,
                practice_address: practice_address,
                practice_phoneNumber: practice_phoneNumber
            });
            // Logge die Daten, die gespeichert werden
            console.log("Daten zum Speichern:", _practice);
            // Speichere die Praxis
            await _practice.save();
            return res.status(201).json({
                _practice
            });
        } catch (err) {
            console.error("Fehler beim Erstellen der Praxis:", err);
            return res.status(500).json({
                message: "Fehler beim Erstellen der Praxis"
            });
        }
    } else {
        return res.status(405).json({
            message: "Method Not Allowed"
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
var __webpack_exports__ = (__webpack_exec__(4849));
module.exports = __webpack_exports__;

})();