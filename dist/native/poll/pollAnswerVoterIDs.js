"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = __importDefault(require("../../functions/array"));
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$pollAnswerVoterIDs",
    version: "1.5.0",
    description: "Can only be used in poll events, returns the vote user ids of this poll answer",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "separator",
            description: "The separator to use for every id",
            rest: false,
            type: structures_1.ArgType.String
        }
    ],
    output: (0, array_1.default)(),
    async execute(ctx, [sep]) {
        const answer = ctx.states?.poll?.new;
        if (!answer)
            return this.success();
        const ids = [];
        let after;
        do {
            const voters = await answer.voters.fetch({ limit: 100, after }).catch(ctx.noop);
            if (!voters)
                break;
            ids.push(...voters.keys());
            after = voters.size === 100 ? voters.lastKey() : undefined;
        } while (after);
        return this.success(ids.join(sep ?? ", "));
    },
});
//# sourceMappingURL=pollAnswerVoterIDs.js.map