(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/src_components_templates_p-admin_discounts_AddDiscount_481557.js", {

"[project]/src/components/templates/p-admin/discounts/table.module.css (css module, ssr)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "delete_btn": "delete_btn__table__1872a453",
  "discount": "discount__table__1872a453",
  "discount_main": "discount_main__table__1872a453",
  "empty": "empty__table__1872a453",
  "green": "green__table__1872a453",
  "red": "red__table__1872a453",
  "table": "table__table__1872a453",
});

})()),
"[project]/src/components/templates/p-admin/discounts/AddDiscount.js (ecmascript, ssr)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$p$2d$admin$2f$discounts$2f$table$2e$module$2e$css__$28$css__module$29$__ = __turbopack_import__("[project]/src/components/templates/p-admin/discounts/table.module.css (css module, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert$2f$dist$2f$sweetalert$2e$min$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/sweetalert/dist/sweetalert.min.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
function AddDiscount() {
    const router = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__["useRouter"]();
    const [code, setCode] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [percent, setPercent] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [maxUse, setMaxUse] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const getProducts = async ()=>{};
        getProducts();
    }, []);
    const addDiscount = async ()=>{
        const discount = {
            code,
            percent,
            maxUse
        };
        const res = await fetch("/api/discounts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(discount)
        });
        if (res.status === 201) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert$2f$dist$2f$sweetalert$2e$min$2e$js__$28$ecmascript$29$__["default"]({
                title: "کد تخفیف با موفقیت ایجاد شد",
                icon: "success",
                buttons: "فهمیدم"
            }).then(()=>{
                setCode("");
                setPercent("");
                setMaxUse("");
                router.refresh();
            });
        }
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$p$2d$admin$2f$discounts$2f$table$2e$module$2e$css__$28$css__module$29$__["default"].discount,
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                children: "افزودن کد تخفیف جدید"
            }, void 0, false, {
                fileName: "<[project]/src/components/templates/p-admin/discounts/AddDiscount.js>",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$p$2d$admin$2f$discounts$2f$table$2e$module$2e$css__$28$css__module$29$__["default"].discount_main,
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("label", {
                                children: "شناسه تخفیف"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/templates/p-admin/discounts/AddDiscount.js>",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                                value: code,
                                onChange: (event)=>setCode(event.target.value),
                                placeholder: "لطفا شناسه تخفیف را وارد کنید",
                                type: "text"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/templates/p-admin/discounts/AddDiscount.js>",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/templates/p-admin/discounts/AddDiscount.js>",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("label", {
                                children: "درصد تخفیف"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/templates/p-admin/discounts/AddDiscount.js>",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                                value: percent,
                                onChange: (event)=>setPercent(event.target.value),
                                placeholder: "لطفا درصد تخفیف را وارد کنید",
                                type: "text"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/templates/p-admin/discounts/AddDiscount.js>",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/templates/p-admin/discounts/AddDiscount.js>",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("label", {
                                children: "حداکثر استفاده"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/templates/p-admin/discounts/AddDiscount.js>",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                                value: maxUse,
                                onChange: (event)=>setMaxUse(event.target.value),
                                placeholder: "حداکثر استفاده از کد تخفیف",
                                type: "text"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/templates/p-admin/discounts/AddDiscount.js>",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/templates/p-admin/discounts/AddDiscount.js>",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("label", {
                                children: "محصول"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/templates/p-admin/discounts/AddDiscount.js>",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("select", {
                                name: "",
                                id: "",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("option", {
                                        value: "",
                                        children: "قهوه ترک"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/templates/p-admin/discounts/AddDiscount.js>",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("option", {
                                        value: "",
                                        children: "قهوه عربیکا"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/templates/p-admin/discounts/AddDiscount.js>",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("option", {
                                        value: "",
                                        children: "قهوه اسپرسو"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/templates/p-admin/discounts/AddDiscount.js>",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/templates/p-admin/discounts/AddDiscount.js>",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/templates/p-admin/discounts/AddDiscount.js>",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/templates/p-admin/discounts/AddDiscount.js>",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                onClick: addDiscount,
                children: "افزودن"
            }, void 0, false, {
                fileName: "<[project]/src/components/templates/p-admin/discounts/AddDiscount.js>",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/templates/p-admin/discounts/AddDiscount.js>",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = AddDiscount;

})()),
}]);

//# sourceMappingURL=src_components_templates_p-admin_discounts_AddDiscount_481557.js.map