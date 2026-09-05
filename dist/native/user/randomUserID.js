"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$randomUserID",
    version: "1.0.3",
    description: "Returns a random user ID",
    unwrap: false,
    output: structures_1.ArgType.User,
    execute(ctx) {
        return this.success(ctx.client.users.cache.randomKey());
    },
});
//# sourceMappingURL=randomUserID.js.map