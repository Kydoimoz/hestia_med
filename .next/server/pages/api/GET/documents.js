"use strict";
(() => {
var exports = {};
exports.id = 9951;
exports.ids = [9951];
exports.modules = {

/***/ 3164:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const _interopRequireDefault = (__webpack_require__(4956)/* ["default"] */ .Z);
const _mongoose = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'mongoose'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
const medical_document = new _mongoose.default.Schema({
    type: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    author: {
        type: String,
        required: false
    },
    data: {
        type: _mongoose.default.Schema.Types.Mixed,
        required: true
    }
}, {
    timestamps: true
});
const MedicalDocument = _mongoose.default.models.MedicalDocument || _mongoose.default.model("MedicalDocument", medical_document);
module.exports = MedicalDocument;


/***/ }),

/***/ 5073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _libs_medical_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7966);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6309);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_User__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_Patient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(635);
/* harmony import */ var _models_Patient__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_Patient__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_MedicalDocument__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3164);
/* harmony import */ var _models_MedicalDocument__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_models_MedicalDocument__WEBPACK_IMPORTED_MODULE_3__);




async function handler(req, res) {
    if (req.method === "GET") {
        try {
            await (0,_libs_medical_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
            const { patient_id  } = req.query;
            console.log(patient_id);
            if (!patient_id) {
                return res.status(400).json({
                    message: "Patient ID is required"
                });
            }
            const patient = await _models_Patient__WEBPACK_IMPORTED_MODULE_2___default().findById(patient_id);
            console.log("PATIENT ", patient);
            if (!patient) {
                return res.status(404).json({
                    message: "Patient not found"
                });
            }
            const documents = await _models_MedicalDocument__WEBPACK_IMPORTED_MODULE_3___default().find({
                _id: {
                    $in: patient.documents
                }
            });
            console.log("Documents ", documents);
            res.status(200).json(documents);
        } catch (err) {
            console.error(err.message);
            res.status(500).json({
                message: "Error fetching documents"
            });
        }
    } else {
        res.status(405).json({
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
var __webpack_exports__ = __webpack_require__.X(0, [6309,9840], () => (__webpack_exec__(5073)));
module.exports = __webpack_exports__;

})();