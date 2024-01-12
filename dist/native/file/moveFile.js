"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$moveFile",
    version: "1.4.0",
    description: "Moves a path to another",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "path",
            description: "The path to make to move",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "destination",
            description: "The output path",
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
        (0, fs_1.rmSync)(old, { recursive: true });
        return this.success();
    },
});
//# sourceMappingURL=moveFile.js.map