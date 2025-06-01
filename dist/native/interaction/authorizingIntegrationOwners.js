"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizingIntegrationOwnersType = void 0;
const structures_1 = require("../../structures");
var AuthorizingIntegrationOwnersType;
(function (AuthorizingIntegrationOwnersType) {
    AuthorizingIntegrationOwnersType[AuthorizingIntegrationOwnersType["Guild"] = 0] = "Guild";
    AuthorizingIntegrationOwnersType[AuthorizingIntegrationOwnersType["User"] = 1] = "User";
})(AuthorizingIntegrationOwnersType || (exports.AuthorizingIntegrationOwnersType = AuthorizingIntegrationOwnersType = {}));
exports.default = new structures_1.NativeFunction({
    name: "$authorizingIntegrationOwners",
    version: "1.5.0",
    description: "Returns the authorizing integration owners of this interaction",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "type",
            description: "The type of authorizing integration owners to return",
            rest: false,
            required: true,
            type: structures_1.ArgType.Enum,
            enum: AuthorizingIntegrationOwnersType
        },
    ],
    output: [
        structures_1.ArgType.Json,
        structures_1.ArgType.User,
        structures_1.ArgType.Guild
    ],
    execute(ctx, [type]) {
        const owners = ctx.interaction && "authorizingIntegrationOwners" in ctx.interaction ? ctx.interaction.authorizingIntegrationOwners : undefined;
        return this.successJSON(owners && this.hasFields ? owners[type] : owners);
    },
});
//# sourceMappingURL=authorizingIntegrationOwners.js.map