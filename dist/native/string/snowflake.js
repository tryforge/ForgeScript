"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$snowflake",
    version: "1.4.0",
    description: "Generates a snowflake, this value will never clash",
    unwrap: false,
    output: structures_1.ArgType.String,
    execute(ctx) {
        return this.success(discord_js_1.SnowflakeUtil.generate().toString());
    },
});
//# sourceMappingURL=snowflake.js.map