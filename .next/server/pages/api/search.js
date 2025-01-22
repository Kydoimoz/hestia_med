"use strict";
(() => {
var exports = {};
exports.id = 5198;
exports.ids = [5198];
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

/***/ 4798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _libs_medical_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7966);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'mongodb'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }
    try {
        // Datenbankverbindung herstellen
        const { db  } = await (0,_libs_medical_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
        const { query , practiceId  } = req.query;
        if (!practiceId || !query) {
            return res.status(400).json({
                error: "practiceId and query are required"
            });
        }
        const lowerCaseQuery = query.toLowerCase();
        // Patienten und Dokumente abrufen
        const patients = await db.collection("patients").aggregate([
            {
                $match: {
                    practice: new Object(function webpackMissingModule() { var e = new Error("Cannot find module 'mongodb'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(practiceId)
                }
            },
            {
                $lookup: {
                    from: "documents",
                    localField: "documents",
                    foreignField: "_id",
                    as: "documentDetails"
                }
            }, 
        ]).toArray();
        const filteredResults = [];
        // Patienten- und Dokumentensuche
        patients.forEach((patient)=>{
            // Patientensuche
            if (patient.full_name.toLowerCase().includes(lowerCaseQuery)) {
                filteredResults.push({
                    type: "patient",
                    label: patient.full_name,
                    id: patient._id
                });
            }
            // Dokumentensuche
            patient.documentDetails.forEach((doc)=>{
                if (doc.title.toLowerCase().includes(lowerCaseQuery)) {
                    filteredResults.push({
                        type: "document",
                        label: `${doc.title} (${patient.full_name})`,
                        id: patient._id
                    });
                }
            });
        });
        res.status(200).json(filteredResults);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4798));
module.exports = __webpack_exports__;

})();