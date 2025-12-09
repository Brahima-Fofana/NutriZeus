module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/ui/dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-lg leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/ui/command.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Command",
    ()=>Command,
    "CommandDialog",
    ()=>CommandDialog,
    "CommandEmpty",
    ()=>CommandEmpty,
    "CommandGroup",
    ()=>CommandGroup,
    "CommandInput",
    ()=>CommandInput,
    "CommandItem",
    ()=>CommandItem,
    "CommandList",
    ()=>CommandList,
    "CommandSeparator",
    ()=>CommandSeparator,
    "CommandShortcut",
    ()=>CommandShortcut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cmdk/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as SearchIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Command({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Command"], {
        "data-slot": "command",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/command.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
function CommandDialog({ title = "Command Palette", description = "Search for a command to run...", children, className, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                className: "sr-only",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/command.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/command.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/command.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("overflow-hidden p-0", className),
                showCloseButton: showCloseButton,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Command, {
                    className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/command.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/command.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/command.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
function CommandInput({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "command-input-wrapper",
        className: "flex h-9 items-center gap-2 border-b px-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchIcon$3e$__["SearchIcon"], {
                className: "size-4 shrink-0 opacity-50"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/command.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Command"].Input, {
                "data-slot": "command-input",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50", className),
                ...props
            }, void 0, false, {
                fileName: "[project]/src/components/ui/command.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/command.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
function CommandList({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Command"].List, {
        "data-slot": "command-list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/command.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
function CommandEmpty({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Command"].Empty, {
        "data-slot": "command-empty",
        className: "py-6 text-center text-sm",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/command.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
function CommandGroup({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Command"].Group, {
        "data-slot": "command-group",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/command.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
function CommandSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Command"].Separator, {
        "data-slot": "command-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-border -mx-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/command.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
function CommandItem({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Command"].Item, {
        "data-slot": "command-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/command.tsx",
        lineNumber: 147,
        columnNumber: 5
    }, this);
}
function CommandShortcut({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "command-shortcut",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground ml-auto text-xs tracking-widest", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/command.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/ui/popover.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Popover",
    ()=>Popover,
    "PopoverAnchor",
    ()=>PopoverAnchor,
    "PopoverContent",
    ()=>PopoverContent,
    "PopoverTrigger",
    ()=>PopoverTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-popover/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Popover({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "popover",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/popover.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
function PopoverTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "popover-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/popover.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
function PopoverContent({ className, align = "center", sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "popover-content",
            align: align,
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/popover.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/popover.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
function PopoverAnchor({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Anchor"], {
        "data-slot": "popover-anchor",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/popover.tsx",
        lineNumber: 45,
        columnNumber: 10
    }, this);
}
;
}),
"[project]/src/data/data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "foods",
    ()=>foods
]);
const foods = [
    {
        name: "Apple",
        calories: 52,
        carbohydrates: 14,
        protein: 0.3,
        fat: 0.2,
        fiber: 2.4,
        sugar: 10.4,
        vitamins: [
            "Vitamin C",
            "Vitamin K"
        ],
        minerals: [
            "Potassium"
        ]
    },
    {
        name: "Banana",
        calories: 96,
        carbohydrates: 23,
        protein: 1.3,
        fat: 0.3,
        fiber: 2.6,
        sugar: 12.2,
        vitamins: [
            "Vitamin B6",
            "Vitamin C"
        ],
        minerals: [
            "Potassium",
            "Magnesium"
        ]
    },
    {
        name: "Chicken",
        calories: 165,
        carbohydrates: 0,
        protein: 31,
        fat: 3.6,
        vitamins: [
            "Vitamin B6",
            "Vitamin B12"
        ],
        minerals: [
            "Phosphorus",
            "Selenium"
        ]
    },
    {
        name: "Salmon",
        calories: 206,
        carbohydrates: 0,
        protein: 22,
        fat: 12,
        vitamins: [
            "Vitamin D",
            "Vitamin B12"
        ],
        minerals: [
            "Selenium",
            "Phosphorus"
        ]
    },
    {
        name: "White Rice",
        calories: 130,
        carbohydrates: 28,
        protein: 2.4,
        fat: 0.3,
        fiber: 0.4,
        vitamins: [
            "Thiamine",
            "Niacin"
        ],
        minerals: [
            "Magnesium",
            "Phosphorus"
        ]
    },
    {
        name: "Almonds",
        calories: 173,
        carbohydrates: 6.1,
        protein: 6,
        fat: 15,
        fiber: 3.5,
        sugar: 1.2,
        vitamins: [
            "Vitamin E",
            "Riboflavin"
        ],
        minerals: [
            "Magnesium",
            "Calcium"
        ]
    },
    {
        name: "Whole Milk",
        calories: 149,
        carbohydrates: 11.7,
        protein: 7.7,
        fat: 8,
        vitamins: [
            "Vitamin D",
            "Vitamin B12"
        ],
        minerals: [
            "Calcium",
            "Phosphorus"
        ]
    },
    {
        name: "Egg",
        calories: 72,
        carbohydrates: 0.4,
        protein: 6.3,
        fat: 4.8,
        vitamins: [
            "Vitamin A",
            "Vitamin D"
        ],
        minerals: [
            "Iron",
            "Zinc"
        ]
    },
    {
        name: "Broccoli",
        calories: 34,
        carbohydrates: 6.6,
        protein: 2.8,
        fat: 0.4,
        fiber: 2.6,
        vitamins: [
            "Vitamin C",
            "Vitamin K"
        ],
        minerals: [
            "Calcium",
            "Iron"
        ]
    },
    {
        name: "Carrot",
        calories: 41,
        carbohydrates: 9.6,
        protein: 0.9,
        fat: 0.2,
        fiber: 2.8,
        vitamins: [
            "Vitamin A",
            "Vitamin K"
        ],
        minerals: [
            "Potassium",
            "Calcium"
        ]
    },
    {
        name: "Tomato",
        calories: 18,
        carbohydrates: 3.9,
        protein: 0.9,
        fat: 0.2,
        fiber: 1.2,
        vitamins: [
            "Vitamin C",
            "Vitamin K"
        ],
        minerals: [
            "Potassium",
            "Iron"
        ]
    },
    {
        name: "Spinach",
        calories: 23,
        carbohydrates: 3.6,
        protein: 2.9,
        fat: 0.4,
        fiber: 2.2,
        vitamins: [
            "Vitamin A",
            "Vitamin C"
        ],
        minerals: [
            "Iron",
            "Calcium"
        ]
    },
    {
        name: "Sweet Potato",
        calories: 86,
        carbohydrates: 20,
        protein: 1.6,
        fat: 0.1,
        fiber: 3,
        vitamins: [
            "Vitamin A",
            "Vitamin C"
        ],
        minerals: [
            "Potassium",
            "Magnesium"
        ]
    },
    {
        name: "Plain Yogurt",
        calories: 59,
        carbohydrates: 3.6,
        protein: 10,
        fat: 0.4,
        vitamins: [
            "Vitamin B12",
            "Vitamin B2"
        ],
        minerals: [
            "Calcium",
            "Phosphorus"
        ]
    },
    {
        name: "Cheddar Cheese",
        calories: 403,
        carbohydrates: 1.3,
        protein: 24,
        fat: 33,
        vitamins: [
            "Vitamin A",
            "Vitamin B12"
        ],
        minerals: [
            "Calcium",
            "Phosphorus"
        ]
    },
    {
        name: "Tofu",
        calories: 76,
        carbohydrates: 1.9,
        protein: 8,
        fat: 4.8,
        vitamins: [
            "Vitamin B1",
            "Vitamin B2"
        ],
        minerals: [
            "Calcium",
            "Iron"
        ]
    },
    {
        name: "Chickpeas",
        calories: 164,
        carbohydrates: 27.4,
        protein: 8.9,
        fat: 2.6,
        fiber: 7.6,
        vitamins: [
            "Folate",
            "Vitamin B6"
        ],
        minerals: [
            "Iron",
            "Magnesium"
        ]
    },
    {
        name: "Quinoa",
        calories: 120,
        carbohydrates: 21.3,
        protein: 4.1,
        fat: 1.9,
        fiber: 2.8,
        vitamins: [
            "Folate",
            "Vitamin B1"
        ],
        minerals: [
            "Iron",
            "Magnesium"
        ]
    },
    {
        name: "Avocado",
        calories: 160,
        carbohydrates: 8.5,
        protein: 2,
        fat: 14.7,
        fiber: 6.7,
        vitamins: [
            "Vitamin K",
            "Vitamin E"
        ],
        minerals: [
            "Potassium",
            "Magnesium"
        ]
    },
    {
        name: "Blueberries",
        calories: 57,
        carbohydrates: 14.5,
        protein: 0.7,
        fat: 0.3,
        fiber: 2.4,
        vitamins: [
            "Vitamin C",
            "Vitamin K"
        ],
        minerals: [
            "Manganese",
            "Copper"
        ]
    },
    {
        name: "Oats",
        calories: 389,
        carbohydrates: 66.3,
        protein: 16.9,
        fat: 6.9,
        fiber: 10.6,
        vitamins: [
            "Vitamin B1",
            "Vitamin B5"
        ],
        minerals: [
            "Magnesium",
            "Zinc"
        ]
    },
    {
        name: "Lentils",
        calories: 116,
        carbohydrates: 20.1,
        protein: 9,
        fat: 0.4,
        fiber: 7.9,
        vitamins: [
            "Folate",
            "Vitamin B6"
        ],
        minerals: [
            "Iron",
            "Manganese"
        ]
    },
    {
        name: "Red Bell Pepper",
        calories: 31,
        carbohydrates: 6,
        protein: 1,
        fat: 0.3,
        fiber: 2.1,
        vitamins: [
            "Vitamin C",
            "Vitamin A"
        ],
        minerals: [
            "Potassium",
            "Manganese"
        ]
    },
    {
        name: "Oranges",
        calories: 47,
        carbohydrates: 11.8,
        protein: 0.9,
        fat: 0.1,
        fiber: 2.4,
        sugar: 9.4,
        vitamins: [
            "Vitamin C",
            "Folate"
        ],
        minerals: [
            "Calcium",
            "Potassium"
        ]
    },
    {
        name: "Kiwi",
        calories: 61,
        carbohydrates: 14.7,
        protein: 1.1,
        fat: 0.5,
        fiber: 3,
        sugar: 8.9,
        vitamins: [
            "Vitamin C",
            "Vitamin K"
        ],
        minerals: [
            "Potassium",
            "Magnesium"
        ]
    },
    {
        name: "Potato",
        calories: 77,
        carbohydrates: 17.6,
        protein: 2,
        fat: 0.1,
        fiber: 2.2,
        vitamins: [
            "Vitamin C",
            "Vitamin B6"
        ],
        minerals: [
            "Potassium",
            "Phosphorus"
        ]
    },
    {
        name: "Celery",
        calories: 16,
        carbohydrates: 3,
        protein: 0.7,
        fat: 0.2,
        fiber: 1.6,
        vitamins: [
            "Vitamin K",
            "Vitamin A"
        ],
        minerals: [
            "Calcium",
            "Potassium"
        ]
    },
    {
        name: "Cauliflower",
        calories: 25,
        carbohydrates: 4.9,
        protein: 1.9,
        fat: 0.3,
        fiber: 2,
        vitamins: [
            "Vitamin C",
            "Vitamin K"
        ],
        minerals: [
            "Calcium",
            "Potassium"
        ]
    },
    {
        name: "Strawberries",
        calories: 32,
        carbohydrates: 7.7,
        protein: 0.7,
        fat: 0.3,
        fiber: 2,
        sugar: 4.9,
        vitamins: [
            "Vitamin C",
            "Folate"
        ],
        minerals: [
            "Manganese",
            "Potassium"
        ]
    },
    {
        name: "Pineapple",
        calories: 50,
        carbohydrates: 13.1,
        protein: 0.5,
        fat: 0.1,
        fiber: 1.4,
        sugar: 9.9,
        vitamins: [
            "Vitamin C",
            "Vitamin B6"
        ],
        minerals: [
            "Manganese",
            "Potassium"
        ]
    },
    {
        name: "Mango",
        calories: 60,
        carbohydrates: 15,
        protein: 0.8,
        fat: 0.4,
        fiber: 1.6,
        sugar: 13.7,
        vitamins: [
            "Vitamin C",
            "Vitamin A"
        ],
        minerals: [
            "Potassium",
            "Magnesium"
        ]
    },
    {
        name: "Grapes",
        calories: 69,
        carbohydrates: 18.1,
        protein: 0.7,
        fat: 0.2,
        fiber: 0.9,
        sugar: 15.5,
        vitamins: [
            "Vitamin C",
            "Vitamin K"
        ],
        minerals: [
            "Potassium",
            "Copper"
        ]
    },
    {
        name: "Grapefruit",
        calories: 42,
        carbohydrates: 10.7,
        protein: 0.8,
        fat: 0.1,
        fiber: 1.6,
        sugar: 7,
        vitamins: [
            "Vitamin C",
            "Vitamin A"
        ],
        minerals: [
            "Potassium",
            "Calcium"
        ]
    },
    {
        name: "Cantaloupe",
        calories: 34,
        carbohydrates: 8.2,
        protein: 0.8,
        fat: 0.2,
        fiber: 0.9,
        sugar: 7.9,
        vitamins: [
            "Vitamin A",
            "Vitamin C"
        ],
        minerals: [
            "Potassium",
            "Magnesium"
        ]
    },
    {
        name: "Zucchini",
        calories: 17,
        carbohydrates: 3.1,
        protein: 1.2,
        fat: 0.3,
        fiber: 1,
        vitamins: [
            "Vitamin A",
            "Vitamin C"
        ],
        minerals: [
            "Potassium",
            "Magnesium"
        ]
    },
    {
        name: "Cucumber",
        calories: 16,
        carbohydrates: 3.6,
        protein: 0.7,
        fat: 0.1,
        fiber: 0.5,
        vitamins: [
            "Vitamin K",
            "Vitamin C"
        ],
        minerals: [
            "Potassium",
            "Magnesium"
        ]
    },
    {
        name: "Pear",
        calories: 57,
        carbohydrates: 15.2,
        protein: 0.4,
        fat: 0.1,
        fiber: 3.1,
        sugar: 9.8,
        vitamins: [
            "Vitamin C",
            "Vitamin K"
        ],
        minerals: [
            "Potassium",
            "Copper"
        ]
    },
    {
        name: "Peach",
        calories: 39,
        carbohydrates: 9.5,
        protein: 0.9,
        fat: 0.3,
        fiber: 1.5,
        sugar: 8.4,
        vitamins: [
            "Vitamin C",
            "Vitamin A"
        ],
        minerals: [
            "Potassium",
            "Manganese"
        ]
    },
    {
        name: "Apricot",
        calories: 48,
        carbohydrates: 11.1,
        protein: 1.4,
        fat: 0.4,
        fiber: 2,
        sugar: 9.2,
        vitamins: [
            "Vitamin A",
            "Vitamin C"
        ],
        minerals: [
            "Potassium",
            "Copper"
        ]
    },
    {
        name: "Plum",
        calories: 46,
        carbohydrates: 11.4,
        protein: 0.7,
        fat: 0.3,
        fiber: 1.4,
        sugar: 9.9,
        vitamins: [
            "Vitamin C",
            "Vitamin K"
        ],
        minerals: [
            "Potassium",
            "Copper"
        ]
    },
    {
        name: "Cherry",
        calories: 50,
        carbohydrates: 12,
        protein: 1,
        fat: 0.3,
        fiber: 1.6,
        sugar: 8.5,
        vitamins: [
            "Vitamin C",
            "Vitamin A"
        ],
        minerals: [
            "Potassium",
            "Manganese"
        ]
    },
    {
        name: "Pomegranate",
        calories: 83,
        carbohydrates: 18.7,
        protein: 1.7,
        fat: 1.2,
        fiber: 4,
        sugar: 13.7,
        vitamins: [
            "Vitamin C",
            "Folate"
        ],
        minerals: [
            "Potassium",
            "Copper"
        ]
    },
    {
        name: "Papaya",
        calories: 43,
        carbohydrates: 10.8,
        protein: 0.5,
        fat: 0.3,
        fiber: 1.7,
        sugar: 7.8,
        vitamins: [
            "Vitamin C",
            "Folate"
        ],
        minerals: [
            "Potassium",
            "Magnesium"
        ]
    },
    {
        name: "Watermelon",
        calories: 30,
        carbohydrates: 7.6,
        protein: 0.6,
        fat: 0.2,
        fiber: 0.4,
        sugar: 6.2,
        vitamins: [
            "Vitamin C",
            "Vitamin A"
        ],
        minerals: [
            "Potassium",
            "Magnesium"
        ]
    },
    {
        name: "Lettuce",
        calories: 15,
        carbohydrates: 2.9,
        protein: 1.4,
        fat: 0.2,
        fiber: 1.3,
        vitamins: [
            "Vitamin A",
            "Vitamin K"
        ],
        minerals: [
            "Potassium",
            "Calcium"
        ]
    },
    {
        name: "Cabbage",
        calories: 25,
        carbohydrates: 5.8,
        protein: 1.3,
        fat: 0.1,
        fiber: 2.5,
        vitamins: [
            "Vitamin C",
            "Vitamin K"
        ],
        minerals: [
            "Potassium",
            "Calcium"
        ]
    },
    {
        name: "Brussels Sprouts",
        calories: 43,
        carbohydrates: 8.9,
        protein: 3.4,
        fat: 0.3,
        fiber: 3.8,
        vitamins: [
            "Vitamin C",
            "Vitamin K"
        ],
        minerals: [
            "Potassium",
            "Magnesium"
        ]
    },
    {
        name: "Eggplant",
        calories: 25,
        carbohydrates: 5.9,
        protein: 1,
        fat: 0.2,
        fiber: 3,
        vitamins: [
            "Vitamin C",
            "Vitamin K"
        ],
        minerals: [
            "Potassium",
            "Magnesium"
        ]
    },
    {
        name: "Leek",
        calories: 61,
        carbohydrates: 14.2,
        protein: 1.5,
        fat: 0.3,
        fiber: 1.8,
        vitamins: [
            "Vitamin A",
            "Vitamin C"
        ],
        minerals: [
            "Potassium",
            "Magnesium"
        ]
    },
    {
        name: "Turnip",
        calories: 28,
        carbohydrates: 6.2,
        protein: 0.9,
        fat: 0.1,
        fiber: 1.8,
        vitamins: [
            "Vitamin C",
            "Folate"
        ],
        minerals: [
            "Potassium",
            "Calcium"
        ]
    },
    {
        name: "Radish",
        calories: 16,
        carbohydrates: 3.4,
        protein: 0.7,
        fat: 0.1,
        fiber: 1.6,
        vitamins: [
            "Vitamin C",
            "Folate"
        ],
        minerals: [
            "Potassium",
            "Magnesium"
        ]
    },
    {
        name: "Beetroot",
        calories: 43,
        carbohydrates: 9.6,
        protein: 1.6,
        fat: 0.2,
        fiber: 2.8,
        vitamins: [
            "Vitamin C",
            "Folate"
        ],
        minerals: [
            "Potassium",
            "Magnesium"
        ]
    },
    {
        name: "Corn",
        calories: 86,
        carbohydrates: 19,
        protein: 3.2,
        fat: 1.2,
        fiber: 2.7,
        vitamins: [
            "Vitamin B3",
            "Vitamin B5"
        ],
        minerals: [
            "Potassium",
            "Magnesium"
        ]
    },
    {
        name: "Artichoke",
        calories: 47,
        carbohydrates: 10.5,
        protein: 3.3,
        fat: 0.2,
        fiber: 5.4,
        vitamins: [
            "Vitamin C",
            "Folate"
        ],
        minerals: [
            "Potassium",
            "Magnesium"
        ]
    },
    {
        name: "Watercress",
        calories: 11,
        carbohydrates: 1.3,
        protein: 2.3,
        fat: 0.1,
        fiber: 0.5,
        vitamins: [
            "Vitamin A",
            "Vitamin C"
        ],
        minerals: [
            "Calcium",
            "Potassium"
        ]
    },
    {
        name: "Swiss Chard",
        calories: 19,
        carbohydrates: 3.7,
        protein: 1.8,
        fat: 0.2,
        fiber: 1.6,
        vitamins: [
            "Vitamin A",
            "Vitamin K"
        ],
        minerals: [
            "Calcium",
            "Potassium"
        ]
    },
    {
        name: "Squash",
        calories: 26,
        carbohydrates: 6.5,
        protein: 1,
        fat: 0.1,
        fiber: 0.5,
        vitamins: [
            "Vitamin A",
            "Vitamin C"
        ],
        minerals: [
            "Calcium",
            "Potassium"
        ]
    },
    {
        name: "Fennel",
        calories: 31,
        carbohydrates: 7.3,
        protein: 1.2,
        fat: 0.2,
        fiber: 3.1,
        vitamins: [
            "Vitamin C",
            "Folate"
        ],
        minerals: [
            "Potassium",
            "Magnesium"
        ]
    },
    {
        name: "Green Beans",
        calories: 31,
        carbohydrates: 7,
        protein: 1.8,
        fat: 0.1,
        fiber: 2.7,
        vitamins: [
            "Vitamin C",
            "Vitamin A"
        ],
        minerals: [
            "Calcium",
            "Potassium"
        ]
    },
    {
        name: "Romaine Lettuce",
        calories: 17,
        carbohydrates: 3.3,
        protein: 1.2,
        fat: 0.3,
        fiber: 2.1,
        vitamins: [
            "Vitamin A",
            "Vitamin K"
        ],
        minerals: [
            "Calcium",
            "Potassium"
        ]
    },
    {
        name: "Onion",
        calories: 40,
        carbohydrates: 9.3,
        protein: 1.1,
        fat: 0.1,
        fiber: 1.7,
        vitamins: [
            "Vitamin C",
            "Folate"
        ],
        minerals: [
            "Potassium",
            "Magnesium"
        ]
    },
    {
        name: "Shallot",
        calories: 72,
        carbohydrates: 16.8,
        protein: 2.5,
        fat: 0.1,
        fiber: 3.2,
        vitamins: [
            "Vitamin C",
            "Vitamin B6"
        ],
        minerals: [
            "Potassium",
            "Magnesium"
        ]
    },
    {
        name: "Red Cabbage",
        calories: 31,
        carbohydrates: 7.4,
        protein: 1.4,
        fat: 0.2,
        fiber: 2.1,
        vitamins: [
            "Vitamin C",
            "Vitamin K"
        ],
        minerals: [
            "Potassium",
            "Calcium"
        ]
    },
    {
        name: "Peas",
        calories: 81,
        carbohydrates: 14.5,
        protein: 5.4,
        fat: 0.4,
        fiber: 5.1,
        vitamins: [
            "Vitamin C",
            "Folate"
        ],
        minerals: [
            "Potassium",
            "Magnesium"
        ]
    },
    {
        name: "Black Beans",
        calories: 132,
        carbohydrates: 23.7,
        protein: 8.9,
        fat: 0.5,
        fiber: 8.7,
        vitamins: [
            "Folate",
            "Vitamin B6"
        ],
        minerals: [
            "Iron",
            "Magnesium"
        ]
    },
    {
        name: "White Fish",
        calories: 84,
        carbohydrates: 0,
        protein: 18.8,
        fat: 1.2,
        vitamins: [
            "Vitamin D",
            "Vitamin B12"
        ],
        minerals: [
            "Selenium",
            "Phosphorus"
        ]
    },
    {
        name: "Tuna",
        calories: 132,
        carbohydrates: 0,
        protein: 28,
        fat: 1,
        vitamins: [
            "Vitamin B12",
            "Vitamin B6"
        ],
        minerals: [
            "Selenium",
            "Phosphorus"
        ]
    },
    {
        name: "Shrimp",
        calories: 99,
        carbohydrates: 0.2,
        protein: 24,
        fat: 0.3,
        vitamins: [
            "Vitamin B12",
            "Vitamin E"
        ],
        minerals: [
            "Selenium",
            "Phosphorus"
        ]
    },
    {
        name: "Oysters",
        calories: 68,
        carbohydrates: 3.9,
        protein: 7,
        fat: 2.5,
        vitamins: [
            "Vitamin B12",
            "Vitamin D"
        ],
        minerals: [
            "Zinc",
            "Selenium"
        ]
    },
    {
        name: "Beef",
        calories: 250,
        carbohydrates: 0,
        protein: 26,
        fat: 15,
        vitamins: [
            "Vitamin B12",
            "Vitamin B6"
        ],
        minerals: [
            "Iron",
            "Zinc"
        ]
    },
    {
        name: "Pork",
        calories: 242,
        carbohydrates: 0,
        protein: 27,
        fat: 14,
        vitamins: [
            "Vitamin B12",
            "Vitamin B6"
        ],
        minerals: [
            "Phosphorus",
            "Zinc"
        ]
    },
    {
        name: "Lamb",
        calories: 294,
        carbohydrates: 0,
        protein: 25,
        fat: 21,
        vitamins: [
            "Vitamin B12",
            "Vitamin B6"
        ],
        minerals: [
            "Iron",
            "Zinc"
        ]
    },
    {
        name: "Duck",
        calories: 337,
        carbohydrates: 0,
        protein: 19,
        fat: 28,
        vitamins: [
            "Vitamin B12",
            "Vitamin B6"
        ],
        minerals: [
            "Iron",
            "Zinc"
        ]
    },
    {
        name: "Rabbit",
        calories: 173,
        carbohydrates: 0,
        protein: 33,
        fat: 3.5,
        vitamins: [
            "Vitamin B12",
            "Vitamin B3"
        ],
        minerals: [
            "Phosphorus",
            "Selenium"
        ]
    },
    {
        name: "Turkey",
        calories: 189,
        carbohydrates: 0,
        protein: 29,
        fat: 7.4,
        vitamins: [
            "Vitamin B12",
            "Vitamin B6"
        ],
        minerals: [
            "Phosphorus",
            "Selenium"
        ]
    },
    {
        name: "Butter",
        calories: 717,
        carbohydrates: 0.1,
        protein: 0.9,
        fat: 81,
        vitamins: [
            "Vitamin A",
            "Vitamin D"
        ],
        minerals: [
            "Calcium",
            "Phosphorus"
        ]
    },
    {
        name: "Sour Cream",
        calories: 292,
        carbohydrates: 2.9,
        protein: 2.1,
        fat: 30,
        vitamins: [
            "Vitamin A",
            "Vitamin D"
        ],
        minerals: [
            "Calcium",
            "Phosphorus"
        ]
    },
    {
        name: "Olive Oil",
        calories: 884,
        carbohydrates: 0,
        protein: 0,
        fat: 100,
        vitamins: [
            "Vitamin E",
            "Vitamin K"
        ],
        minerals: [
            "Iron"
        ]
    },
    {
        name: "White Bread",
        calories: 265,
        carbohydrates: 49,
        protein: 9,
        fat: 3.2,
        fiber: 2.7,
        vitamins: [
            "Vitamin B1",
            "Vitamin B3"
        ],
        minerals: [
            "Iron",
            "Calcium"
        ]
    },
    {
        name: "Pasta",
        calories: 131,
        carbohydrates: 25,
        protein: 5.2,
        fat: 1.1,
        fiber: 1.4,
        vitamins: [
            "Vitamin B1",
            "Vitamin B3"
        ],
        minerals: [
            "Iron",
            "Magnesium"
        ]
    },
    {
        name: "Walnuts",
        calories: 196,
        carbohydrates: 3.9,
        protein: 4.3,
        fat: 20,
        fiber: 2,
        sugar: 1.1,
        vitamins: [
            "Vitamin E",
            "Folate"
        ],
        minerals: [
            "Magnesium",
            "Phosphorus"
        ]
    },
    {
        name: "Hazelnuts",
        calories: 178,
        carbohydrates: 4.7,
        protein: 4.2,
        fat: 17,
        fiber: 2.7,
        sugar: 1.2,
        vitamins: [
            "Vitamin E",
            "Thiamine"
        ],
        minerals: [
            "Magnesium",
            "Copper"
        ]
    },
    {
        name: "Pistachios",
        calories: 159,
        carbohydrates: 7.7,
        protein: 5.8,
        fat: 12.9,
        fiber: 3,
        sugar: 2.2,
        vitamins: [
            "Vitamin B6",
            "Thiamine"
        ],
        minerals: [
            "Magnesium",
            "Phosphorus"
        ]
    },
    {
        name: "Cashews",
        calories: 155,
        carbohydrates: 8.6,
        protein: 5.2,
        fat: 12.3,
        fiber: 1,
        sugar: 1.7,
        vitamins: [
            "Vitamin K",
            "Thiamine"
        ],
        minerals: [
            "Magnesium",
            "Phosphorus"
        ]
    }
];
}),
"[project]/src/app/ComboBox.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ComboboxDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevrons-up-down.js [app-ssr] (ecmascript) <export default as ChevronsUpDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/command.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/popover.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const frameworks = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["foods"].map((food)=>({
        label: food.name,
        value: food.name.toLowerCase().replace(/ /g, "-")
    }));
function ComboboxDemo() {
    const [open, setOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [value, setValue] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]("");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Popover"], {
        open: open,
        onOpenChange: setOpen,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    role: "combobox",
                    "aria-expanded": open,
                    className: "w-[200px] justify-between",
                    children: [
                        value ? frameworks.find((framework)=>framework.value === value)?.label : "Selectionner votre aliment",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDown$3e$__["ChevronsUpDown"], {
                            className: "opacity-50"
                        }, void 0, false, {
                            fileName: "[project]/src/app/ComboBox.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ComboBox.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/ComboBox.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverContent"], {
                className: "w-[200px] p-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Command"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandInput"], {
                            placeholder: "Rechercher un aliment...",
                            className: "h-9"
                        }, void 0, false, {
                            fileName: "[project]/src/app/ComboBox.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandList"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandEmpty"], {
                                    children: "Aliment non trouvé."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ComboBox.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandGroup"], {
                                    children: frameworks.map((framework)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandItem"], {
                                            value: framework.value,
                                            onSelect: (currentValue)=>{
                                                setValue(currentValue === value ? "" : currentValue);
                                                setOpen(false);
                                            },
                                            children: [
                                                framework.label,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("ml-auto", value === framework.value ? "opacity-100" : "opacity-0")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/ComboBox.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, framework.value, true, {
                                            fileName: "[project]/src/app/ComboBox.tsx",
                                            lineNumber: 55,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ComboBox.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/ComboBox.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ComboBox.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/ComboBox.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/ComboBox.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5637091e._.js.map