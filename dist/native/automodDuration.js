"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$automodDuration",
    description: "The duration in ms by this automod action",
    unwrap: false,
    execute(ctx) {
        const dur = ctx.automod?.action.metadata.durationSeconds;
        return structures_1.Return.success(dur ? dur * 1000 : null);
    },
});
//# sourceMappingURL=automodDuration.js.map