"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$getCooldownTime",
    version: "1.0.3",
    description: "Retrieves current cooldown time in ms for given id",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "id",
            description: "The id to get its cooldown",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    execute(ctx, [id]) {
        return this.success(ctx.client.cooldowns.getTimeLeft(id));
    },
});
//# sourceMappingURL=getCooldownTime.js.map