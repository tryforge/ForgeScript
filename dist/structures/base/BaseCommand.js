"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCommand = void 0;
const core_1 = require("../../core");
const ForgeError_1 = require("../forge/ForgeError");
let id = 0;
class BaseCommand {
    data;
    compiled;
    id = ++id;
    constructor(data) {
        this.data = data;
        this.compiled = {
            name: core_1.Compiler.compile(data.name, this.data.path),
            code: core_1.Compiler.compile(data.code, this.data.path),
        };
    }
    setPath(p) {
        this.data.path = p;
        return this;
    }
    validate() {
        if (!this.data.type)
            throw new ForgeError_1.ForgeError(null, ForgeError_1.ErrorType.MissingCommandType, this.data.path);
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
    hasDisabledConsoleErrors(client) {
        return this.data.disableConsoleErrors || (this.data.disableConsoleErrors === undefined && client.options.disableConsoleErrors);
    }
    matchesInteractionType(i) {
        return (!this.data.name ||
            ("customId" in i &&
                this.data.name === i.customId)) && (!this.data.allowedInteractionTypes?.length || (this.data.allowedInteractionTypes.some(type => (type === "slashCommand" && i.isChatInputCommand()) ||
            (type === "button" && i.isButton()) ||
            (type === "selectMenu" && i.isAnySelectMenu()) ||
            (type === "modal" && i.isModalSubmit()) ||
            (type === "autocomplete" && i.isAutocomplete()) ||
            (type === "contextMenu" && i.isContextMenuCommand()))));
    }
}
exports.BaseCommand = BaseCommand;
//# sourceMappingURL=BaseCommand.js.map