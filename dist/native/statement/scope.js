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
        }
    ],
    unwrap: false,
    output: structures_1.ArgType.Unknown,
    async execute(ctx) {
        return this["resolveCode"](ctx.clone(), this.data.fields[0]);
    },
});
//# sourceMappingURL=scope.js.map