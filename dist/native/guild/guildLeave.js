"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildLeave",
    version: "1.0.0",
    description: "Leaves a guild",
    brackets: false,
    aliases: [
        "$serverLeave"
    ],
    output: structures_1.ArgType.Boolean,
    args: [
        {
            name: "guild ID",
            description: "The guild to leave",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
    ],
    unwrap: true,
    async execute(ctx, [g]) {
        g ??= ctx.guild;
        return this.success(!!(await g?.leave().catch(ctx.noop)));
    },
});
//# sourceMappingURL=guildLeave.js.map