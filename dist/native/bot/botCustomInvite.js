"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$botCustomInvite",
    version: "1.5.0",
    description: "Returns the client's custom invite link",
    unwrap: false,
    aliases: [
        "$clientCustomInvite"
    ],
    output: structures_1.ArgType.URL,
    execute(ctx) {
        return this.success(ctx.client.application.customInstallURL);
    },
});
//# sourceMappingURL=botCustomInvite.js.map