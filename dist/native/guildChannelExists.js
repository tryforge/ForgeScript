"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildChannelExists",
    version: "1.0.0",
    description: "Returns whether a guild channel id exists",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to check for the guild channel",
            type: structures_1.ArgType.Guild,
            rest: false,
            required: true,
        },
        {
            name: "channel ID",
            description: "The role to guild channel",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    async execute(_, [guild, id]) {
        return this.success(structures_1.CompiledFunction.IdRegex.test(id) && guild.channels.cache.has(id));
    },
});
//# sourceMappingURL=guildChannelExists.js.map