"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$disableConsoleErrors",
    version: "1.4.0",
    description: "Disables possible outcoming errors that are output to console",
    unwrap: false,
    execute(ctx) {
        ctx.runtime.disableConsoleErrors = true;
        return this.success();
    },
});
//# sourceMappingURL=disableConsoleErrors.js.map