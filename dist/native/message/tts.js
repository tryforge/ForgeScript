"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$tts",
    version: "1.5.0",
    description: "Marks the response as Text-To-Speech",
    unwrap: false,
    execute(ctx) {
        ctx.container.tts = true;
        return this.success();
    },
});
//# sourceMappingURL=tts.js.map