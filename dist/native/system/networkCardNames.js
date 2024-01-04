"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = require("os");
const structures_1 = require("../../structures");
const array_1 = __importDefault(require("../../functions/array"));
exports.default = new structures_1.NativeFunction({
    name: "$networkCardNames",
    version: "1.2.0",
    description: "Returns your network's card names",
    unwrap: true,
    output: (0, array_1.default)(),
    brackets: false,
    args: [
        {
            name: "separator",
            description: "The separator to use",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [sep]) {
        return this.success(Object.keys((0, os_1.networkInterfaces)()).join(sep ?? ", "));
    }
});
//# sourceMappingURL=networkCardNames.js.map