"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$discordTimestamp",
    version: "1.4.0",
    description: "Creates a discord timestamp",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "time",
            description: "The time to turn into timestamp",
            rest: false,
            required: true,
            type: structures_1.ArgType.Time
        },
        {
            name: "style",
            rest: false,
            required: true,
            enum: discord_js_1.TimestampStyles,
            type: structures_1.ArgType.Enum,
            description: "The timestamp style"
        }
    ],
    output: structures_1.ArgType.String,
    execute(ctx, [ms, style]) {
        return this.success((0, discord_js_1.time)(new Date(ms), style));
    },
});
//# sourceMappingURL=discordTimestamp.js.map