"use strict";
(() => {
var exports = {};
exports.id = 8455;
exports.ids = [8455];
exports.modules = {

/***/ 4872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "next/dist/lib/import-next-warning"
const import_next_warning_namespaceObject = require("next/dist/lib/import-next-warning");
;// CONCATENATED MODULE: ./pages/api/practice/index.js

async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const practiceData = req.body;
            res.status(201).json({
                message: "Praxis erfolgreich registriert!"
            });
        } catch (error) {
            res.status(500).json({
                message: "Fehler beim Speichern der Praxisdaten"
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
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4872));
module.exports = __webpack_exports__;

})();