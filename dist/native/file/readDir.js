"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$readDir",
    version: "1.5.0",
    description: "Reads the contents of a directory",
    unwrap: true,
    brackets: true,
    output: structures_1.ArgType.Unknown,
    args: [
        {
            name: "path",
            description: "The path to the directory",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "separator",
            description: "The separator to use for each result",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "encoding",
            description: "The encoding to use for the result",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [path, sep, encoding]) {
        const dirs = (0, fs_1.readdirSync)(path, { encoding: encoding || "utf-8" });
        if (!sep) {
            return this.successJSON(dirs);
        }
        return this.success(dirs?.join(sep));
    },
});
//# sourceMappingURL=readDir.js.map