"use strict";
(() => {
var exports = {};
exports.id = 9640;
exports.ids = [9640];
exports.modules = {

/***/ 4906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _libs_medical_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7966);
/* harmony import */ var _models_StaffRoles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1911);
/* harmony import */ var _models_StaffRoles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_StaffRoles__WEBPACK_IMPORTED_MODULE_1__);


async function handler(req, res) {
    await (0,_libs_medical_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(); // Verbindet mit der MongoDB-Datenbank
    if (req.method === "POST") {
        try {
            const newEmployee = new (_models_StaffRoles__WEBPACK_IMPORTED_MODULE_1___default())(req.body);
            await newEmployee.save();
            res.status(201).json(newEmployee);
        } catch (error) {
            res.status(400).json({
                error: "Fehler beim Hinzuf\xfcgen des Mitarbeiters"
            });
        }
    } else if (req.method === "GET") {
        try {
            const employees = await _models_StaffRoles__WEBPACK_IMPORTED_MODULE_1___default().find(); // Holt alle Mitarbeiter aus der Datenbank
            res.status(200).json(employees); // Gibt die Mitarbeiterdaten als JSON zurück
        } catch (error1) {
            res.status(500).json({
                error: "Fehler beim Abrufen der Mitarbeiterdaten"
            });
        }
    } else {
        res.status(405).json({
            error: "Method Not Allowed"
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
var __webpack_exports__ = __webpack_require__.X(0, [1957], () => (__webpack_exec__(4906)));
module.exports = __webpack_exports__;

})();