"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const message_1 = require("../properties/message");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$newMessage",
    version: "1.0.0",
    description: "Retrieves new data from an event whose context was a message instance",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: message_1.MessageProperty,
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
        return this.success(message_1.MessageProperties[prop](ctx.states?.message?.new, sep));
    },
});
//# sourceMappingURL=newMessage.js.map