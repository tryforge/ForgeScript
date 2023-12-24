"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$fileExists",
    version: "1.0.0",
    description: "Checks whether a path exists",
    brackets: true,
    unwrap: true,
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
        return this.success((0, fs_1.existsSync)(path));
    },
});
//# sourceMappingURL=fileExists.js.map