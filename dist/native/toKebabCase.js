"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
const lodash_1 = require("lodash");
exports.default = new structures_1.NativeFunction({
    name: "$toKebabCase",
    version: "1.0.6",
    description: "Converts a string to kebab case",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "message",
            description: "The string to turn kebab case",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    execute(_, [m]) {
        return this.success((0, lodash_1.kebabCase)(m));
    },
});
//# sourceMappingURL=toKebabCase.js.map