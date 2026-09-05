"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$messageID",
    version: "1.0.0",
    description: "Returns the message id",
    unwrap: false,
    output: structures_1.ArgType.Message,
    execute(ctx) {
        return this.success(ctx.message?.id);
    },
});
//# sourceMappingURL=messageID.js.map