import { EmojiProperties, EmojiProperty } from "../properties/emoji"
import { GuildProperties, GuildProperty } from "../properties/guild"
import { RoleProperties, RoleProperty } from "../properties/role"
import { UserProperties, UserProperty } from "../properties/user"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$newEmoji",
    description: "Retrieves new data from an event whose context was a emoji instance",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: ArgType.Enum,
            enum: EmojiProperty,
            required: true
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: ArgType.String
        }
    ],
    execute(ctx, [ prop, sep ]) {
        return Return.success(
            EmojiProperties[prop](ctx.states?.emoji?.new, sep)
        )
    },
})