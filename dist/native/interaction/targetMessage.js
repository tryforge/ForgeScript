"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const message_1 = require("../../properties/message");
exports.default = new structures_1.NativeFunction({
    name: "$targetMessage",
    version: "1.5.0",
    description: "Retrieves data of the target message",
    unwrap: true,
    brackets: true,
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
            description: "Separator to use in case of array",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: structures_1.ArgType.Unknown,
    execute(ctx, [prop, sep]) {
        return this.success(ctx.interaction?.isMessageContextMenuCommand() ? message_1.MessageProperties[prop](ctx.interaction.targetMessage, sep) : null);
    },
});
//# sourceMappingURL=targetMessage.js.map