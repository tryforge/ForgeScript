"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const member_1 = require("../properties/member");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$newMember",
    version: "1.0.0",
    description: "Retrieves new data from an event whose context was a guild member instance",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: member_1.MemberProperty,
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
        return this.success(member_1.MemberProperties[prop](ctx.states?.member?.new, sep));
    },
});
//# sourceMappingURL=newMember.js.map