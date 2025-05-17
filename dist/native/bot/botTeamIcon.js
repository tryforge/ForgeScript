"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$botTeamIcon",
    version: "2.4.0",
    description: "Returns the client's team icon",
    aliases: [
        "$clientTeamIcon"
    ],
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "size",
            description: "The size to use for the image",
            rest: false,
            type: structures_1.ArgType.Number,
        },
        {
            name: "extension",
            description: "The extension to use for the image",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.URL,
    async execute(ctx, [size, ext]) {
        if (!ctx.client.application.owner)
            await ctx.client.application.fetch().catch(ctx.noop);
        const owner = ctx.client.application.owner;
        return this.success(owner instanceof discord_js_1.Team ? owner.iconURL({
            extension: ext || undefined,
            size: size || 2048,
        }) : null);
    },
});
//# sourceMappingURL=botTeamIcon.js.map