import { BaseChannel, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$deleteStickers",
    version: "1.0.0",
    brackets: true,
    unwrap: true,
    description: "Delete given sticker ids, returns the count of stickers deleted",
    args: [
        {
            name: "guild ID",
            description: "The guild to delete stickers from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "stickers",
            description: "The stickers to delete",
            rest: true,
            required: true,
            pointer: 0,
            type: ArgType.GuildSticker,
        },
    ],
    async execute(ctx, [guild, stickers]) {
        let count = 0
        for (let i = 0, len = stickers.length; i < len; i++) {
            const sticker = stickers[i]
            const success = await sticker.delete().catch(noop)
            if (success) count++
        }

        return Return.success(count)
    },
})
