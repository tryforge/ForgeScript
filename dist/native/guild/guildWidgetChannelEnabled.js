"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildWidgetChannelEnabled",
    version: "1.3.0",
    description: "Returns whether widget channel is enabled for this guild",
    brackets: false,
    aliases: [
        "$serverWidgetChannelEnabled"
    ],
    output: structures_1.ArgType.Boolean,
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
        return this.success((guild ?? ctx.guild)?.widgetEnabled);
    },
});
//# sourceMappingURL=guildWidgetChannelEnabled.js.map