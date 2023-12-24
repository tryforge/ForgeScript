"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$channelID",
    version: "1.0.0",
    description: "Gets the channel id of a channel name",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "name",
            description: "The channel name to get it's id",
            required: true,
            rest: true,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [args]) {
        if (!this.hasFields)
            return this.success(ctx.channel?.id);
        const name = args.join(";");
        return this.success(ctx.client.channels.cache.find((x) => "name" in x && x.name === name)?.id);
    },
});
//# sourceMappingURL=channelID.js.map