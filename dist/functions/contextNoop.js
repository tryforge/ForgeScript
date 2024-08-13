"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const structures_1 = require("../structures");
function default_1(...args) {
    if (this.hasDisabledConsoleErrors()) {
        return;
    }
    structures_1.Logger.error(...args);
}
//# sourceMappingURL=contextNoop.js.map