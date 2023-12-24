"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$truncateFile",
    version: "1.0.0",
    description: "Truncates text in a file to given length",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "path",
            description: "The path to the file",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "length",
            description: "The new length for the file",
            rest: false,
            type: structures_1.ArgType.Number,
            required: true,
        },
    ],
    execute(_, [path, data]) {
        // eslint-disable-next-line no-undef
        (0, fs_1.truncateSync)(path, data);
        return this.success();
    },
});
//# sourceMappingURL=truncateFile.js.map