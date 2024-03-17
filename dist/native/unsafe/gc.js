"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("process");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$gc",
    version: "1.5.0",
    description: "Triggers JavaScript's garbage collector, only available if passed --expose-gc flag to node",
    unwrap: false,
    output: structures_1.ArgType.Boolean,
    execute(ctx) {
        return this.success(process_1.execArgv.includes("--expose-gc") ?
            // eslint-disable-next-line no-undef
            (gc(), true) :
            false);
    },
});
//# sourceMappingURL=gc.js.map