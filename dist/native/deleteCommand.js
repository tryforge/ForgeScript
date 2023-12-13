"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$deleteCommand",
    version: "1.2.0",
    description: "Deletes the author's message",
    unwrap: false,
    async execute(ctx) {
        await ctx.message?.delete().catch(lodash_1.noop);
        return this.success();
    },
});
//# sourceMappingURL=deleteCommand.js.map