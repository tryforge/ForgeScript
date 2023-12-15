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
            code: Compiler_1.Compiler.compile(data.code),
        };
    }
    static from(code) {
        return new this({
            code,
            type: null
        });
    }
    get name() {
        return this.data.name;
    }
    get type() {
        return this.data.type;
    }
    matchesInteractionType(i) {
        return (!this.data.name ||
            ("customId" in i &&
                this.data.name === i.customId)) && (!this.data.allowedInteractionTypes?.length || (this.data.allowedInteractionTypes.some(type => (type === "button" && i.isButton()) ||
            (type === "selectMenu" && i.isAnySelectMenu()) ||
            (type === "modal" && i.isModalSubmit()) ||
            (type === "autocomplete" && i.isAutocomplete()) ||
            (type === "contextMenu" && i.isContextMenuCommand()))));
    }
}
exports.BaseCommand = BaseCommand;
//# sourceMappingURL=BaseCommand.js.map