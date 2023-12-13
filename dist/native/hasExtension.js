"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$hasExtension",
    version: "1.2.0",
    description: "Checks whether client has an extension",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "name",
            description: "The extension name to check for",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [ext]) {
        return this.success(!!ctx.client.options.extensions?.some(x => x.name === ext));
    },
});
//# sourceMappingURL=hasExtension.js.map