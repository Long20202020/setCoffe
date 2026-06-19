(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/src_components_modules_p-admin_Sidebar_b3a803.js", {

"[project]/src/components/modules/p-admin/sidebar.module.css (css module, ssr)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "logout": "logout__sidebar__dae9383",
  "sidebar": "sidebar__sidebar__dae9383",
  "sidebar_header": "sidebar_header__sidebar__dae9383",
  "sidebar_link_active": "sidebar_link_active__sidebar__dae9383",
  "sidebar_main": "sidebar_main__sidebar__dae9383",
});

})()),
"[project]/src/components/modules/p-admin/Sidebar.js (ecmascript, ssr)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$p$2d$admin$2f$sidebar$2e$module$2e$css__$28$css__module$29$__ = __turbopack_import__("[project]/src/components/modules/p-admin/sidebar.module.css (css module, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$im$2f$index$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/im/index.esm.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.esm.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/md/index.esm.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/tb/index.esm.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert$2f$dist$2f$sweetalert$2e$min$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/sweetalert/dist/sweetalert.min.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
;
;
;
;
const Sidebar = ()=>{
    const path = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__["usePathname"]();
    const router = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__["useRouter"]();
    const logoutHandler = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert$2f$dist$2f$sweetalert$2e$min$2e$js__$28$ecmascript$29$__["default"]({
            title: "آیا از خروج اطمینان دارید؟",
            icon: "warning",
            buttons: [
                "نه",
                "آره"
            ]
        }).then(async (result)=>{
            if (result) {
                const res = await fetch("/api/auth/signout", {
                    method: "POST"
                });
                if (res.status === 200) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert$2f$dist$2f$sweetalert$2e$min$2e$js__$28$ecmascript$29$__["default"]({
                        title: "با موفقیت از اکانت خارج شدین",
                        icon: "success",
                        buttons: "فهمیدم"
                    }).then((result)=>{
                        router.replace("/");
                    });
                }
            }
        });
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("aside", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$p$2d$admin$2f$sidebar$2e$module$2e$css__$28$css__module$29$__["default"].sidebar,
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$p$2d$admin$2f$sidebar$2e$module$2e$css__$28$css__module$29$__["default"].sidebar_header,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                    children: "خوش اومدی شاهین عزیز"
                }, void 0, false, {
                    fileName: "<[project]/src/components/modules/p-admin/Sidebar.js>",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/modules/p-admin/Sidebar.js>",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("ul", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$p$2d$admin$2f$sidebar$2e$module$2e$css__$28$css__module$29$__["default"].sidebar_main,
                children: path.includes("/p-user") ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                            href: "/p-user",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$p$2d$admin$2f$sidebar$2e$module$2e$css__$28$css__module$29$__["default"].sidebar_link_active,
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$im$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["ImReply"], {}, void 0, false, {
                                    fileName: "<[project]/src/components/modules/p-admin/Sidebar.js>",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this),
                                "پیشخوان"
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/components/modules/p-admin/Sidebar.js>",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                            href: "/p-user/orders",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["FaShoppingBag"], {}, void 0, false, {
                                    fileName: "<[project]/src/components/modules/p-admin/Sidebar.js>",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this),
                                "سفارش ها"
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/components/modules/p-admin/Sidebar.js>",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                            href: "/p-user/tickets",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["MdSms"], {}, void 0, false, {
                                    fileName: "<[project]/src/components/modules/p-admin/Sidebar.js>",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this),
                                "تیکت های پشتیبانی"
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/components/modules/p-admin/Sidebar.js>",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                            href: "/p-user/comments",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["FaComments"], {}, void 0, false, {
                                    fileName: "<[project]/src/components/modules/p-admin/Sidebar.js>",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this),
                                "کامنت ها"
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/components/modules/p-admin/Sidebar.js>",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                            href: "/p-user/wishlist",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["FaHeart"], {}, void 0, false, {
                                    fileName: "<[project]/src/components/modules/p-admin/Sidebar.js>",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this),
                                "علاقه مندی"
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/components/modules/p-admin/Sidebar.js>",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                            href: "/p-user/account-details",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["TbListDetails"], {}, void 0, false, {
                                    fileName: "<[project]/src/components/modules/p-admin/Sidebar.js>",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this),
                                "جزئیات اکانت"
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/components/modules/p-admin/Sidebar.js>",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                            href: "/p-admin",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$p$2d$admin$2f$sidebar$2e$module$2e$css__$28$css__module$29$__["default"].sidebar_link_active,
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$im$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["ImReply"], {}, void 0, false, {
                                    fileName: "<[project]/src/components/modules/p-admin/Sidebar.js>",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this),
                                "پیشخوان"
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/components/modules/p-admin/Sidebar.js>",
                            lineNumber: 74,
                            columnNumber: 13
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                            href: "/p-admin/products",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["FaShoppingBag"], {}, void 0, false, {
                                    fileName: "<[project]/src/components/modules/p-admin/Sidebar.js>",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this),
                                "محصولات"
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/components/modules/p-admin/Sidebar.js>",
                            lineNumber: 79,
                            columnNumber: 13
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                            href: "/p-admin/users",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["FaUsers"], {}, void 0, false, {
                                    fileName: "<[project]/src/components/modules/p-admin/Sidebar.js>",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, this),
                                "کاربران"
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/components/modules/p-admin/Sidebar.js>",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                            href: "/p-admin/comments",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["FaComments"], {}, void 0, false, {
                                    fileName: "<[project]/src/components/modules/p-admin/Sidebar.js>",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this),
                                "کامنت ها"
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/components/modules/p-admin/Sidebar.js>",
                            lineNumber: 87,
                            columnNumber: 13
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                            href: "/p-admin/tickets",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["MdSms"], {}, void 0, false, {
                                    fileName: "<[project]/src/components/modules/p-admin/Sidebar.js>",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this),
                                "تیکت ها"
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/components/modules/p-admin/Sidebar.js>",
                            lineNumber: 92,
                            columnNumber: 13
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                            href: "/p-admin/discounts",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["MdOutlineAttachMoney"], {}, void 0, false, {
                                    fileName: "<[project]/src/components/modules/p-admin/Sidebar.js>",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this),
                                "تخفیفات"
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/components/modules/p-admin/Sidebar.js>",
                            lineNumber: 96,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "<[project]/src/components/modules/p-admin/Sidebar.js>",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$modules$2f$p$2d$admin$2f$sidebar$2e$module$2e$css__$28$css__module$29$__["default"].logout,
                onClick: logoutHandler,
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["MdLogout"], {}, void 0, false, {
                        fileName: "<[project]/src/components/modules/p-admin/Sidebar.js>",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    "خروج"
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/modules/p-admin/Sidebar.js>",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/modules/p-admin/Sidebar.js>",
        lineNumber: 40,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Sidebar;

})()),
}]);

//# sourceMappingURL=src_components_modules_p-admin_Sidebar_b3a803.js.map