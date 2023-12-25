"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildSafetyAlertsChannelID",
    category: "guild",
    version: "1.3.0",
    description: "Returns the server's safety alerts channel ID",
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to retrieve the data",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
    ],
    unwrap: true,
    execute(ctx, [guild]) {
        return this.success((guild ?? ctx.guild)?.safetyAlertsChannelId);
    },
});
//# sourceMappingURL=guildSafetyAlertsChannelID.js.map