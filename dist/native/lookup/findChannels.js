"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchMethodType = void 0;
const structures_1 = require("../../structures");
const array_1 = __importDefault(require("../../functions/array"));
const channel_1 = require("../../properties/channel");
const findGuildChannel_1 = require("./findGuildChannel");
var SearchMethodType;
(function (SearchMethodType) {
    SearchMethodType[SearchMethodType["startsWith"] = 0] = "startsWith";
    SearchMethodType[SearchMethodType["endsWith"] = 1] = "endsWith";
    SearchMethodType[SearchMethodType["includes"] = 2] = "includes";
})(SearchMethodType || (exports.SearchMethodType = SearchMethodType = {}));
exports.default = new structures_1.NativeFunction({
    name: "$findChannels",
    version: "1.5.0",
    description: "Finds channels of a guild using a query",
    brackets: true,
    output: (0, array_1.default)(),
    args: [
        {
            name: "guild ID",
            description: "The guild to find the channels on",
            type: structures_1.ArgType.Guild,
            rest: false,
            required: true,
        },
        {
            name: "query",
            description: "The id, mention or channel name to find",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
        {
            name: "limit",
            description: "The limit of results",
            rest: false,
            type: structures_1.ArgType.Number,
        },
        {
            name: "property",
            description: "The property to return",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: channel_1.ChannelProperty
        },
        {
            name: "separator",
            description: "The separator to use for every result",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "method",
            description: "The method to use for searching",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: SearchMethodType
        },
    ],
    unwrap: true,
    execute(ctx, [guild, query, limit, prop, sep, method]) {
        query = query.replace(findGuildChannel_1.ChannelMentionCharRegex, "");
        limit ||= 10;
        prop ||= channel_1.ChannelProperty.id;
        const search = guild.channels.cache.filter(channel => {
            switch (method) {
                case SearchMethodType.startsWith:
                    return (channel.id.startsWith(query) || channel.name.startsWith(query));
                case SearchMethodType.endsWith:
                    return (channel.id.endsWith(query) || channel.name.endsWith(query));
                default:
                    return (channel.id.includes(query) || channel.name.includes(query));
            }
        }).toJSON().slice(0, limit);
        return this.success(search?.map((x) => channel_1.ChannelProperties[prop](x)).join(sep ?? ", "));
    },
});
//# sourceMappingURL=findChannels.js.map