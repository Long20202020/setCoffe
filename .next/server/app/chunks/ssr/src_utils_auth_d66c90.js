(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/src_utils_auth_d66c90.js", {

"[project]/src/utils/auth.js (ecmascript, ssr)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/bcryptjs/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jsonwebtoken/index.js (ecmascript, ssr)");
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
}]);

//# sourceMappingURL=src_utils_auth_d66c90.js.map