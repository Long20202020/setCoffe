(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/models_User_50f405.js", {

"[project]/models/User.js (ecmascript, rsc)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname, m: module, e: exports }) { !function() {

const mongoose = __turbopack_external_require__("mongoose");
const schema = new mongoose.Schema({
    name: {
        type: String,
        default: "کاربر ست کافی"
    },
    email: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: "USER"
    },
    refreshToken: String
});
const model = mongoose.models.User || mongoose.model("User", schema);
module.exports = model;

}.call(this) }),
}]);

//# sourceMappingURL=models_User_50f405.js.map