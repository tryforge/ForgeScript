"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$selectMenuValues",
    version: "1.0.0",
    description: "Returns select menu values",
    brackets: false,
    args: [
        {
            name: "index",
            description: "The index of the value",
            type: structures_1.ArgType.Number,
            rest: false,
            required: true
        }
    ],
    unwrap: true,
    execute(ctx, [index]) {
        if (!ctx.isSelectMenu())
            return structures_1.Return.success();
        if (this.hasFields) {
            return structures_1.Return.success(ctx.interaction.values[index]);
        }
        else {
            return structures_1.Return.success(ctx.interaction.values.join(", "));
        }
    }
});
//# sourceMappingURL=selectMenuValues.js.map