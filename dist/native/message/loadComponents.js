"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$loadComponents",
    version: "1.4.0",
    aliases: ["$loadComponent"],
    description: "Loads components json (or array) to the response",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "component data",
            type: structures_1.ArgType.Json,
            rest: false,
            required: true,
            description: "The components object or array of objects to load",
        },
    ],
    execute(ctx, [json]) {
        if (Array.isArray(json)) {
            ctx.container.components.push(...json.map((x) => new discord_js_1.ActionRowBuilder().addComponents(x.map((x) => x.type === discord_js_1.ComponentType.Button ? discord_js_1.ButtonBuilder.from(x) : discord_js_1.SelectMenuBuilder.from(x)))));
        }
        else {
            ctx.container.components.push(new discord_js_1.ActionRowBuilder().addComponents(json.type === discord_js_1.ComponentType.Button
                ? discord_js_1.ButtonBuilder.from(json)
                : discord_js_1.SelectMenuBuilder.from(json)));
        }
        return this.success();
    },
});
//# sourceMappingURL=loadComponents.js.map