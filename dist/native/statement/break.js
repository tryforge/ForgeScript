"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$break",
    version: "1.0.3",
    description: "Breaks the loop",
    unwrap: false,
    execute() {
        return this.break();
    },
});
//# sourceMappingURL=break.js.map