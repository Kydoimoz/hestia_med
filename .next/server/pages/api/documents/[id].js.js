"use strict";
(() => {
var exports = {};
exports.id = 3677;
exports.ids = [3677];
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

/***/ 4078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _libs_medical_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7966);
/* harmony import */ var _models_MedicalDocument__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3164);
/* harmony import */ var _models_MedicalDocument__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_MedicalDocument__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_Patient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(635);
/* harmony import */ var _models_Patient__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_Patient__WEBPACK_IMPORTED_MODULE_2__);



async function handler(req, res) {
    const { method  } = req;
    const { patientId  } = req.query;
    await (0,_libs_medical_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    if (method === "POST") {
        try {
            const { type , title , author , data  } = req.body;
            // Überprüfe, ob alle erforderlichen Felder vorhanden sind
            if (!type || !title || !data) {
                return res.status(400).json({
                    error: "Missing required fields: type, title, or data"
                });
            }
            // Neues Medical Document erstellen
            const medicalDocument = new (_models_MedicalDocument__WEBPACK_IMPORTED_MODULE_1___default())({
                type,
                title,
                author: author || "Unknown",
                data
            });
            const savedDocument = await medicalDocument.save();
            // Füge das Dokument dem Patienten hinzu
            const patient = await _models_Patient__WEBPACK_IMPORTED_MODULE_2___default().findById(patientId);
            if (!patient) {
                return res.status(404).json({
                    error: "Patient not found"
                });
            }
            patient.documents.push(savedDocument._id);
            await patient.save();
            res.status(201).json({
                message: "Document added successfully",
                document: savedDocument
            });
        } catch (error) {
            console.error("Error saving medical document:", error);
            res.status(500).json({
                error: "Internal Server Error"
            });
        }
    } else {
        res.setHeader("Allow", [
            "POST"
        ]);
        res.status(405).end(`Method ${method} Not Allowed`);
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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9840], () => (__webpack_exec__(4078)));
module.exports = __webpack_exports__;

})();