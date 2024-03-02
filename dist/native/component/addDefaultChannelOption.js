"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addDefaultChannelOption",
    version: "1.4.0",
    description: "Adds a default channel option to the last select menu",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channel ID",
            description: "The channel id",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [id]) {
        const menu = ctx.container.components.at(-1);
        if (menu instanceof discord_js_1.ChannelSelectMenuBuilder)
            menu.addDefaultChannels(id);
        return this.success();
    },
});
//# sourceMappingURL=addDefaultChannelOption.js.map