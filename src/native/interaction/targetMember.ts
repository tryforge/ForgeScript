import { ArgType, NativeFunction, Return } from "../../structures"
import { MemberProperties, MemberProperty } from "../../properties/member"

export default new NativeFunction({
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
            type: ArgType.Enum,
            enum: MemberProperty,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: ArgType.String,
        },
    ],
    output: ArgType.Unknown,
    execute(ctx, [prop, sep]) {
        return this.success(ctx.interaction?.isUserContextMenuCommand() ? MemberProperties[prop](ctx.interaction.targetMember, sep) : null)
    },
})