"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const textSplit_1 = require("./textSplit");
exports.default = new structures_1.NativeFunction({
    name: "$getTextSplitIndex",
    version: "2.5.0",
    description: "Gets the index of a textSplit element",
    aliases: ["$getSplitTextIndex"],
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "element",
            description: "The element to get index of",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [element]) {
        return this.success(ctx.getEnvironmentInstance(Array, textSplit_1.SplitTextName)?.indexOf(element));
    },
});
//# sourceMappingURL=getTextSplitIndex.js.map