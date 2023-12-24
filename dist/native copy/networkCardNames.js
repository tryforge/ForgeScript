"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = require("os");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$networkCardNames",
    version: "1.2.0",
    description: "Returns your network's card names",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "separator",
            description: "The separator to use",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [sep]) {
        return this.success(Object.keys((0, os_1.networkInterfaces)()).join(sep ?? ", "));
    }
});
//# sourceMappingURL=networkCardNames.js.map