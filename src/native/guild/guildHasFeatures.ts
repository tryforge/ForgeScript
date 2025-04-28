import { GuildFeature } from "discord.js"
import { ArgType, NativeFunction } from "../../structures"

export default new NativeFunction({
    name: "$guildHasFeatures",
    version: "1.4.0",
    description: "Returns whether this guild has all the given features",
    unwrap: true,
    brackets: true,
    aliases: [
        "$hasGuildFeatures"
    ],
    args: [
        {
            name: "guild ID",
            description: "The guild to check for features",
            rest: false,
            required: true,
            type: ArgType.Guild
        },
        {
            name: "features",
            rest: true,
            required: true,
            type: ArgType.Enum,
            enum: GuildFeature,
            description: "The features to check for"
        }
    ],
    output: ArgType.Boolean,
    execute(ctx, [ g, features ]) {
        return this.success(features.every(x => g.features.includes(x)))
    },
})