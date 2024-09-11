"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$setAutomodExemptChannels",
    version: "1.5.0",
    description: "Sets exempt channels for current automod rule",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "channels",
            description: "The channels that should not be affected by the automod rule",
            rest: true,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [channels]) {
        ctx.automodRule.exemptChannels = channels;
        return this.success();
    },
});
//# sourceMappingURL=setAutomodExemptChannels.js.map