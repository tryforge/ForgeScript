"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharArray = exports.UppercaseLetters = exports.LowercaseLetters = exports.Numbers = void 0;
const structures_1 = require("../structures");
exports.Numbers = "0123456789";
exports.LowercaseLetters = "qwertyuiopasdfghjklzxcvbnm";
exports.UppercaseLetters = exports.LowercaseLetters.toUpperCase();
exports.CharArray = [
    ...exports.Numbers,
    ...exports.LowercaseLetters,
    ...exports.UppercaseLetters
];
exports.default = new structures_1.NativeFunction({
    name: "$randomString",
    version: "1.2.0",
    description: "Creates a random string",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "length",
            description: "The length of the random string",
            rest: false,
            required: true,
            type: structures_1.ArgType.Number
        },
        {
            name: "characters",
            description: "The characters to use for this string",
            rest: false,
            required: false,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [len, chars]) {
        const arr = chars ? [...chars] : exports.CharArray;
        return this.success(Array.from({ length: len }, () => arr[Math.floor(Math.random() * arr.length)]).join(""));
    }
});
//# sourceMappingURL=randomString.js.map