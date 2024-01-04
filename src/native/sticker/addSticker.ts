import noop from "../../functions/noop"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$addSticker",
    version: "1.0.0",
    description: "Adds a sticker to a guild, returns sticker id",
    unwrap: true,
    output: ArgType.GuildSticker,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to add the sticker to",
            rest: false,
            type: ArgType.Guild,
            required: true,
        },
        {
            name: "url",
            description: "The url or file path for this sticker",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "name",
            description: "The sticker name",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "tags",
            description: "The tags to use for this sticker",
            type: ArgType.String,
            required: true,
            rest: false,
        },
        {
            name: "description",
            description: "The description for the sticker",
            rest: false,
            type: ArgType.String,
        },
    ],
    async execute(_, [guild, url, name, tags, desc]) {
        const created = await guild.stickers
            .create({
                file: url,
                name,
                tags,
                description: desc || null,
            })
            .catch(noop)
        return this.success(created?.id)
    },
})
