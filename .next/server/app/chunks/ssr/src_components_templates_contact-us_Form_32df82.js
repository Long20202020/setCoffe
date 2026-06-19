(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/src_components_templates_contact-us_Form_32df82.js", {

"[project]/src/components/templates/contact-us/form.module.css (css module, ssr)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "form": "form__form__4a987261",
  "group": "group__form__4a987261",
  "groups": "groups__form__4a987261",
});

})()),
"[project]/src/components/templates/contact-us/Form.js (ecmascript, ssr)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$contact$2d$us$2f$form$2e$module$2e$css__$28$css__module$29$__ = __turbopack_import__("[project]/src/components/templates/contact-us/form.module.css (css module, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/helpers.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
const Form = ()=>{
    const [email, setEmail] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [name, setName] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [company, setCompany] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [phone, setPhone] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [message, setMessage] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const submitMessage = async (event)=>{
        event.preventDefault();
        const contact = {
            name,
            email,
            phone,
            company,
            message
        };
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contact)
        });
        if (res.status === 201) {
            setEmail("");
            setName("");
            setCompany("");
            setPhone("");
            setMessage("");
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$js__$28$ecmascript$29$__["showSwal"]("پیغام شما با موفقیت ثبت شد", "success", "فهمیدم");
        }
        console.log("Res ->", res);
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("form", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$contact$2d$us$2f$form$2e$module$2e$css__$28$css__module$29$__["default"].form,
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                children: "فرم تماس با ما"
            }, void 0, false, {
                fileName: "<[project]/src/components/templates/contact-us/Form.js>",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                children: "برای تماس با ما می توانید فرم زیر را تکمیل کنید"
            }, void 0, false, {
                fileName: "<[project]/src/components/templates/contact-us/Form.js>",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$contact$2d$us$2f$form$2e$module$2e$css__$28$css__module$29$__["default"].groups,
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$contact$2d$us$2f$form$2e$module$2e$css__$28$css__module$29$__["default"].group,
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("label", {
                                children: "نام و نام خانوادگی"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/templates/contact-us/Form.js>",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                                type: "text",
                                value: name,
                                onChange: (event)=>setName(event.target.value)
                            }, void 0, false, {
                                fileName: "<[project]/src/components/templates/contact-us/Form.js>",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/templates/contact-us/Form.js>",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$contact$2d$us$2f$form$2e$module$2e$css__$28$css__module$29$__["default"].group,
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("label", {
                                children: "آدرس ایمیل"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/templates/contact-us/Form.js>",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                                type: "text",
                                value: email,
                                onChange: (event)=>setEmail(event.target.value)
                            }, void 0, false, {
                                fileName: "<[project]/src/components/templates/contact-us/Form.js>",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/templates/contact-us/Form.js>",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/templates/contact-us/Form.js>",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$contact$2d$us$2f$form$2e$module$2e$css__$28$css__module$29$__["default"].groups,
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$contact$2d$us$2f$form$2e$module$2e$css__$28$css__module$29$__["default"].group,
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("label", {
                                children: "شماره تماس"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/templates/contact-us/Form.js>",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                                type: "text",
                                value: phone,
                                onChange: (event)=>setPhone(event.target.value)
                            }, void 0, false, {
                                fileName: "<[project]/src/components/templates/contact-us/Form.js>",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/templates/contact-us/Form.js>",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$contact$2d$us$2f$form$2e$module$2e$css__$28$css__module$29$__["default"].group,
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("label", {
                                children: "نام شرکت"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/templates/contact-us/Form.js>",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                                type: "text",
                                value: company,
                                onChange: (event)=>setCompany(event.target.value)
                            }, void 0, false, {
                                fileName: "<[project]/src/components/templates/contact-us/Form.js>",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/templates/contact-us/Form.js>",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/templates/contact-us/Form.js>",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$contact$2d$us$2f$form$2e$module$2e$css__$28$css__module$29$__["default"].group,
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("label", {
                        children: "درخواست شما"
                    }, void 0, false, {
                        fileName: "<[project]/src/components/templates/contact-us/Form.js>",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("textarea", {
                        name: "",
                        id: "",
                        value: message,
                        onChange: (event)=>setMessage(event.target.value),
                        cols: "30",
                        rows: "3"
                    }, void 0, false, {
                        fileName: "<[project]/src/components/templates/contact-us/Form.js>",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/templates/contact-us/Form.js>",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                onClick: submitMessage,
                children: "ارسال"
            }, void 0, false, {
                fileName: "<[project]/src/components/templates/contact-us/Form.js>",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/templates/contact-us/Form.js>",
        lineNumber: 46,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Form;

})()),
}]);

//# sourceMappingURL=src_components_templates_contact-us_Form_32df82.js.map