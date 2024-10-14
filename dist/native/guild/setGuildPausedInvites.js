"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setGuildPausedInvites",
    version: "1.5.0",
    description: "Sets a guild paused invite status, returns bool",
    aliases: [
        "$setServerPausedInvites"
    ],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to set paused invites for",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "disabled",
            description: "Whether to disable the invites",
            rest: false,
            required: true,
            type: structures_1.ArgType.Boolean,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [guild, disabled]) {
        return this.success((await guild.disableInvites(disabled).catch(() => false)) !== false);
    },
});
//# sourceMappingURL=setGuildPausedInvites.js.map