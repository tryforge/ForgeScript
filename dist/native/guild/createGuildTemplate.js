"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$createGuildTemplate",
    version: "1.5.0",
    description: "Creates template for a guild, returns template code",
    aliases: [
        "$createServerTemplate"
    ],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to create template on",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "name",
            description: "The name for the template",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "description",
            description: "The description for the template",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.Template,
    async execute(ctx, [guild, name, desc]) {
        return this.success((await guild.createTemplate(name, desc || undefined).catch(ctx.noop))?.code);
    },
});
//# sourceMappingURL=createGuildTemplate.js.map