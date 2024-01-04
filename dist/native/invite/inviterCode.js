"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const InviteTracker_1 = require("../../structures/trackers/InviteTracker");
exports.default = new structures_1.NativeFunction({
    name: "$inviterCode",
    version: "1.0.3",
    description: "Returns the invite code that was used by this person",
    unwrap: true,
    output: structures_1.ArgType.Invite,
    execute(ctx) {
        return this.success(InviteTracker_1.InviteTracker.Inviters.get(ctx.guild?.id)?.get(ctx.user?.id)?.code);
    },
});
//# sourceMappingURL=inviterCode.js.map