"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$applicationCommands",
    version: "1.5.0",
    description: "Returns all application commands",
    output: structures_1.ArgType.Json,
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to get application commands from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
    ],
    async execute(ctx, [guild]) {
        const commands = await ctx.client.application.commands.fetch({ guildId: guild?.id }).catch(ctx.noop);
        return this.successJSON(commands);
    },
});
//# sourceMappingURL=applicationCommands.js.map