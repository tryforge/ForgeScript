"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addChannelType",
    version: "1.4.0",
    description: "Adds a channel type to the last select menu",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "type",
            description: "The channel type",
            rest: false,
            enum: discord_js_1.ChannelType,
            required: true,
            type: structures_1.ArgType.Enum
        }
    ],
    execute(ctx, [type]) {
        const menu = ctx.container.components.at(-1);
        if (menu instanceof discord_js_1.ChannelSelectMenuBuilder)
            menu.addChannelTypes(type);
        return this.success();
    },
});
//# sourceMappingURL=addChannelType.js.map