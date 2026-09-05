"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$silent",
    version: "2.6.0",
    description: "Marks the response as silent",
    unwrap: false,
    execute(ctx) {
        ctx.container.silent = true;
        return this.success();
    },
});
//# sourceMappingURL=silent.js.map