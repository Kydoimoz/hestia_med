"use strict";
(() => {
var exports = {};
exports.id = 553;
exports.ids = [553];
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

/***/ 4527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: ./libs/medical_db.js
var medical_db = __webpack_require__(7966);
// EXTERNAL MODULE: ./models/User.js
var User = __webpack_require__(6309);
var User_default = /*#__PURE__*/__webpack_require__.n(User);
;// CONCATENATED MODULE: external "crypto"
const external_crypto_namespaceObject = require("crypto");
var external_crypto_default = /*#__PURE__*/__webpack_require__.n(external_crypto_namespaceObject);
// EXTERNAL MODULE: ./models/Practice.js
var Practice = __webpack_require__(626);
;// CONCATENATED MODULE: ./pages/api/register/index.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'bcryptjs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'nodemailer'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'node-schedule'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());







async function handler(req, res) {
    res.setHeader("Content-Type", "application/json");
    try {
        if (req.method !== "POST") {
            return res.status(405).json({
                error: "Method Not Allowed"
            });
        }
        const { title , first_name , surname , gender , birth_date , email , phoneNumber , country , city , address , password , role , termsAccepted , practice_name , practice  } = req.body;
        console.log("Full Request Body:", req.body);
        console.log("Extracted practice_data:", practice_name);
        const _practice = await Practice/* default.find */.Z.find({
            name: practice_name
        });
        if (!_practice) {
            return res.status(400).json({
                error: "Practice not found or invalid practice ID."
            });
        }
        // Hash password
        const hashedPassword = await Object(function webpackMissingModule() { var e = new Error("Cannot find module 'bcryptjs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(password, 10);
        // Connect to the database
        await (0,medical_db/* default */.Z)();
        // Generate verification code and token
        const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
        const verificationToken = external_crypto_default().randomBytes(32).toString("hex");
        const expirationTime = new Date();
        expirationTime.setMinutes(expirationTime.getMinutes() + 2);
        // Create the user
        const user = await User_default().create({
            practice: _practice ? practice : null,
            title,
            first_name,
            surname,
            gender,
            birth_date,
            email,
            phoneNumber,
            country,
            city,
            address,
            password: hashedPassword,
            role,
            termsAccepted,
            verificationCode,
            verificationToken,
            expirationTime,
            isVerified: false
        });
        console.log(user);
        const smtpTransport = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'nodemailer'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
            host: "smtppro.zoho.eu",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            },
            tls: {
                rejectUnauthorized: false
            }
        });
        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: "Hestia - Med Email Verification",
            html: `<h1>Hi ${first_name}!</h1><br><p>Type in the following code to verify your account: <strong>${verificationCode}</strong></p>`
        };
        try {
            const sendMailResult = await smtpTransport.sendMail(mailOptions);
            if (sendMailResult.accepted && sendMailResult.accepted.length > 0) {
                console.log("Verification email sent successfully.");
                return res.status(200).json({
                    success: true,
                    verificationToken
                });
            } else {
                console.error("Failed to send verification email.");
                return res.status(500).json({
                    success: false,
                    error: "Failed to send verification email."
                });
            }
        } catch (emailError) {
            console.error("Error sending email:", emailError);
            return res.status(500).json({
                success: false,
                error: "Error sending email."
            });
        }
    } catch (err) {
        console.error("Error during registration process:", err);
        return res.status(500).json({
            error: "Internal Server Error",
            details: err.message
        });
    }
}
const deleteExpiredUsers = async ()=>{
    const currentDate = new Date();
    try {
        const expiredUsers = await User_default().find({
            expirationTime: {
                $lt: currentDate
            },
            isVerified: false
        });
        const deleteResult = await User_default().deleteMany({
            _id: {
                $in: expiredUsers.map((user)=>user._id)
            }
        });
        console.log(`${deleteResult.deletedCount} expired users have been deleted.`);
    } catch (error) {
        console.error("Error deleting expired users:", error);
    }
};
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'node-schedule'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("*/2 * * * *", deleteExpiredUsers);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6309], () => (__webpack_exec__(4527)));
module.exports = __webpack_exports__;

})();