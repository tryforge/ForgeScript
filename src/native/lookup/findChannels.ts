import { ArgType, CompiledFunction, NativeFunction, Return } from "../../structures"
import array from "../../functions/array"
import { ChannelProperties, ChannelProperty } from "../../properties/channel"
import { ChannelMentionCharRegex } from "./findGuildChannel"
import { channel } from "diagnostics_channel"

export enum SearchMethodType {
    startsWith,
    endsWith,
    includes
}

export default new NativeFunction({
    name: "$findChannels",
    version: "1.5.0",
    description: "Finds channels of a guild using a query",
    brackets: true,
    output: array<ArgType.String>(),
    args: [
        {
            name: "guild ID",
            description: "The guild to find the channels on",
            type: ArgType.Guild,
            rest: false,
            required: true,
        },
        {
            name: "query",
            description: "The id, mention or channel name to find",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "limit",
            description: "The limit of results",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "property",
            description: "The property to return",
            rest: false,
            type: ArgType.Enum,
            enum: ChannelProperty
        },
        {
            name: "separator",
            description: "The separator to use for every result",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "method",
            description: "The method to use for searching",
            rest: false,
            type: ArgType.Enum,
            enum: SearchMethodType
        },
    ],
    unwrap: true,
    execute(ctx, [ guild, query, limit, prop, sep, method ]) {
        query = query.replace(ChannelMentionCharRegex, "")
        limit ||= 10
        prop ||= ChannelProperty.id

        const search = guild.channels.cache.filter(channel => { 
            switch(method) {
                case SearchMethodType.startsWith:
                    return (channel.id.startsWith(query) || channel.name.startsWith(query))
                case SearchMethodType.endsWith:
                    return (channel.id.endsWith(query) || channel.name.endsWith(query))
                default:
                    return (channel.id.includes(query) || channel.name.includes(query))
            }
        }).toJSON().slice(0, limit)

        return this.success(search?.map((x) => ChannelProperties[prop!](x)).join(sep ?? ", "))
    },
})