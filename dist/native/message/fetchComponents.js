"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$fetchComponents",
    version: "1.0.0",
    description: "Fetches a message's components, this will override any other component added to the response",
    aliases: ["$fetchRows"],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "channel ID",
            description: "The channel to pull message from",
            rest: false,
            required: true,
            type: structures_1.ArgType.TextChannel,
        },
        {
            name: "message ID",
            description: "The message to get the components from",
            pointer: 0,
            rest: false,
            type: structures_1.ArgType.Message,
            required: true,
        },
    ],
    execute(ctx, [, msg]) {
        ctx.container.components = (msg ?? ctx.message)?.components.map((x) => (0, discord_js_1.createComponentBuilder)(x.toJSON())) ?? [];
        return this.success();
    },
});
//# sourceMappingURL=fetchComponents.js.map