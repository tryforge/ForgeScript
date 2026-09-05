"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$stickerID",
    version: "1.4.0",
    description: "Returns the sticker id",
    unwrap: false,
    output: structures_1.ArgType.Sticker,
    execute(ctx) {
        return this.success(ctx.sticker?.id);
    },
});
//# sourceMappingURL=stickerID.js.map