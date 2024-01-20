"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$deleteGuildApplicationCommands",
    version: "1.4.0",
    description: "Deletes all guild commands of your bot from a guild",
    unwrap: true,
    brackets: false,
    args: [structures_1.Arg.requiredGuild(undefined, "The guild to delete commands from")],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [g]) {
        g ??= ctx.guild;
        return this.success(!!(await g.commands.set([]).catch(ctx.noop)));
    },
});
//# sourceMappingURL=deleteGuildApplicationCommands.js.map