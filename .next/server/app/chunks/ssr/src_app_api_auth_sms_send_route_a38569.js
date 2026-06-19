(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/src_app_api_auth_sms_send_route_a38569.js", {

"[project]/src/app/api/auth/sms/send/route.js (ecmascript, ssr)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "POST": ()=>POST
});
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$db$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/configs/db.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Otp$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/models/Otp.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$User$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/models/User.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
const request = __turbopack_require__("[project]/node_modules/request/index.js (ecmascript, ssr)");
;
;
;
async function POST(req) {
    __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$db$2e$js__$28$ecmascript$29$__["default"]();
    const body = await req.json();
    const { phone  } = body;
    const now = new Date();
    const expTime = now.getTime() + 300_000;
    const code = Math.floor(Math.random() * 99999);
    const isUserExist = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$User$2e$js__$28$ecmascript$29$__["default"].findOne({
        $or: [
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
    request.post({
        url: "http://ippanel.com/api/select",
        body: {
            op: "pattern",
            user: "09921558293",
            pass: "sabzlearn1212",
            fromNum: "3000505",
            toNum: phone,
            patternCode: "jqcrkffb9sevvss",
            inputData: [
                {
                    "verification-code": code
                }
            ]
        },
        json: true
    }, async function(error, response, body) {
        if (!error && response.statusCode === 200) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$Otp$2e$js__$28$ecmascript$29$__["default"].create({
                phone,
                code,
                expTime
            });
            console.log(response.body);
        } else {
            console.log("whatever you want");
        }
    });
    return Response.json({
        message: "Code sent successfully :))"
    }, {
        status: 201
    });
}

})()),
}]);

//# sourceMappingURL=src_app_api_auth_sms_send_route_a38569.js.map