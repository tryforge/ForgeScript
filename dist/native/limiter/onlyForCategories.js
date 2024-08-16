"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$onlyForCategories",
    version: "1.5.0",
    description: "Only executes code if given ids match the current category",
    brackets: true,
    unwrap: false,
    args: [
        {
            name: "code",
            description: "The code to execute if category is not whitelisted",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "channels",
            pointer: 0,
            description: "The categories to check for",
            rest: true,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.type === discord_js_1.ChannelType.GuildCategory
        }
    ],
    async execute(ctx) {
        const code = this.data.fields[0];
        let ok = false;
        if (ctx.guild) {
            const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 1);
            if (!this["isValidReturnType"](rt))
                return rt;
            ok = args[0].some(x => x.id === (ctx.channel || null).parentId) ?? false;
        }
        if (!ok)
            return this["fail"](ctx, code);
        return this.success();
    },
});
//# sourceMappingURL=onlyForCategories.js.map