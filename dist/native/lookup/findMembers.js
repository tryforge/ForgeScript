"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = __importDefault(require("../../functions/array"));
const member_1 = require("../../properties/member");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$findMembers",
    version: "1.4.0",
    description: "Finds member of a guild using a query",
    brackets: true,
    unwrap: true,
    args: [
        structures_1.Arg.requiredGuild(),
        structures_1.Arg.requiredString("query", "The query to use"),
        structures_1.Arg.optionalNumber("limit", "The limit of results"),
        structures_1.Arg.optionalEnum(member_1.MemberProperty),
        structures_1.Arg.optionalString("separator", "The separator to use for every result"),
    ],
    output: (0, array_1.default)(),
    async execute(ctx, [guild, query, limit, en, sep]) {
        limit ??= 10;
        en ??= member_1.MemberProperty.id;
        const search = await guild.members
            .search({
            limit,
            query,
        })
            .catch(ctx.noop);
        return this.success(search?.map((x) => member_1.MemberProperties[en](x)).join(sep ?? ", "));
    },
});
//# sourceMappingURL=findMembers.js.map