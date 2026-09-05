"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
async function default_1(ch) {
    const arr = new Array();
    let lastId = undefined;
    for (;;) {
        const msgs = await ch.messages
            .fetch({
            limit: 100,
            before: lastId,
        })
            .catch(() => null);
        if (!msgs?.size)
            break;
        arr.push(...msgs.values());
        lastId = msgs.lastKey();
    }
    return arr;
}
//# sourceMappingURL=fetchAllMessages.js.map