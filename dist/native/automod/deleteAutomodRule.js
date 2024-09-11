"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$deleteAutomodRule",
    version: "1.5.0",
    description: "Deletes an automod rule from a guild, returns bool",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to delete automod rule from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "rule ID",
            description: "The id of the automod rule to delete",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "reason",
            description: "The reason for deleting the rule",
            rest: false,
            type: structures_1.ArgType.String
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [guild, id, reason]) {
        try {
            await guild.autoModerationRules.delete(id, reason || undefined);
        }
        catch (error) {
            ctx.noop(error);
            return this.success(false);
        }
        return this.success(true);
    },
});
//# sourceMappingURL=deleteAutomodRule.js.map