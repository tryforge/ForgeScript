"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$userAccentColor",
    version: "1.0.0",
    description: "Returns the user accent color",
    brackets: false,
    args: [
        {
            name: "user ID",
            description: "The user to retrieve the accent color",
            rest: false,
            required: true,
            type: structures_1.ArgType.User
        }
    ],
    unwrap: true,
    execute(ctx, [user]) {
        return structures_1.Return.success((user ?? ctx.user)?.hexAccentColor);
    },
});
//# sourceMappingURL=userAccentColor.js.map