"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const invite_1 = require("../properties/invite");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$newInvite",
    version: "1.0.3",
    description: "Retrieves new data from an event whose context was a invite instance",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: invite_1.InviteProperty,
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
        return this.success(invite_1.InviteProperties[prop](ctx.states?.invite?.new, sep));
    },
});
//# sourceMappingURL=newInvite.js.map