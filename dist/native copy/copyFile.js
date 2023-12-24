"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$copyFile",
    version: "1.2.0",
    description: "Copies given path to another path",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "path",
            description: "The path to make a copy of",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "destination",
            description: "The output path to copy to",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [old, now]) {
        if ((0, fs_1.statSync)(old).isDirectory())
            (0, fs_1.cpSync)(old, now);
        else
            (0, fs_1.copyFileSync)(old, now);
        return this.success();
    },
});
//# sourceMappingURL=copyFile.js.map