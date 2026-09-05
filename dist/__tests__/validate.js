"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const managers_1 = require("../managers");
const structures_1 = require("../structures");
const Logger_1 = require("../structures/@internal/Logger");
managers_1.FunctionManager.load("Validator", __dirname + "/../native");
for (const [, fn] of managers_1.FunctionManager["Functions"]) {
    if (fn.data.args?.length) {
        for (const arg of fn.data.args) {
            if (arg.pointer === undefined &&
                [structures_1.ArgType.Role, structures_1.ArgType.Member, structures_1.ArgType.Message, structures_1.ArgType.GuildEmoji].includes(arg.type)) {
                Logger_1.Logger.error(`${arg.name} requires pointer for function ${fn.name}`);
            }
        }
    }
}
//# sourceMappingURL=validate.js.map