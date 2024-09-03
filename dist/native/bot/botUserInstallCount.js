"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$botUserInstallCount",
    version: "1.5.0",
    aliases: ["$clientUserInstallCount"],
    description: "Returns the user install count of the bot",
    unwrap: true,
    output: structures_1.ArgType.Number,
    execute(ctx) {
        return this.success(ctx.client.application.approximateUserInstallCount);
    },
});
//# sourceMappingURL=botUserInstallCount.js.map