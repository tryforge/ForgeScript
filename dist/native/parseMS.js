"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$parseMS",
    version: "1.0.2",
    description: "Parses valid ms to duration",
    brackets: true,
    args: [
        {
            name: "ms",
            description: "The ms to convert to string",
            rest: false,
            type: structures_1.ArgType.Number,
            required: true,
        },
        {
            name: "limit",
            description: "Limit of units to use",
            rest: false,
            type: structures_1.ArgType.Number,
        },
        {
            name: "separator",
            description: "The separator to use for every unit",
            rest: false,
            type: structures_1.ArgType.String,
        },
        {
            name: "and",
            rest: false,
            description: "Whether to use and word for last unit",
            type: structures_1.ArgType.Boolean,
        },
    ],
    unwrap: true,
    execute(_, [ms, limit, sep, and]) {
        return this.success(constants_1.TimeParser.parseToString(ms, {
            and: and || false,
            limit: limit || undefined,
            separator: sep || " ",
        }));
    },
});
//# sourceMappingURL=parseMS.js.map