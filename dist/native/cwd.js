"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeFunction_1 = require("../structures/NativeFunction");
const Return_1 = require("../structures/Return");
exports.default = new NativeFunction_1.NativeFunction({
    name: "$cwd",
    version: "1.0.7",
    description: "Returns the process cwd",
    unwrap: true,
    execute() {
        // eslint-disable-next-line no-undef
        return Return_1.Return.success(process.cwd());
    },
});
//# sourceMappingURL=cwd.js.map