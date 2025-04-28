"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$context",
    version: "1.5.0",
    description: "Returns the context of this interaction",
    aliases: ["$interactionContext"],
    unwrap: false,
    output: discord_js_1.InteractionContextType,
    execute(ctx) {
        return this.success(ctx.interaction && "context" in ctx.interaction ? discord_js_1.InteractionContextType[ctx.interaction.context] : undefined);
    },
});
//# sourceMappingURL=context.js.map