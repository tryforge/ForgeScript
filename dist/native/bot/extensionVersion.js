"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$extensionVersion",
    version: "1.4.0",
    brackets: true,
    unwrap: true,
    description: "Returns the version a extension is running on",
    output: structures_1.ArgType.String,
    args: [
        {
            name: "name",
            description: "The extension name to retrieve its version",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [name]) {
        return this.success(ctx.client.getExtension(name)?.version);
    }
});
//# sourceMappingURL=extensionVersion.js.map