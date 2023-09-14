"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationCommand = void 0;
const core_1 = require("../core");
class ApplicationCommand {
    options;
    compiled;
    constructor(options) {
        this.options = options;
        this.compiled = core_1.Compiler.compile(options.code);
    }
    get name() {
        return this.options.data.name;
    }
}
exports.ApplicationCommand = ApplicationCommand;
//# sourceMappingURL=ApplicationCommand.js.map