"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const componentBuilders_1 = require("../../functions/componentBuilders");
const discord_js_1 = require("discord.js");
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
                ? json.map((row) => new discord_js_1.ActionRowBuilder().addComponents(row?.map((comp) => (0, componentBuilders_1.buildActionRow)(comp))))
                : (0, componentBuilders_1.isTopLevel)(json[0]?.type)
                    ? json.map((comp) => (0, componentBuilders_1.buildComponent)(ctx, comp))
                    : new Array(new discord_js_1.ActionRowBuilder().addComponents(json?.map((comp) => (0, componentBuilders_1.buildActionRow)(comp))))
            : new Array((0, componentBuilders_1.isTopLevel)(json?.type) ? (0, componentBuilders_1.buildComponent)(ctx, json) : new discord_js_1.ActionRowBuilder().addComponents((0, componentBuilders_1.buildActionRow)(json)));
        ctx.container.components.push(...components);
        return this.success();
    },
});
//# sourceMappingURL=loadComponents.js.map