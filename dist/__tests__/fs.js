"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FileReader_1 = require("../core/FileReader");
console.log(new FileReader_1.FileReader(`[name]

Ping

[type]

messageCreate

[code]
ping is $ping
`, {}).read());
//# sourceMappingURL=fs.js.map