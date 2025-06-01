"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildTemplateCode",
    version: "2.4.0",
    description: "Returns the template code of a guild",
    unwrap: true,
    brackets: false,
    aliases: [
        "$serverTemplateCode"
    ],
    args: [
        {
            name: "guild ID",
            description: "The guild to get template from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild
        },
    ],
    output: structures_1.ArgType.Template,
    async execute(ctx, [guild]) {
        const template = (await (guild ?? ctx.guild)?.fetchTemplates().catch(ctx.noop))?.first();
        return this.success(template?.code);
    },
});
//# sourceMappingURL=guildTemplateCode.js.map