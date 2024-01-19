"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const InviteTracker_1 = require("../../structures/trackers/InviteTracker");
exports.default = new structures_1.NativeFunction({
    name: "$inviterID",
    version: "1.0.3",
    description: "Returns the user who invited this person",
    unwrap: true,
    output: structures_1.ArgType.User,
    execute(ctx) {
        return this.success(InviteTracker_1.InviteTracker.Inviters.get(ctx.guild?.id)?.get(ctx.user?.id)?.inviterId);
    },
});
//# sourceMappingURL=inviterID.js.map