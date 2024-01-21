"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$registerGuildApplicationCommands",
    version: "1.4.0",
    description: "Registers all application commands with type: 1 to a guild",
    unwrap: true,
    brackets: false,
    args: [structures_1.Arg.requiredGuild(undefined, "The guild to register commands to")],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [g]) {
        g ??= ctx.guild;
        return this.success(!!(await ctx.client.applicationCommands.registerGuild(g)?.catch(ctx.noop)));
    },
});
//# sourceMappingURL=registerGuildApplicationCommands.js.map