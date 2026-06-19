(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/models_Otp_26b069.js", {

"[project]/models/Otp.js (ecmascript, ssr)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const mongoose = __turbopack_external_require__("mongoose");
const schema = new mongoose.Schema({
    phone: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    expTime: {
        type: Number,
        required: true
    },
    times: {
        type: Number,
        default: 0
    }
});
const model = mongoose.models.Otp || mongoose.model("Otp", schema);
const __TURBOPACK__default__export__ = model;

})()),
}]);

//# sourceMappingURL=models_Otp_26b069.js.map