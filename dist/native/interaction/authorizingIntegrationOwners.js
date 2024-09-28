"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$authorizingIntegrationOwners",
    description: "Returns the authorizing integration owners of this interaction",
    unwrap: false,
    output: structures_1.ArgType.Json,
    execute(ctx) {
        return this.successJSON(ctx.interaction && "authorizingIntegrationOwners" in ctx.interaction ? ctx.interaction.authorizingIntegrationOwners : undefined);
    },
});
//# sourceMappingURL=authorizingIntegrationOwners.js.map