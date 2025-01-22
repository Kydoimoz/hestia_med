"use strict";
exports.id = 9840;
exports.ids = [9840];
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

/***/ 635:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const _interopRequireDefault = (__webpack_require__(4956)/* ["default"] */ .Z);
const _mongoose = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'mongoose'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
const patientSchema = new _mongoose.default.Schema({
    full_name: {
        type: String,
        required: true
    },
    insurance: {
        type: String,
        required: true
    },
    is_private: {
        type: String,
        required: true
    },
    birth_date: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    documents: {
        type: [
            _mongoose.default.Schema.Types.ObjectId
        ],
        ref: "MedicalDocument",
        default: []
    },
    email: {
        type: String,
        required: true,
        match: [
            /.+\@.+\..+/,
            "Please provide a valid email address."
        ]
    },
    emergency_contact: {
        type: String,
        required: true
    },
    practice: {
        type: _mongoose.default.Schema.Types.ObjectId,
        ref: "Practice",
        required: true
    }
}, {
    timestamps: true
});
const Patient = _mongoose.default.models.Patient || _mongoose.default.model("Patient", patientSchema);
module.exports = Patient;


/***/ })

};
;