"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$symlink",
    version: "1.4.0",
    description: "Creates a symbolic link to another path",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "path",
            description: "The path to make to use as reference",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "other path",
            description: "The other path to link",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [current, other]) {
        (0, fs_1.symlinkSync)(current, other);
        return this.success();
    },
});
//# sourceMappingURL=symlink.js.map