"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$option",
    version: "1.0.6",
    description: "Returns an option value with given name (interaction command)",
    brackets: true,
    unwrap: true,
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
        return this.success(ctx.interaction?.isCommand() ? ctx.interaction.options.get(name)?.value : null);
    },
});
//# sourceMappingURL=option.js.map