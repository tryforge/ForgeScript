"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.default = {
    data: {
        name: "ping",
        description: "A simple ping command ",
        type: discord_js_1.ApplicationCommandType.ChatInput,
        options: [
            {
                name: "uwu",
                autocomplete: true,
                type: discord_js_1.ApplicationCommandOptionType.String,
                required: true,
                description: "The uwu",
            },
        ],
    },
    code: "uwu rawr $option[uwu]$log",
};
//# sourceMappingURL=ping.js.map