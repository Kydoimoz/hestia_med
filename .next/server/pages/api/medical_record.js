"use strict";
(() => {
var exports = {};
exports.id = 9950;
exports.ids = [9950];
exports.modules = {

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

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

/***/ 2757:
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
/* harmony import */ var _models_MedicalDocument__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3164);
/* harmony import */ var _models_MedicalDocument__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_models_MedicalDocument__WEBPACK_IMPORTED_MODULE_3__);




async function handler(req, res) {
    res.setHeader("Content-Type", "application/json");
    if (req.method === "POST") {
        try {
            await (0,_libs_medical_db__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
            const documentData = req.body;
            console.log(req.body);
            console.log(documentData);
            const newDocument = new (_models_MedicalDocument__WEBPACK_IMPORTED_MODULE_3___default())({
                type: documentData.type,
                title: documentData.title,
                author: documentData.author,
                data: documentData.data
            });
            const savedDocument = await newDocument.save();
            if (!savedDocument) {
                return res.status(500).json({
                    message: "Dokument konnte nicht gespeichert werden."
                });
            }
            const updatedPatient = await _models_Patient__WEBPACK_IMPORTED_MODULE_2___default().findByIdAndUpdate(documentData.patientId, {
                $push: {
                    documents: savedDocument._id
                }
            }, {
                new: true
            });
            if (!updatedPatient) {
                return res.status(404).json({
                    message: "Patient nicht gefunden."
                });
            }
            console.log("Patient aktualisiert:", updatedPatient);
            return res.status(200).json(updatedPatient);
        } catch (err) {
            console.error(err.message);
            return res.status(500).json({
                message: "Internal Server Error",
                error: err.message
            });
        }
    } else {
        return res.status(405).json({
            message: "Method Not Allowed"
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
var __webpack_exports__ = __webpack_require__.X(0, [9840], () => (__webpack_exec__(2757)));
module.exports = __webpack_exports__;

})();