"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$disableAllMentions",
    version: "1.3.0",
    description: "Disables every possible mention",
    unwrap: false,
    execute(ctx) {
        ctx.container.allowedMentions.parse = [];
        return this.success();
    },
});
//# sourceMappingURL=disableAllMentions.js.map