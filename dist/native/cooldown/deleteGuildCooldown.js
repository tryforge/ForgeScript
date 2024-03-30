"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$deleteGuildCooldown",
    version: "1.5.0",
    description: "Deletes cooldown for given guild id, binded to current command",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The id to delete its cooldown",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    execute(ctx, [id]) {
        ctx.client.cooldowns.delete(ctx.client.cooldowns.identifier(ctx.cmd.id, "guild", id));
        return this.success();
    },
});
//# sourceMappingURL=deleteGuildCooldown.js.map