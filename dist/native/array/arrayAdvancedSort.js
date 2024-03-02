"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
async function asyncSort(array, asyncComparator) {
    const comparePromises = [];
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            comparePromises.push(asyncComparator(array[i], array[j]));
        }
    }
    const compareResults = await Promise.all(comparePromises);
    const sortedArray = array.slice().sort((a, b) => compareResults.shift() || 0);
    return sortedArray;
}
// Example asynchronous comparison function
async function asyncCompare(a, b) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(a - b); // Compare numbers
        }, Math.random() * 1000); // Simulate asynchronous delay
    });
}
exports.default = new structures_1.NativeFunction({
    name: "$arrayAdvancedSort",
    version: "1.4.0",
    description: "Advanced array sort",
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "variable",
            description: "The variable the array is held on",
            type: structures_1.ArgType.String,
            rest: false,
            required: true,
        },
        {
            name: "var1",
            description: "The $env variable 1 to hold x value",
            rest: false,
            type: structures_1.ArgType.String,
            required: true
        },
        {
            name: "var2",
            description: "The $env variable 2 to hold y value",
            rest: false,
            type: structures_1.ArgType.String,
            required: true
        },
        {
            name: "code",
            description: "Optional code to use for sorting, previous 2 vars must have been given",
            rest: false,
            type: structures_1.ArgType.String,
            required: true
        },
        {
            name: "other variable",
            description: "The variable to load result to, leave empty to return output",
            rest: false,
            required: false,
            type: structures_1.ArgType.String
        },
    ],
    output: structures_1.ArgType.Json,
    async execute(ctx) {
        const { return: rt, args } = await this["resolveMultipleArgs"](ctx, 0, 1, 2, 4);
        if (!this["isValidReturnType"](rt))
            return rt;
        const [mainVar, var1, var2, otherVar] = args;
        const arr = ctx.getEnvironmentInstance(Array, mainVar);
        if (arr != null) {
            const result = await asyncSort(arr, async (x, y) => {
                ctx.setEnvironmentKey(var1, x);
                ctx.setEnvironmentKey(var2, y);
                const exec = await this["resolveUnhandledArg"](ctx, 3);
                return Number(exec.value);
            });
            if (result === null)
                return this.stop();
            if (otherVar !== null)
                ctx.setEnvironmentKey(otherVar, result);
            else
                return this.successJSON(result);
        }
        return this.success();
    },
});
//# sourceMappingURL=arrayAdvancedSort.js.map