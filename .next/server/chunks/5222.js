"use strict";
exports.id = 5222;
exports.ids = [5222];
exports.modules = {

/***/ 5222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET": () => (/* binding */ GET),
/* harmony export */   "POST": () => (/* binding */ POST),
/* harmony export */   "authOptions": () => (/* binding */ authOptions),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "user_account": () => (/* binding */ user_account)
/* harmony export */ });
/* harmony import */ var _libs_medical_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7966);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6309);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_User__WEBPACK_IMPORTED_MODULE_1__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'next-auth'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _fetchUpdates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8028);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'next-auth/providers/credentials'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'bcryptjs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9590);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-cookie'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());








;

let user_account;
const authOptions = {
    providers: [
        Object(function webpackMissingModule() { var e = new Error("Cannot find module 'next-auth/providers/credentials'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
            id: "credentials",
            name: "credentials",
            credentials: {},
            async authorize (credentials) {
                try {
                    await (0,_libs_medical_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
                    const user = await _models_User__WEBPACK_IMPORTED_MODULE_1___default().findOne({
                        email: credentials?.email
                    });
                    console.log("User: ", user);
                    if (!user) {
                        return null;
                    }
                    const passwordMatch = await Object(function webpackMissingModule() { var e = new Error("Cannot find module 'bcryptjs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(credentials.password, user.password);
                    if (credentials.email === user.email && passwordMatch) {
                        user_account = {
                            user_ID: user._id,
                            practice: user.practice,
                            title: user.title,
                            first_name: user.first_name,
                            surname: user.surname,
                            gender: user.gender,
                            birth_date: user.birth_date,
                            email: user.email,
                            phoneNumber: user.phoneNumber,
                            country: user.country,
                            city: user.city,
                            address: user.address,
                            password: user.password,
                            isVerified: user.isVerified,
                            role: user.role,
                            termsAccepted: user.termsAccepted
                        };
                        console.log(user_account);
                        return Promise.resolve(user_account);
                    } else {
                        return null;
                    }
                } catch (err) {
                    console.error(err);
                    return null;
                }
            }
        }), 
    ],
    jwt: {
        encryption: true,
        maxAge: 30 * 24 * 60 * 60
    },
    session: {
        jwt: true,
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60
    },
    callbacks: {
        async jwt ({ token , user  }) {
            if (user) {
                // Füge die Benutzerfelder ins Token hinzu
                token.user_ID = user._id;
                token.practice = user.practice;
                token.title = user.title;
                token.first_name = user.first_name;
                token.surname = user.surname;
                token.gender = user.gender;
                token.birth_date = user.birth_date;
                token.email = user.email;
                token.phoneNumber = user.phoneNumber;
                token.country = user.country;
                token.city = user.city;
                token.address = user.address;
                token.password = user.password; // beachte, dass du das Passwort möglicherweise nicht speichern möchtest!
                token.isVerified = user.isVerified;
                token.role = user.role;
                token.termsAccepted = user.termsAccepted;
            }
            return token;
        },
        async session ({ session , token  }) {
            // Übertrage die Felder vom Token in die Session
            session.user.user_ID = token.user_ID;
            session.user.practice = token.practice;
            session.user.title = token.title;
            session.user.first_name = token.first_name;
            session.user.surname = token.surname;
            session.user.gender = token.gender;
            session.user.birth_date = token.birth_date;
            session.user.email = token.email;
            session.user.phoneNumber = token.phoneNumber;
            session.user.country = token.country;
            session.user.city = token.city;
            session.user.address = token.address;
            session.user.password = token.password; // ebenfalls prüfen, ob das sinnvoll ist, das Passwort zu speichern!
            session.user.isVerified = token.isVerified;
            session.user.role = token.role;
            session.user.termsAccepted = token.termsAccepted;
            return session;
        },
        async session (session, token) {
            const user = await _models_User__WEBPACK_IMPORTED_MODULE_1___default().findById(token.user.user_ID).populate("practice");
            session.user = {
                ...user._doc,
                practice: user.practice
            };
            const updatedUser = await (0,_fetchUpdates__WEBPACK_IMPORTED_MODULE_3__.fetchUpdatedUserData)(token.user.user_ID);
            session.user = {
                user_ID: updatedUser._id,
                practice: updatedUser.practice,
                title: updatedUser.title,
                first_name: updatedUser.first_name,
                surname: updatedUser.surname,
                gender: updatedUser.gender,
                birth_date: updatedUser.birth_date,
                email: updatedUser.email,
                phoneNumber: updatedUser.phoneNumber,
                country: updatedUser.country,
                city: updatedUser.city,
                address: updatedUser.address,
                password: updatedUser.password,
                isVerified: updatedUser.isVerified,
                role: updatedUser.role,
                termsAccepted: updatedUser.termsAccepted
            };
            return session;
        }
    },
    callbacks: {
        async signIn (user, account, profile) {
            const { email  } = user;
            const additionalUserInfo = await (0,_index__WEBPACK_IMPORTED_MODULE_4__["default"])(email);
            // Add additional user info to the session
            return Promise.resolve({
                ...user,
                ...additionalUserInfo
            });
        },
        async session (session) {
            if (session) {
                session.user = {
                    id: user_account.user_ID,
                    practice: user_account.practice,
                    title: user_account.title,
                    first_name: user_account.first_name,
                    surname: user_account.surname,
                    gender: user_account.gender,
                    birth_date: user_account.birth_date,
                    email: user_account.email,
                    phoneNumber: user_account.phoneNumber,
                    country: user_account.country,
                    city: user_account.city,
                    address: user_account.address,
                    password: user_account.password,
                    isVerified: user_account.isVerified,
                    role: user_account.role,
                    termsAccepted: user_account.termsAccepted
                };
            }
            return session;
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login/",
        callbackUrl: "/home/"
    }
};
/*
export const config = {
    api: {
        bodyParser: false,
    },
};
*/ const handler = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'next-auth'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(authOptions);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);
const GET = (req, res)=>handler.handleRequest(req, res, {
        ...authOptions
    });
const POST = (req, res)=>handler.handleRequest(req, res, {
        ...authOptions
    });


/***/ }),

/***/ 9590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6309);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_User__WEBPACK_IMPORTED_MODULE_1__);


const queryData = async (email)=>{
    try {
        const user = await _models_User__WEBPACK_IMPORTED_MODULE_1___default().findOne({
            email
        });
        if (user) {
            const { first_name , surname  } = user;
            console.log("User Info from queryData:", {
                first_name,
                surname
            });
            return Promise.resolve({
                first_name,
                surname
            });
        }
        return Promise.resolve({});
    } catch (err) {
        console.error("Error in queryData:", err);
        return Promise.resolve({});
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (queryData);


/***/ }),

/***/ 8028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchUpdatedUserData": () => (/* binding */ fetchUpdatedUserData)
/* harmony export */ });
/* harmony import */ var _libs_medical_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7966);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6309);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_User__WEBPACK_IMPORTED_MODULE_1__);


async function fetchUpdatedUserData(userID) {
    try {
        // Verbindung zur DB herstellen
        await (0,_libs_medical_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
        // Benutzer basierend auf der ID abrufen und sicherstellen, dass die Practice auch mitgeliefert wird
        const updatedUser = await _models_User__WEBPACK_IMPORTED_MODULE_1___default().findById(userID).populate("practice");
        // Falls kein Benutzer gefunden wurde, Fehler werfen
        if (!updatedUser) {
            throw new Error("Benutzer nicht gefunden");
        }
        return updatedUser;
    } catch (error) {
        console.error("Fehler beim Abrufen der Benutzerdaten:", error);
        throw new Error("Fehler beim Abrufen der Benutzerdaten");
    }
}


/***/ })

};
;