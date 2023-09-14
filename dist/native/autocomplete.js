"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$autocomplete",
    version: "1.0.6",
    description: "Forces autocomplete response",
    unwrap: false,
    async execute(ctx) {
        await ctx.container.send(ctx.obj);
        return structures_1.Return.success();
    },
});
//# sourceMappingURL=autocomplete.js.map