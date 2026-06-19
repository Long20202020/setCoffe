(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/src_components_templates_p-user_tickets_Tickets_362561.js", {

"[project]/src/components/templates/p-user/tickets/ticket.module.css (css module, ssr)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "answer": "answer__ticket__c10b7fd",
  "department": "department__ticket__c10b7fd",
  "no_answer": "no_answer__ticket__c10b7fd",
  "ticket": "ticket__ticket__c10b7fd",
});

})()),
"[project]/src/components/templates/p-user/tickets/Ticket.js (ecmascript, ssr)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$p$2d$user$2f$tickets$2f$ticket$2e$module$2e$css__$28$css__module$29$__ = __turbopack_import__("[project]/src/components/templates/p-user/tickets/ticket.module.css (css module, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const Ticket = ({ _id , title , createdAt , department , hasAnswer  })=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
        href: `/p-user/tickets/answer/${_id}`,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$p$2d$user$2f$tickets$2f$ticket$2e$module$2e$css__$28$css__module$29$__["default"].ticket,
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                        children: title
                    }, void 0, false, {
                        fileName: "<[project]/src/components/templates/p-user/tickets/Ticket.js>",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$p$2d$user$2f$tickets$2f$ticket$2e$module$2e$css__$28$css__module$29$__["default"].department,
                        children: department.title
                    }, void 0, false, {
                        fileName: "<[project]/src/components/templates/p-user/tickets/Ticket.js>",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/templates/p-user/tickets/Ticket.js>",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                        children: new Date(createdAt).toLocaleDateString("fa-IR")
                    }, void 0, false, {
                        fileName: "<[project]/src/components/templates/p-user/tickets/Ticket.js>",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                        className: hasAnswer ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$p$2d$user$2f$tickets$2f$ticket$2e$module$2e$css__$28$css__module$29$__["default"].answer : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$p$2d$user$2f$tickets$2f$ticket$2e$module$2e$css__$28$css__module$29$__["default"].no_answer,
                        children: hasAnswer ? "پاسخ داده شده" : "پاسخ داده نشده"
                    }, void 0, false, {
                        fileName: "<[project]/src/components/templates/p-user/tickets/Ticket.js>",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/templates/p-user/tickets/Ticket.js>",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/templates/p-user/tickets/Ticket.js>",
        lineNumber: 6,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Ticket;

})()),
"[project]/src/components/templates/p-user/tickets/Tickets.js (ecmascript, ssr)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$p$2d$user$2f$tickets$2e$module$2e$css__$28$css__module$29$__ = __turbopack_import__("[project]/src/styles/p-user/tickets.module.css (css module, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$p$2d$user$2f$tickets$2f$Ticket$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/templates/p-user/tickets/Ticket.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
function Tickets({ tickets  }) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$p$2d$user$2f$tickets$2e$module$2e$css__$28$css__module$29$__["default"].container,
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$p$2d$user$2f$tickets$2e$module$2e$css__$28$css__module$29$__["default"].title,
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                        children: "همه تیکت ها"
                    }, void 0, false, {
                        fileName: "<[project]/src/components/templates/p-user/tickets/Tickets.js>",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                        href: "/p-user/tickets/sendTicket",
                        children: " ارسال تیکت جدید "
                    }, void 0, false, {
                        fileName: "<[project]/src/components/templates/p-user/tickets/Tickets.js>",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/templates/p-user/tickets/Tickets.js>",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$p$2d$user$2f$tickets$2e$module$2e$css__$28$css__module$29$__["default"].boxes
            }, void 0, false, {
                fileName: "<[project]/src/components/templates/p-user/tickets/Tickets.js>",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$p$2d$user$2f$tickets$2e$module$2e$css__$28$css__module$29$__["default"].filtering,
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("select", {
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("option", {
                                        children: "همه"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/templates/p-user/tickets/Tickets.js>",
                                        lineNumber: 27,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("option", {
                                        children: "فرستاده شده"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/templates/p-user/tickets/Tickets.js>",
                                        lineNumber: 28,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("option", {
                                        children: "دریافتی"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/templates/p-user/tickets/Tickets.js>",
                                        lineNumber: 29,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/templates/p-user/tickets/Tickets.js>",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("select", {
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("option", {
                                        children: "همه"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/templates/p-user/tickets/Tickets.js>",
                                        lineNumber: 32,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("option", {
                                        children: "باز"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/templates/p-user/tickets/Tickets.js>",
                                        lineNumber: 33,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("option", {
                                        children: "بسته"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/templates/p-user/tickets/Tickets.js>",
                                        lineNumber: 34,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("option", {
                                        children: "پاسخ داده شده"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/templates/p-user/tickets/Tickets.js>",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("option", {
                                        children: "پایان یافته"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/templates/p-user/tickets/Tickets.js>",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/templates/p-user/tickets/Tickets.js>",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("select", {
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("option", {
                                        children: "تاریخ پاسخ"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/templates/p-user/tickets/Tickets.js>",
                                        lineNumber: 39,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("option", {
                                        children: "تاریخ ایجاد"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/templates/p-user/tickets/Tickets.js>",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/templates/p-user/tickets/Tickets.js>",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/templates/p-user/tickets/Tickets.js>",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                        type: "submit",
                        children: "اعمال"
                    }, void 0, false, {
                        fileName: "<[project]/src/components/templates/p-user/tickets/Tickets.js>",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/templates/p-user/tickets/Tickets.js>",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                children: tickets.map((ticket)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$p$2d$user$2f$tickets$2f$Ticket$2e$js__$28$ecmascript$29$__["default"], {
                        ...ticket
                    }, ticket._id, false, {
                        fileName: "<[project]/src/components/templates/p-user/tickets/Tickets.js>",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "<[project]/src/components/templates/p-user/tickets/Tickets.js>",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            tickets.length === 0 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$p$2d$user$2f$tickets$2e$module$2e$css__$28$css__module$29$__["default"].empty,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                    children: "تیکتی وجود ندارد"
                }, void 0, false, {
                    fileName: "<[project]/src/components/templates/p-user/tickets/Tickets.js>",
                    lineNumber: 54,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/templates/p-user/tickets/Tickets.js>",
                lineNumber: 53,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/templates/p-user/tickets/Tickets.js>",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Tickets;

})()),
}]);

//# sourceMappingURL=src_components_templates_p-user_tickets_Tickets_362561.js.map