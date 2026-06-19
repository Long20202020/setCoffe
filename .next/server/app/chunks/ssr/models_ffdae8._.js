(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/models_ffdae8._.js", {

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
"[project]/models/Department.js (ecmascript, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const mongoose = __turbopack_external_require__("mongoose");
const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
});
const model = mongoose.models.Department || mongoose.model("Department", schema);
const __TURBOPACK__default__export__ = model;

})()),
"[project]/models/SubDepartment.js (ecmascript, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const mongoose = __turbopack_external_require__("mongoose");
__turbopack_require__("[project]/models/Department.js (ecmascript, rsc)");
const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    department: {
        type: mongoose.Types.ObjectId,
        ref: "Department",
        required: true
    }
});
const model = mongoose.models.SubDepartment || mongoose.model("SubDepartment", schema);
const __TURBOPACK__default__export__ = model;

})()),
"[project]/models/Ticket.js (ecmascript, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const mongoose = __turbopack_external_require__("mongoose");
__turbopack_require__("[project]/models/Department.js (ecmascript, rsc)");
__turbopack_require__("[project]/models/SubDepartment.js (ecmascript, rsc)");
__turbopack_require__("[project]/models/User.js (ecmascript, rsc)");
const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    department: {
        type: mongoose.Types.ObjectId,
        ref: "Department",
        required: true
    },
    subDepartment: {
        type: mongoose.Types.ObjectId,
        ref: "subDepartment",
        required: true
    },
    priority: {
        type: Number,
        default: 1,
        enum: [
            1,
            2,
            3
        ]
    },
    hasAnswer: {
        type: Boolean,
        default: false
    },
    isAnswer: {
        type: Boolean,
        default: false
    },
    mainTicket: {
        type: mongoose.Types.ObjectId,
        ref: "Ticket",
        required: false
    }
}, {
    timestamps: true
});
const model = mongoose.models.Ticket || mongoose.model("Ticket", schema);
const __TURBOPACK__default__export__ = model;

})()),
}]);

//# sourceMappingURL=models_ffdae8._.js.map