"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isFile",
    version: "1.4.0",
    description: "Checks whether a path is a file",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Number,
    args: [
        {
            name: "path",
            description: "The path to file or directory",
            required: true,
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    execute(_, [path]) {
        return this.success((0, fs_1.statSync)(path).isFile());
    },
});
//# sourceMappingURL=isFile.js.map