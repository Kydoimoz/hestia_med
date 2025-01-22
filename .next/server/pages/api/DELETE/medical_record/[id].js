"use strict";
(() => {
var exports = {};
exports.id = 3187;
exports.ids = [3187,3748];
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

/***/ 1382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DELETE)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_medical_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7966);
/* harmony import */ var _models_MedicalDocument__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3164);
/* harmony import */ var _models_MedicalDocument__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_MedicalDocument__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1061);
/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_server__WEBPACK_IMPORTED_MODULE_3__);




async function DELETE(req) {
    try {
        // Verbindung zur Datenbank herstellen
        await (0,_libs_medical_db__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
        // Extrahieren der Parameter aus der URL
        const { id  } = req.query;
        console.log("DOCUKEMTN IDDD: ", id);
        console.log("ALL: ", req.query);
        // Überprüfen, ob die erforderlichen IDs vorhanden sind
        if (!id) {
            return next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse.json({
                message: "Patient ID und Dokument ID fehlen."
            }, {
                status: 400
            });
        }
        // Löschen des Dokuments, das sowohl die Patient-ID als auch die Dokument-ID hat
        const result = await _models_MedicalDocument__WEBPACK_IMPORTED_MODULE_2___default().findOneAndDelete({
            _id: id
        });
        // Überprüfen, ob das Dokument gelöscht wurde
        if (!result) {
            return next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse.json({
                message: "Kein Dokument gefunden, das gel\xf6scht werden kann."
            }, {
                status: 404
            });
        }
        return {
            status: 200,
            body: {
                message: "User deleted successfully"
            }
        };
    } catch (err) {
        console.error("Fehler beim L\xf6schen des Dokuments: ", err);
        return next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse.json({
            message: "Internal Server Error."
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
var __webpack_exports__ = __webpack_require__.X(0, [3475], () => (__webpack_exec__(1382)));
module.exports = __webpack_exports__;

})();