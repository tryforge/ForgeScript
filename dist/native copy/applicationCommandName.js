"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$applicationCommandName",
    version: "1.0.7",
    description: "Returns an application command name",
    brackets: false,
    args: [
        {
            name: "id",
            description: "The id of the command to pull its name",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    unwrap: true,
    async execute(ctx, [id]) {
        if (this.hasFields) {
            const command = await ctx.client.application.commands.fetch(id).catch(lodash_1.noop);
            return this.success(command ? command.name : undefined);
        }
        return this.success(ctx.interaction?.isCommand() ? ctx.interaction.command?.name : undefined);
    },
});
//# sourceMappingURL=applicationCommandName.js.map