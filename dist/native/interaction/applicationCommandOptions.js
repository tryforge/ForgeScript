"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$applicationCommandOptions",
    version: "1.5.0",
    description: "Returns an application command options in JSON format",
    brackets: false,
    args: [
        {
            name: "id",
            description: "The id of the command to pull its options",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.Json,
    unwrap: true,
    async execute(ctx, [id]) {
        if (this.hasFields) {
            const command = await ctx.client.application.commands.fetch(id).catch(ctx.noop);
            return this.successJSON(command ? command.options : undefined);
        }
        return this.successJSON(ctx.interaction && "command" in ctx.interaction ? ctx.interaction.command?.options : undefined);
    },
});
//# sourceMappingURL=applicationCommandOptions.js.map