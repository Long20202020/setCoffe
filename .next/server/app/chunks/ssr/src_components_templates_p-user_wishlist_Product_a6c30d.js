(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/src_components_templates_p-user_wishlist_Product_a6c30d.js", {

"[project]/src/components/templates/p-user/wishlist/product.module.css (css module, ssr)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "card": "card__product__5e12797e",
  "delete_btn": "delete_btn__product__5e12797e",
});

})()),
"[project]/src/components/templates/p-user/wishlist/Product.js (ecmascript, ssr)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/helpers.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$p$2d$user$2f$wishlist$2f$product$2e$module$2e$css__$28$css__module$29$__ = __turbopack_import__("[project]/src/components/templates/p-user/wishlist/product.module.css (css module, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.esm.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io/index.esm.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert$2f$dist$2f$sweetalert$2e$min$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/sweetalert/dist/sweetalert.min.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
;
const Card = ({ price , score , name , productID  })=>{
    const removeProduct = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert$2f$dist$2f$sweetalert$2e$min$2e$js__$28$ecmascript$29$__["default"]({
            title: "آیا از حذف محصول اطمینان دارید؟",
            icon: "warning",
            buttons: [
                "نه",
                "آره"
            ]
        }).then(async (result)=>{
            if (result) {
                const res = await fetch(`/api/wishlist/${productID}`, {
                    method: "DELETE"
                });
                console.log("Res ->", res);
                if (res.status === 200) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert$2f$dist$2f$sweetalert$2e$min$2e$js__$28$ecmascript$29$__["default"]({
                        title: "محصول با موفقیت از علاقه مندی‌ها حذف شد",
                        icon: "success",
                        buttons: "فهمیدم"
                    }).then(()=>{
                        location.reload();
                    });
                }
            }
        });
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$p$2d$user$2f$wishlist$2f$product$2e$module$2e$css__$28$css__module$29$__["default"].card,
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                href: "/product/123",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("img", {
                    width: 283,
                    height: 283,
                    src: "https://set-coffee.com/wp-content/uploads/2022/03/ethiopia-430x430.png",
                    alt: ""
                }, void 0, false, {
                    fileName: "<[project]/src/components/templates/p-user/wishlist/Product.js>",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/templates/p-user/wishlist/Product.js>",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                dir: "rtl",
                children: name
            }, void 0, false, {
                fileName: "<[project]/src/components/templates/p-user/wishlist/Product.js>",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        children: [
                            new Array(score).fill(0).map((item, index)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["IoMdStar"], {}, index, false, {
                                    fileName: "<[project]/src/components/templates/p-user/wishlist/Product.js>",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this)),
                            new Array(5 - score).fill(0).map((item, index)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["FaRegStar"], {}, index, false, {
                                    fileName: "<[project]/src/components/templates/p-user/wishlist/Product.js>",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/templates/p-user/wishlist/Product.js>",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                        children: [
                            price.toLocaleString(),
                            " تومان"
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/templates/p-user/wishlist/Product.js>",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/templates/p-user/wishlist/Product.js>",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                onClick: removeProduct,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$p$2d$user$2f$wishlist$2f$product$2e$module$2e$css__$28$css__module$29$__["default"].delete_btn,
                children: [
                    "حذف محصول",
                    " "
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/templates/p-user/wishlist/Product.js>",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/templates/p-user/wishlist/Product.js>",
        lineNumber: 35,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Card;

})()),
}]);

//# sourceMappingURL=src_components_templates_p-user_wishlist_Product_a6c30d.js.map