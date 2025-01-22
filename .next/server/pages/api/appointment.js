"use strict";
(() => {
var exports = {};
exports.id = 2556;
exports.ids = [2556];
exports.modules = {

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

/***/ 2124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _libs_medical_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7966);
/* harmony import */ var _models_Appointment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8116);
/* harmony import */ var _models_Appointment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_Appointment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_Patient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(635);
/* harmony import */ var _models_Patient__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_Patient__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_Practice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(626);




async function handler(req, res) {
    if (req.method === "POST") {
        const { patientId , startTime , endTime , purpose  } = req.body;
        console.log("Empfangene Daten:", {
            patientId,
            startTime,
            endTime,
            purpose
        });
        try {
            // Verbinde mit der Datenbank
            await (0,_libs_medical_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
            // Validierung der Eingabedaten
            if (!patientId || !startTime || !endTime || !purpose) {
                return res.status(400).json({
                    message: "Alle Felder (patientId, startTime, endTime, purpose) sind erforderlich."
                });
            }
            if (new Date(startTime) >= new Date(endTime)) {
                return res.status(400).json({
                    message: "Startzeit muss vor der Endzeit liegen."
                });
            }
            // Überprüfe, ob der Patient existiert
            const patient = await _models_Patient__WEBPACK_IMPORTED_MODULE_2___default().findById(patientId);
            if (!patient) {
                return res.status(404).json({
                    message: "Patient nicht gefunden."
                });
            }
            console.log("Patient wurde gefunden");
            // Erstelle einen neuen Termin
            const newAppointment = new (_models_Appointment__WEBPACK_IMPORTED_MODULE_1___default())({
                patientId: patientId,
                startTime: new Date(startTime).toISOString(),
                endTime: new Date(endTime).toISOString(),
                purpose: purpose.trim()
            });
            console.log("Neuer Appointment wurde erstellt");
            // Speichere den Termin in der Datenbank
            const savedAppointment = await newAppointment.save();
            console.log("Neuer Appointment wurde gespeichert");
            // Verknüpfe den Termin mit der Praxis, falls benötigt
            // (Optional: Falls der Termin auch in der Praxis gespeichert werden muss)
            if (patient.practice) {
                await _models_Practice__WEBPACK_IMPORTED_MODULE_3__/* ["default"].findByIdAndUpdate */ .Z.findByIdAndUpdate(patient.practice, {
                    $push: {
                        appointments: savedAppointment._id
                    }
                });
            }
            // Rückgabe der Antwort
            res.status(201).json({
                message: "Termin erfolgreich hinzugef\xfcgt.",
                appointment: savedAppointment
            });
        } catch (err) {
            console.error("Fehler beim Erstellen eines Termins:", err);
            res.status(500).json({
                message: "Interner Serverfehler."
            });
        }
    } else if (req.method === "GET") {
        try {
            // Mit der DB verbinden
            await (0,_libs_medical_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
            // Alle Termine abrufen
            const appointments = await _models_Appointment__WEBPACK_IMPORTED_MODULE_1___default().find().populate("patientId"); // Verknüpfung mit Patient-Modell
            res.status(200).json({
                appointments
            }); // Rückgabe der Termine
        } catch (err1) {
            console.error("Fehler beim Abrufen der Termine:", err1);
            res.status(500).json({
                message: "Interner Serverfehler"
            });
        }
    } else {
        res.setHeader("Allow", [
            "POST"
        ]);
        res.status(405).json({
            message: `Methode ${req.method} nicht erlaubt.`
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
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9840], () => (__webpack_exec__(2124)));
module.exports = __webpack_exports__;

})();