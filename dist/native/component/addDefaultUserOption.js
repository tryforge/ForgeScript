"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const builders_1 = require("@discordjs/builders");
exports.default = new structures_1.NativeFunction({
    name: "$addDefaultUserOption",
    version: "1.4.0",
    description: "Adds a default user option to the last select menu",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "user ID",
            description: "The user id",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [id]) {
        const menu = ctx.container.components.at(-1);
        if (menu instanceof discord_js_1.BaseSelectMenuBuilder) {
            if (menu instanceof discord_js_1.UserSelectMenuBuilder)
                menu.addDefaultUsers(id);
            else if (menu instanceof builders_1.MentionableSelectMenuBuilder)
                menu.addDefaultUsers(id);
        }
        return this.success();
    },
});
//# sourceMappingURL=addDefaultUserOption.js.map