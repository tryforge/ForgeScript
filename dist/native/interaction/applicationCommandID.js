"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const noop_1 = __importDefault(require("../../functions/noop"));
const structures_1 = require("../../structures");
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
    output: structures_1.ArgType.String,
    unwrap: true,
    async execute(ctx, [name]) {
        if (this.hasFields) {
            const commands = await ctx.client.application.commands.fetch().catch(noop_1.default);
            return this.success(commands?.find((x) => x.name === name)?.id);
        }
        return this.success(ctx.interaction?.isCommand() ? ctx.interaction.commandName : undefined);
    },
});
//# sourceMappingURL=applicationCommandID.js.map