"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const managers_1 = require("../managers");
const structures_1 = require("../structures");
// eslint-disable-next-line no-undef
managers_1.FunctionManager.load(__dirname + "/../native");
for (const [, fn] of managers_1.FunctionManager["Functions"]) {
    if (fn.data.args?.length) {
        for (const arg of fn.data.args) {
            if (arg.pointer === undefined && [
                structures_1.ArgType.Role,
                structures_1.ArgType.Member,
                structures_1.ArgType.Message,
                structures_1.ArgType.GuildEmoji,
                structures_1.ArgType.GuildSticker
            ].includes(arg.type)) {
                console.error(`${arg.name} requires pointer for function ${fn.name}`);
            }
        }
    }
}
//# sourceMappingURL=validate.js.map