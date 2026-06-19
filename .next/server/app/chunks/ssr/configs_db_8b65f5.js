(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/configs_db_8b65f5.js", {

"[project]/configs/db.js (ecmascript, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const mongoose = __turbopack_external_require__("mongoose");
const connectToDB = async ()=>{
    try {
        if (mongoose.connections[0].readyState) {
            return true;
        } else {
            await mongoose.connect(process.env.MONGO_URL);
            console.log("Connect To DB Successfully :))");
        }
    } catch (err) {
        console.log("DB Connection has error ->", err);
    }
};
const __TURBOPACK__default__export__ = connectToDB;

})()),
}]);

//# sourceMappingURL=configs_db_8b65f5.js.map