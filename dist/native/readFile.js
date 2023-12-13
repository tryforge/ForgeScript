"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$readFile",
    version: "1.0.0",
    description: "reads text from a file",
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
            name: "encoding",
            description: "The encoding to use for the text",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    execute(_, [path, encoding]) {
        // eslint-disable-next-line no-undef
        const txt = (0, fs_1.readFileSync)(path, { encoding: encoding || "utf-8" });
        return this.success(txt);
    },
});
//# sourceMappingURL=readFile.js.map