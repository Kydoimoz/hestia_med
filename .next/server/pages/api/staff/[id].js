"use strict";
(() => {
var exports = {};
exports.id = 2867;
exports.ids = [2867];
exports.modules = {

/***/ 2314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _libs_medical_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7966);
/* harmony import */ var _models_StaffRoles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1911);
/* harmony import */ var _models_StaffRoles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_StaffRoles__WEBPACK_IMPORTED_MODULE_1__);


async function handler(req, res) {
    const { id  } = req.query; // ID des Mitarbeiters aus der URL
    await (0,_libs_medical_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(); // Sicherstellen, dass wir mit der DB verbunden sind
    if (req.method === "PUT") {
        const { role  } = req.body; // Hier nehmen wir an, dass du nur die Rolle aktualisierst
        try {
            const updatedStaff = await _models_StaffRoles__WEBPACK_IMPORTED_MODULE_1___default().findByIdAndUpdate(id, {
                role
            }, {
                new: true
            } // Gibt das aktualisierte Dokument zurück
            );
            if (!updatedStaff) {
                return res.status(404).json({
                    message: "Mitarbeiter nicht gefunden"
                });
            }
            res.status(200).json(updatedStaff); // Rückgabe des aktualisierten Mitarbeiters
        } catch (error) {
            res.status(500).json({
                message: "Fehler beim Aktualisieren des Mitarbeiters"
            });
        }
    } else if (req.method === "DELETE") {
        try {
            const deletedStaff = await _models_StaffRoles__WEBPACK_IMPORTED_MODULE_1___default().findByIdAndDelete(id);
            if (!deletedStaff) {
                return res.status(404).json({
                    message: "Mitarbeiter nicht gefunden"
                });
            }
            res.status(200).json({
                message: "Mitarbeiter erfolgreich gel\xf6scht"
            });
        } catch (error1) {
            res.status(500).json({
                message: "Fehler beim L\xf6schen des Mitarbeiters"
            });
        }
    } else {
        res.status(405).json({
            message: "Method Not Allowed"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1957], () => (__webpack_exec__(2314)));
module.exports = __webpack_exports__;

})();