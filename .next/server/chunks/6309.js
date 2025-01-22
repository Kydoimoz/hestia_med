"use strict";
exports.id = 6309;
exports.ids = [6309];
exports.modules = {

/***/ 6309:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const _interopRequireDefault = (__webpack_require__(4956)/* ["default"] */ .Z);
const _mongoose = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'mongoose'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
const user_schema = new _mongoose.default.Schema({
    practice: {
        type: _mongoose.default.Schema.Types.ObjectId,
        ref: "Practice",
        required: true
    },
    title: {
        type: String,
        required: false
    },
    first_name: {
        type: String,
        required: true
    },
    surname: {
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
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
            /.+\@.+\..+/,
            "Please provide a valid email address."
        ]
    },
    phoneNumber: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: [
            "practitioner",
            "nurse",
            "administration"
        ]
    },
    verificationCode: String,
    verificationToken: String,
    expirationTime: Date,
    isVerified: {
        type: Boolean,
        default: false
    },
    termsAccepted: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
});
const User = _mongoose.default.models.User || _mongoose.default.model("User", user_schema);
module.exports = User;


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