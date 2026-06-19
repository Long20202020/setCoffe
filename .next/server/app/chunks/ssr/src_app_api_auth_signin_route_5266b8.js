(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/src_app_api_auth_signin_route_5266b8.js", {

"[project]/src/app/api/auth/signin/route.js (ecmascript, ssr)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "POST": ()=>POST
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$auth$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/auth.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$User$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/models/User.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$db$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/configs/db.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
async function POST(req) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$db$2e$js__$28$ecmascript$29$__["default"]();
        const body = await req.json();
        const { email , password  } = body;
        const isValidEmail = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$auth$2e$js__$28$ecmascript$29$__["valiadteEmail"](email);
        const isValidPassword = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$auth$2e$js__$28$ecmascript$29$__["valiadtePassword"](password);
        if (!isValidEmail || !isValidPassword) {
            return Response.json({
                message: "email or password is invalid"
            }, {
                status: 419
            });
        }
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$User$2e$js__$28$ecmascript$29$__["default"].findOne({
            email
        });
        if (!user) {
            return Response.json({
                message: "User not found"
            }, {
                status: 422
            });
        }
        const isCorrectPasswordWithHash = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$auth$2e$js__$28$ecmascript$29$__["verifyPassword"](password, user.password);
        if (!isCorrectPasswordWithHash) {
            return Response.json({
                message: "Email or password is not correct"
            }, {
                status: 401
            });
        }
        const accessToken = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$auth$2e$js__$28$ecmascript$29$__["generateAccessToken"]({
            email
        });
        const refreshToken = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$auth$2e$js__$28$ecmascript$29$__["generateRefreshToken"]({
            email
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$User$2e$js__$28$ecmascript$29$__["default"].findOneAndUpdate({
            email
        }, {
            $set: {
                refreshToken
            }
        });
        const headers = new Headers();
        headers.append("Set-Cookie", `token=${accessToken};path=/;httpOnly=true;`);
        headers.append("Set-Cookie", `refresh-token=${refreshToken};path=/;httpOnly=true;`);
        return Response.json({
            message: "User logged in successfully :))"
        }, {
            status: 200,
            headers
        });
    } catch (err) {
        console.error("SIGNIN ERROR =>", err);
        return Response.json({
            message: err.message
        }, {
            status: 500
        });
    }
}

})()),
}]);

//# sourceMappingURL=src_app_api_auth_signin_route_5266b8.js.map