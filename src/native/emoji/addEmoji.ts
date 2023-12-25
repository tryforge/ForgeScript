import { noop } from "lodash"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$addEmoji",
    category: "emoji",
    version: "1.0.7",
    description: "Adds an emoji to a guild, returns the emoji id",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to add this emote to",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "name",
            description: "The name for the emoji",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "url",
            description: "The emoji icon to use",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "return emoji ID",
            description: "Whether to return the emoji id",
            rest: false,
            type: ArgType.Boolean,
        },
        {
            name: "roles",
            description: "The roles to limit usage of this emote",
            rest: true,
            required: true,
            type: ArgType.Role,
            pointer: 0,
        },
    ],
    async execute(_, [guild, name, icon, returnEmojiID, roles]) {
        const em = await guild.emojis
            .create({
                attachment: icon,
                name,
                roles: roles || undefined,
            })
            .catch(noop)

        return this.success(returnEmojiID && em ? em.id : undefined)
    },
})
