exports.id = 9768;
exports.ids = [9768];
exports.modules = {

/***/ 5622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Benefits)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4211);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2956);




function Benefits(props) {
    const { data  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            style: {
                backgroundColor: "#ae9b7f"
            },
            className: "flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `flex items-center justify-center w-full lg:w-1/2 ${props.imgPos === "right" ? "lg:order-1" : ""}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            src: data.image,
                            width: "521",
                            height: "482",
                            alt: "Benefits",
                            layout: "intrinsic",
                            placeholder: "blur"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `flex flex-wrap items-center w-full lg:w-1/2 ${props.imgPos === "right" ? "lg:justify-end" : ""}`,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col w-full mt-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white",
                                        children: data.title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300",
                                        children: data.desc
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full mt-5",
                                children: data.bullets.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Benefit, {
                                        title: item.title,
                                        icon: item.icon,
                                        children: item.desc
                                    }, index))
                            })
                        ]
                    })
                })
            ]
        })
    });
}
function Benefit(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex items-start mt-8 space-x-3",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex items-center justify-center flex-shrink-0 mt-1 rounded-md w-11 h-11 ",
                    children: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().cloneElement(props.icon, {
                        className: "w-7 h-7 text-indigo-50"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            className: "text-xl font-medium text-gray-800 dark:text-gray-200",
                            children: props.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mt-1 text-gray-500 dark:text-gray-400",
                            children: props.children
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 2956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Container(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: props.id,
        className: `container p-8 mx-auto xl:px-0 ${props.className ? props.className : ""}`,
        children: props.children
    });
}


/***/ }),

/***/ 6273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Cta)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2956);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8732);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);




function Cta() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            id: "api",
            style: {
                backgroundColor: "#ae9b7f"
            },
            className: "flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex-grow text-center lg:text-left",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "text-2xl font-medium lg:text-3xl",
                            children: "Probieren Sie unser APIS aus!"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mt-2 font-medium text-white text-opacity-90 lg:text-xl",
                            children: "Verwalten Sie Ihre Patienten effizient und erstklassig!"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex-shrink-0 w-full text-center lg:w-auto",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: "/register",
                        target: "_blank",
                        rel: "noopener",
                        style: {
                            color: "#ae9b7f"
                        },
                        className: "inline-block py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 ",
                        children: "Testen Sie unsere Software kostenlos!"
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 2942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D": () => (/* binding */ benefitOne),
  "S": () => (/* binding */ benefitTwo)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./public/img/benefit-one.png
/* harmony default export */ const benefit_one = ({"src":"/_next/static/media/benefit-one.a3b4f792.png","height":486,"width":462,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABCElEQVR42mPwNnVjYoAA4+snT+3+/+nj/z+vXz/+/fixKQMINDdPZAXREyfPmbh27/H/X589//H73bv//379uvTj/39mBhhICI49uWDX0f87T1/79evT5/////79/OvzF2GYfBQDg8u/+p2X3n26d/3//2f3/v95/6mRAQT+T9sjdXFu/oNryzL//zqzZOPfE2tPftu4pg0k95qBgYXhIQOD6P8tvUH/D8+u+Xsg78ifI8X/fyxpS13GkO31qKpZiOHP3Xsb/7x4n/KAgYHv98Hy3/+Odhz+3rgo8OWhJXn/j27kZvh07fq5Tzdv9+7KjLCbMLnv84zyutyX5X2hnx9srd00tUkGAIQrlI5+03BSAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/img/benefit-two.png
/* harmony default export */ const benefit_two = ({"src":"/_next/static/media/benefit-two.1d7648d5.png","height":482,"width":521,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA3UlEQVR42mNAgO9M/9595n7847/6lNm3+jtWv/UAC/cv/m0xZfnvC+WTfmr9//9f+tOn///3Xvv333fT3+dVh/8LMsxZ++vVvHW//9fN/qP38e4f4ddv/z288/zf/9Stv55abvmvxnDy7L//C9f8+b98z+9byw78v9u47F8tU+m//6Z1/2ZCrE78Xzxl0de/B859+79w7/+9vtX/ghkS/52RTvvfAXfem3P3tI+c+WIN5sT/89DI+58tnPU/E67gv+DOkP9Wu+r+L9mrpVT938+r6o+Rd9XfoP/OW+wB7TZ8LW+vHicAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":7});
;// CONCATENATED MODULE: ./components/data.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@heroicons/react/outline'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-icons/fa'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





const benefitOne = {
    title: "Hestia Med - Features",
    desc: "Hestia Med unterst\xfctzt Ihre Praxis mit einem umfassenden Arztpraxisinformationssystem.",
    image: benefit_one,
    bullets: [
        {
            title: "Verwaltung von Patienteninformationen",
            desc: "Alle relevanten Patientendaten sind zentralisiert und einfach zug\xe4nglich.",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@heroicons/react/outline'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                style: {
                    color: "#ae9b7f",
                    border: "none"
                }
            })
        },
        {
            title: "Terminplanung",
            desc: "Optimierte Kalender- und Terminverwaltungsfunktionen f\xfcr eine effiziente Planung.",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@heroicons/react/outline'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                style: {
                    color: "#ae9b7f"
                }
            })
        },
        {
            title: "Platzersparnis und Organisation",
            desc: "Es wird kein physischer Speicherplatz f\xfcr Papierakten ben\xf6tigt, und die Dokumente sind einfach zu kategorisieren und schnell zug\xe4nglich.",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@heroicons/react/outline'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                style: {
                    color: "#ae9b7f"
                }
            })
        }, 
    ]
};
const benefitTwo = {
    title: "Technische Aspekte von Hestia - Med",
    desc: "Hestia Med nutzt moderne Technologien und Tools, um die Praxisverwaltung effizient, sicher und benutzerfreundlich zu gestalten. Mit einer robusten Architektur und flexiblen Funktionen unterst\xfctzt es Sie, Ihre Praxis optimal zu organisieren und zu digitalisieren.",
    image: benefit_two,
    bullets: [
        {
            title: "Cloud-Datenbank",
            desc: "Dank der Cloud-Datenbank k\xf6nnen alle Praxisdaten sicher gespeichert und von verschiedenen Ger\xe4ten aus synchronisiert werden. Diese L\xf6sung sorgt f\xfcr eine hohe Verf\xfcgbarkeit und stellt sicher, dass Daten jederzeit und \xfcberall zug\xe4nglich sind.",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-icons/fa'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                style: {
                    color: "#ae9b7f"
                }
            })
        },
        {
            title: "Skalierbarkeit",
            desc: "Hestia Med ist skalierbar und eignet sich f\xfcr kleine Praxen genauso wie f\xfcr gro\xdfe Kliniken, mit der M\xf6glichkeit, mit Ihrer Praxis zu wachsen.",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-icons/fa'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                style: {
                    color: "#ae9b7f"
                }
            })
        },
        {
            title: "Powered by Next.js & TailwindCSS / CSS",
            desc: "Die Anwendung basiert auf Next.js f\xfcr eine schnelle und leistungsstarke Nutzeroberfl\xe4che und TailwindCSS f\xfcr ein flexibles, anpassbares Design. Diese Technologien bieten eine solide Grundlage f\xfcr eine skalierbare und performante L\xf6sung.",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@heroicons/react/outline'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                style: {
                    color: "#ae9b7f"
                }
            })
        }, 
    ]
};



/***/ }),

/***/ 9094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Faq)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2956);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@headlessui/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@heroicons/react/solid'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





function Faq() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: "!p-0",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-full max-w-2xl p-2 mx-auto rounded-2xl",
            children: faqdata.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mb-5",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@headlessui/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                        children: ({ open  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@headlessui/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                                        className: "flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: item.question
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@heroicons/react/solid'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                                                className: `${open ? "transform rotate-180" : ""} w-5 h-5 text-indigo-500`
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@headlessui/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                                        className: "px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300",
                                        children: item.answer
                                    })
                                ]
                            })
                    })
                }, item.question))
        })
    });
}
const faqdata = [
    {
        question: "Ist Hestia Med f\xfcr meine Praxis geeignet?",
        answer: "Ja, Hestia Med wurde speziell f\xfcr Allgemein\xe4rzte und niedergelassene \xc4rzte entwickelt. Es bietet eine benutzerfreundliche und effiziente L\xf6sung f\xfcr die Praxisverwaltung."
    },
    {
        question: "Kann ich meine Patientendaten mit Hestia Med sicher speichern?",
        answer: "Ja, Hestia Med nutzt eine Cloud-Datenbank, die sicherstellt, dass Ihre Patientendaten jederzeit und von verschiedenen Ger\xe4ten aus zug\xe4nglich sind, w\xe4hrend sie gleichzeitig den h\xf6chsten Sicherheitsstandards entspricht."
    },
    {
        question: "Bietet Hestia Med Unterst\xfctzung f\xfcr die Terminplanung?",
        answer: "Ja, Hestia Med verf\xfcgt \xfcber ein leistungsstarkes Terminplanungssystem, das Ihnen hilft, Ihre Sprechstunden effizient zu verwalten und Doppelbuchungen zu vermeiden."
    },
    {
        question: "Kann ich Hestia Med auch f\xfcr die Verwaltung von Rezepten und \xdcberweisungen nutzen?",
        answer: "Ja, Hestia Med erm\xf6glicht die digitale Verwaltung von Rezepten, \xdcberweisungen und anderen administrativen Aufgaben, sodass Sie diese Prozesse schneller und effizienter gestalten k\xf6nnen."
    },
    {
        question: "Gibt es eine M\xf6glichkeit, Unterst\xfctzung bei der Nutzung von Hestia Med zu erhalten?",
        answer: "Ja, wir bieten ein Support-Paket an, das Ihnen 6 Monate technische Unterst\xfctzung und Beratung zu Fragen rund um die Nutzung von Hestia Med bietet."
    },
    {
        question: "Ist Hestia Med mit den Datenschutzbestimmungen f\xfcr \xc4rzte kompatibel?",
        answer: "Ja, Hestia Med entspricht den geltenden Datenschutzvorschriften wie der DSGVO, sodass die Daten Ihrer Patienten immer sicher und datenschutzkonform behandelt werden."
    }, 
];


/***/ }),

/***/ 6334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8732);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2956);




function Footer() {
    const navigation = [
        "Product",
        "Features"
    ];
    const legal = [
        {
            label: "Terms",
            value: "/terms"
        },
        {
            label: "Privacy",
            value: "/privacy"
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "lg:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            " ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: "/",
                                                style: {
                                                    color: "#ae9b7f"
                                                },
                                                className: "flex items-center space-x-2 text-2xl font-medium dark:text-gray-100",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: "/img/hestia_logo.png",
                                                            alt: "N",
                                                            width: "32",
                                                            height: "32",
                                                            className: "w-8"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "Hestia - Med"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "max-w-md mt-4 text-gray-500 dark:text-gray-400",
                                        children: "Hestia Med is a modern practice management system designed for general practitioners and private practices. It helps streamline patient management, appointment scheduling, and daily administrative tasks. Built with the latest technologies, it ensures secure data storage, scalability, and easy access."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0",
                                    children: navigation.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: "/",
                                            className: "w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 focus:outline-none dark:focus:bg-trueGray-700",
                                            children: item
                                        }, index))
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0",
                                    children: legal.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: item.value,
                                            className: "w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 focus:outline-none dark:focus:bg-trueGray-700",
                                            children: item.label
                                        }, index))
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: "Follow us"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex mt-5 space-x-5 text-gray-400 dark:text-gray-500",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: "https://twitter.com/hestia-med",
                                                target: "_blank",
                                                rel: "noopener",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "sr-only",
                                                        children: "Twitter"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Twitter, {})
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: "https://facebook.com/hestia-med",
                                                target: "_blank",
                                                rel: "noopener",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "sr-only",
                                                        children: "Facebook"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Facebook, {})
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: "https://instagram.com/hestia-med",
                                                target: "_blank",
                                                rel: "noopener",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "sr-only",
                                                        children: "Instagram"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Instagram, {})
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: "https://linkedin.com/",
                                                target: "_blank",
                                                rel: "noopener",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "sr-only",
                                                        children: "Linkedin"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Linkedin, {})
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "hidden my-10 text-sm text-center text-gray-600 dark:text-gray-400",
                        children: [
                            "Copyright \xa9 ",
                            new Date().getFullYear(),
                            ". Made by",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "https://hestia-med.com/",
                                target: "_blank",
                                rel: "noopener",
                                children: "Hestia - Med"
                            }),
                            " "
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Backlink, {})
        ]
    });
}
const Twitter = ({ size =24  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z"
        })
    });
const Facebook = ({ size =24  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07"
        })
    });
const Instagram = ({ size =24  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z"
        })
    });
const Linkedin = ({ size =24  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z"
        })
    });
const Backlink = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        style: {
            color: "ae9b7f"
        },
        href: "https://hestia-med.com",
        target: "_blank",
        rel: "noopener",
        className: "hidden absolute flex px-3 py-1 space-x-2 text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded shadow-sm place-items-center left-5 bottom-5 dark:bg-trueGray-900 dark:border-trueGray-700 dark:text-trueGray-300",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 30 30",
                fill: "none",
                className: "w-4 h-4",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        width: "30",
                        height: "29.5385",
                        rx: "2.76923",
                        fill: "#362F78"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M10.14 21.94H12.24L15.44 12.18L18.64 21.94H20.74L24.88 8H22.64L19.58 18.68L16.36 8.78H14.52L11.32 18.68L8.24 8H6L10.14 21.94Z",
                        fill: "#F7FAFC"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: "Hestia - Med"
            })
        ]
    });
};


/***/ }),

/***/ 3318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Hero)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ../../AppData/Roaming/npm/node_modules/next/image.js
var next_image = __webpack_require__(4211);
// EXTERNAL MODULE: ./components/container.js
var container = __webpack_require__(2956);
;// CONCATENATED MODULE: ./public/img/hero.png
/* harmony default export */ const hero = ({"src":"/_next/static/media/hero.4e76c802.png","height":617,"width":616,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA+UlEQVR42mOAgU0zT7KA6Cfnf3BF+mTk+Won6TKAwP///9Pv3f2aB2Sy75j8WOr4lIca/X4r1wL5jD9f/OcCKrhn8GTP/P8LSxZtPB/83+LOnL9Jfz/9P/781RfFWRVXhYAK8zn/Ho2c+nJHcd+emrMF99r+7f9y5/+3////WzKAQLLzZQGYO9qStqtUOx7eODnnzP+u8jPdDCBQ6HqE+3T/EQ4Q+17xf531qc/+h8jv+RjMcMCfAQTSTY/xzI66zw1inwr9E3yv5n/97cm/S0H8h/3/mRgqw04BJXcwHdp7X/zMgnfTb11+X3xjz4c1Zza/iGBgYGAAAAJadlimfOJ0AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ../../AppData/Roaming/npm/node_modules/next/link.js
var next_link = __webpack_require__(8732);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/hero.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'three/examples/jsm/loaders/GLTFLoader'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'three'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tailwindcss/defaultTheme'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());









function Hero() {
    (0,external_react_.useEffect)(()=>{
        const container = document.getElementById("threejs_left_container");
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
            model.scale.set(5, 5, 5); // Scale the model
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
        // Resize handler
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
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(container/* default */.Z, {
                className: "flex flex-wrap ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex items-center w-full lg:w-1/2",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "max-w-2xl mb-8",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white",
                                    children: "Hestia - Med"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300",
                                    children: "Hestia Med ist ein modernes Praxismanagement-System f\xfcr Allgemeinmediziner und niedergelassene \xc4rzte. Es hilft, die Patientenverwaltung, Terminplanung und t\xe4gliche administrative Aufgaben zu optimieren. Mit den neuesten Technologien entwickelt, gew\xe4hrleistet es eine sichere Datenspeicherung, Skalierbarkeit und einfachen Zugriff von jedem Ger\xe4t aus."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex flex-col items-start space-x-3 space-y-3 sm:space-y-0 sm:items-center sm:flex-row",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "https://github.com/web3templates",
                                        target: "_blank",
                                        rel: "noopener",
                                        className: "px-8 py-4 bg-customGold text-lg font-medium text-center text-white rounded-md ",
                                        children: "Testen Sie kostenlos unsere Software!"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex items-center justify-center w-full lg:w-1/2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "hidden lg:block",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                id: "threejs_left_container",
                                style: {
                                    marginTop: "-300px",
                                    width: "700px",
                                    height: "400px"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("canvas", {})
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(container/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col justify-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "text-xl text-center text-gray-700 dark:text-white",
                            children: [
                                "Vertrauen von \xfcber ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    style: {
                                        color: "#ae9b7f"
                                    },
                                    children: "2000+"
                                }),
                                " Kunden"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-wrap justify-center gap-5 mt-10 md:justify-around",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "pt-2 text-gray-400 dark:text-gray-400",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(AmazonLogo, {})
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-gray-400 dark:text-gray-400",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(VerizonLogo, {})
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-gray-400 dark:text-gray-400",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(MicrosoftLogo, {})
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "pt-1 text-gray-400 dark:text-gray-400",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(NetflixLogo, {})
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "pt-2 text-gray-400 dark:text-gray-400",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(SonyLogo, {})
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
function AmazonLogo() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "110",
        height: "33",
        fill: "none",
        viewBox: "0 0 110 33",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                fill: "currentColor",
                clipPath: "url(#clip0)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fillRule: "evenodd",
                        d: "M67.776 25.783c-6.323 4.676-15.521 7.167-23.455 7.167-11.114 0-21.079-4.1-28.667-10.923-.575-.536-.077-1.264.651-.843 8.163 4.752 18.243 7.589 28.668 7.589 7.013 0 14.755-1.457 21.884-4.485 1.073-.421 1.954.729.92 1.495z",
                        clipRule: "evenodd"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fillRule: "evenodd",
                        d: "M70.42 22.756c-.804-1.035-5.365-.499-7.396-.23-.613.076-.728-.46-.153-.844 3.64-2.567 9.581-1.8 10.271-.958.69.843-.192 6.822-3.603 9.658-.536.422-1.034.192-.804-.383.766-1.916 2.49-6.17 1.686-7.243z",
                        clipRule: "evenodd"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M63.139 3.67V1.177c0-.383.268-.613.613-.613h11.115c.345 0 .651.268.651.613v2.108c0 .345-.306.805-.843 1.571l-5.749 8.202c2.146-.038 4.408.268 6.324 1.341.421.23.536.614.575.959v2.644c0 .383-.383.805-.805.575-3.411-1.801-7.972-1.993-11.728.038-.383.192-.805-.191-.805-.575v-2.529c0-.383 0-1.073.422-1.686l6.669-9.543H63.79c-.344 0-.651-.269-.651-.614zm-40.51 15.445h-3.373c-.306-.039-.575-.269-.613-.575V1.217c0-.345.307-.614.652-.614h3.142c.345 0 .575.269.613.575V3.44h.077C23.932 1.255 25.503.22 27.573.22c2.108 0 3.45 1.035 4.369 3.22.805-2.185 2.683-3.22 4.676-3.22 1.418 0 2.95.575 3.909 1.916 1.073 1.457.843 3.565.843 5.443v10.96c0 .346-.306.614-.651.614h-3.335c-.345-.038-.613-.307-.613-.613V9.342c0-.729.077-2.568-.077-3.258-.268-1.15-.996-1.495-1.992-1.495-.805 0-1.687.537-2.032 1.418-.345.882-.306 2.338-.306 3.335v9.198c0 .345-.307.613-.652.613H28.34c-.345-.038-.613-.307-.613-.613V9.342c0-1.917.307-4.791-2.07-4.791-2.414 0-2.337 2.76-2.337 4.79v9.199c-.038.306-.307.575-.69.575zM85.099.22c5.021 0 7.742 4.293 7.742 9.773 0 5.289-2.99 9.505-7.741 9.505-4.906 0-7.589-4.293-7.589-9.658C77.473 4.436 80.194.22 85.1.22zm0 3.564c-2.49 0-2.644 3.411-2.644 5.52 0 2.107-.038 6.63 2.606 6.63 2.606 0 2.76-3.641 2.76-5.864 0-1.457-.077-3.22-.499-4.6-.383-1.226-1.15-1.686-2.222-1.686zm14.22 15.33h-3.373c-.345-.038-.614-.306-.614-.613V1.14a.662.662 0 01.652-.575h3.143c.306 0 .536.23.613.498v2.645h.077c.958-2.376 2.261-3.488 4.599-3.488 1.494 0 2.989.537 3.947 2.031.882 1.38.882 3.718.882 5.404v10.923c-.039.307-.307.537-.652.537h-3.373c-.306-.039-.574-.269-.613-.537V9.15c0-1.916.23-4.676-2.108-4.676-.804 0-1.571.537-1.954 1.38-.46 1.073-.537 2.108-.537 3.296V18.5a.702.702 0 01-.69.614zm-41.622-.038a.693.693 0 01-.805.077c-1.111-.92-1.341-1.38-1.955-2.261-1.84 1.878-3.18 2.453-5.557 2.453-2.836 0-5.059-1.764-5.059-5.251 0-2.76 1.495-4.6 3.603-5.519 1.84-.805 4.407-.958 6.362-1.188v-.422c0-.804.076-1.763-.422-2.452-.421-.614-1.188-.882-1.878-.882-1.303 0-2.453.652-2.72 2.031-.078.307-.27.614-.576.614l-3.257-.345c-.269-.077-.575-.269-.499-.69.767-3.986 4.331-5.174 7.55-5.174 1.648 0 3.795.421 5.098 1.686 1.648 1.533 1.495 3.603 1.495 5.826v5.25c0 1.571.651 2.261 1.264 3.143.23.307.268.69 0 .881-.728.575-1.954 1.648-2.644 2.223zm-3.411-8.24v-.728c-2.453 0-5.02.537-5.02 3.411 0 1.456.766 2.453 2.069 2.453.958 0 1.801-.575 2.338-1.533.651-1.188.613-2.3.613-3.603zm-41.698 8.317c-1.112-.92-1.342-1.38-1.955-2.261-1.84 1.878-3.181 2.453-5.557 2.453-2.836 0-5.06-1.764-5.06-5.251 0-2.76 1.496-4.6 3.603-5.519 1.84-.805 4.408-.958 6.362-1.188v-.422c0-.804.077-1.763-.421-2.452-.422-.614-1.188-.882-1.878-.882-1.303 0-2.453.652-2.721 2.031-.077.307-.268.614-.575.614L1.128 5.93C.86 5.854.553 5.662.63 5.24 1.397 1.255 4.96.067 8.18.067c1.648 0 3.794.421 5.098 1.686 1.647 1.533 1.494 3.603 1.494 5.826v5.25c0 1.571.652 2.261 1.265 3.143.23.307.268.69 0 .881-.728.575-1.955 1.648-2.644 2.223a.693.693 0 01-.805.077zm-2.568-8.317v-.728c-2.453 0-5.02.537-5.02 3.411 0 1.456.766 2.453 2.069 2.453.958 0 1.801-.575 2.338-1.533.651-1.188.613-2.3.613-3.603z"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: "clip0",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "#fff",
                        d: "M0 0H109.272V33H0z"
                    })
                })
            })
        ]
    });
}
function MicrosoftLogo() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "150",
        height: "31",
        fill: "none",
        viewBox: "0 0 150 31",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "currentColor",
                d: "M150 14.514v-2.647h-3.295V7.75l-.11.034-3.095.945-.061.019v3.118h-4.884V10.13c0-.81.181-1.428.538-1.841.355-.408.863-.615 1.51-.615.465 0 .947.11 1.431.325l.122.054V5.265l-.057-.021c-.452-.162-1.068-.244-1.83-.244-.96 0-1.834.209-2.596.622a4.428 4.428 0 00-1.78 1.757c-.419.751-.631 1.618-.631 2.578v1.91h-2.294v2.647h2.294v11.153h3.293V14.514h4.884v7.088c0 2.919 1.38 4.398 4.1 4.398a6.78 6.78 0 001.4-.155c.488-.105.822-.21 1.018-.322l.043-.026v-2.672l-.134.089c-.204.13-.428.227-.662.288a2.514 2.514 0 01-.65.11c-.638 0-1.11-.171-1.402-.51-.296-.34-.446-.938-.446-1.773v-6.515H150zm-24.387 8.799c-1.195 0-2.137-.396-2.801-1.175-.669-.783-1.007-1.9-1.007-3.317 0-1.464.338-2.61 1.007-3.406.664-.791 1.598-1.193 2.775-1.193 1.142 0 2.05.383 2.702 1.14.654.762.986 1.898.986 3.379 0 1.498-.312 2.65-.928 3.42-.612.764-1.531 1.152-2.734 1.152zm.147-11.779c-2.28 0-4.092.667-5.383 1.982-1.291 1.315-1.945 3.136-1.945 5.41 0 2.161.638 3.9 1.898 5.165 1.26 1.267 2.975 1.908 5.096 1.908 2.21 0 3.986-.676 5.277-2.009 1.29-1.332 1.945-3.135 1.945-5.356 0-2.195-.614-3.946-1.825-5.204-1.211-1.258-2.915-1.896-5.063-1.896zm-12.638 0c-1.551 0-2.834.396-3.815 1.177-.986.785-1.486 1.815-1.486 3.062 0 .647.108 1.223.32 1.711.214.49.545.921.985 1.283.436.359 1.11.735 2.001 1.117.75.308 1.31.569 1.665.774.347.201.594.404.733.6.135.193.204.457.204.783 0 .927-.696 1.378-2.128 1.378-.53 0-1.136-.11-1.8-.329a6.76 6.76 0 01-1.844-.932l-.136-.098v3.164l.05.023c.466.215 1.053.396 1.746.538a9.428 9.428 0 001.864.215c1.684 0 3.04-.398 4.028-1.183.996-.79 1.5-1.845 1.5-3.135 0-.93-.271-1.728-.807-2.37-.531-.639-1.454-1.225-2.74-1.743-1.026-.41-1.683-.751-1.954-1.013-.261-.253-.394-.61-.394-1.063 0-.401.164-.723.5-.983.339-.262.81-.395 1.401-.395.55 0 1.11.087 1.669.256.517.15 1.008.378 1.457.674l.134.092v-3.001l-.051-.022c-.378-.162-.875-.3-1.48-.412a9.053 9.053 0 00-1.622-.168zM99.236 23.313c-1.195 0-2.138-.396-2.802-1.175-.668-.783-1.006-1.899-1.006-3.317 0-1.464.338-2.61 1.007-3.406.664-.791 1.597-1.193 2.774-1.193 1.142 0 2.05.383 2.702 1.14.655.762.987 1.898.987 3.379 0 1.498-.313 2.65-.929 3.42-.611.764-1.53 1.152-2.733 1.152zm.147-11.779c-2.281 0-4.093.667-5.384 1.982-1.29 1.315-1.945 3.136-1.945 5.41 0 2.162.64 3.9 1.9 5.165C95.213 25.358 96.927 26 99.048 26c2.21 0 3.986-.676 5.277-2.009 1.29-1.332 1.945-3.135 1.945-5.356 0-2.195-.614-3.946-1.825-5.204-1.212-1.258-2.916-1.896-5.063-1.896l.001-.001zm-12.328 2.723v-2.39h-3.253v13.8h3.253v-7.06c0-1.2.273-2.186.811-2.93.531-.737 1.24-1.11 2.104-1.11.293 0 .622.049.978.144.353.095.608.198.759.306l.136.099v-3.273l-.052-.022c-.303-.129-.732-.194-1.274-.194-.818 0-1.55.263-2.176.779-.55.453-.947 1.075-1.251 1.85h-.035v.001zm-9.079-2.723c-1.492 0-2.823.32-3.955.95a6.4 6.4 0 00-2.61 2.676c-.594 1.143-.896 2.478-.896 3.966 0 1.304.293 2.5.871 3.555a6.114 6.114 0 002.435 2.456c1.035.573 2.231.863 3.556.863 1.546 0 2.866-.309 3.924-.917l.043-.024v-2.974l-.137.1a6.12 6.12 0 01-1.591.826c-.575.2-1.1.302-1.56.302-1.276 0-2.3-.399-3.044-1.185-.746-.786-1.123-1.891-1.123-3.281 0-1.4.394-2.533 1.17-3.369.775-.833 1.802-1.256 3.052-1.256 1.069 0 2.11.361 3.096 1.075l.137.098v-3.133l-.044-.025c-.371-.207-.877-.378-1.505-.508a9.005 9.005 0 00-1.819-.195zm-9.701.333h-3.253v13.8h3.253v-13.8zm-1.593-5.879c-.536 0-1.003.182-1.386.542a1.786 1.786 0 00-.581 1.354c0 .529.193.975.575 1.327.379.351.847.529 1.392.529a2.01 2.01 0 001.398-.528 1.729 1.729 0 00.582-1.328c0-.518-.19-.969-.566-1.339-.375-.37-.851-.557-1.414-.557zm-8.117 4.86v14.819h3.32V6.41H57.29l-5.84 14.302L45.782 6.41H41v19.256h3.12v-14.82h.107l5.985 14.82h2.354l5.892-14.818h.107z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M15 14H0V0h15v14zm17 0H17V0h15v14zM15 31H0V17h15v14zm17 0H17V17h15v14z",
                clipRule: "evenodd"
            })
        ]
    });
}
function NetflixLogo() {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "108",
        height: "29",
        fill: "none",
        viewBox: "0 0 108 29",
        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "currentColor",
                d: "M14.714 27.096c-1.61.283-3.248.367-4.942.593L4.603 12.551V28.34c-1.61.17-3.078.395-4.603.621V.04h4.293l5.874 16.409V.039h4.547v27.057zm8.897-16.465c1.75 0 4.434-.085 6.044-.085v4.519c-2.006 0-4.35 0-6.044.085v6.721c2.655-.17 5.31-.395 7.992-.48v4.35l-12.511.988V.039h12.511v4.52h-7.992v6.072zm24.797-6.072h-4.689v20.786c-1.525 0-3.05 0-4.518.056V4.56h-4.688V.039h13.895v4.52zm7.343 5.761h6.185v4.519H55.75V25.09h-4.435V.04h12.625v4.519h-8.19v5.761zm15.533 10.817c2.57.056 5.168.254 7.682.395v4.463c-4.038-.255-8.077-.509-12.2-.594V.04h4.518v21.097zm11.495 5.168c1.44.085 2.965.17 4.434.34V.04h-4.434v26.265zM107.01.04l-5.733 13.754 5.733 15.166c-1.695-.226-3.389-.537-5.084-.819l-3.248-8.36-3.304 7.683c-1.638-.283-3.22-.368-4.857-.594l5.818-13.246L91.082.04h4.858l2.965 7.597L102.07.04h4.942z"
            })
        })
    });
}
function SonyLogo() {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "136",
        height: "24",
        viewBox: "0 0 351 61",
        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
            fill: "none",
            fillRule: "evenodd",
            stroke: "none",
            strokeWidth: "1",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                fill: "currentColor",
                fillRule: "nonzero",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M345.559 49.001a5.448 5.448 0 00-4.81 2.72 5.538 5.538 0 000 5.559 5.448 5.448 0 004.81 2.719 5.425 5.425 0 003.855-1.618A5.513 5.513 0 00351 54.487c0-1.454-.573-2.85-1.593-3.879a5.42 5.42 0 00-3.848-1.607zm0 10.337a4.774 4.774 0 01-3.4-1.42 4.85 4.85 0 01-1.399-3.43c0-1.282.507-2.51 1.407-3.415a4.768 4.768 0 013.392-1.409c1.269 0 2.485.509 3.383 1.413a4.84 4.84 0 011.4 3.41 4.847 4.847 0 01-1.393 3.427 4.77 4.77 0 01-3.39 1.424z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M348.163 53.183c0-.503-.223-1.032-.67-1.285-.45-.265-.952-.291-1.456-.291h-2.604v5.958h.729v-2.748h1.344l1.706 2.748h.868l-1.805-2.748c1.065-.03 1.888-.462 1.888-1.634zm-2.882 1.06h-1.121v-2.107h1.706c.742 0 1.556.112 1.556 1.034.002 1.213-1.303 1.073-2.14 1.073zm-31.199-29.868l10.93-11.639c.634-.854.95-1.453.95-1.965 0-.854-.738-1.196-3.055-1.196h-2.758V2.227H350v7.348h-3.922c-4.53 0-5.371.682-11.691 8.628l-17.292 18.622V48.19c0 2.907 1.472 3.93 5.686 3.93h6.529v7.09H287.5v-7.09h6.527c4.211 0 5.687-1.023 5.687-3.93V36.825l-20.366-22.468c-3.366-3.928-2.9-4.782-12.271-4.782V2.227h37.811v7.348h-2.692c-2.74 0-3.9.512-3.9 1.536 0 .857.842 1.54 1.369 2.222l10.304 11.199c1.224 1.27 2.718 1.434 4.113-.157zM60.388 2.225h9.12v20.503h-8.423c-.746-4.099-3.318-5.693-5.664-7.844-4.231-3.877-13.395-7.106-21.102-7.106-9.948 0-18.344 3.077-18.344 7.602 0 12.56 56.892 2.565 56.892 26.314C72.867 54.08 60.68 61 38.796 61c-7.577 0-19.041-2.345-25.805-5.927-2.12-1.22-3.02 1.156-3.418 4.134H.22V38.02h8.46c1.865 5.383 4.435 6.491 6.8 8.628 4.101 3.76 13.865 6.496 22.82 6.408 13.5-.133 18.142-3.076 18.142-7.348 0-4.27-4.591-5.297-19.385-7.602l-12.562-2.051C10.321 33.918 0 30.758 0 19.482 0 7.778 13.056.43 33.7.43c8.699 0 15.977 1.16 22.963 5.097 1.934 1.254 3.75 1.404 3.725-3.302zM238.39 36.552l.18-22.787c0-2.99-1.56-4.015-6.016-4.015h-5.236V2.66h33.315v7.09h-4.342c-4.46 0-6.02 1.027-6.02 4.015V59.64l-13.04-.103-42.228-39.878v28.96c0 2.906 1.56 4.015 6.017 4.015h5.797v7.006h-34.6v-7.006h5.733c4.456 0 6.016-1.11 6.016-4.014V13.765c0-2.99-1.56-4.015-6.016-4.015h-5.733V2.66h29.914l36.26 33.892zM126.796 0c-26.551 0-43.172 11.706-43.172 30.498 0 18.456 16.39 30.072 42.362 30.072 27.586 0 43.632-11.446 43.632-31.01C169.62 11.962 152.304 0 126.796 0zm-.604 53.14c-14.697 0-23.145-8.459-23.145-23.068 0-14.266 8.816-22.724 23.88-22.724 14.451 0 22.899 8.63 22.899 23.324 0 14.352-8.572 22.468-23.634 22.468z"
                    })
                ]
            })
        })
    });
}
function VerizonLogo() {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "138",
        height: "31",
        viewBox: "0 0 658 146",
        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
            fill: "none",
            fillRule: "evenodd",
            stroke: "none",
            strokeWidth: "1",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "currentColor",
                        d: "M642.7 0L606.8 76.8 593.3 47.7 578.7 47.7 600.9 95.3 612.7 95.3 657.2 0z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fill: "currentColor",
                        fillRule: "nonzero",
                        d: "M488.7 142.6h28.9V89.7c0-12.1 7-20.6 17.4-20.6 10 0 15.2 7 15.2 17.1v56.4h28.9V80.7c0-21-12.6-35.8-33-35.8-13 0-22.1 5.6-28.9 15.8h-.6v-13h-28l.1 94.9zm-56.8-97.5c-30.2 0-50.4 21.7-50.4 50.3 0 28.4 20.2 50.3 50.4 50.3s50.4-21.9 50.4-50.3c.1-28.6-20.2-50.3-50.4-50.3zm-.2 79.2c-13.7 0-21-11.5-21-28.9 0-17.6 7.2-28.9 21-28.9 13.7 0 21.3 11.3 21.3 28.9.1 17.4-7.5 28.9-21.3 28.9zm-132.6 18.3h81.2v-22.8h-46v-.6l44-49.3V47.6h-79.2v22.9h44.5v.6l-44.5 49.7v21.8zm-37.1 0h29.1V47.7H262v94.9zm-67.5 0h29V99c0-19.8 11.9-28.6 30-26.1h.6v-25c-1.5-.6-3.2-.7-5.9-.7-11.3 0-18.9 5.2-25.4 16.3h-.6V47.7h-27.7v94.9zm-53.2-18.2c-12.8 0-20.6-8.3-22.1-21.1h68.4c.2-20.4-5.2-36.7-16.5-46.9-8-7.4-18.5-11.5-31.9-11.5-28.6 0-48.4 21.7-48.4 50.1 0 28.6 18.9 50.4 50.3 50.4 11.9 0 21.3-3.2 29.1-8.5 8.3-5.7 14.3-14.1 15.9-22.4h-27.8c-2.7 6.2-8.5 9.9-17 9.9zm-1.5-58.8c10.2 0 17.2 7.6 18.4 18.7h-38.8c2.3-11.2 8.4-18.7 20.4-18.7zM33 142.6h30.4l33-94.9H67.3l-18.5 61h-.4l-18.5-61H0l33 94.9zM262 13.9h29.1v25.8H262V13.9z"
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 9909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Navbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ../../AppData/Roaming/npm/node_modules/next/link.js
var next_link = __webpack_require__(8732);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/DarkSwitch.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'next-themes'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



const ThemeChanger = ()=>{
    const { 0: mounted , 1: setMounted  } = (0,external_react_.useState)(false);
    const { theme , setTheme  } = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'next-themes'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    // When mounted on client, now we can show the UI
    (0,external_react_.useEffect)(()=>setMounted(true), []);
    if (!mounted) return null;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex items-center",
        children: theme === "dark" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
            onClick: ()=>setTheme("light"),
            className: "text-gray-300 rounded-full outline-none focus:outline-none",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "sr-only",
                    children: "Light Mode"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "w-5 h-5",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                    })
                })
            ]
        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
            onClick: ()=>setTheme("dark"),
            className: "text-gray-500 rounded-full outline-none focus:outline-none focus-visible:ring focus-visible:ring-gray-100 focus:ring-opacity-20",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "sr-only",
                    children: "Dark Mode"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                            cx: "12",
                            cy: "12",
                            r: "5"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const DarkSwitch = (ThemeChanger);

;// CONCATENATED MODULE: ./components/navbar.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@headlessui/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




function Navbar() {
    const navigation = [
        {
            name: "Features",
            href: "#features"
        },
        {
            name: "Tutorial",
            href: "#tutorial"
        },
        {
            name: "Github",
            href: "https://github.com/Hestia-Med"
        },
        {
            name: "FAQ",
            href: "#faq"
        }, 
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: "container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@headlessui/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                    children: ({ open  })=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-wrap items-center justify-between w-full lg:w-auto",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                        href: "/",
                                        style: {
                                            color: "#ae9b7f"
                                        },
                                        className: "flex items-center space-x-2 text-2xl font-medium dark:text-gray-100",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/img/hestia_logo.png",
                                                    alt: "N",
                                                    width: "32",
                                                    height: "32",
                                                    className: "w-8"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Hestia - Med"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@headlessui/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                                        "aria-label": "Toggle Menu",
                                        className: "px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                            className: "w-6 h-6 fill-current",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                            children: [
                                                open && /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    fillRule: "evenodd",
                                                    clipRule: "evenodd",
                                                    d: "M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                                }),
                                                !open && /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    fillRule: "evenodd",
                                                    d: "M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@headlessui/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                                        className: "flex flex-wrap w-full my-5 lg:hidden",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                            children: [
                                                navigation.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: item.href,
                                                        className: "w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 focus:outline-none dark:focus:bg-trueGray-700",
                                                        children: item.name
                                                    }, index)),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    className: "w-full px-6 py-2 mt-3 text-center text-white bg-customGold rounded-md lg:ml-5",
                                                    href: "/register",
                                                    children: "Start now!"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "hidden text-center lg:flex lg:items-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex",
                        children: navigation.map((menu, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "mr-3 nav__item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: menu.href,
                                    className: "inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 focus:outline-none",
                                    children: menu.name
                                })
                            }, index))
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "hidden mr-3 space-x-3 lg:flex nav__item",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            className: "px-6 py-2 text-white bg-customGold rounded-md md:ml-5",
                            href: "/register",
                            children: "Start now!"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(DarkSwitch, {})
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SectionTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2956);



function SectionTitle(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        style: {
            color: "#ae9b7f"
        },
        id: props.id,
        className: `flex w-full flex-col mt-4 ${props.align === "left" ? "" : "items-center justify-center text-center"}`,
        children: [
            props.pretitle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-sm font-bold tracking-wider uppercase",
                children: props.pretitle
            }),
            props.title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white",
                children: props.title
            }),
            props.children && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300",
                children: props.children
            })
        ]
    });
}


/***/ }),

/***/ 817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Testimonials)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ../../AppData/Roaming/npm/node_modules/next/image.js
var next_image = __webpack_require__(4211);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/container.js
var container = __webpack_require__(2956);
;// CONCATENATED MODULE: ./public/img/zeppel.png
/* harmony default export */ const zeppel = ({"src":"/_next/static/media/zeppel.a8eb1b85.png","height":221,"width":291,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAoUlEQVR42gGWAGn/ANXMusWum619bKZvYaZxY7aMfci5q9LLvgDFsqCrdF+scWC2dmezdmizd2a6jHzLwbUAupOBn3Bfe1VLtXdmmGVZhWBWu4V0waeaALiPf7d6a6VoW6xyaK1zabJyZsOKfL+ekQCqno6zjH2jeGmQX1aQY1qrgXO6loqpn5QASkpGYVNMpoh5sIh5qoh7jnduRz07REZF+SxNJt213bkAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./public/img/divi.png
/* harmony default export */ const divi = ({"src":"/_next/static/media/divi.23dfcef9.png","height":449,"width":599,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAnUlEQVR42mMozinMTEpPik9d2dFxZdmCo1uOPH746v///wz5GbkJMYl5UVGn+9s+bVp8Yc36h49egySyUzMSouNS/fz609O2dtRdmTvnyYPnIImMxJS4yJjiyMhZOQVLKwsOzVn8+sUHkERqbGJkcJivs3t5VHxHVlJFVt7WTbvfv37HEBEcZmpooqdtUBAbv7y5LtDWgoGBwdHSEQDGfk1fxg39DQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./public/img/livia.png
/* harmony default export */ const livia = ({"src":"/_next/static/media/livia.ee5245a1.png","height":806,"width":883,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAIAAAC6O5sJAAAAuklEQVR42gGvAFD/AAB43gtx1RFqzDlhtVRnrhdvyWGU0HSo5AALguMAe+A5csmxdVnKf1Fpi8aLncFondYAIpLpAI3rf4W214Mp3XpCp32CnIyjkZKpADaf8iGi+HyOv8dtAPKRasNsRKxoULFzSwBQrPpfu/+QrNPMdgDmnXCYVziSQwClVhQAc8D+hMfxwrKupVUArXBJhFhAWhgAjkISAJXS+qOtt7l4QZRLDsF5P7R3TEgAAng3D+tAVOf+QymWAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":7});
;// CONCATENATED MODULE: ./components/testimonials.js







function Testimonials() {
    return /*#__PURE__*/ jsx_runtime_.jsx(container/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "grid gap-10 lg:grid-cols-2 xl:grid-cols-3",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "lg:col-span-2 xl:col-auto",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-2xl leading-normal ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Mark, {
                                        style: {
                                            color: "#ae9b7f"
                                        },
                                        children: "Hestia Med hat unsere Praxis revolutioniert."
                                    }),
                                    "Die einfache Verwaltung von Patientendaten, die \xfcbersichtliche Terminplanung und die nahtlose Integration von Cloud-Daten machen den Alltag so viel effizienter."
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Avatar, {
                                image: zeppel,
                                name: "Zeppelzauer Wolfgang",
                                title: "Medizintechniker",
                                fill: true
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-2xl leading-normal ",
                                children: "Die benutzerfreundliche Oberfl\xe4che erm\xf6glicht es unserem Team, sich auf das Wesentliche zu konzentrieren – die Patienten. Wir k\xf6nnen es jedem Kollegen nur empfehlen!“"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Avatar, {
                                image: divi,
                                name: "Divjak Peter",
                                title: "Arzt - Klinik Donaustadt"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-2xl leading-normal ",
                                children: "Seitdem wir Hestia Med in unserer Praxis nutzen, hat sich der Arbeitsalltag erheblich verbessert. Die Software ist nicht nur einfach zu bedienen, sondern hilft uns auch, unsere Patienten effizienter zu betreuen."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Avatar, {
                                image: livia,
                                name: "Livia Arslan",
                                title: "\xc4rztin - Klinik"
                            })
                        ]
                    })
                })
            ]
        })
    });
}
function Avatar(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center relative mt-8 space-x-3",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex-shrink-0 overflow-hidden relative rounded-full w-14 h-14",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: props.image,
                    alt: "Avatar",
                    layout: "fill",
                    placeholder: "blur"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-lg font-medium",
                        children: props.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-gray-600 dark:text-gray-400",
                        children: props.title
                    })
                ]
            })
        ]
    });
}
function Mark(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            " ",
            /*#__PURE__*/ jsx_runtime_.jsx("mark", {
                style: {
                    color: "#685d4e"
                },
                className: "bg-customGold text-[#4f453a] rounded-sm px-1 py-0.5",
                children: props.children
            }),
            " "
        ]
    });
}


/***/ }),

/***/ 832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Video)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2956);



function Video() {
    const { 0: playVideo , 1: setPlayVideo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-full max-w-4xl mx-auto mb-20 overflow-hidden rounded-2xl ",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                onClick: ()=>setPlayVideo(!playVideo),
                className: "relative cursor-pointer aspect-w-16 aspect-h-9 bg-customGold",
                children: [
                    !playVideo && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        className: "absolute inset-auto text-white transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 top-1/2 left-1/2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "w-28 h-28",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    fillRule: "evenodd",
                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",
                                    clipRule: "evenodd"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "sr-only",
                                children: "Play Video"
                            })
                        ]
                    }),
                    playVideo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                        src: "https://www.youtube.com/embed/8h50m7u1xD4",
                        title: "YouTube video player",
                        frameborder: "0",
                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                        allowfullscreen: true
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 1184:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(4957)


/***/ })

};
;