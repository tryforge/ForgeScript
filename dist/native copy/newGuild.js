"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const guild_1 = require("../properties/guild");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$newGuild",
    version: "1.0.0",
    description: "Retrieves new data from an event whose context was a guild instance",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: guild_1.GuildProperty,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [prop, sep]) {
        return this.success(guild_1.GuildProperties[prop](ctx.states?.guild?.new, sep));
    },
});
//# sourceMappingURL=newGuild.js.map