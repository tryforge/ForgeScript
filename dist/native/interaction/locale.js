"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const NativeFunction_1 = require("../../structures/@internal/NativeFunction");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$locale",
    aliases: [
        "$interactionLocale"
    ],
    version: "1.4.0",
    description: "Retrieves the user locale of the interaction",
    unwrap: true,
    output: discord_js_1.Locale,
    execute: async function (ctx) {
        return this.success(ctx.interaction?.locale);
    },
});
//# sourceMappingURL=locale.js.map