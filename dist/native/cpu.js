"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-undef */
const os_1 = require("os");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$cpu",
    version: "1.0.0",
    description: "Returns the cpu usage of the host (not accurate)",
    unwrap: false,
    execute() {
        return this.success((0, os_1.loadavg)()[0] * 100);
    },
});
//# sourceMappingURL=cpu.js.map