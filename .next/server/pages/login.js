(() => {
var exports = {};
exports.id = 3459;
exports.ids = [3459];
exports.modules = {

/***/ 2132:
/***/ (() => {

throw new Error("Module build failed (from ../../AppData/Roaming/npm/node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js):\nError: Cannot find module 'tailwindcss'\nRequire stack:\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\plugins.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\index.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\index.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack-config.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\index.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\cli\\next-build.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\lib\\commands.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\bin\\next\n    at Module._resolveFilename (node:internal/modules/cjs/loader:1048:15)\n    at mod._resolveFilename (C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\require-hook.js:27:32)\n    at mod._resolveFilename (C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\require-hook.js:27:32)\n    at Function.resolve (node:internal/modules/helpers:136:19)\n    at loadPlugin (C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\plugins.js:49:32)\n    at C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\plugins.js:157:56\n    at Array.map (<anonymous>)\n    at Object.getPostCssPlugins (C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\plugins.js:157:47)\n    at async C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\index.js:100:36\n    at async C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\loaders\\postcss-loader\\src\\index.js:37:41");

/***/ }),

/***/ 9521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ LogInPage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/forms/login_form.module.css
var login_form_module = __webpack_require__(2132);
var login_form_module_default = /*#__PURE__*/__webpack_require__.n(login_form_module);
// EXTERNAL MODULE: ../../AppData/Roaming/npm/node_modules/next/image.js
var next_image = __webpack_require__(4211);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ../../AppData/Roaming/npm/node_modules/next/link.js
var next_link = __webpack_require__(8732);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ../../AppData/Roaming/npm/node_modules/next/router.js
var next_router = __webpack_require__(7271);
;// CONCATENATED MODULE: ./components/forms/login_form.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'three'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'three/examples/jsm/loaders/GLTFLoader'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'next-auth/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'next/font/google'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@mui/material/Button'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());













const poppins = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'next/font/google'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    subsets: [
        "latin"
    ],
    weight: "400"
});
const roboto = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'next/font/google'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    subsets: [
        "latin"
    ],
    weight: "400"
});
function Login() {
    const router = (0,next_router.useRouter)();
    const { data: session  } = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'next-auth/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    (0,external_react_.useEffect)(()=>{
        const container = document.getElementById("threejs_left_container");
        container.style.height = "250px";
        if (!container || container.offsetWidth === 0 || container.offsetHeight === 0) {
            console.error("Container hat null Dimensionen oder fehlt.");
            return;
        }
        // Three.js Setup
        const scene = new Object(function webpackMissingModule() { var e = new Error("Cannot find module 'three'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        const camera = new Object(function webpackMissingModule() { var e = new Error("Cannot find module 'three'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
        camera.position.set(0, 50, 500); // Set camera position
        camera.lookAt(new Object(function webpackMissingModule() { var e = new Error("Cannot find module 'three'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(0, 50, 0)); // Point the camera at the center
        const renderer = new Object(function webpackMissingModule() { var e = new Error("Cannot find module 'three'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
            antialias: true,
            alpha: true
        });
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);
        // Add lights
        const light = new Object(function webpackMissingModule() { var e = new Error("Cannot find module 'three'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(0xffffff, 1);
        light.position.set(5, 10, 7.5);
        scene.add(light);
        const ambientLight = new Object(function webpackMissingModule() { var e = new Error("Cannot find module 'three'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(0x404040);
        scene.add(ambientLight);
        // Variable to hold the loaded model
        let model = null;
        // GLTF-Loader
        const loader = new Object(function webpackMissingModule() { var e = new Error("Cannot find module 'three/examples/jsm/loaders/GLTFLoader'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        loader.load("/resources/hestia_logo.glb", (gltf)=>{
            model = gltf.scene;
            model.scale.set(5, 5, 5); // Set constant scale here (don't change during resize)
            model.position.set(0, 0, 0); // Center the model
            model.rotation.y = Math.PI / 2;
            model.rotation.x = Math.PI;
            model.rotation.z = Math.PI / 2;
            scene.add(model);
            console.log("Modell erfolgreich geladen");
        }, undefined, (error)=>{
            console.error("Fehler beim Laden des Modells:", error);
        });
        // Animation loop
        const animate = ()=>{
            requestAnimationFrame(animate);
            // Rotate the model if it exists
            if (model) {
                model.rotation.y += 0.01; // Slowly rotate around the Y-axis
            }
            renderer.render(scene, camera);
        };
        animate();
        // Resize handler (only for camera and renderer, NOT for model scaling)
        const onResize = ()=>{
            camera.aspect = container.offsetWidth / container.offsetHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.offsetWidth, container.offsetHeight);
        };
        window.addEventListener("resize", onResize);
        // Cleanup on component unmount
        return ()=>{
            window.removeEventListener("resize", onResize);
            container.removeChild(renderer.domElement);
        };
    }, []);
    var width = 1000;
    if (false) {}
    const { 0: state , 1: setState  } = (0,external_react_.useState)({
        password: "",
        email: ""
    });
    const { 0: errMsg , 1: setErrMsg  } = (0,external_react_.useState)("");
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const res = await Object(function webpackMissingModule() { var e = new Error("Cannot find module 'next-auth/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("credentials", {
                email: state.email,
                password: state.password,
                redirect: false
            });
            console.log(res);
            if (res.error) {
                setErrMsg("Invalid Credentials");
                return;
            }
            const verificationRes = await fetch("/api/verification_control", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: state.email,
                    password: state.password
                })
            });
            const verificationData = await verificationRes.json();
            if (verificationRes.status !== 200) {
                setErrMsg(verificationData.error || "An unexpected error occurred.");
                return;
            }
            console.log("Benutzer eingeloggt und verifiziert:", verificationData);
            router.replace("/appointment");
        } catch (err) {
            console.log(err);
        }
    };
    function handleChangeState(event) {
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name]: value
        });
        console.log({
            ...state,
            [event.target.name]: value
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (login_form_module_default()).main__container,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (login_form_module_default()).inner__container,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (login_form_module_default()).left__container,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (login_form_module_default()).left__btns,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@mui/material/Button'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                                sx: {
                                    borderColor: "black",
                                    color: "black",
                                    "&:hover": {
                                        borderColor: "black",
                                        backgroundColor: "white",
                                        color: "black"
                                    }
                                },
                                href: "/",
                                variant: "outlined",
                                children: "← Go Back Home"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (login_form_module_default()).left__content,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (login_form_module_default()).left__content__description__container,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: `${poppins.className} ${(login_form_module_default()).title}`,
                                            children: "Hestia - Med\xae - Unser Medizinisches Portal!"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (login_form_module_default()).features,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: (login_form_module_default()).features__item,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            className: (login_form_module_default()).list__img,
                                                            src: "/icons/users.png",
                                                            draggable: "false",
                                                            width: 30,
                                                            height: 30,
                                                            alt: "list"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: `${roboto.className} ${(login_form_module_default()).feature_description}`,
                                                            children: "Effiziente Verwaltung von Patienten"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: (login_form_module_default()).features__item,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            className: (login_form_module_default()).list__img,
                                                            src: "/icons/Calendar_Days.png",
                                                            draggable: "false",
                                                            width: 30,
                                                            height: 30,
                                                            alt: "list"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: `${roboto.className} ${(login_form_module_default()).feature_description}`,
                                                            children: "Online Scheduling"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: (login_form_module_default()).features__item,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            className: (login_form_module_default()).list__img,
                                                            src: "/icons/Credit_Card_01.jpg",
                                                            draggable: "false",
                                                            width: 30,
                                                            height: 30,
                                                            alt: "list"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: `${roboto.className} ${(login_form_module_default()).feature_description}`,
                                                            children: "Vereinfachte Nutzung unseres Buchungssystems"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: (login_form_module_default()).features__item,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            className: (login_form_module_default()).list__img,
                                                            src: "/icons/Folder_Document.png",
                                                            draggable: "false",
                                                            width: 30,
                                                            height: 30,
                                                            alt: "list"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: `${roboto.className} ${(login_form_module_default()).feature_description}`,
                                                            children: "Medizinische Dokumentation"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "threejs_left_container",
                                    style: {
                                        marginTop: "-100px"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("canvas", {
                                        className: (login_form_module_default()).canvas
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (login_form_module_default()).right__container,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (login_form_module_default()).right__content,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `${(login_form_module_default()).login__title} ${roboto.className}`,
                                children: "LogIn"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                onSubmit: handleSubmit,
                                className: (login_form_module_default()).form,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (login_form_module_default()).input__container,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "email",
                                            name: "email",
                                            value: state.email,
                                            onChange: handleChangeState,
                                            className: (login_form_module_default()).input,
                                            placeholder: "Email",
                                            required: true,
                                            maxLength: 30
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (login_form_module_default()).input__container,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "password",
                                            name: "password",
                                            value: state.password,
                                            onChange: handleChangeState,
                                            className: (login_form_module_default()).input,
                                            placeholder: "Password",
                                            required: true,
                                            maxLength: 20
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (login_form_module_default()).relative,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (login_form_module_default()).error,
                                                children: errMsg
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: (login_form_module_default()).button,
                                                type: "submit",
                                                children: "Login"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (login_form_module_default()).existingacc,
                                children: [
                                    "Need an account? ",
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/register",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: (login_form_module_default()).underline,
                                            children: "Register"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./pages/login/index.js



function LogInPage() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Login, {})
    });
}


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

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [7460,7113,8732,4211,7271], () => (__webpack_exec__(9521)));
module.exports = __webpack_exports__;

})();