"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$mktdir",
    version: "1.4.0",
    description: "Creates a temporary directory",
    unwrap: true,
    brackets: true,
    aliases: [
        "$makeTempDir",
        "$createTempDir"
    ],
    output: structures_1.ArgType.String,
    args: [
        {
            name: "prefix",
            description: "The prefix for the temp dir",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        }
    ],
    execute(ctx, [prefix]) {
        return this.success((0, fs_1.mkdtempSync)(prefix));
    },
});
//# sourceMappingURL=mktdir.js.map