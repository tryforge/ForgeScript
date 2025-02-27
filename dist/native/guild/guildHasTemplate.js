"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildHasTemplate",
    version: "1.5.0",
    description: "Returns whether this guild has a template",
    unwrap: true,
    brackets: false,
    aliases: [
        "$hasGuildTemplate"
    ],
    args: [
        {
            name: "guild ID",
            description: "The guild to check for template",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [guild]) {
        return this.success((await (guild ?? ctx.guild)?.fetchTemplates())?.size ?? 0 > 0);
    },
});
//# sourceMappingURL=guildHasTemplate.js.map