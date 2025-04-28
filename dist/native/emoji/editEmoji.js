"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$editEmoji",
    version: "1.5.0",
    description: "Edits an emoji of a guild, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to edit this emoji on",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "emoji ID",
            description: "The emoji to edit",
            rest: false,
            required: true,
            type: structures_1.ArgType.GuildEmoji,
            pointer: 0,
        },
        {
            name: "name",
            description: "The new name for the emoji",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "reason",
            description: "The reason for editing the emoji",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "roles",
            description: "The new roles to limit usage of this emoji to",
            rest: true,
            type: structures_1.ArgType.Role,
            pointer: 0,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [, emoji, name, reason, roles]) {
        return this.success(!!(await emoji
            .edit({
            name: name || undefined,
            reason: reason || undefined,
            roles: roles || undefined,
        })
            .catch(ctx.noop)));
    },
});
//# sourceMappingURL=editEmoji.js.map