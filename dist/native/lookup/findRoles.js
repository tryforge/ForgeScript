"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const array_1 = __importDefault(require("../../functions/array"));
const role_1 = require("../../properties/role");
const findRole_1 = require("./findRole");
const findChannels_1 = require("./findChannels");
exports.default = new structures_1.NativeFunction({
    name: "$findRoles",
    version: "1.5.0",
    description: "Finds roles of a guild using a query",
    brackets: true,
    output: (0, array_1.default)(),
    args: [
        {
            name: "guild ID",
            description: "The guild to find the roles on",
            type: structures_1.ArgType.Guild,
            rest: false,
            required: true,
        },
        {
            name: "query",
            description: "The id, mention or role name to find",
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
            enum: role_1.RoleProperty
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
            enum: findChannels_1.SearchMethodType
        },
    ],
    unwrap: true,
    execute(ctx, [guild, query, limit, prop, sep, method]) {
        query = query.replace(findRole_1.RoleMentionCharRegex, "");
        limit ||= 10;
        prop ||= role_1.RoleProperty.id;
        const search = guild.roles.cache.filter(role => {
            switch (method) {
                case findChannels_1.SearchMethodType.startsWith:
                    return (role.id.startsWith(query) || role.name.startsWith(query));
                case findChannels_1.SearchMethodType.endsWith:
                    return (role.id.endsWith(query) || role.name.endsWith(query));
                default:
                    return (role.id.includes(query) || role.name.includes(query));
            }
        }).toJSON().slice(0, limit);
        return this.success(search?.map((x) => role_1.RoleProperties[prop](x)).join(sep ?? ", "));
    },
});
//# sourceMappingURL=findRoles.js.map