"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
function default_1(...args) {
    if (this.hasDisabledConsoleErrors()) {
        return;
    }
    structures_1.Logger.error(...args);
}
exports.default = default_1;
//# sourceMappingURL=contextNoop.js.map