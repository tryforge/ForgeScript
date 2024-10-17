"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$interactionRawData",
    version: "1.5.0",
    description: "Returns the raw data of this interaction",
    unwrap: false,
    output: structures_1.ArgType.Json,
    execute(ctx) {
        return this.successJSON(ctx.interaction?.toJSON());
    },
});
//# sourceMappingURL=interactionRawData.js.map