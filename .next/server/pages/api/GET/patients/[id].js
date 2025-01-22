"use strict";
(() => {
var exports = {};
exports.id = 37;
exports.ids = [37];
exports.modules = {

/***/ 9856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _libs_medical_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7966);
/* harmony import */ var _models_Patient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(635);
/* harmony import */ var _models_Patient__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_Patient__WEBPACK_IMPORTED_MODULE_1__);
 // Stelle sicher, dass der Pfad korrekt ist
 // Importiere das Patient-Modell
async function handler(req, res) {
    await (0,_libs_medical_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(); // Verbindung herstellen
    if (req.method === "PUT") {
        const { id  } = req.query;
        const { full_name , insurance , is_private , gender , birth_date , address , phoneNumber , email , emergency_contact ,  } = req.body;
        if (!id) {
            return res.status(400).json({
                error: "Patienten-ID ist erforderlich."
            });
        }
        try {
            // Prüfen, ob Patient existiert, und Daten aktualisieren
            const result = await _models_Patient__WEBPACK_IMPORTED_MODULE_1___default().findByIdAndUpdate(id, {
                full_name,
                insurance,
                is_private,
                gender,
                birth_date,
                address,
                phoneNumber,
                email,
                emergency_contact
            }, {
                new: true
            } // Rückgabe der aktualisierten Daten
            );
            if (!result) {
                return res.status(404).json({
                    error: "Patient nicht gefunden."
                });
            }
            res.status(200).json({
                message: "Patientendaten erfolgreich aktualisiert.",
                patient: result
            });
        } catch (err) {
            console.error("Fehler beim Aktualisieren:", err.message);
            res.status(500).json({
                error: "Interner Serverfehler."
            });
        }
    } else {
        res.setHeader("Allow", [
            "PUT"
        ]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
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
var __webpack_exports__ = __webpack_require__.X(0, [9840], () => (__webpack_exec__(9856)));
module.exports = __webpack_exports__;

})();