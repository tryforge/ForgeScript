"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
const builders_1 = require("@discordjs/builders");
exports.default = new structures_1.NativeFunction({
    name: "$addDefaultRoleOption",
    version: "1.4.0",
    aliases: [
        "$addDefaultRoles",
        "$addDefaultRoleOptions"
    ],
    description: "Adds default role options to the last select menu",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "role IDs",
            description: "The role ids",
            rest: true,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [ids]) {
        const menu = ctx.container.components.at(-1)?.components.at(0);
        if (menu instanceof discord_js_1.BaseSelectMenuBuilder) {
            if (menu instanceof builders_1.RoleSelectMenuBuilder)
                menu.addDefaultRoles(ids);
            else if (menu instanceof builders_1.MentionableSelectMenuBuilder)
                menu.addDefaultRoles(ids);
        }
        return this.success();
    },
});
//# sourceMappingURL=addDefaultRoleOption.js.map