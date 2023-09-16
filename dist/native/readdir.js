"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../structures/NativeFunction");
const Return_1 = require("../structures/Return");
const fs_1 = require("fs");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$readdir",
    version: "1.0.7",
    description: "Reads a directory and load the result into a environment variable",
    args: [
        {
            name: "path",
            description: "The file path where the property will be imported from",
            required: true,
            type: NativeFunction_1.ArgType.String,
            rest: false
        },
        {
            name: "variable",
            description: "The environment variable name",
            required: true,
            type: NativeFunction_1.ArgType.String,
            rest: false
        },
        {
            name: "separator",
            description: "The result separator",
            required: false,
            type: NativeFunction_1.ArgType.String,
            rest: false
        }
    ],
    brackets: true,
    unwrap: true,
    execute(ctx, [path, variable, separator]) {
        const files = (0, fs_1.readdirSync)(path);
        ctx.setEnvironmentKey(variable, files.join(separator ?? ","));
        return Return_1.Return.success();
    },
});
//# sourceMappingURL=readdir.js.map