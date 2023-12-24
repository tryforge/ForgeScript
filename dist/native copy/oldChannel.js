"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const channel_1 = require("../properties/channel");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$oldChannel",
    version: "1.0.0",
    description: "Retrieves old data from an event whose context was a channel instance",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: channel_1.ChannelProperty,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [prop, sep]) {
        return this.success(channel_1.ChannelProperties[prop](ctx.states?.channel?.old, sep));
    },
});
//# sourceMappingURL=oldChannel.js.map