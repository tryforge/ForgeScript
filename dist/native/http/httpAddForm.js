"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const undici_1 = require("undici");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$httpAddForm",
    version: "1.4.0",
    description: "Adds form data to request",
    unwrap: false,
    execute(ctx) {
        ctx.http.form = new undici_1.FormData();
        return this.success();
    },
});
//# sourceMappingURL=httpAddForm.js.map