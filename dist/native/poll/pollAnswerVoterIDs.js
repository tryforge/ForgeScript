"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
            description: "Optional separator to use for every id",
            rest: false,
            type: structures_1.ArgType.String
        }
    ],
    execute(ctx, [sep]) {
        return this.success(ctx.states?.poll?.new?.fetchVoters().then(x => x.map(x => x.id).join(sep ?? ", ")));
    },
});
//# sourceMappingURL=pollAnswerVoterIDs.js.map