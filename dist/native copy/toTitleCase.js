"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
const lodash_1 = __importDefault(require("lodash"));
exports.default = new structures_1.NativeFunction({
    name: "$toTitleCase",
    version: "1.0.6",
    description: "Converts a string to title case",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "message",
            description: "The string to turn title case",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    execute(_, [m]) {
        return this.success(m
            .split(/ +/)
            .map((x) => lodash_1.default.capitalize(x))
            .join(" "));
    },
});
//# sourceMappingURL=toTitleCase.js.map