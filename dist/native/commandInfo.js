"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$commandInfo",
    version: "1.0.3",
    description: "Retrieves command info",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "type",
            description: "The command type",
            type: structures_1.ArgType.Enum,
            enum: discord_js_1.Events,
            rest: false,
            required: true
        },
        {
            name: "name",
            description: "The command name",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "property",
            description: "The property to retrieve",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        },
        {
            name: "separator",
            description: "Separator to use in case of array",
            rest: false,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [type, name, prop, sep]) {
        const cmd = ctx.client.commands.get(type, x => x.name === name)[0];
        const val = cmd.data?.[prop];
        return structures_1.Return.success(Array.isArray(val) ? val.join(sep || ", ") : val);
    },
});
//# sourceMappingURL=commandInfo.js.map