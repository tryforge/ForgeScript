"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const member_1 = require("../../properties/member");
exports.default = new structures_1.NativeFunction({
    name: "$targetMember",
    version: "2.3.0",
    description: "Retrieves data of the target member",
    unwrap: true,
    brackets: true,
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
    output: structures_1.ArgType.Unknown,
    execute(ctx, [prop, sep]) {
        return this.success(ctx.interaction?.isUserContextMenuCommand() ? member_1.MemberProperties[prop](ctx.interaction.targetMember, sep) : null);
    },
});
//# sourceMappingURL=targetMember.js.map