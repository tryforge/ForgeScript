"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
const bulk_1 = require("../../properties/bulk");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$bulk",
    version: "1.4.0",
    description: "Retrieves data from an event whose context was a bulk delete event",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: bulk_1.BulkProperty,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: [
        structures_1.ArgType.Unknown,
        structures_1.ArgType.Json
    ],
    execute(ctx, [prop, sep]) {
        const bulk = ctx.states?.bulk?.new;
        if (this.hasFields)
            return this.success(bulk_1.BulkProperties[prop](bulk, sep));
        return this.successJSON(bulk);
    },
});
//# sourceMappingURL=bulk.js.map