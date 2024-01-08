"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = require("timers/promises");
const structures_1 = require("../structures");
async function main() {
    structures_1.Logger.infoUpdate("Hello");
    await (0, promises_1.setTimeout)(1000);
    structures_1.Logger.warnUpdate("Yes");
    await (0, promises_1.setTimeout)(1000);
    structures_1.Logger.errorUpdate("Damn");
}
main();
//# sourceMappingURL=bulk.js.map