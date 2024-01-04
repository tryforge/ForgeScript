"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$applicationCommandDisplay",
    version: "1.4.0",
    description: "Gets the full command interaction with all options",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "hide option name",
            description: "Whether to suppress option names from being displayed",
            rest: false,
            required: true,
            type: structures_1.ArgType.Boolean
        }
    ],
    output: structures_1.ArgType.String,
    execute(ctx, [suppress]) {
        suppress ??= false;
        return this.success(ctx.client.applicationCommands.getDisplay(ctx.interaction, suppress));
    },
});
//# sourceMappingURL=applicationCommandDisplay.js.map