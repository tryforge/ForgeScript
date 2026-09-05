"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$autocomplete",
    version: "1.0.6",
    description: "Forces autocomplete response",
    unwrap: false,
    async execute(ctx) {
        await ctx.container.send(ctx.obj);
        return this.success();
    },
});
//# sourceMappingURL=autocomplete.js.map