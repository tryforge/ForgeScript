"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const noop_1 = __importDefault(require("../../functions/noop"));
const structures_1 = require("../../structures");
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
    output: structures_1.ArgType.String,
    unwrap: true,
    async execute(ctx, [id]) {
        if (this.hasFields) {
            const command = await ctx.client.application.commands.fetch(id).catch(noop_1.default);
            return this.success(command ? command.name : undefined);
        }
        return this.success(ctx.interaction?.isCommand() ? ctx.interaction.command?.name : undefined);
    },
});
//# sourceMappingURL=applicationCommandName.js.map