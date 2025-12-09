(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/aliment/[slug]/charts.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PieChartWithPaddingAngle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
"use client";
;
;
;
function PieChartWithPaddingAngle(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "eafb9fbe94fb5a4095939a6c01352fc3ac69334e2434c9d5e7f0d3b30438fb9f") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "eafb9fbe94fb5a4095939a6c01352fc3ac69334e2434c9d5e7f0d3b30438fb9f";
    }
    const { data, isAnimationActive: t1 } = t0;
    const isAnimationActive = t1 === undefined ? true : t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            width: "100%",
            maxWidth: "500px",
            maxHeight: "80vh",
            aspectRatio: 1
        };
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] !== data || $[3] !== isAnimationActive) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
            style: t2,
            responsive: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                data: data,
                innerRadius: "80%",
                outerRadius: "100%",
                cornerRadius: "00%",
                fill: "#8884d8",
                paddingAngle: 5,
                dataKey: "value",
                isAnimationActive: isAnimationActive
            }, void 0, false, {
                fileName: "[project]/src/app/aliment/[slug]/charts.tsx",
                lineNumber: 35,
                columnNumber: 49
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/aliment/[slug]/charts.tsx",
            lineNumber: 35,
            columnNumber: 10
        }, this);
        $[2] = data;
        $[3] = isAnimationActive;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    return t3;
}
_c = PieChartWithPaddingAngle;
var _c;
__turbopack_context__.k.register(_c, "PieChartWithPaddingAngle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_aliment_%5Bslug%5D_charts_tsx_da89177f._.js.map