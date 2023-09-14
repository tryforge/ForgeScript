"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCommand = void 0;
const Compiler_1 = require("../core/Compiler");
class BaseCommand {
    data;
    unloadable;
    compiled;
    constructor(data, unloadable = false) {
        this.data = data;
        this.unloadable = unloadable;
        this.compiled = {
            name: Compiler_1.Compiler.compile(data.name),
            code: Compiler_1.Compiler.compile(data.code)
        };
    }
    get name() {
        return this.data.name;
    }
    get type() {
        return this.data.type;
    }
}
exports.BaseCommand = BaseCommand;
//# sourceMappingURL=BaseCommand.js.map