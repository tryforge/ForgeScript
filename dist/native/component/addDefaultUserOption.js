"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$addDefaultUserOption",
    version: "1.4.0",
    aliases: [
        "$addDefaultUsers",
        "$addDefaultUserOptions"
    ],
    description: "Adds default user options to the last select menu",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "user IDs",
            description: "The user ids",
            rest: true,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [ids]) {
        const menu = ctx.container.actionRow?.components[0];
        if (menu instanceof discord_js_1.UserSelectMenuBuilder || menu instanceof discord_js_1.MentionableSelectMenuBuilder) {
            menu.addDefaultUsers(ids);
        }
        return this.success();
    },
});
//# sourceMappingURL=addDefaultUserOption.js.map