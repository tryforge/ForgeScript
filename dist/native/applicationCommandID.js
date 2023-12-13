"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$applicationCommandID",
    version: "1.0.7",
    description: "Returns the application command id",
    brackets: false,
    args: [
        {
            name: "name",
            description: "The name of the command to pull its id",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    unwrap: true,
    async execute(ctx, [name]) {
        if (this.hasFields) {
            const commands = await ctx.client.application.commands.fetch().catch(lodash_1.noop);
            return this.success(commands?.find((x) => x.name === name)?.id);
        }
        return this.success(ctx.interaction?.isCommand() ? ctx.interaction.commandName : undefined);
    },
});
//# sourceMappingURL=applicationCommandID.js.map