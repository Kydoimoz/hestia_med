"use strict";
exports.id = 1957;
exports.ids = [1957];
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

/***/ 1911:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const _interopRequireDefault = (__webpack_require__(4956)/* ["default"] */ .Z);
const _mongoose = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'mongoose'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
const staff_roles = new _mongoose.default.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        required: true,
        enum: [
            "Doctor",
            "Nurse",
            "Administration"
        ],
        trim: true
    },
    department: {
        type: String,
        required: true,
        trim: true
    },
    contactInfo: {
        phone: {
            type: String,
            required: true,
            match: [
                /\+?[1-9]\d{1,14}$/,
                "Please enter a valid phone number."
            ]
        },
        email: {
            type: String,
            required: true,
            match: [
                /.+\@.+\..+/,
                "Please enter a valid email address."
            ]
        }
    },
    hireDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: [
            "Active",
            "Inactive",
            "On Leave"
        ],
        default: "Active"
    },
    qualifications: {
        degree: {
            type: String,
            required: true,
            trim: true
        },
        institution: {
            type: String,
            required: true,
            trim: true
        },
        yearOfCompletion: {
            type: Number,
            required: true
        }
    },
    emergencyContact: {
        name: {
            type: String,
            required: true
        },
        relationship: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        }
    }
}, {
    timestamps: true
});
const StaffRoles = _mongoose.default.models.StaffRoles || _mongoose.default.model("StaffRoles", staff_roles);
module.exports = StaffRoles;


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