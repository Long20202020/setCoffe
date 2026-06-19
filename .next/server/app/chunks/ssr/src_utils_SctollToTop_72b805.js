(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/src_utils_SctollToTop_72b805.js", {

"[project]/src/utils/SctollToTop.js (ecmascript, ssr)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/md/index.esm.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ScrollToTop$2e$module$2e$css__$28$css__module$29$__ = __turbopack_import__("[project]/src/styles/ScrollToTop.module.css (css module, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
const ScrollToTop = ()=>{
    const [isVisible, setIsVisible] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const toggleVisibility = ()=>{
            window.scrollY > 120 ? setIsVisible(true) : setIsVisible(false);
        };
        window.addEventListener("scroll", toggleVisibility);
        return ()=>window.removeEventListener("scroll", toggleVisibility);
    }, []);
    const scrollToTop = ()=>{
        isVisible && window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
        className: isVisible ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ScrollToTop$2e$module$2e$css__$28$css__module$29$__["default"].buttonVisible : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ScrollToTop$2e$module$2e$css__$28$css__module$29$__["default"].button,
        onClick: scrollToTop,
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["MdKeyboardArrowUp"], {}, void 0, false, {
            fileName: "<[project]/src/utils/SctollToTop.js>",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/utils/SctollToTop.js>",
        lineNumber: 28,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = ScrollToTop;

})()),
}]);

//# sourceMappingURL=src_utils_SctollToTop_72b805.js.map