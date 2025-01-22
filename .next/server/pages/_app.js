(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888,8004];
exports.modules = {

/***/ 3882:
/***/ (() => {

throw new Error("Module build failed (from ../../AppData/Roaming/npm/node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js):\nError: Cannot find module 'tailwindcss'\nRequire stack:\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\plugins.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\index.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\index.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack-config.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\index.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\cli\\next-build.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\lib\\commands.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\bin\\next\n    at Module._resolveFilename (node:internal/modules/cjs/loader:1048:15)\n    at mod._resolveFilename (C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\require-hook.js:27:32)\n    at mod._resolveFilename (C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\require-hook.js:27:32)\n    at Function.resolve (node:internal/modules/helpers:136:19)\n    at loadPlugin (C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\plugins.js:49:32)\n    at C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\plugins.js:157:56\n    at Array.map (<anonymous>)\n    at Object.getPostCssPlugins (C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\plugins.js:157:47)\n    at async C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\index.js:100:36\n    at async C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\loaders\\postcss-loader\\src\\index.js:37:41");

/***/ }),

/***/ 2451:
/***/ (() => {

throw new Error("Module build failed (from ../../AppData/Roaming/npm/node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js):\nError: Cannot find module 'tailwindcss'\nRequire stack:\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\plugins.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\index.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\index.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack-config.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\index.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\cli\\next-build.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\lib\\commands.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\bin\\next\n    at Module._resolveFilename (node:internal/modules/cjs/loader:1048:15)\n    at mod._resolveFilename (C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\require-hook.js:27:32)\n    at mod._resolveFilename (C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\require-hook.js:27:32)\n    at Function.resolve (node:internal/modules/helpers:136:19)\n    at loadPlugin (C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\plugins.js:49:32)\n    at C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\plugins.js:157:56\n    at Array.map (<anonymous>)\n    at Object.getPostCssPlugins (C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\plugins.js:157:47)\n    at async C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\index.js:100:36\n    at async C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\loaders\\postcss-loader\\src\\index.js:37:41");

/***/ }),

/***/ 8532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ useGlobalSession),
/* harmony export */   "Z": () => (/* binding */ SessionProviderWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'next-auth/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
"use client";



const SessionContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const SessionProviderWrapper = ({ children  })=>{
    const { data: session  } = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'next-auth/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SessionContext.Provider, {
        value: session,
        children: children
    });
};
const useGlobalSession = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SessionContext);


/***/ }),

/***/ 5051:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'next-auth/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
"use client";



const AuthProviders = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'next-auth/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthProviders);


/***/ }),

/***/ 7047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HestiaMed)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ../../AppData/Roaming/npm/node_modules/next/router.js
var next_router = __webpack_require__(7271);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/ui/Header.module.css
var Header_module = __webpack_require__(3882);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: ./context/SessionContext.js
var SessionContext = __webpack_require__(8532);
// EXTERNAL MODULE: ./components/pages/settings.js
var settings = __webpack_require__(7482);
// EXTERNAL MODULE: ../../AppData/Roaming/npm/node_modules/next/link.js
var next_link = __webpack_require__(8732);
// EXTERNAL MODULE: ../../AppData/Roaming/npm/node_modules/next/image.js
var next_image = __webpack_require__(4211);
;// CONCATENATED MODULE: ./components/ui/Header.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../public/icons/Search_Magnifying_Glass.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../public/icons/Wifi_High.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../public/icons/Wifi_Low.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../public/icons/Wifi_Medium.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../public/icons/Wifi_None.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../public/icons/Wifi_Off.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../public/icons/Wifi_Problem.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../public/icons/Log_Out.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../public/icons/Bell.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../public/icons/Octagon_Help.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../public/icons/Settings.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../public/icons/Users.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../public/icons/User_02.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../public/icons/User_Add.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'next-auth/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
"use client";
























function NewPatientButton({ onClick  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Header_module_default()).newPatient,
        onClick: onClick,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Header_module_default()).add_patient_icon,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../public/icons/User_Add.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                    className: (Header_module_default()).newpatient
                })
            }),
            "Neuer Patient"
        ]
    });
}
function Header() {
    const router = (0,next_router.useRouter)();
    const { data: session  } = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'next-auth/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    const practice_id = session?.user?.practice;
    const { 0: patients , 1: setPatients  } = (0,external_react_.useState)([]);
    const { id  } = router.query;
    (0,external_react_.useEffect)(()=>{
        if (!session) {
            if (false) {}
            return;
        }
        const fetchPatients = async ()=>{
            if (session?.user?.practice) {
                try {
                    const response = await fetch(`/api/GET/patients?practice_id=${practice_id}`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    });
                    const data = await response.json();
                    console.log("Patient Data ", data);
                    setPatients(data);
                } catch (error) {
                    console.error("Fehler beim Laden der Patienten:", error);
                }
            } else {
                console.error("Practice 404.");
                return;
            }
        };
        fetchPatients();
    }, [
        id
    ]);
    const handleSignOut = async ()=>{
        try {
            await Object(function webpackMissingModule() { var e = new Error("Cannot find module 'next-auth/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
            router.push("/appointment");
        } catch (err) {
            console.error("Error,", err);
        }
    };
    console.log("session: ", session?.user);
    const { 0: searchQuery , 1: setSearchQuery  } = (0,external_react_.useState)("");
    const { 0: results , 1: setResults  } = (0,external_react_.useState)([]);
    const { 0: wifiStatus , 1: setWifiStatus  } = (0,external_react_.useState)("high");
    const { 0: showSettingsModal , 1: setShowSettingsModal  } = (0,external_react_.useState)(false);
    /*const [patients, setPatients] = useState([
    // Mock-Daten
    { id: 1, name: "Max Mustermann", documents: ["Rezept 1", "AU Bescheinigung"] },
    { id: 2, name: "Anna Müller", documents: ["Röntgenbericht", "Laboranalyse"] },
    { id: 3, name: "Peter Schmidt", documents: ["Therapieplan", "Rechnung"] },
  ]);*/ const getWifiStatus = ()=>{
        if (!navigator.onLine) return "off"; // Offline
        const signalStrength = Math.random(); // Simulierte Signalstärke (zwischen 0 und 1)
        if (signalStrength > 0.8) return "high";
        if (signalStrength > 0.5) return "medium";
        if (signalStrength > 0.2) return "low";
        if (signalStrength > 0) return "none";
        return "problem"; // Signalproblem
    };
    (0,external_react_.useEffect)(()=>{
        const updateWifiStatus = ()=>{
            setWifiStatus(getWifiStatus());
        };
        // Initialer Zustand
        updateWifiStatus();
        // Aktualisierung alle 5 Sekunden
        const intervalId = setInterval(updateWifiStatus, 5000);
        // Cleanup
        return ()=>clearInterval(intervalId);
    }, []);
    const renderWifiIcon = ()=>{
        switch(wifiStatus){
            case "high":
                return /*#__PURE__*/ jsx_runtime_.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../public/icons/Wifi_High.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                    className: `${(Header_module_default()).high} ${(Header_module_default()).icon}`
                });
            case "medium":
                return /*#__PURE__*/ jsx_runtime_.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../public/icons/Wifi_Medium.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                    className: `${(Header_module_default()).medium} ${(Header_module_default()).icon}`
                });
            case "low":
                return /*#__PURE__*/ jsx_runtime_.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../public/icons/Wifi_Low.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                    className: `${(Header_module_default()).low} ${(Header_module_default()).icon}`
                });
            case "none":
                return /*#__PURE__*/ jsx_runtime_.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../public/icons/Wifi_None.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                    className: `${(Header_module_default()).low} ${(Header_module_default()).icon}`
                });
            case "off":
                return /*#__PURE__*/ jsx_runtime_.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../public/icons/Wifi_Off.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                    className: `${(Header_module_default()).low} ${(Header_module_default()).icon}`
                });
            case "problem":
                return /*#__PURE__*/ jsx_runtime_.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../public/icons/Wifi_Problem.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                    className: `${(Header_module_default()).low} ${(Header_module_default()).icon}`
                });
            default:
                return /*#__PURE__*/ jsx_runtime_.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../public/icons/Wifi_Problem.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                    className: `${(Header_module_default()).low} ${(Header_module_default()).icon}`
                });
        }
    };
    const handleSearch = (query)=>{
        setSearchQuery(query);
        if (query.trim() === "") {
            setResults([]);
            return;
        }
        const lowerCaseQuery = query.toLowerCase();
        const filteredResults = [];
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
            patient.documents.forEach((doc)=>{
                if (doc.toLowerCase().includes(lowerCaseQuery)) {
                    filteredResults.push({
                        type: "document",
                        label: `${doc} (${patient.full_name})`,
                        id: patient._id
                    });
                }
            });
        });
        setResults(filteredResults);
    };
    const handleSelect = (item)=>{
        if (item.type === "patient") {
            console.log(`Navigiere zu Patientendetails: ID ${item.id}`);
            router.push(`/patient/${item.id}`);
        } else if (item.type === "document") {
            console.log(`Navigiere zu Dokumentenansicht: ID ${item.id}`);
        }
        setSearchQuery("");
        setResults([]);
    };
    const { 0: showModal , 1: setShowModal  } = (0,external_react_.useState)(false);
    const { 0: formData , 1: setFormData  } = (0,external_react_.useState)({
        Name: "",
        Krankenversicherung: "",
        Privat: "Nein",
        Geburtsdatum: "",
        Geschlecht: "",
        Adresse: "",
        Telefonnummer: "",
        Email: "",
        Notfallkontakt: ""
    });
    const { 0: errors , 1: setErrors  } = (0,external_react_.useState)({});
    const validate = ()=>{
        const newErrors = {};
        Object.keys(formData).forEach((key)=>{
            if (!formData[key]) {
                newErrors[key] = `${key} ist erforderlich`;
            }
        });
        return newErrors;
    };
    const handleInputChange = (e)=>{
        const { name , value  } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            try {
                const response = await fetch("/api/patients", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        full_name: formData.Name,
                        insurance: formData.Krankenversicherung,
                        is_private: formData.Privat,
                        gender: formData.Geschlecht,
                        birth_date: formData.Geburtsdatum,
                        address: formData.Adresse,
                        phoneNumber: formData.Telefonnummer,
                        email: formData.Email,
                        practice: session?.user?.practice || null,
                        emergency_contact: formData.Notfallkontakt,
                        appointments: []
                    })
                });
                if (response.ok) {
                    console.log("Patient hinzugef\xfcgt:", formData);
                    setShowModal(false);
                    setFormData({
                        full_name: "",
                        insurance: "",
                        is_private: "Nein",
                        birth_date: "",
                        gender: "",
                        address: "",
                        phoneNumber: "",
                        email: "",
                        emergency_contact: ""
                    });
                    setErrors({});
                    window.location.reload();
                } else {
                    console.error("Fehler beim Hinzuf\xfcgen des Patienten:", response.statusText);
                }
            } catch (err) {
                console.error("Error: ", err.message);
            }
        } else {
            setErrors(validationErrors);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: (Header_module_default()).header,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(NewPatientButton, {
                onClick: ()=>setShowModal(true)
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Header_module_default()).search,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../public/icons/Search_Magnifying_Glass.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                        className: (Header_module_default()).search_icon
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        value: searchQuery,
                        onChange: (e)=>handleSearch(e.target.value),
                        placeholder: "Suche (nach Patienten, Dokumenten, etc.)",
                        className: (Header_module_default()).input
                    }),
                    results.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Header_module_default()).dropdown,
                        children: results.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `${(Header_module_default()).dropdownItem} ${item.type === "patient" ? (Header_module_default()).patientItem : (Header_module_default()).documentItem}`,
                                onClick: ()=>handleSelect(item),
                                children: item.label
                            }, index))
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Header_module_default()).links,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: renderWifiIcon()
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../public/icons/Settings.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                            onClick: ()=>setShowSettingsModal(true),
                            className: `${(Header_module_default()).icon} ${(Header_module_default()).colorchange}`
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        onClick: ()=>handleSignOut(),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../public/icons/Log_Out.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                            className: `${(Header_module_default()).icon} ${(Header_module_default()).colorchange}`
                        })
                    })
                ]
            }),
            showModal && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Header_module_default()).modalOverlay,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Header_module_default()).modalContent,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            children: "Neuen Patienten hinzuf\xfcgen"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            className: (Header_module_default()).zindex,
                            onSubmit: handleSubmit,
                            children: [
                                Object.keys(formData).map((key)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Header_module_default()).formGroup,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                children: key
                                            }),
                                            key === "Privat" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                                name: key,
                                                value: formData[key],
                                                onChange: handleInputChange,
                                                className: (Header_module_default()).selectInput,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                        value: "Ja",
                                                        children: "Ja"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                        value: "Nein",
                                                        children: "Nein"
                                                    })
                                                ]
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "text",
                                                name: key,
                                                value: formData[key],
                                                onChange: handleInputChange,
                                                className: (Header_module_default()).textInput
                                            }),
                                            errors[key] && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: (Header_module_default()).error,
                                                children: errors[key]
                                            })
                                        ]
                                    }, key)),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (Header_module_default()).modalActions,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "submit",
                                            children: "Hinzuf\xfcgen"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "button",
                                            onClick: ()=>setShowModal(false),
                                            children: "Abbrechen"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            showSettingsModal && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Header_module_default()).modalOverlay,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Header_module_default()).modalContent,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            children: "Einstellungen"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(settings/* default */.Z, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Header_module_default()).modalActions,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: ()=>setShowSettingsModal(false),
                                children: "Schlie\xdfen"
                            })
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/ui/Sidebar.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../public/icons/User_Add.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../public/icons/Calendar_Days.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../public/icons/Users.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../public/icons/Chart_Bar_Vertical_01.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../public/icons/Credit_Card_01.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../public/icons/File_Edit.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../public/icons/Settings.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());












const links = [
    {
        icon: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../public/icons/Calendar_Days.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
        label: "Terminkalendar",
        path: "/appointment"
    },
    {
        icon: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../public/icons/Users.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
        label: "Patientenverwaltung",
        path: "/patients"
    },
    {
        icon: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../public/icons/Chart_Bar_Vertical_01.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
        label: "Statistiken",
        path: "/statistics"
    },
    {
        icon: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../public/icons/Credit_Card_01.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
        label: "Finanzmanagement",
        path: "/finance"
    },
    {
        icon: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../public/icons/File_Edit.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
        label: "Formularmanagement",
        path: "/forms"
    },
    {
        icon: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../public/icons/Settings.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
        label: "Einstellungen",
        path: "/settings"
    }, 
];
function Sidebar() {
    const router = useRouter();
    const session = useGlobalSession();
    if (!session) {
        if (false) {}
        return;
    }
    const { 0: activeLink , 1: setActiveLink  } = useState(0);
    const { 0: showModal , 1: setShowModal  } = useState(false);
    const { 0: formData , 1: setFormData  } = useState({
        Name: "",
        Krankenversicherung: "",
        Privat: "Nein",
        Geburtsdatum: "",
        Geschlecht: "",
        Adresse: "",
        Telefonnummer: "",
        Email: "",
        Notfallkontakt: ""
    });
    const { 0: errors , 1: setErrors  } = useState({});
    const handleNavigation = (index, path)=>{
        setActiveLink(index);
        router.push(path);
    };
    const validate = ()=>{
        const newErrors = {};
        Object.keys(formData).forEach((key)=>{
            if (!formData[key]) {
                newErrors[key] = `${key} ist erforderlich`;
            }
        });
        return newErrors;
    };
    const handleInputChange = (e)=>{
        const { name , value  } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            try {
                const response = await fetch("/api/patients", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        full_name: formData.Name,
                        insurance: formData.Krankenversicherung,
                        is_private: formData.Privat,
                        gender: formData.Geschlecht,
                        birth_date: formData.Geburtsdatum,
                        address: formData.Adresse,
                        phoneNumber: formData.Telefonnummer,
                        email: formData.Email,
                        practice: session?.user?.practice || null,
                        emergency_contact: formData.Notfallkontakt
                    })
                });
                if (response.ok) {
                    console.log("Patient hinzugef\xfcgt:", formData);
                    setShowModal(false);
                    setFormData({
                        full_name: "",
                        insurance: "",
                        is_private: "Nein",
                        birth_date: "",
                        gender: "",
                        address: "",
                        phoneNumber: "",
                        email: "",
                        emergency_contact: ""
                    });
                    setErrors({});
                } else {
                    console.error("Fehler beim Hinzuf\xfcgen des Patienten:", response.statusText);
                }
            } catch (err) {
                console.error("Error: ", err.message);
            }
        } else {
            setErrors(validationErrors);
        }
    };
    return /*#__PURE__*/ _jsxs("div", {
        className: classes.sidebar,
        children: [
            /*#__PURE__*/ _jsx(Sidebar_NewPatientButton, {
                onClick: ()=>setShowModal(true)
            }),
            /*#__PURE__*/ _jsx("div", {
                className: classes.links,
                children: links.map((link, index)=>/*#__PURE__*/ _jsx(SidebarLink, {
                        icon: link.icon,
                        label: link.label,
                        isActive: activeLink === index,
                        onClick: ()=>handleNavigation(index, link.path)
                    }, index))
            }),
            showModal && /*#__PURE__*/ _jsx("div", {
                className: classes.modalOverlay,
                children: /*#__PURE__*/ _jsxs("div", {
                    className: classes.modalContent,
                    children: [
                        /*#__PURE__*/ _jsx("h2", {
                            children: "Neuen Patienten hinzuf\xfcgen"
                        }),
                        /*#__PURE__*/ _jsxs("form", {
                            onSubmit: handleSubmit,
                            children: [
                                Object.keys(formData).map((key)=>/*#__PURE__*/ _jsxs("div", {
                                        className: classes.formGroup,
                                        children: [
                                            /*#__PURE__*/ _jsx("label", {
                                                children: key
                                            }),
                                            key === "Privat" ? /*#__PURE__*/ _jsxs("select", {
                                                name: key,
                                                value: formData[key],
                                                onChange: handleInputChange,
                                                className: classes.selectInput,
                                                children: [
                                                    /*#__PURE__*/ _jsx("option", {
                                                        value: "Ja",
                                                        children: "Ja"
                                                    }),
                                                    /*#__PURE__*/ _jsx("option", {
                                                        value: "Nein",
                                                        children: "Nein"
                                                    })
                                                ]
                                            }) : /*#__PURE__*/ _jsx("input", {
                                                type: "text",
                                                name: key,
                                                value: formData[key],
                                                onChange: handleInputChange,
                                                className: classes.textInput
                                            }),
                                            errors[key] && /*#__PURE__*/ _jsx("span", {
                                                className: classes.error,
                                                children: errors[key]
                                            })
                                        ]
                                    }, key)),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: classes.modalActions,
                                    children: [
                                        /*#__PURE__*/ _jsx("button", {
                                            type: "submit",
                                            children: "Hinzuf\xfcgen"
                                        }),
                                        /*#__PURE__*/ _jsx("button", {
                                            type: "button",
                                            onClick: ()=>setShowModal(false),
                                            children: "Abbrechen"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
function Sidebar_NewPatientButton({ onClick  }) {
    return /*#__PURE__*/ _jsxs("div", {
        className: classes.newPatient,
        onClick: onClick,
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: classes.add_patient_icon,
                children: /*#__PURE__*/ _jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../public/icons/User_Add.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                    className: classes.newpatient
                })
            }),
            "Neuer Patient"
        ]
    });
}
function SidebarLink({ icon: Icon , label , isActive , onClick  }) {
    return /*#__PURE__*/ _jsxs("div", {
        className: `${classes.link} ${isActive ? classes.active_link : ""}`,
        onClick: onClick,
        children: [
            /*#__PURE__*/ _jsx(Icon, {
                className: classes.link_icon
            }),
            " ",
            label
        ]
    });
}

// EXTERNAL MODULE: ./components/ui/Layout.module.css
var Layout_module = __webpack_require__(2451);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
;// CONCATENATED MODULE: ./components/ui/Layout.js
"use client";






function Layout({ children  }) {
    const router = (0,next_router.useRouter)();
    const excludedPaths = [
        "/register",
        "/login",
        "/terms",
        "/privacy"
    ];
    const isHomepage = router.pathname === "/"; // Überprüft, ob der Benutzer auf der Homepage ist.
    const isExcludedPath = excludedPaths.some((path)=>router.pathname.startsWith(path));
    if (isHomepage || isExcludedPath) {
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: children
        }); // Kein Layout für die Homepage oder Ausschluss-Pfade.
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(SessionContext/* SessionProviderWrapper */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Layout_module_default()).app,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Layout_module_default()).header,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Header, {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    className: (Layout_module_default()).content,
                    children: children
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./pages/Providers.js
var Providers = __webpack_require__(5051);
;// CONCATENATED MODULE: ./pages/_app.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'next-themes'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());







function HestiaMed({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Providers["default"], {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'next-themes'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                attribute: "class",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        })
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
var __webpack_exports__ = __webpack_require__.X(0, [7460,7113,8732,4211,7271,7482], () => (__webpack_exec__(7047)));
module.exports = __webpack_exports__;

})();