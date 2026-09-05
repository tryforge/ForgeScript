"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$reactionAuthorID",
    version: "1.0.0",
    description: "Returns the reaction author id that reacted",
    unwrap: true,
    output: structures_1.ArgType.User,
    execute(ctx) {
        return this.success(ctx.states?.user?.new?.id);
    },
});
//# sourceMappingURL=reactionAuthorID.js.map