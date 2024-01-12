"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$httpAppendFile",
    version: "1.4.0",
    description: "Appends a file to form data",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "key",
            description: "The key name to add this value to",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "url / path",
            type: structures_1.ArgType.Attachment,
            rest: false,
            required: true,
            description: "The path or url to use"
        }
    ],
    execute(ctx, [key, file]) {
        ctx.http.form?.append(key, new Blob([file.attachment]), file.name);
        return this.success();
    },
});
//# sourceMappingURL=httpAppendFile.js.map