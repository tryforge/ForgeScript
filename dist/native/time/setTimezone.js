"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setTimezone",
    version: "1.5.0",
    aliases: ["$timezone"],
    description: "Sets the timezone for time functions",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "timezone",
            description: "The timezone to set",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        }
    ],
    async execute(ctx, [timezone]) {
        ctx.timezone = timezone;
        return this.success();
    }
});
//# sourceMappingURL=setTimezone.js.map