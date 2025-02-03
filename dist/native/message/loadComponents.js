"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const ComponentBuilders = {
    [discord_js_1.ComponentType.Button]: discord_js_1.ButtonBuilder,
    [discord_js_1.ComponentType.StringSelect]: discord_js_1.StringSelectMenuBuilder,
    [discord_js_1.ComponentType.UserSelect]: discord_js_1.UserSelectMenuBuilder,
    [discord_js_1.ComponentType.ChannelSelect]: discord_js_1.ChannelSelectMenuBuilder,
    [discord_js_1.ComponentType.RoleSelect]: discord_js_1.RoleSelectMenuBuilder,
    [discord_js_1.ComponentType.MentionableSelect]: discord_js_1.MentionableSelectMenuBuilder,
};
function loadComponent(x) {
    return ComponentBuilders[x.type]?.from(x);
}
exports.default = new structures_1.NativeFunction({
    name: "$loadComponents",
    version: "1.4.0",
    aliases: ["$loadComponent"],
    description: "Loads components JSON (or array) to the response",
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
        const components = Array.isArray(json)
            ? Array.isArray(json[0])
                ? json.map((row) => new discord_js_1.ActionRowBuilder().addComponents(row?.map((x) => loadComponent(x))))
                : new Array(new discord_js_1.ActionRowBuilder().addComponents(json?.map((x) => loadComponent(x))))
            : new Array(new discord_js_1.ActionRowBuilder().addComponents(loadComponent(json)));
        ctx.container.components.push(...components);
        return this.success();
    },
});
//# sourceMappingURL=loadComponents.js.map