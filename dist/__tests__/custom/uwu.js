"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../../structures/@internal/NativeFunction");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$uwu",
    description: "A uwu function that overrides $guildName",
    unwrap: true,
    execute(ctx) {
        return this.success("uwu!");
    },
});
//# sourceMappingURL=uwu.js.map