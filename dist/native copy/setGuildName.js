"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setGuildName",
    version: "1.0.0",
    description: "Sets a guild name, returns boolean",
    unwrap: true,
    args: [
        {
            name: "guild ID",
            rest: false,
            type: structures_1.ArgType.Guild,
            required: true,
            description: "The guild to set name",
        },
        {
            name: "name",
            description: "The new name",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    brackets: true,
    async execute(_, [guild, name]) {
        return this.success((await guild.setName(name).catch(() => false)) !== false);
    },
});
//# sourceMappingURL=setGuildName.js.map