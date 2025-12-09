module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/error.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/error.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/data/data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/app/aliment/[slug]/charts.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/aliment/[slug]/charts.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/aliment/[slug]/charts.tsx <module evaluation>", "default");
}),
"[project]/src/app/aliment/[slug]/charts.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/aliment/[slug]/charts.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/aliment/[slug]/charts.tsx", "default");
}),
"[project]/src/app/aliment/[slug]/charts.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$aliment$2f5b$slug$5d2f$charts$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/aliment/[slug]/charts.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$aliment$2f5b$slug$5d2f$charts$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/app/aliment/[slug]/charts.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$aliment$2f5b$slug$5d2f$charts$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/aliment/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AlimentPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$aliment$2f5b$slug$5d2f$charts$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/aliment/[slug]/charts.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["foods"].map((food)=>({
            slug: food.name.toLowerCase().replace(/ /g, "-")
        }));
}
async function generateMetadata({ params }) {
    const { slug } = await params;
    const aliment = slug.replaceAll("-", " ");
    return {
        title: `Aliment - ${aliment}`
    };
}
async function AlimentPage({ params }) {
    const { slug } = await params;
    const aliment = slug.replaceAll("-", " ");
    const food = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["foods"].find((food)=>food.name.toLowerCase() === aliment.toLowerCase());
    if (!food) throw new Error("Aliment not found");
    const data = [
        {
            name: "calories",
            value: food.calories,
            fill: "#0088FE"
        },
        {
            name: "carbohydrates",
            value: food.carbohydrates,
            fill: "#00C49F"
        },
        {
            name: "protein",
            value: food.protein,
            fill: "#FFBB28"
        },
        {
            name: "fat",
            value: food.fat,
            fill: "#FF8042"
        },
        {
            name: "fiber",
            value: food.fiber,
            fill: "#000000"
        },
        {
            name: "sugar",
            value: food.sugar,
            fill: "#EE0606"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex flex-col justify-center items-center my-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(ComboBox, {}, void 0, false, {
                    fileName: "[project]/src/app/aliment/[slug]/page.tsx",
                    lineNumber: 43,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/aliment/[slug]/page.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "flex flex-col sm:flex-row gap-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 300,
                            minHeight: 300
                        },
                        className: "flex items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$aliment$2f5b$slug$5d2f$charts$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            data: data
                        }, void 0, false, {
                            fileName: "[project]/src/app/aliment/[slug]/page.tsx",
                            lineNumber: 47,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/aliment/[slug]/page.tsx",
                        lineNumber: 46,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-semibold pb-2 text-4xl mb-5",
                                children: [
                                    "Aliment ",
                                    food.name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/aliment/[slug]/page.tsx",
                                lineNumber: 50,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "flex flex-col gap-y-2",
                                children: data.map((data, index)=>{
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-x-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "size-6",
                                                    style: {
                                                        backgroundColor: `${data.fill}`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/aliment/[slug]/page.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: data.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/aliment/[slug]/page.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/aliment/[slug]/page.tsx",
                                            lineNumber: 55,
                                            columnNumber: 29
                                        }, this)
                                    }, index, false, {
                                        fileName: "[project]/src/app/aliment/[slug]/page.tsx",
                                        lineNumber: 54,
                                        columnNumber: 25
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/aliment/[slug]/page.tsx",
                                lineNumber: 51,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/vitamins.png",
                                                alt: "minerals",
                                                width: 50,
                                                height: 50
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/aliment/[slug]/page.tsx",
                                                lineNumber: 65,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-5 items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: food.vitamins?.[0]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/aliment/[slug]/page.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "",
                                                        children: food.vitamins?.[1]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/aliment/[slug]/page.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/aliment/[slug]/page.tsx",
                                                lineNumber: 66,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/aliment/[slug]/page.tsx",
                                        lineNumber: 64,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/minerals.png",
                                                alt: "minerals",
                                                width: 50,
                                                height: 50
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/aliment/[slug]/page.tsx",
                                                lineNumber: 72,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-5 items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: food.minerals?.[0]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/aliment/[slug]/page.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: food.minerals?.[1]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/aliment/[slug]/page.tsx",
                                                        lineNumber: 75,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/aliment/[slug]/page.tsx",
                                                lineNumber: 73,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/aliment/[slug]/page.tsx",
                                        lineNumber: 71,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/aliment/[slug]/page.tsx",
                                lineNumber: 63,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/aliment/[slug]/page.tsx",
                        lineNumber: 49,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/aliment/[slug]/page.tsx",
                lineNumber: 45,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/aliment/[slug]/page.tsx",
        lineNumber: 41,
        columnNumber: 7
    }, this);
}
}),
"[project]/src/app/aliment/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/aliment/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a63081d1._.js.map