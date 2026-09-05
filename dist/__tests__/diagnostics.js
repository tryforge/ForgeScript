"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const node_diagnostics_channel_1 = require("node:diagnostics_channel");
const ch = (0, node_diagnostics_channel_1.channel)("messaging");
(0, node_diagnostics_channel_1.subscribe)(ch.name, msg => {
    console.log(msg);
});
ch.publish({ data: true });
//# sourceMappingURL=diagnostics.js.map