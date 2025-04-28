"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$webhookIsUserCreated",
    version: "2.3.0",
    description: "Checks whether given webhook is user created",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "id",
            description: "The webhook id",
            rest: false,
            type: structures_1.ArgType.Webhook,
            required: true,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [web]) {
        return this.success(web.isUserCreated());
    },
});
//# sourceMappingURL=webhookIsUserCreated.js.map