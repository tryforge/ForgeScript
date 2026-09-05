"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$deleteDM",
    version: "2.7.0",
    description: "Deletes the DM channel between the client and a user",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "user ID",
            description: "The user whose DM channel should be deleted",
            rest: false,
            type: structures_1.ArgType.User,
            required: true,
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [user]) {
        return this.success(!!(await user.deleteDM().catch(ctx.noop)));
    },
});
//# sourceMappingURL=deleteDM.js.map