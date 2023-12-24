"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$unparseDate",
    version: "1.2.0",
    description: "Unparses given date to ms",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "date",
            description: "The date to get its ms",
            type: structures_1.ArgType.Date,
            rest: false,
            required: true
        }
    ],
    execute(ctx, [date]) {
        return this.success(date.getTime());
    },
});
//# sourceMappingURL=unparseDate.js.map