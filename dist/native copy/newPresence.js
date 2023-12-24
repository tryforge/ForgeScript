"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const presence_1 = require("../properties/presence");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$newPresence",
    version: "1.1.0",
    description: "Retrieves new data from an event whose context was a presence instance",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: presence_1.PresenceProperty,
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
        return this.success(presence_1.PresenceProperties[prop](ctx.states?.presence?.new, sep));
    },
});
//# sourceMappingURL=newPresence.js.map