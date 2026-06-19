(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/src_app_api_auth_signup_route_64afdc.js", {

"[project]/src/app/api/auth/signup/route.js (ecmascript, ssr)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "POST": ()=>POST
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$db$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/configs/db.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$User$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/models/User.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$auth$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/auth.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constants$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/constants.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
async function POST(req) {
    __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$db$2e$js__$28$ecmascript$29$__["default"]();
    const body = await req.json();
    const { name , phone , email , password  } = body;
    const isUserExist = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$User$2e$js__$28$ecmascript$29$__["default"].findOne({
        $or: [
            {
                name
            },
            {
                email
            },
            {
                phone
            }
        ]
    });
    if (isUserExist) {
        return Response.json({
            message: "The username or email or phone exist already !!"
        }, {
            status: 422
        });
    }
    const hashedPassword = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$auth$2e$js__$28$ecmascript$29$__["hashPassword"](password);
    const accessToken = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$auth$2e$js__$28$ecmascript$29$__["generateAccessToken"]({
        name
    });
    const users = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$User$2e$js__$28$ecmascript$29$__["default"].find({});
    await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$User$2e$js__$28$ecmascript$29$__["default"].create({
        name,
        email,
        phone,
        password: hashedPassword,
        role: users.length > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constants$2e$js__$28$ecmascript$29$__["roles"].USER : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$constants$2e$js__$28$ecmascript$29$__["roles"].ADMIN
    });
    return Response.json({
        message: "User signed up successfully :))"
    }, {
        status: 201,
        headers: {
            "Set-Cookie": `token=${accessToken};path=/;httpOnly=true`
        }
    });
}

})()),
}]);

//# sourceMappingURL=src_app_api_auth_signup_route_64afdc.js.map