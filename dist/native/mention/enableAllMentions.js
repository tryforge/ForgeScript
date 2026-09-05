"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$enableAllMentions",
    version: "2.6.0",
    description: "Enables every possible mention",
    unwrap: false,
    execute(ctx) {
        ctx.container.parseMentions();
        return this.success();
    },
});
//# sourceMappingURL=enableAllMentions.js.map