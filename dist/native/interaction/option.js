"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$option",
    version: "1.0.6",
    description: "Returns an option value with given name (interaction command)",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Unknown,
    args: [
        {
            name: "option name",
            description: "The option name to retrieve its value",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [name]) {
        const data = ctx.interaction?.isCommand() ? ctx.interaction.options.get(name) : null;
        return this.success(data?.attachment?.url ?? data?.value);
    },
});
//# sourceMappingURL=option.js.map