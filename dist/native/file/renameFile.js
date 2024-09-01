"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$renameFile",
    version: "1.5.0",
    description: "Renames a file",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "old path",
            description: "The old path to the file",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "new path",
            description: "The new path to the file",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [oldPath, newPath]) {
        (0, fs_1.renameSync)(oldPath, newPath);
        return this.success();
    },
});
//# sourceMappingURL=renameFile.js.map