"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$deleteGlobalApplicationCommands",
    version: "2.3.0",
    description: "Deletes all global commands of your bot",
    unwrap: false,
    output: structures_1.ArgType.Boolean,
    async execute(ctx) {
        return this.success(!!(await ctx.client.application?.commands.set([]).catch(ctx.noop)));
    },
});
//# sourceMappingURL=deleteGlobalApplicationCommands.js.map