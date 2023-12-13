"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
const InviteSystem_1 = require("../structures/InviteSystem");
exports.default = new structures_1.NativeFunction({
    name: "$inviterCode",
    version: "1.0.3",
    description: "Returns the invite code that was used by this person",
    unwrap: true,
    execute(ctx) {
        return this.success(InviteSystem_1.InviteSystem.Inviters.get(ctx.guild?.id)?.get(ctx.user?.id)?.code);
    },
});
//# sourceMappingURL=inviterCode.js.map