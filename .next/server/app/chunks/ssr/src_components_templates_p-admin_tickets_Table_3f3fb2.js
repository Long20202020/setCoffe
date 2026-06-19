(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/src_components_templates_p-admin_tickets_Table_3f3fb2.js", {

"[project]/src/components/templates/p-admin/tickets/table.module.css (css module, ssr)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "answer_comment": "answer_comment__table__63b807c1",
  "answer_contact": "answer_contact__table__63b807c1",
  "btn": "btn__table__63b807c1",
  "check": "check__table__63b807c1",
  "delete_btn": "delete_btn__table__63b807c1",
  "edit_btn": "edit_btn__table__63b807c1",
  "empty": "empty__table__63b807c1",
  "no_answer_comment": "no_answer_comment__table__63b807c1",
  "no_answer_contact": "no_answer_contact__table__63b807c1",
  "no_check": "no_check__table__63b807c1",
  "row": "row__table__63b807c1",
  "table": "table__table__63b807c1",
  "table_container": "table_container__table__63b807c1",
  "title": "title__table__63b807c1",
});

})()),
"[project]/src/components/templates/p-admin/tickets/Table.js (ecmascript, ssr)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>DataTable
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$p$2d$admin$2f$tickets$2f$table$2e$module$2e$css__$28$css__module$29$__ = __turbopack_import__("[project]/src/components/templates/p-admin/tickets/table.module.css (css module, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/helpers.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert$2f$dist$2f$sweetalert$2e$min$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/sweetalert/dist/sweetalert.min.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
function DataTable({ tickets , title  }) {
    const router = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__["useRouter"]();
    const showTicketBody = (body)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$js__$28$ecmascript$29$__["showSwal"](body, undefined, "بستن");
    };
    const answerToTicket = async (ticket)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert$2f$dist$2f$sweetalert$2e$min$2e$js__$28$ecmascript$29$__["default"]({
            title: "لطفا پاسخ مورد نظر را وارد کنید:",
            content: "input",
            buttons: "ثبت پاسخ"
        }).then(async (answerText)=>{
            if (answerText) {
                const answer = {
                    ...ticket,
                    body: answerText,
                    ticketID: ticket._id
                };
                const res = await fetch("/api/tickets/answer", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(answer)
                });
                if (res.status === 201) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert$2f$dist$2f$sweetalert$2e$min$2e$js__$28$ecmascript$29$__["default"]({
                        title: "پاسخ مورد نظر ثبت شد",
                        icon: "success",
                        buttons: "فهمیدم"
                    });
                }
            }
        });
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h1", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$p$2d$admin$2f$tickets$2f$table$2e$module$2e$css__$28$css__module$29$__["default"].title,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                        children: title
                    }, void 0, false, {
                        fileName: "<[project]/src/components/templates/p-admin/tickets/Table.js>",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/components/templates/p-admin/tickets/Table.js>",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/templates/p-admin/tickets/Table.js>",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$p$2d$admin$2f$tickets$2f$table$2e$module$2e$css__$28$css__module$29$__["default"].table_container,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("table", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$p$2d$admin$2f$tickets$2f$table$2e$module$2e$css__$28$css__module$29$__["default"].table,
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("thead", {
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("tr", {
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("th", {
                                        children: "شناسه"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/templates/p-admin/tickets/Table.js>",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("th", {
                                        children: "کاربر"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/templates/p-admin/tickets/Table.js>",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("th", {
                                        children: "عنوان"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/templates/p-admin/tickets/Table.js>",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("th", {
                                        children: "دپارتمان"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/templates/p-admin/tickets/Table.js>",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("th", {
                                        children: "مشاهده"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/templates/p-admin/tickets/Table.js>",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("th", {
                                        children: "پاسخ"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/templates/p-admin/tickets/Table.js>",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("th", {
                                        children: "بن"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/templates/p-admin/tickets/Table.js>",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/templates/p-admin/tickets/Table.js>",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/components/templates/p-admin/tickets/Table.js>",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("tbody", {
                            children: tickets.map((ticket, index)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("tr", {
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            children: index + 1
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/templates/p-admin/tickets/Table.js>",
                                            lineNumber: 69,
                                            columnNumber: 17
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            children: ticket.user.name
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/templates/p-admin/tickets/Table.js>",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            children: ticket.title
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/templates/p-admin/tickets/Table.js>",
                                            lineNumber: 71,
                                            columnNumber: 17
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            children: ticket.department.title
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/templates/p-admin/tickets/Table.js>",
                                            lineNumber: 72,
                                            columnNumber: 17
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                type: "button",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$p$2d$admin$2f$tickets$2f$table$2e$module$2e$css__$28$css__module$29$__["default"].edit_btn,
                                                onClick: ()=>showTicketBody(ticket.body),
                                                children: "مشاهده"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/components/templates/p-admin/tickets/Table.js>",
                                                lineNumber: 74,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/templates/p-admin/tickets/Table.js>",
                                            lineNumber: 73,
                                            columnNumber: 17
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                type: "button",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$p$2d$admin$2f$tickets$2f$table$2e$module$2e$css__$28$css__module$29$__["default"].delete_btn,
                                                onClick: ()=>answerToTicket(ticket),
                                                children: "پاسخ"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/components/templates/p-admin/tickets/Table.js>",
                                                lineNumber: 83,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/templates/p-admin/tickets/Table.js>",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                type: "button",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$p$2d$admin$2f$tickets$2f$table$2e$module$2e$css__$28$css__module$29$__["default"].delete_btn,
                                                children: "بن"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/components/templates/p-admin/tickets/Table.js>",
                                                lineNumber: 92,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/templates/p-admin/tickets/Table.js>",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, ticket._id, true, {
                                    fileName: "<[project]/src/components/templates/p-admin/tickets/Table.js>",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "<[project]/src/components/templates/p-admin/tickets/Table.js>",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/components/templates/p-admin/tickets/Table.js>",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/templates/p-admin/tickets/Table.js>",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/templates/p-admin/tickets/Table.js>",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}

})()),
}]);

//# sourceMappingURL=src_components_templates_p-admin_tickets_Table_3f3fb2.js.map