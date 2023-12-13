"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addChoice",
    version: "1.0.6",
    description: "Adds an autocomplete choice",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "choice name",
            description: "The name for this choice",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "choice value",
            description: "The value for this choice",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [name, value]) {
        ctx.container.choices.push({
            name,
            value,
        });
        return this.success();
    },
});
//# sourceMappingURL=addChoice.js.map