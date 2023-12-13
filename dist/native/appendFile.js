"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$appendFile",
    version: "1.0.0",
    description: "Appends text to a file",
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
            name: "text",
            description: "The text to append",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
        {
            name: "encoding",
            description: "The encoding to use for text",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    execute(_, [path, data, encoding]) {
        // eslint-disable-next-line no-undef
        (0, fs_1.appendFileSync)(path, data, { encoding: encoding || "utf-8" });
        return this.success();
    },
});
//# sourceMappingURL=appendFile.js.map