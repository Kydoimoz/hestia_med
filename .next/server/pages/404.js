(() => {
var exports = {};
exports.id = 2197;
exports.ids = [2197];
exports.modules = {

/***/ 1009:
/***/ (() => {

throw new Error("Module build failed (from ../../AppData/Roaming/npm/node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js):\nError: Cannot find module 'tailwindcss'\nRequire stack:\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\plugins.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\index.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\index.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack-config.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\index.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\cli\\next-build.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\lib\\commands.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\bin\\next\n    at Module._resolveFilename (node:internal/modules/cjs/loader:1048:15)\n    at mod._resolveFilename (C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\require-hook.js:27:32)\n    at mod._resolveFilename (C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\require-hook.js:27:32)\n    at Function.resolve (node:internal/modules/helpers:136:19)\n    at loadPlugin (C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\plugins.js:49:32)\n    at C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\plugins.js:157:56\n    at Array.map (<anonymous>)\n    at Object.getPostCssPlugins (C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\plugins.js:157:47)\n    at async C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\index.js:100:36\n    at async C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\loaders\\postcss-loader\\src\\index.js:37:41");

/***/ }),

/***/ 3439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7271);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_NotFound_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1009);
/* harmony import */ var _styles_NotFound_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_NotFound_module_css__WEBPACK_IMPORTED_MODULE_5__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fuse.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8732);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'glob'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());







const globSync = (pattern, options)=>{
    return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'glob'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(pattern, options);
};
const NotFoundPage = ({ pages  })=>{
    const { 0: results , 1: setResults  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fuse = new Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fuse.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(pages);
        const searchResults = fuse.search(router.asPath);
        setResults(searchResults.map((result)=>result.item));
    }, [
        pages,
        router.asPath
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_NotFound_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: (_styles_NotFound_module_css__WEBPACK_IMPORTED_MODULE_5___default().heading),
                children: "404 - Error || Site not found"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "Page you are trying to access could not be found"
            }),
            results?.length !== 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_NotFound_module_css__WEBPACK_IMPORTED_MODULE_5___default().subTitle),
                children: "Did you mean?"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_NotFound_module_css__WEBPACK_IMPORTED_MODULE_5___default().suggestion),
                children: results?.map((result)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                        href: result,
                        className: (_styles_NotFound_module_css__WEBPACK_IMPORTED_MODULE_5___default().suggestionItem),
                        children: result
                    }, result))
            })
        ]
    });
};
// Holen von Daten zur Build-Zeit
async function getStaticProps() {
    const pages = await new Promise((res, rej)=>{
        const ignoreList = [
            "api",
            "_",
            "["
        ];
        try {
            const fileList = globSync("**/*.js", {
                cwd: "pages"
            }); // Verwenden von glob.sync
            const routeList = fileList.map((item)=>item.replace(".js", ""));
            const filteredRouteList = routeList.filter((item)=>!ignoreList.some((ignoreItem)=>ignoreItem.startsWith(item)));
            res(filteredRouteList);
        } catch (err) {
            rej(err);
        }
    });
    return {
        props: {
            pages
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundPage);


/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7460,7113,8732,7271], () => (__webpack_exec__(3439)));
module.exports = __webpack_exports__;

})();