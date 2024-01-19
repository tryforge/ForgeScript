"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$scope",
    version: "1.4.0",
    description: "Runs functions in a cloned context",
    brackets: true,
    args: [
        {
            name: "code",
            description: "The code to execute",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "sync vars",
            description: "Whether to pass vars as reference",
            type: structures_1.ArgType.Boolean,
            rest: false
        }
    ],
    unwrap: false,
    output: structures_1.ArgType.Unknown,
    async execute(ctx) {
        const data = await this["resolveMultipleArgs"](ctx, 1);
        if (!this["isValidReturnType"](data.return))
            return data.return;
        return this["resolveCode"](ctx.clone(undefined, data.args[0] ?? false), this.data.fields[0]);
    },
});
//# sourceMappingURL=scope.js.map