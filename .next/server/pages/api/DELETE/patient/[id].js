"use strict";
(() => {
var exports = {};
exports.id = 7872;
exports.ids = [7872];
exports.modules = {

/***/ 8267:
/***/ ((module) => {

module.exports = require("next/dist/server/web/error.js");

/***/ }),

/***/ 9728:
/***/ ((module) => {

module.exports = require("next/dist/server/web/next-url.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/server/web/spec-extension/cookies.js");

/***/ }),

/***/ 7727:
/***/ ((module) => {

module.exports = require("next/dist/server/web/utils.js");

/***/ }),

/***/ 8116:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const _interopRequireDefault = (__webpack_require__(4956)/* ["default"] */ .Z);
const _mongoose = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'mongoose'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
const appointment_schema = new _mongoose.default.Schema({
    patientId: {
        type: _mongoose.default.Schema.Types.ObjectId,
        ref: "Patient",
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    purpose: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
const Appointment = _mongoose.default.models.Appointment || _mongoose.default.model("Appointment", appointment_schema);
module.exports = Appointment;


/***/ }),

/***/ 1253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DELETE)
/* harmony export */ });
/* harmony import */ var _libs_medical_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7966);
/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1061);
/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_Patient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(635);
/* harmony import */ var _models_Patient__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_Patient__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_Appointment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8116);
/* harmony import */ var _models_Appointment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_models_Appointment__WEBPACK_IMPORTED_MODULE_3__);




async function DELETE(req) {
    try {
        // Verbindung zur Datenbank herstellen
        await (0,_libs_medical_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
        // Extrahieren der Parameter aus der URL
        const { id  } = req.query;
        console.log("Patient ID: ", id);
        // Überprüfen, ob die ID vorhanden ist
        if (!id) {
            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({
                message: "Patient ID fehlt."
            }, {
                status: 400
            });
        }
        // Suchen und Löschen des Patienten
        const patient = await _models_Patient__WEBPACK_IMPORTED_MODULE_2___default().findByIdAndDelete(id);
        if (!patient) {
            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({
                message: "Kein Patient gefunden, der gel\xf6scht werden kann."
            }, {
                status: 404
            });
        }
        // Suchen und Löschen aller Termine, die mit diesem Patienten verbunden sind
        const deletedAppointments = await _models_Appointment__WEBPACK_IMPORTED_MODULE_3___default().deleteMany({
            patientId: id
        });
        console.log(`Patient mit ID ${id} wurde gelöscht. Gelöschte Termine: ${deletedAppointments.deletedCount}`);
        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({
            message: "Patient und zugeh\xf6rige Termine erfolgreich gel\xf6scht.",
            deletedAppointmentsCount: deletedAppointments.deletedCount
        }, {
            status: 200
        });
    } catch (err) {
        console.error("Fehler beim L\xf6schen des Patienten oder der Termine: ", err);
        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({
            message: "Interner Serverfehler."
        }, {
            status: 500
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3475,9840], () => (__webpack_exec__(1253)));
module.exports = __webpack_exports__;

})();