"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$color",
    version: "1.0.0",
    description: "Adds an embed color",
    unwrap: true,
    args: [
        {
            name: "color",
            description: "The color for the embed",
            required: true,
            enum: discord_js_1.Colors,
            type: structures_1.ArgType.Color,
            rest: false,
        },
        {
            name: "index",
            description: "The index to add this data to",
            rest: false,
            type: structures_1.ArgType.Number,
        },
    ],
    brackets: true,
    execute(ctx, [color, index]) {
        ctx.container.embed(index ?? 0).setColor(color);
        return this.success();
    },
});
//# sourceMappingURL=color.js.map