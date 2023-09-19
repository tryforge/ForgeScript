"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.ApplicationCommand({
    data: {
        name: "ok",
        type: discord_js_1.ApplicationCommandType.User
    },
    code: "$log[executed] target: <@$option[user]>"
});
//# sourceMappingURL=ok.js.map