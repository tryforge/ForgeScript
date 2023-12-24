"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$fetchRows",
    version: "1.0.0",
    description: "Fetch a message's components, this will override any other component added to the response",
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel id to get the message from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
        },
        {
            name: "message ID",
            description: "The message id to get the components from",
            pointer: 0,
            rest: false,
            type: structures_1.ArgType.Message,
            required: true,
        },
    ],
    brackets: false,
    execute(ctx, [, msg]) {
        ctx.container.components = (msg ?? ctx.message)?.components.map((x) => discord_js_1.ActionRowBuilder.from(x)) ?? [];
        return this.success();
    },
});
//# sourceMappingURL=fetchRows.js.map