(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/models_Comment_dfc045.js", {

"[project]/models/Product.js (ecmascript, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const mongoose = __turbopack_external_require__("mongoose");
__turbopack_require__("[project]/models/Comment.js (ecmascript, rsc)");
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    longDescription: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    suitableFor: {
        type: String,
        required: true
    },
    smell: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        default: 5
    },
    tags: {
        type: [
            String
        ],
        required: true
    },
    img: {
        type: String,
        required: true
    },
    comments: {
        type: [
            {
                type: mongoose.Types.ObjectId,
                ref: "Comment"
            }
        ]
    }
});
const model = mongoose.models.Product || mongoose.model("Product", schema);
const __TURBOPACK__default__export__ = model;

})()),
"[project]/models/Comment.js (ecmascript, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const mongoose = __turbopack_external_require__("mongoose");
__turbopack_require__("[project]/models/Product.js (ecmascript, rsc)");
const schema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        default: 5
    },
    isAccept: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: ()=>Date.now(),
        immutable: false
    },
    productID: {
        type: mongoose.Types.ObjectId,
        ref: "Product"
    }
});
const model = mongoose.models.Comment || mongoose.model("Comment", schema);
const __TURBOPACK__default__export__ = model;

})()),
}]);

//# sourceMappingURL=models_Comment_dfc045.js.map