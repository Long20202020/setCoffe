(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/src_components_templates_p-admin_comments_Table_9c432a.js", {

"[project]/src/components/templates/p-admin/comments/table.module.css (css module, ssr)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "accept": "accept__table__c5a6c3aa",
  "answer_comment": "answer_comment__table__c5a6c3aa",
  "answer_contact": "answer_contact__table__c5a6c3aa",
  "btn": "btn__table__c5a6c3aa",
  "check": "check__table__c5a6c3aa",
  "delete_btn": "delete_btn__table__c5a6c3aa",
  "edit_btn": "edit_btn__table__c5a6c3aa",
  "empty": "empty__table__c5a6c3aa",
  "no_answer_comment": "no_answer_comment__table__c5a6c3aa",
  "no_answer_contact": "no_answer_contact__table__c5a6c3aa",
  "no_check": "no_check__table__c5a6c3aa",
  "reject": "reject__table__c5a6c3aa",
  "row": "row__table__c5a6c3aa",
  "table": "table__table__c5a6c3aa",
  "table_container": "table_container__table__c5a6c3aa",
  "title": "title__table__c5a6c3aa",
});

})()),
"[project]/src/components/templates/p-admin/comments/Table.js (ecmascript, ssr)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>DataTable
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$p$2d$admin$2f$comments$2f$table$2e$module$2e$css__$28$css__module$29$__ = __turbopack_import__("[project]/src/components/templates/p-admin/comments/table.module.css (css module, ssr)");
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
function DataTable({ comments , title  }) {
    const router = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__["useRouter"]();
    const showCommentBody = (body)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helpers$2e$js__$28$ecmascript$29$__["showSwal"](body, undefined, "خوندم");
    };
    const acceptComment = async (commentID)=>{
        const res = await fetch("/api/comments/accept", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: commentID
            })
        });
        if (res.status === 200) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert$2f$dist$2f$sweetalert$2e$min$2e$js__$28$ecmascript$29$__["default"]({
                title: "کامنت مورد نظر با موفقیت تایید شد",
                icon: "success",
                buttons: "فهمیدم"
            }).then(()=>{
                router.refresh();
            });
        }
    };
    const rejectComment = async (commentID)=>{
        const res = await fetch("/api/comments/reject", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: commentID
            })
        });
        if (res.status === 200) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert$2f$dist$2f$sweetalert$2e$min$2e$js__$28$ecmascript$29$__["default"]({
                title: "کامنت مورد نظر با موفقیت رد شد",
                icon: "success",
                buttons: "فهمیدم"
            }).then(()=>{
                router.refresh();
            });
        }
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h1", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$p$2d$admin$2f$comments$2f$table$2e$module$2e$css__$28$css__module$29$__["default"].title,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                        children: title
                    }, void 0, false, {
                        fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$p$2d$admin$2f$comments$2f$table$2e$module$2e$css__$28$css__module$29$__["default"].table_container,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("table", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$p$2d$admin$2f$comments$2f$table$2e$module$2e$css__$28$css__module$29$__["default"].table,
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("thead", {
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("tr", {
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("th", {
                                        children: "شناسه"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("th", {
                                        children: "کاربر"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("th", {
                                        children: "ایمیل"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("th", {
                                        children: "امتیاز"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("th", {
                                        children: "محصول"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("th", {
                                        children: "تاریخ ثبت"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("th", {
                                        children: "مشاهده"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("th", {
                                        children: "ویرایش"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("th", {
                                        children: "حذف"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("th", {
                                        children: "تایید / رد"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("th", {
                                        children: "پاسخ"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("th", {
                                        children: "بن"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("tbody", {
                            children: comments.map((comment, index)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("tr", {
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            className: comment.isAccept ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$p$2d$admin$2f$comments$2f$table$2e$module$2e$css__$28$css__module$29$__["default"].accept : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$p$2d$admin$2f$comments$2f$table$2e$module$2e$css__$28$css__module$29$__["default"].reject,
                                            children: index + 1
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            children: comment.username
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                                            lineNumber: 87,
                                            columnNumber: 17
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            children: comment.email
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                                            lineNumber: 88,
                                            columnNumber: 17
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            children: comment.score
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                                            lineNumber: 89,
                                            columnNumber: 17
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            children: comment.productID.name
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                                            lineNumber: 90,
                                            columnNumber: 17
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            children: new Date(comment.date).toLocaleDateString("fa-IR")
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                type: "button",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$p$2d$admin$2f$comments$2f$table$2e$module$2e$css__$28$css__module$29$__["default"].edit_btn,
                                                onClick: ()=>showCommentBody(comment.body),
                                                children: "مشاهده"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                                                lineNumber: 93,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                type: "button",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$p$2d$admin$2f$comments$2f$table$2e$module$2e$css__$28$css__module$29$__["default"].edit_btn,
                                                children: "ویرایش"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                                                lineNumber: 102,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                type: "button",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$p$2d$admin$2f$comments$2f$table$2e$module$2e$css__$28$css__module$29$__["default"].delete_btn,
                                                children: "حذف"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                                                lineNumber: 107,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                                            lineNumber: 106,
                                            columnNumber: 17
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            children: comment.isAccept ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                type: "button",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$p$2d$admin$2f$comments$2f$table$2e$module$2e$css__$28$css__module$29$__["default"].delete_btn,
                                                onClick: ()=>rejectComment(comment._id),
                                                children: "رد"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                                                lineNumber: 113,
                                                columnNumber: 21
                                            }, this) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                type: "button",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$p$2d$admin$2f$comments$2f$table$2e$module$2e$css__$28$css__module$29$__["default"].delete_btn,
                                                onClick: ()=>acceptComment(comment._id),
                                                children: "تایید"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                                                lineNumber: 121,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                type: "button",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$p$2d$admin$2f$comments$2f$table$2e$module$2e$css__$28$css__module$29$__["default"].delete_btn,
                                                children: "پاسخ"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                                                lineNumber: 131,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("td", {
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                type: "button",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$templates$2f$p$2d$admin$2f$comments$2f$table$2e$module$2e$css__$28$css__module$29$__["default"].delete_btn,
                                                children: "بن"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                                                lineNumber: 136,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                                            lineNumber: 135,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, comment._id, true, {
                                    fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/templates/p-admin/comments/Table.js>",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}

})()),
}]);

//# sourceMappingURL=src_components_templates_p-admin_comments_Table_9c432a.js.map