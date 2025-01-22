"use strict";
(() => {
var exports = {};
exports.id = 363;
exports.ids = [363];
exports.modules = {

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_medical_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7966);
/* harmony import */ var _models_Patient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(635);
/* harmony import */ var _models_Patient__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_Patient__WEBPACK_IMPORTED_MODULE_2__);



async function handler(req, res) {
    if (req.method === "POST") {
        const { full_name , insurance , is_private , birth_date , gender , address , phoneNumber , email , emergency_contact , practice  } = req.body;
        try {
            await (0,_libs_medical_db__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
            if (req.body) {
                const patient = await _models_Patient__WEBPACK_IMPORTED_MODULE_2___default().create({
                    full_name,
                    insurance,
                    is_private,
                    birth_date,
                    gender,
                    address,
                    phoneNumber,
                    email,
                    emergency_contact,
                    practice,
                    documents: [],
                    appointments: []
                });
                res.status(201).json({
                    message: "Patient erfolgreich hinzugef\xfcgt.",
                    patient: patient
                });
            }
        } catch (err) {
            console.error("Fehler beim Erstellen eines Patienten:", err);
            res.status(500).json({
                message: "Interner Serverfehler."
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
var __webpack_exports__ = __webpack_require__.X(0, [9840], () => (__webpack_exec__(1961)));
module.exports = __webpack_exports__;

})();