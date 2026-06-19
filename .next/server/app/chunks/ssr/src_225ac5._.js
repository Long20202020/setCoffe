(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/src_225ac5._.js", {

"[project]/src/styles/wishlist.module.css (css module, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "container": "container__wishlist__6a08b1bb",
  "title": "title__wishlist__6a08b1bb",
  "wishlist_empty": "wishlist_empty__wishlist__6a08b1bb",
});

})()),
"[project]/src/styles/404.module.css (css module, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "contents": "contents__404__b24194a1",
  "left_number": "left_number__404__b24194a1",
  "mug": "mug__404__b24194a1",
  "right_number": "right_number__404__b24194a1",
  "rings": "rings__404__b24194a1",
  "texts": "texts__404__b24194a1",
});

})()),
"[project]/src/utils/auth.js (ecmascript, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "generateAccessToken": ()=>generateAccessToken,
    "generateRefreshToken": ()=>generateRefreshToken,
    "hashPassword": ()=>hashPassword,
    "valiadteEmail": ()=>valiadteEmail,
    "valiadtePassword": ()=>valiadtePassword,
    "valiadtePhone": ()=>valiadtePhone,
    "verifyAccessToken": ()=>verifyAccessToken,
    "verifyPassword": ()=>verifyPassword
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/bcryptjs/index.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jsonwebtoken/index.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const hashPassword = async (password)=>{
    const hashedPassword = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$28$ecmascript$29$__["hash"](password, 12);
    return hashedPassword;
};
const verifyPassword = async (password, hashedPassword)=>{
    const isValid = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$28$ecmascript$29$__["compare"](password, hashedPassword);
    return isValid;
};
const generateAccessToken = (data)=>{
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$28$ecmascript$29$__["sign"]({
        ...data
    }, process.env.AccessTokenSecretKey, {
        expiresIn: "60s"
    });
    return token;
};
const verifyAccessToken = (token)=>{
    try {
        const tokenPayload = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$28$ecmascript$29$__["verify"](token, process.env.AccessTokenSecretKey);
        return tokenPayload;
    } catch (err) {
        console.log("Verify Access Token Error ->", err);
        return false;
    }
};
const generateRefreshToken = (data)=>{
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$28$ecmascript$29$__["sign"]({
        ...data
    }, process.env.RefreshTokenSecretKey, {
        expiresIn: "15d"
    });
    return token;
};
const valiadteEmail = (email)=>{
    const pattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g;
    return pattern.test(email);
};
const valiadtePhone = (phone)=>{
    const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;
    return pattern.test(phone);
};
const valiadtePassword = (password)=>{
    const pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g;
    return pattern.test(password);
};
;

})()),
"[project]/src/utils/serverHelpers.js (ecmascript, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "authAdmin": ()=>authAdmin,
    "authUser": ()=>authUser
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/headers.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$User$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/models/User.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$db$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/configs/db.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$auth$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/auth.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const authUser = async ()=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$db$2e$js__$28$ecmascript$29$__["default"]();
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$28$ecmascript$29$__["cookies"]().get("token");
    let user = null;
    if (token) {
        const tokenPayload = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$auth$2e$js__$28$ecmascript$29$__["verifyAccessToken"](token.value);
        if (tokenPayload) {
            user = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$User$2e$js__$28$ecmascript$29$__["default"].findOne({
                email: tokenPayload.email
            });
        }
    }
    return user;
};
const authAdmin = async ()=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$db$2e$js__$28$ecmascript$29$__["default"]();
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$28$ecmascript$29$__["cookies"]().get("token");
    let user = null;
    if (token) {
        const tokenPayload = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$auth$2e$js__$28$ecmascript$29$__["verifyAccessToken"](token.value);
        if (tokenPayload) {
            user = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$User$2e$js__$28$ecmascript$29$__["default"].findOne({
                email: tokenPayload.email
            });
            if (user.role === "ADMIN") {
                return user;
            } else {
                return null;
            }
        } else {
            return null;
        }
    } else {
        return null;
    }
    return user;
};
;

})()),
"[project]/src/utils/aos.js (ecmascript, chunks, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    default: () => "[project]/src/utils/aos.js (ecmascript)",
    chunks: () => chunks,
});
const chunks = [
  {
    "path": "_next/static/chunks/src_utils_aos_b53fce.js",
    "included": [
      "[project]/src/utils/aos.js (ecmascript)"
    ]
  },
  {
    "path": "_next/static/chunks/node_modules_aos_dist_aos_e82afa.js",
    "included": [
      "[project]/node_modules/aos/dist/aos.js (ecmascript)"
    ]
  },
  {
    "path": "_next/static/chunks/node_modules_next_dist_compiled_process_browser_4cdc61.js",
    "included": [
      "[project]/node_modules/next/dist/compiled/process/browser.js (ecmascript)"
    ]
  },
  {
    "path": "_next/static/chunks/node_modules_next_dist_compiled_react_index_dd3fe7.js",
    "included": [
      "[project]/node_modules/next/dist/compiled/react/index.js (ecmascript)"
    ]
  },
  {
    "path": "_next/static/chunks/node_modules_next_dist_build_polyfills_process_0833f2.js",
    "included": [
      "[project]/node_modules/next/dist/build/polyfills/process.js (ecmascript)"
    ]
  },
  {
    "path": "_next/static/chunks/node_modules_aos_dist_aos.css",
    "included": [
      "[project]/node_modules/aos/dist/aos.css (css)"
    ],
    "moduleChunks": [
      "_next/static/chunks/node_modules_aos_dist_aos_c9a116.css"
    ]
  },
  "_next/static/chunks/src_utils_aos_5bc553.js"
];

})()),
"[project]/src/utils/aos.js (ecmascript, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

var __TURBOPACK__imported__module__$5b$next$5d2f$entry$2f$app$2f$server$2d$to$2d$client$2d$ssr$2e$tsx$2f28$CLIENT_MODULE$292f5b$project$5d2f$src$2f$utils$2f$aos$2e$js__$28$ecmascript$2c$__with__chunking__context__scope$292f28$CLIENT_CHUNKS$292f5b$project$5d2f$src$2f$utils$2f$aos$2e$js__$28$ecmascript$2c$__chunks$29$__$28$ecmascript$29$__ = __turbopack_import__("[next]/entry/app/server-to-client-ssr.tsx/(CLIENT_MODULE)/[project]/src/utils/aos.js (ecmascript, with chunking context scope)/(CLIENT_CHUNKS)/[project]/src/utils/aos.js (ecmascript, chunks) (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: server-to-client }";
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$next$5d2f$entry$2f$app$2f$server$2d$to$2d$client$2d$ssr$2e$tsx$2f28$CLIENT_MODULE$292f5b$project$5d2f$src$2f$utils$2f$aos$2e$js__$28$ecmascript$2c$__with__chunking__context__scope$292f28$CLIENT_CHUNKS$292f5b$project$5d2f$src$2f$utils$2f$aos$2e$js__$28$ecmascript$2c$__chunks$29$__$28$ecmascript$29$__["default"]);

})()),
"[project]/src/utils/SctollToTop.js (ecmascript, chunks, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    default: () => "[project]/src/utils/SctollToTop.js (ecmascript)",
    chunks: () => chunks,
});
const chunks = [
  {
    "path": "_next/static/chunks/src_styles_ScrollToTop.module.css_563ff2._.js",
    "included": [
      "[project]/src/styles/ScrollToTop.module.css (css module)"
    ]
  },
  {
    "path": "_next/static/chunks/src_utils_SctollToTop_b53fce.js",
    "included": [
      "[project]/src/utils/SctollToTop.js (ecmascript)"
    ]
  },
  {
    "path": "_next/static/chunks/node_modules_react-icons_md_index.esm_d8e61c.js",
    "included": [
      "[project]/node_modules/react-icons/md/index.esm.js (ecmascript)"
    ]
  },
  {
    "path": "_next/static/chunks/node_modules_react-icons_lib_esm_index_ee5006.js",
    "included": [
      "[project]/node_modules/react-icons/lib/esm/index.js (ecmascript)"
    ]
  },
  {
    "path": "_next/static/chunks/node_modules_next_dist_compiled_process_browser_e83cac.js",
    "included": [
      "[project]/node_modules/next/dist/compiled/process/browser.js (ecmascript)"
    ]
  },
  {
    "path": "_next/static/chunks/node_modules_next_dist_compiled_react_f21f76._.js",
    "included": [
      "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript)",
      "[project]/node_modules/next/dist/compiled/react/index.js (ecmascript)"
    ]
  },
  {
    "path": "_next/static/chunks/node_modules_next_dist_build_polyfills_process_a7f212.js",
    "included": [
      "[project]/node_modules/next/dist/build/polyfills/process.js (ecmascript)"
    ]
  },
  {
    "path": "_next/static/chunks/src_styles_ScrollToTop.module_b5a149.css",
    "included": [
      "[project]/src/styles/ScrollToTop.module.css (css, css module)"
    ],
    "moduleChunks": [
      "_next/static/chunks/src_styles_ScrollToTop.module_fb38f0.css"
    ]
  },
  "_next/static/chunks/src_utils_SctollToTop_764e9e.js"
];

})()),
"[project]/src/utils/SctollToTop.js (ecmascript, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

var __TURBOPACK__imported__module__$5b$next$5d2f$entry$2f$app$2f$server$2d$to$2d$client$2d$ssr$2e$tsx$2f28$CLIENT_MODULE$292f5b$project$5d2f$src$2f$utils$2f$SctollToTop$2e$js__$28$ecmascript$2c$__with__chunking__context__scope$292f28$CLIENT_CHUNKS$292f5b$project$5d2f$src$2f$utils$2f$SctollToTop$2e$js__$28$ecmascript$2c$__chunks$29$__$28$ecmascript$29$__ = __turbopack_import__("[next]/entry/app/server-to-client-ssr.tsx/(CLIENT_MODULE)/[project]/src/utils/SctollToTop.js (ecmascript, with chunking context scope)/(CLIENT_CHUNKS)/[project]/src/utils/SctollToTop.js (ecmascript, chunks) (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: server-to-client }";
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$next$5d2f$entry$2f$app$2f$server$2d$to$2d$client$2d$ssr$2e$tsx$2f28$CLIENT_MODULE$292f5b$project$5d2f$src$2f$utils$2f$SctollToTop$2e$js__$28$ecmascript$2c$__with__chunking__context__scope$292f28$CLIENT_CHUNKS$292f5b$project$5d2f$src$2f$utils$2f$SctollToTop$2e$js__$28$ecmascript$2c$__chunks$29$__$28$ecmascript$29$__["default"]);

})()),
"[project]/src/app/layout.js (ecmascript, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>RootLayout,
    "metadata": ()=>metadata
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_92243eee$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[next]/internal/font/google/inter_92243eee.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$aos$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/aos.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$SctollToTop$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/SctollToTop.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const metadata = {
    title: "صفحه اصلی - SET Coffee | فروشگاه اینترنتی قهوه ست",
    description: "Sabzlearn coffee project with next.js v13",
    icons: {
        icon: "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/36190/coffee-logo-clipart-md.png"
    }
};
function RootLayout({ children  }) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("html", {
        lang: "fa",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("body", {
            className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_92243eee$2e$js__$28$ecmascript$29$__["default"].className,
            children: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$aos$2e$js__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "<[project]/src/app/layout.js>",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                children,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$SctollToTop$2e$js__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "<[project]/src/app/layout.js>",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/app/layout.js>",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/app/layout.js>",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/app/layout.js (ecmascript, client chunks, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    default: () => __turbopack_import__("[project]/src/app/layout.js (ecmascript, rsc)"),
    chunks: () => chunks,
});
const chunks = [
  "chunks/rsc/[next]_internal_font_google_inter_92243eee.module_b5a149.css",
  "chunks/rsc/src_app_globals.css",
  "chunks/ssr/node_modules_aos_dist_aos.css",
  "chunks/ssr/src_styles_ScrollToTop.module_b5a149.css"
];

})()),
"[project]/src/app/not-found.js (ecmascript, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$404$2e$module$2e$css__$28$css__module$29$__ = __turbopack_import__("[project]/src/styles/404.module.css (css module, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const page = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$404$2e$module$2e$css__$28$css__module$29$__["default"].contents,
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$404$2e$module$2e$css__$28$css__module$29$__["default"].left_number,
                        children: "4"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/not-found.js>",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$404$2e$module$2e$css__$28$css__module$29$__["default"].mug
                    }, void 0, false, {
                        fileName: "<[project]/src/app/not-found.js>",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$404$2e$module$2e$css__$28$css__module$29$__["default"].right_number,
                        children: "4"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/not-found.js>",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/not-found.js>",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$404$2e$module$2e$css__$28$css__module$29$__["default"].texts,
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                        children: "صفحه مورد نظر یافت نشد :(("
                    }, void 0, false, {
                        fileName: "<[project]/src/app/not-found.js>",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: "برگشت به صفحه اصلی"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/not-found.js>",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/not-found.js>",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/not-found.js>",
        lineNumber: 6,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = page;

})()),
"[project]/src/app/not-found.js (ecmascript, client chunks, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    default: () => __turbopack_import__("[project]/src/app/not-found.js (ecmascript, rsc)"),
    chunks: () => chunks,
});
const chunks = [
  "chunks/rsc/src_styles_404.module_b5a149.css"
];

})()),
"[project]/src/app/wishlist/page.js (ecmascript, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$breadcrumb$2f$Breadcrumb$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/modules/breadcrumb/Breadcrumb.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$footer$2f$Footer$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/modules/footer/Footer.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$navbar$2f$Navbar$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/modules/navbar/Navbar.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$product$2f$Product$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/modules/product/Product.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$db$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/configs/db.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$wishlist$2e$module$2e$css__$28$css__module$29$__ = __turbopack_import__("[project]/src/styles/wishlist.module.css (css module, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$serverHelpers$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/serverHelpers.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.esm.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Wishlist$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/models/Wishlist.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
;
;
;
const page = async ()=>{
    let wishes = [];
    __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$db$2e$js__$28$ecmascript$29$__["default"]();
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$serverHelpers$2e$js__$28$ecmascript$29$__["authUser"]();
    if (user) {
        wishes = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Wishlist$2e$js__$28$ecmascript$29$__["default"].find({
            user: user._id
        }).populate("product", "name price score").lean();
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$navbar$2f$Navbar$2e$js__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "<[project]/src/app/wishlist/page.js>",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$breadcrumb$2f$Breadcrumb$2e$js__$28$ecmascript$29$__["default"], {
                route: "علاقه مندی ها"
            }, void 0, false, {
                fileName: "<[project]/src/app/wishlist/page.js>",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$wishlist$2e$module$2e$css__$28$css__module$29$__["default"].container,
                "data-aos": "fade-up",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$wishlist$2e$module$2e$css__$28$css__module$29$__["default"].title,
                        children: "محصولات مورد علاقه شما"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/wishlist/page.js>",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("section", {
                        children: wishes.length > 0 && wishes.map((wish)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$product$2f$Product$2e$js__$28$ecmascript$29$__["default"], {
                                ...wish.product
                            }, wish._id, false, {
                                fileName: "<[project]/src/app/wishlist/page.js>",
                                lineNumber: 30,
                                columnNumber: 34
                            }, this))
                    }, void 0, false, {
                        fileName: "<[project]/src/app/wishlist/page.js>",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/wishlist/page.js>",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            wishes.length === 0 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                class: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$wishlist$2e$module$2e$css__$28$css__module$29$__["default"].wishlist_empty,
                "data-aos": "fade-up",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["FaRegHeart"], {}, void 0, false, {
                        fileName: "<[project]/src/app/wishlist/page.js>",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                        children: "محصولی یافت نشد"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/wishlist/page.js>",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                        children: "شما هنوز هیچ محصولی در لیست علاقه مندی های خود ندارید."
                    }, void 0, false, {
                        fileName: "<[project]/src/app/wishlist/page.js>",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                        children: 'در صفحه "فروشگاه" محصولات جالب زیادی پیدا خواهید کرد.'
                    }, void 0, false, {
                        fileName: "<[project]/src/app/wishlist/page.js>",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                            href: "/category",
                            children: "بازگشت به فروشگاه"
                        }, void 0, false, {
                            fileName: "<[project]/src/app/wishlist/page.js>",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/app/wishlist/page.js>",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/wishlist/page.js>",
                lineNumber: 35,
                columnNumber: 9
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$footer$2f$Footer$2e$js__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "<[project]/src/app/wishlist/page.js>",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = page;

})()),
"[project]/src/app/wishlist/page.js (ecmascript, client chunks, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    default: () => __turbopack_import__("[project]/src/app/wishlist/page.js (ecmascript, rsc)"),
    chunks: () => chunks,
});
const chunks = [
  "chunks/rsc/src_components_modules_breadcrumb_breadcrumb.module_b5a149.css",
  "chunks/rsc/src_components_modules_footer_footer.module_b5a149.css",
  "chunks/rsc/src_components_modules_footer_article.module_b5a149.css",
  "chunks/ssr/src_components_modules_navbar_Nabvar.module_b5a149.css",
  "chunks/rsc/src_components_modules_product_product.module_b5a149.css",
  "chunks/rsc/src_styles_wishlist.module_b5a149.css"
];

})()),
"[project]/src/components/modules/breadcrumb/breadcrumb.module.css (css module, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "active_step": "active_step__breadcrumb__3282a863",
  "breadcrumb": "breadcrumb__breadcrumb__3282a863",
  "title": "title__breadcrumb__3282a863",
});

})()),
"[project]/src/components/modules/breadcrumb/Breadcrumb.js (ecmascript, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$breadcrumb$2f$breadcrumb$2e$module$2e$css__$28$css__module$29$__ = __turbopack_import__("[project]/src/components/modules/breadcrumb/breadcrumb.module.css (css module, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const Breadcrumb = ({ route  })=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$breadcrumb$2f$breadcrumb$2e$module$2e$css__$28$css__module$29$__["default"].breadcrumb,
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$breadcrumb$2f$breadcrumb$2e$module$2e$css__$28$css__module$29$__["default"].title,
                children: route
            }, void 0, false, {
                fileName: "<[project]/src/components/modules/breadcrumb/Breadcrumb.js>",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: "خانه"
                    }, void 0, false, {
                        fileName: "<[project]/src/components/modules/breadcrumb/Breadcrumb.js>",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                        children: "/"
                    }, void 0, false, {
                        fileName: "<[project]/src/components/modules/breadcrumb/Breadcrumb.js>",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                        children: route
                    }, void 0, false, {
                        fileName: "<[project]/src/components/modules/breadcrumb/Breadcrumb.js>",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/modules/breadcrumb/Breadcrumb.js>",
                lineNumber: 7,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/modules/breadcrumb/Breadcrumb.js>",
        lineNumber: 5,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Breadcrumb;

})()),
"[project]/src/components/modules/footer/article.module.css (css module, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "article": "article__article__a18f4703",
  "footer": "footer__article__a18f4703",
  "title": "title__article__a18f4703",
});

})()),
"[project]/src/components/modules/footer/Article.js (ecmascript, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$footer$2f$article$2e$module$2e$css__$28$css__module$29$__ = __turbopack_import__("[project]/src/components/modules/footer/article.module.css (css module, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const Article = ({ title , img , comments , date , href  })=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
        href: href,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$footer$2f$article$2e$module$2e$css__$28$css__module$29$__["default"].article,
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("img", {
                width: 75,
                height: 65,
                src: img,
                alt: ""
            }, void 0, false, {
                fileName: "<[project]/src/components/modules/footer/Article.js>",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$footer$2f$article$2e$module$2e$css__$28$css__module$29$__["default"].title,
                        children: title
                    }, void 0, false, {
                        fileName: "<[project]/src/components/modules/footer/Article.js>",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                children: comments
                            }, void 0, false, {
                                fileName: "<[project]/src/components/modules/footer/Article.js>",
                                lineNumber: 10,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                dir: "rtl",
                                children: date
                            }, void 0, false, {
                                fileName: "<[project]/src/components/modules/footer/Article.js>",
                                lineNumber: 11,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/modules/footer/Article.js>",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/modules/footer/Article.js>",
                lineNumber: 7,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/modules/footer/Article.js>",
        lineNumber: 5,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Article;

})()),
"[project]/src/components/modules/footer/footer.module.css (css module, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "copyRight": "copyRight__footer__51a8ce68",
  "description": "description__footer__51a8ce68",
  "descriptions": "descriptions__footer__51a8ce68",
  "descriptions_title": "descriptions_title__footer__51a8ce68",
  "footer": "footer__footer__51a8ce68",
  "footer_article": "footer_article__footer__51a8ce68",
  "footer_article_title": "footer_article_title__footer__51a8ce68",
  "licenses": "licenses__footer__51a8ce68",
  "links": "links__footer__51a8ce68",
});

})()),
"[project]/src/components/modules/footer/Footer.js (ecmascript, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$footer$2f$footer$2e$module$2e$css__$28$css__module$29$__ = __turbopack_import__("[project]/src/components/modules/footer/footer.module.css (css module, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/md/index.esm.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.esm.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$footer$2f$Article$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/modules/footer/Article.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
const Footer = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("footer", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$footer$2f$footer$2e$module$2e$css__$28$css__module$29$__["default"].footer,
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("main", {
                className: "container",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$footer$2f$footer$2e$module$2e$css__$28$css__module$29$__["default"].descriptions,
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("img", {
                                src: "/images/logo_light.png",
                                alt: ""
                            }, void 0, false, {
                                fileName: "<[project]/src/components/modules/footer/Footer.js>",
                                lineNumber: 12,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$footer$2f$footer$2e$module$2e$css__$28$css__module$29$__["default"].descriptions_title,
                                children: "شرکت فنجان داغ خوارزمی، فروشگاه اینترنتی قهوه ست"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/modules/footer/Footer.js>",
                                lineNumber: 13,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$footer$2f$footer$2e$module$2e$css__$28$css__module$29$__["default"].description,
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["FaRegHeart"], {
                                        style: {
                                            fontSize: "2rem"
                                        }
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/modules/footer/Footer.js>",
                                        lineNumber: 18,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        children: "تهران. شریف آباد . شهرک صنعتی خوارزمی فاز 2 . بلوار بهارستان. خیابان ماگنولیا بلوک آ117"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/modules/footer/Footer.js>",
                                        lineNumber: 19,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/modules/footer/Footer.js>",
                                lineNumber: 17,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$footer$2f$footer$2e$module$2e$css__$28$css__module$29$__["default"].description,
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["FaRegHeart"], {}, void 0, false, {
                                        fileName: "<[project]/src/components/modules/footer/Footer.js>",
                                        lineNumber: 25,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        children: "پیگیری سفارشات : 02188305827"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/modules/footer/Footer.js>",
                                        lineNumber: 26,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/modules/footer/Footer.js>",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$footer$2f$footer$2e$module$2e$css__$28$css__module$29$__["default"].description,
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["FaRegHeart"], {}, void 0, false, {
                                        fileName: "<[project]/src/components/modules/footer/Footer.js>",
                                        lineNumber: 29,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        children: "support [at] set-coffee.com"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/modules/footer/Footer.js>",
                                        lineNumber: 30,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/modules/footer/Footer.js>",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/modules/footer/Footer.js>",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("section", {
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h4", {
                                children: "جدیدترین نوشته ها"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/modules/footer/Footer.js>",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$footer$2f$Article$2e$js__$28$ecmascript$29$__["default"], {
                                href: "/article/123",
                                data: "۱۷ آبان ۱۴۰۲ ",
                                comments: "بدون دیدگاه",
                                img: "https://set-coffee.com/wp-content/uploads/elementor/thumbs/IMG_20230920_130854_091-qconsqrfwm7t626t2hckfjifv0kdd7cofsbfd1jcig.jpg",
                                title: "افزایش انرژی با پودر قهوه فوری"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/modules/footer/Footer.js>",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("hr", {}, void 0, false, {
                                fileName: "<[project]/src/components/modules/footer/Footer.js>",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$footer$2f$Article$2e$js__$28$ecmascript$29$__["default"], {
                                href: "/article/123",
                                data: "۱۷ آبان ۱۴۰۲ ",
                                comments: "بدون دیدگاه",
                                img: "https://set-coffee.com/wp-content/uploads/elementor/thumbs/IMG_20230920_130854_091-qconsqrfwm7t626t2hckfjifv0kdd7cofsbfd1jcig.jpg",
                                title: "افزایش انرژی با پودر قهوه فوری"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/modules/footer/Footer.js>",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/modules/footer/Footer.js>",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("ul", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$footer$2f$footer$2e$module$2e$css__$28$css__module$29$__["default"].links,
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h4", {
                                        children: "منوی فوتر"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/modules/footer/Footer.js>",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                            href: "/contact-us",
                                            children: "تماس با ما"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/modules/footer/Footer.js>",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/modules/footer/Footer.js>",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                            href: "/about-us",
                                            children: "درباره ما "
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/modules/footer/Footer.js>",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/modules/footer/Footer.js>",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                            href: "/rules",
                                            children: "قوانین"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/modules/footer/Footer.js>",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/modules/footer/Footer.js>",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/modules/footer/Footer.js>",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h4", {
                                        children: "دسترسی سریع"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/modules/footer/Footer.js>",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                            href: "/category",
                                            children: " فروشگاه "
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/modules/footer/Footer.js>",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/modules/footer/Footer.js>",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                            href: "/articles",
                                            children: " مقالات "
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/modules/footer/Footer.js>",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/modules/footer/Footer.js>",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                            href: "/cart",
                                            children: "سبد خرید"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/modules/footer/Footer.js>",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/modules/footer/Footer.js>",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                            href: "/wishlist",
                                            children: "علاقه مندی ها"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/modules/footer/Footer.js>",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/modules/footer/Footer.js>",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/modules/footer/Footer.js>",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/modules/footer/Footer.js>",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$footer$2f$footer$2e$module$2e$css__$28$css__module$29$__["default"].licenses,
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("img", {
                                src: "/images/license4.htm",
                                width: 76,
                                height: 76,
                                alt: ""
                            }, void 0, false, {
                                fileName: "<[project]/src/components/modules/footer/Footer.js>",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("img", {
                                src: "/images/license1.png",
                                width: 85,
                                height: 85,
                                alt: ""
                            }, void 0, false, {
                                fileName: "<[project]/src/components/modules/footer/Footer.js>",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("img", {
                                src: "/images/license3.png",
                                alt: ""
                            }, void 0, false, {
                                fileName: "<[project]/src/components/modules/footer/Footer.js>",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("img", {
                                src: "/images/license2.svg",
                                width: 62,
                                height: 95,
                                alt: ""
                            }, void 0, false, {
                                fileName: "<[project]/src/components/modules/footer/Footer.js>",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/modules/footer/Footer.js>",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/modules/footer/Footer.js>",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("hr", {}, void 0, false, {
                fileName: "<[project]/src/components/modules/footer/Footer.js>",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "container",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$footer$2f$footer$2e$module$2e$css__$28$css__module$29$__["default"].copyRight,
                    children: [
                        " ",
                        "2023",
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["MdOutlineCopyright"], {}, void 0, false, {
                            fileName: "<[project]/src/components/modules/footer/Footer.js>",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this),
                        " تمام حقوق متعلق است به ",
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("strong", {
                            children: "قهوه ست"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/modules/footer/Footer.js>",
                            lineNumber: 96,
                            columnNumber: 57
                        }, this),
                        " ",
                        "| طراحی و اجرا ",
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("strong", {
                            children: "نیلامارکتینگ"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/modules/footer/Footer.js>",
                            lineNumber: 99,
                            columnNumber: 26
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/components/modules/footer/Footer.js>",
                    lineNumber: 93,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/modules/footer/Footer.js>",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/modules/footer/Footer.js>",
        lineNumber: 9,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Footer;

})()),
"[project]/src/components/modules/navbar/Navbar.js (ecmascript, chunks, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    default: () => "[project]/src/components/modules/navbar/Navbar.js (ecmascript)",
    chunks: () => chunks,
});
const chunks = [
  {
    "path": "_next/static/chunks/node_modules_next_ce312b._.js",
    "included": [
      "[project]/node_modules/next/link.js (ecmascript)",
      "[project]/node_modules/next/dist/compiled/process/browser.js (ecmascript)",
      "[project]/node_modules/next/dist/build/polyfills/process.js (ecmascript)"
    ]
  },
  {
    "path": "_next/static/chunks/node_modules_next_dist_compiled_react_cad05b._.js",
    "included": [
      "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript)",
      "[project]/node_modules/next/dist/compiled/react/index.js (ecmascript)"
    ]
  },
  {
    "path": "_next/static/chunks/node_modules_react-icons_io_index.esm_d145a3.js",
    "included": [
      "[project]/node_modules/react-icons/io/index.esm.js (ecmascript)"
    ]
  },
  {
    "path": "_next/static/chunks/node_modules_react-icons_fa_index.esm_d8ba7e.js",
    "included": [
      "[project]/node_modules/react-icons/fa/index.esm.js (ecmascript)"
    ]
  },
  {
    "path": "_next/static/chunks/node_modules_react-icons_lib_esm_index_b58048.js",
    "included": [
      "[project]/node_modules/react-icons/lib/esm/index.js (ecmascript)"
    ]
  },
  {
    "path": "_next/static/chunks/node_modules_@swc_helpers_cjs__interop_require_wildcard.cjs_11ff62._.js",
    "included": [
      "[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs (ecmascript)"
    ]
  },
  {
    "path": "_next/static/chunks/node_modules_@swc_helpers_cjs__interop_require_default.cjs_78a779._.js",
    "included": [
      "[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs (ecmascript)"
    ]
  },
  {
    "path": "_next/static/chunks/node_modules_@swc_helpers_esm__interop_require_wildcard_7f1f50.js",
    "included": [
      "[project]/node_modules/@swc/helpers/esm/_interop_require_wildcard.js (ecmascript)"
    ]
  },
  {
    "path": "_next/static/chunks/node_modules_@swc_helpers_esm__interop_require_default_24ddba.js",
    "included": [
      "[project]/node_modules/@swc/helpers/esm/_interop_require_default.js (ecmascript)"
    ]
  },
  {
    "path": "_next/static/chunks/src_components_modules_navbar_Navbar_b53fce.js",
    "included": [
      "[project]/src/components/modules/navbar/Navbar.js (ecmascript)"
    ]
  },
  {
    "path": "_next/static/chunks/src_components_modules_navbar_Nabvar.module_b5a149.css",
    "included": [
      "[project]/src/components/modules/navbar/Nabvar.module.css (css, css module)"
    ],
    "moduleChunks": [
      "_next/static/chunks/src_components_modules_navbar_Nabvar.module_fb38f0.css"
    ]
  },
  "_next/static/chunks/src_components_modules_navbar_Navbar_b1e2a9.js"
];

})()),
"[project]/src/components/modules/navbar/Navbar.js (ecmascript, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

var __TURBOPACK__imported__module__$5b$next$5d2f$entry$2f$app$2f$server$2d$to$2d$client$2d$ssr$2e$tsx$2f28$CLIENT_MODULE$292f5b$project$5d2f$src$2f$components$2f$modules$2f$navbar$2f$Navbar$2e$js__$28$ecmascript$2c$__with__chunking__context__scope$292f28$CLIENT_CHUNKS$292f5b$project$5d2f$src$2f$components$2f$modules$2f$navbar$2f$Navbar$2e$js__$28$ecmascript$2c$__chunks$29$__$28$ecmascript$29$__ = __turbopack_import__("[next]/entry/app/server-to-client-ssr.tsx/(CLIENT_MODULE)/[project]/src/components/modules/navbar/Navbar.js (ecmascript, with chunking context scope)/(CLIENT_CHUNKS)/[project]/src/components/modules/navbar/Navbar.js (ecmascript, chunks) (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: server-to-client }";
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$next$5d2f$entry$2f$app$2f$server$2d$to$2d$client$2d$ssr$2e$tsx$2f28$CLIENT_MODULE$292f5b$project$5d2f$src$2f$components$2f$modules$2f$navbar$2f$Navbar$2e$js__$28$ecmascript$2c$__with__chunking__context__scope$292f28$CLIENT_CHUNKS$292f5b$project$5d2f$src$2f$components$2f$modules$2f$navbar$2f$Navbar$2e$js__$28$ecmascript$2c$__chunks$29$__$28$ecmascript$29$__["default"]);

})()),
"[project]/src/components/modules/product/product.module.css (css module, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "card": "card__product__9b753341",
  "details": "details__product__9b753341",
  "details_container": "details_container__product__9b753341",
  "icons": "icons__product__9b753341",
  "tooltip": "tooltip__product__9b753341",
});

})()),
"[project]/src/components/modules/product/Product.js (ecmascript, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$product$2f$product$2e$module$2e$css__$28$css__module$29$__ = __turbopack_import__("[project]/src/components/modules/product/product.module.css (css module, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.esm.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/ci/index.esm.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const Card = ({ name , price , img  })=>{
    console.log("Product Name ->", name);
    console.log("Product Price ->", price);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$product$2f$product$2e$module$2e$css__$28$css__module$29$__["default"].card,
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$product$2f$product$2e$module$2e$css__$28$css__module$29$__["default"].details_container,
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("img", {
                        src: img || "https://set-coffee.com/wp-content/uploads/2021/10/041-430x430.png",
                        alt: ""
                    }, void 0, false, {
                        fileName: "<[project]/src/components/modules/product/Product.js>",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$product$2f$product$2e$module$2e$css__$28$css__module$29$__["default"].icons,
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                href: "/",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["CiSearch"], {}, void 0, false, {
                                        fileName: "<[project]/src/components/modules/product/Product.js>",
                                        lineNumber: 21,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$product$2f$product$2e$module$2e$css__$28$css__module$29$__["default"].tooltip,
                                        children: "مشاهده سریع"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/modules/product/Product.js>",
                                        lineNumber: 22,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/modules/product/Product.js>",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["CiHeart"], {}, void 0, false, {
                                        fileName: "<[project]/src/components/modules/product/Product.js>",
                                        lineNumber: 25,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$product$2f$product$2e$module$2e$css__$28$css__module$29$__["default"].tooltip,
                                        children: "افزودن به علاقه مندی ها "
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/modules/product/Product.js>",
                                        lineNumber: 26,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/modules/product/Product.js>",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/modules/product/Product.js>",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                        children: "افزودن به سبد خرید"
                    }, void 0, false, {
                        fileName: "<[project]/src/components/modules/product/Product.js>",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/modules/product/Product.js>",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$product$2f$product$2e$module$2e$css__$28$css__module$29$__["default"].details,
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: name
                    }, void 0, false, {
                        fileName: "<[project]/src/components/modules/product/Product.js>",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["FaStar"], {}, void 0, false, {
                                fileName: "<[project]/src/components/modules/product/Product.js>",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["FaStar"], {}, void 0, false, {
                                fileName: "<[project]/src/components/modules/product/Product.js>",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["FaStar"], {}, void 0, false, {
                                fileName: "<[project]/src/components/modules/product/Product.js>",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["FaRegStar"], {}, void 0, false, {
                                fileName: "<[project]/src/components/modules/product/Product.js>",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["FaRegStar"], {}, void 0, false, {
                                fileName: "<[project]/src/components/modules/product/Product.js>",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/modules/product/Product.js>",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                        children: [
                            price?.toLocaleString(),
                            " تومان"
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/modules/product/Product.js>",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/modules/product/Product.js>",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/modules/product/Product.js>",
        lineNumber: 10,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Card;

})()),
}]);

//# sourceMappingURL=src_225ac5._.js.map