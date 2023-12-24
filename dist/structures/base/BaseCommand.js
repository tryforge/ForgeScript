"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCommand = void 0;
const Compiler_1 = require("../../core/Compiler");
const __1 = require("..");
class BaseCommand {
    data;
    compiled;
    constructor(data) {
        this.data = data;
        this.compiled = {
            name: Compiler_1.Compiler.compile(data.name, this.data.path),
            code: Compiler_1.Compiler.compile(data.code, this.data.path),
        };
    }
    setPath(p) {
        this.data.path = p;
        return this;
    }
    validate() {
        if (!this.data.type)
            throw new __1.ForgeError(null, __1.ErrorType.MissingCommandType, this.data.path);
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