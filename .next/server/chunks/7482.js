exports.id = 7482;
exports.ids = [7482];
exports.modules = {

/***/ 970:
/***/ (() => {

throw new Error("Module build failed (from ../../AppData/Roaming/npm/node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js):\nError: Cannot find module 'tailwindcss'\nRequire stack:\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\plugins.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\index.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\index.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack-config.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\index.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\cli\\next-build.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\lib\\commands.js\n- C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\bin\\next\n    at Module._resolveFilename (node:internal/modules/cjs/loader:1048:15)\n    at mod._resolveFilename (C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\require-hook.js:27:32)\n    at mod._resolveFilename (C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\require-hook.js:27:32)\n    at Function.resolve (node:internal/modules/helpers:136:19)\n    at loadPlugin (C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\plugins.js:49:32)\n    at C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\plugins.js:157:56\n    at Array.map (<anonymous>)\n    at Object.getPostCssPlugins (C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\plugins.js:157:47)\n    at async C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\config\\blocks\\css\\index.js:100:36\n    at async C:\\Users\\musa_\\AppData\\Roaming\\npm\\node_modules\\next\\dist\\build\\webpack\\loaders\\postcss-loader\\src\\index.js:37:41");

/***/ }),

/***/ 7482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Settings)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _settings_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(970);
/* harmony import */ var _settings_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_settings_module_css__WEBPACK_IMPORTED_MODULE_2__);



function Settings() {
    const { 0: employees , 1: setEmployees  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: editingEmployee , 1: setEditingEmployee  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // geändert auf null
    const { 0: newRole , 1: setNewRole  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: employeeToDelete , 1: setEmployeeToDelete  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: newEmployee , 1: setNewEmployee  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: "",
        role: "Doctor",
        department: "",
        contactInfo: {
            phone: "",
            email: ""
        },
        qualifications: {
            degree: "",
            institution: "",
            yearOfCompletion: ""
        },
        emergencyContact: {
            name: "",
            relationship: "",
            phone: ""
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.log(newEmployee);
    }, [
        newEmployee
    ]);
    const handleEdit = (employee)=>{
        setEditingEmployee(employee);
        setNewRole(employee.role);
    };
    const handleDelete = async (id)=>{
        try {
            const response = await fetch(`/api/staff/${id}`, {
                method: "DELETE"
            });
            if (response.ok) {
                setEmployees((prevEmployees)=>prevEmployees.filter((emp)=>emp.id !== id));
            } else {
                console.error("Fehler beim L\xf6schen des Mitarbeiters");
            }
        } catch (error) {
            console.error("Fehler beim L\xf6schen des Mitarbeiters:", error);
        }
    };
    const confirmDelete = ()=>{
        setEmployees(employees.filter((emp)=>emp.id !== employeeToDelete));
        setEmployeeToDelete(null);
    };
    const handleSave = async (employee)=>{
        try {
            const updatedEmployee = {
                ...employee,
                role: newRole
            };
            console.log("before response");
            const response = await fetch(`/api/staff/${employee._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedEmployee)
            });
            if (response.ok) {
                console.log("response ok");
                const updatedData = await response.json();
                setEmployees((prevEmployees)=>prevEmployees.map((emp)=>emp._id === updatedData._id ? updatedData : emp // Korrektur hier
                    ));
                setEditingEmployee(null); // Bearbeitungsmodus verlassen
            } else {
                console.error("Fehler beim Speichern der Rolle");
            }
        } catch (error) {
            console.error("Fehler beim Speichern der Rolle:", error);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchEmployees = async ()=>{
            try {
                const response = await fetch("/api/staff"); // API-URL
                if (response.ok) {
                    const data = await response.json();
                    setEmployees(data); // Mitarbeiterdaten setzen
                } else {
                    console.error("Fehler beim Abrufen der Mitarbeiter");
                }
            } catch (error) {
                console.error("Fehler beim Abrufen der Mitarbeiter:", error);
            }
        };
        fetchEmployees(); // Aufruf der Funktion beim ersten Rendern
    }, []);
    const handleAddEmployee = async (e)=>{
        e.preventDefault();
        console.log("Neuer Mitarbeiter:", newEmployee); // Debugging
        try {
            const response = await fetch("/api/staff", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newEmployee)
            });
            if (response.ok) {
                const addedEmployee = await response.json();
                console.log("API Antwort:", addedEmployee); // Debugging
                setEmployees([
                    ...employees,
                    addedEmployee
                ]);
                setNewEmployee({
                    name: "",
                    role: "Doctor",
                    department: "",
                    contactInfo: {
                        phone: "",
                        email: ""
                    },
                    qualifications: {
                        degree: "",
                        institution: "",
                        yearOfCompletion: ""
                    },
                    emergencyContact: {
                        name: "",
                        relationship: "",
                        phone: ""
                    }
                });
            } else {
                console.error("Fehler beim Hinzuf\xfcgen des Mitarbeiters");
                const errorText = await response.text();
                console.error("Fehlermeldung:", errorText);
            }
        } catch (error) {
            console.error("Fehler beim Hinzuf\xfcgen des Mitarbeiters:", error);
        }
    };
    const handleChange = (e)=>{
        const { name , value  } = e.target;
        const nameParts = name.split(".");
        if (nameParts.length === 1) {
            setNewEmployee((prev)=>({
                    ...prev,
                    [name]: value
                }));
        } else if (nameParts.length === 2) {
            setNewEmployee((prev)=>({
                    ...prev,
                    [nameParts[0]]: {
                        ...prev[nameParts[0]],
                        [nameParts[1]]: value
                    }
                }));
        } else if (nameParts.length === 3) {
            setNewEmployee((prev)=>({
                    ...prev,
                    [nameParts[0]]: {
                        ...prev[nameParts[0]],
                        [nameParts[1]]: {
                            ...prev[nameParts[0]][nameParts[1]],
                            [nameParts[2]]: value
                        }
                    }
                }));
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "Mitarbeiter hinzuf\xfcgen"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        onSubmit: handleAddEmployee,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                name: "name",
                                placeholder: "Name",
                                value: newEmployee.name,
                                onChange: handleChange,
                                required: true
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                name: "role",
                                value: newEmployee.role,
                                onChange: handleChange,
                                required: true,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "Doctor",
                                        children: "Arzt"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "Administration",
                                        children: "Verwaltung"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                name: "department",
                                placeholder: "Abteilung",
                                value: newEmployee.department,
                                onChange: handleChange,
                                required: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                name: "contactInfo.phone",
                                placeholder: "Telefonnummer",
                                value: newEmployee.contactInfo.phone,
                                onChange: handleChange,
                                required: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "email",
                                name: "contactInfo.email",
                                placeholder: "E-Mail",
                                value: newEmployee.contactInfo.email,
                                onChange: handleChange,
                                required: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                name: "qualifications.degree",
                                placeholder: "Abschluss",
                                value: newEmployee.qualifications.degree,
                                onChange: handleChange,
                                required: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                name: "qualifications.institution",
                                placeholder: "Institution",
                                value: newEmployee.qualifications.institution,
                                onChange: handleChange,
                                required: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "number",
                                name: "qualifications.yearOfCompletion",
                                placeholder: "Jahr des Abschlusses",
                                value: newEmployee.qualifications.yearOfCompletion,
                                onChange: handleChange,
                                required: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                name: "emergencyContact.name",
                                placeholder: "Notfallkontakt Name",
                                value: newEmployee.emergencyContact.name,
                                onChange: handleChange,
                                required: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                name: "emergencyContact.relationship",
                                placeholder: "Beziehung",
                                value: newEmployee.emergencyContact.relationship,
                                onChange: handleChange,
                                required: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                name: "emergencyContact.phone",
                                placeholder: "Notfallkontakt Telefonnummer",
                                value: newEmployee.emergencyContact.phone,
                                onChange: handleChange,
                                required: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "submit",
                                className: (_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().saveBtn),
                                children: "Mitarbeiter hinzuf\xfcgen"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "Mitarbeiterrollen verwalten"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: (_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().employeeList),
                        children: employees.map((employee)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: (_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().employeeItem),
                                children: editingEmployee == false ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                            value: newRole,
                                            onChange: (e)=>setNewRole(e.target.value),
                                            className: (_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().roleSelect),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "Doctor",
                                                    children: "Arzt"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                    value: "Administration",
                                                    children: "Verwaltung"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: ()=>handleSave(employee),
                                            className: (_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().saveBtn),
                                            children: "Speichern"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: ()=>setEditingEmployee(null),
                                            className: (_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().cancelBtn),
                                            children: "Abbrechen"
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            children: [
                                                employee.name,
                                                " - ",
                                                employee.role
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: ()=>setEditingEmployee(false),
                                            className: (_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().editBtn),
                                            children: "Bearbeiten"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: ()=>{
                                                handleDelete(employee._id);
                                            },
                                            className: (_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().deleteBtn),
                                            children: "L\xf6schen"
                                        })
                                    ]
                                })
                            }, employee._id))
                    }),
                    employeeToDelete !== null && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().modalOverlay),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().modal),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Sind Sie sicher, dass Sie den Mitarbeiter l\xf6schen m\xf6chten?"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().modalActions),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: confirmDelete,
                                            className: (_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().saveBtn),
                                            children: "Ja, l\xf6schen"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: ()=>setEmployeeToDelete(null),
                                            className: (_settings_module_css__WEBPACK_IMPORTED_MODULE_2___default().cancelBtn),
                                            children: "Abbrechen"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;