"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCommand = exports.PrefixMode = void 0;
const core_1 = require("../../core");
const ForgeError_1 = require("../forge/ForgeError");
var PrefixMode;
(function (PrefixMode) {
    /**
     * The command requires a prefix to be executed. This is the default mode.
     */
    PrefixMode[PrefixMode["Required"] = 0] = "Required";
    /**
     * The command can be executed with or without a prefix.
     */
    PrefixMode[PrefixMode["Optional"] = 1] = "Optional";
    /**
     * The command requires no prefix to be executed (unprefixed).
     */
    PrefixMode[PrefixMode["None"] = 2] = "None";
})(PrefixMode || (exports.PrefixMode = PrefixMode = {}));
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
                this.data.name === i.customId)) && (!this.data.allowedInteractionTypes?.length || (this.data.allowedInteractionTypes.some(type => (type === "button" && i.isButton()) ||
            (type === "modal" && i.isModalSubmit()) ||
            (type === "slashCommand" && i.isChatInputCommand()) ||
            (type === "autocomplete" && i.isAutocomplete()) ||
            (type === "selectMenu" && i.isAnySelectMenu()) ||
            (type === "userSelectMenu" && i.isUserSelectMenu()) ||
            (type === "roleSelectMenu" && i.isRoleSelectMenu()) ||
            (type === "channelSelectMenu" && i.isChannelSelectMenu()) ||
            (type === "mentionableSelectMenu" && i.isMentionableSelectMenu()) ||
            (type === "contextMenu" && i.isContextMenuCommand()) ||
            (type === "userContextMenu" && i.isUserContextMenuCommand()) ||
            (type === "messageContextMenu" && i.isMessageContextMenuCommand()) ||
            (type === "activityCommand" && i.isPrimaryEntryPointCommand()) ||
            (type === "messageComponent" && i.isMessageComponent()))));
    }
}
exports.BaseCommand = BaseCommand;
//# sourceMappingURL=BaseCommand.js.map