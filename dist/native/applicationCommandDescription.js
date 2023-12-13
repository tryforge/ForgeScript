"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$applicationCommandDescription",
    version: "1.0.7",
    description: "Returns an application command description",
    brackets: false,
    args: [
        {
            name: "id",
            description: "The id of the command to pull its description",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    unwrap: true,
    async execute(ctx, [id]) {
        if (this.hasFields) {
            const command = await ctx.client.application.commands.fetch(id).catch(lodash_1.noop);
            return this.success(command ? command.description : undefined);
        }
        return this.success(ctx.interaction?.isCommand() ? ctx.interaction.command?.description : undefined);
    },
});
//# sourceMappingURL=applicationCommandDescription.js.map