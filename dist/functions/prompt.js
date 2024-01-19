"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("process");
const readline_1 = require("readline");
async function default_1(q) {
    const itf = (0, readline_1.createInterface)(process_1.stdin, process_1.stdout);
    return new Promise(r => {
        itf.question(q, input => {
            itf.close();
            r(input);
        });
    });
}
exports.default = default_1;
//# sourceMappingURL=prompt.js.map