(() => {
var exports = {};
exports.id = 5447;
exports.ids = [5447];
exports.modules = {

/***/ 1782:
/***/ (() => {

throw new Error("Module build failed (from ../../AppData/Roaming/npm/node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js):\nError: Cannot find module 'tailwindcss'\nRequire stack:\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\plugins.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\index.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\index.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack-config.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\index.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\cli\\next-build.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\lib\\commands.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\bin\\next\n    at Module._resolveFilename (node:internal/modules/cjs/loader:1048:15)\n    at mod._resolveFilename (C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\require-hook.js:27:32)\n    at mod._resolveFilename (C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\require-hook.js:27:32)\n    at Function.resolve (node:internal/modules/helpers:136:19)\n    at loadPlugin (C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\plugins.js:49:32)\n    at C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\plugins.js:157:56\n    at Array.map (<anonymous>)\n    at Object.getPostCssPlugins (C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\plugins.js:157:47)\n    at async C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\index.js:100:36\n    at async C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\loaders\\postcss-loader\\src\\index.js:37:41");

/***/ }),

/***/ 1438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ VerificationPage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/forms/Verification.module.css
var Verification_module = __webpack_require__(1782);
var Verification_module_default = /*#__PURE__*/__webpack_require__.n(Verification_module);
// EXTERNAL MODULE: ../../AppData/Roaming/npm/node_modules/next/router.js
var next_router = __webpack_require__(7271);
;// CONCATENATED MODULE: ./components/forms/Verification.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-icons/fa'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());






function Verification() {
    const { 0: code , 1: setCode  } = (0,external_react_.useState)("");
    const { 0: errorMessage , 1: setErrorMessage  } = (0,external_react_.useState)("");
    const { 0: successMessage , 1: setSuccessMessage  } = (0,external_react_.useState)("");
    const router = (0,next_router.useRouter)();
    const { 0: token , 1: setToken  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        if (router.query.verificationToken) {
            setToken(router.query.verificationToken);
        }
    }, [
        router.query
    ]);
    (0,external_react_.useEffect)(()=>{
        if (token) {
            const newUrl = `${window.location.pathname}?verificationToken=${token}`;
            window.history.replaceState(null, "", newUrl);
        }
    }, [
        token
    ]);
    (0,external_react_.useEffect)(()=>{
        console.log("Aktueller Code:", code);
    }, [
        code
    ]);
    const handleSubmit = async (event)=>{
        event.preventDefault();
        if (!token) {
            setErrorMessage("Token is missing");
            return;
        }
        try {
            const res = await fetch(`/api/verify/${token}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    token,
                    code
                })
            });
            const data = await res.json();
            if (res.ok) {
                setSuccessMessage("Mail successfully verified!");
                setErrorMessage("");
                setTimeout(()=>router.push("/"), 2000);
            } else {
                setErrorMessage(data.error);
                setSuccessMessage("");
            }
        } catch (error) {
            setErrorMessage("Error verifying your mail :(");
        }
    };
    if (!token) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: "Loading..."
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Verification_module_default()).main__container,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Verification_module_default()).inner__container,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-icons/fa'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                    className: (Verification_module_default()).email_icon
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: (Verification_module_default()).heading,
                    children: "Enter Verification Code"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: (Verification_module_default()).input_field,
                            type: "text",
                            placeholder: "Verification Code",
                            value: code,
                            onChange: (e)=>setCode(e.target.value)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (Verification_module_default()).submit_btn,
                            type: "submit",
                            children: "Verify"
                        })
                    ]
                }),
                errorMessage && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: `${(Verification_module_default()).msg} ${(Verification_module_default()).err}`,
                    children: errorMessage
                }),
                successMessage && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: `${(Verification_module_default()).msg} ${(Verification_module_default()).success}`,
                    children: successMessage
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./pages/register/[token].js




function VerificationPage() {
    return /*#__PURE__*/ jsx_runtime_.jsx("main", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Verification, {})
    });
}


/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7460,7113,7271], () => (__webpack_exec__(1438)));
module.exports = __webpack_exports__;

})();