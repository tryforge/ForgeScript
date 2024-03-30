"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$deleteUserCooldown",
    version: "1.5.0",
    description: "Deletes cooldown for given user id, binded to current command",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "user ID",
            description: "The id to delete its cooldown",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    execute(ctx, [id]) {
        ctx.client.cooldowns.delete(ctx.client.cooldowns.identifier(ctx.cmd.id, "user", id));
        return this.success();
    },
});
//# sourceMappingURL=deleteUserCooldown.js.map