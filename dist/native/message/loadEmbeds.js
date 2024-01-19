"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$loadEmbeds",
    version: "1.4.0",
    aliases: [
        "$loadEmbed"
    ],
    description: "Loads embed json (or array) to the response",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "embed data",
            type: structures_1.ArgType.Json,
            rest: false,
            required: true,
            description: "The embed object or array of objects to load"
        }
    ],
    execute(ctx, [json]) {
        if (Array.isArray(json)) {
            ctx.container.embeds.push(...json.map(x => discord_js_1.EmbedBuilder.from(x)));
        }
        else {
            ctx.container.embeds.push(discord_js_1.EmbedBuilder.from(json));
        }
        return this.success();
    },
});
//# sourceMappingURL=loadEmbeds.js.map