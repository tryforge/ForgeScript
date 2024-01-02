"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../../structures");
exports.default = new structures_1.ApplicationCommand({
    code: "ok! $applicationCommandDisplay",
    data: {
        name: "sure",
        description: "bye",
        options: [
            {
                name: "hi",
                description: "tmr",
                type: discord_js_1.ApplicationCommandOptionType.String,
                required: false
            }
        ]
    }
});
//# sourceMappingURL=bye.js.map