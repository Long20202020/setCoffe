(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/src_app_login-register_page_4c7386.js", {

"[project]/src/app/login-register/page.js (ecmascript, ssr)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$login$2d$register$2e$module$2e$css__$28$css__module$29$__ = __turbopack_import__("[project]/src/styles/login-register.module.css (css module, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constants$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/constants.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$login$2d$register$2f$Login$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/templates/login-register/Login.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$login$2d$register$2f$Register$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/templates/login-register/Register.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
const login_register = ()=>{
    const [authType, setAuthType] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constants$2e$js__$28$ecmascript$29$__["authTypes"].LOGIN);
    const showRegisterForm = ()=>setAuthType(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constants$2e$js__$28$ecmascript$29$__["authTypes"].REGISTER);
    const showloginForm = ()=>setAuthType(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constants$2e$js__$28$ecmascript$29$__["authTypes"].LOGIN);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$login$2d$register$2e$module$2e$css__$28$css__module$29$__["default"].login_register,
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$login$2d$register$2e$module$2e$css__$28$css__module$29$__["default"].form_bg,
                "data-aos": "fade-up",
                children: authType === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constants$2e$js__$28$ecmascript$29$__["authTypes"].LOGIN ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$login$2d$register$2f$Login$2e$js__$28$ecmascript$29$__["default"], {
                    showRegisterForm: showRegisterForm
                }, void 0, false, {
                    fileName: "<[project]/src/app/login-register/page.js>",
                    lineNumber: 19,
                    columnNumber: 11
                }, this) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$login$2d$register$2f$Register$2e$js__$28$ecmascript$29$__["default"], {
                    showloginForm: showloginForm
                }, void 0, false, {
                    fileName: "<[project]/src/app/login-register/page.js>",
                    lineNumber: 21,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/login-register/page.js>",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("section", {
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("img", {
                    src: "https://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg",
                    alt: ""
                }, void 0, false, {
                    fileName: "<[project]/src/app/login-register/page.js>",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/login-register/page.js>",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/login-register/page.js>",
        lineNumber: 16,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = login_register;

})()),
}]);

//# sourceMappingURL=src_app_login-register_page_4c7386.js.map