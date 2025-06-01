"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateBar_1 = require("../../functions/generateBar");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$advancedBar",
    version: "1.5.0",
    aliases: [
        "$generateAdvancedBar"
    ],
    description: "Generates an advanced progress bar",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "current",
            description: "The current value",
            rest: false,
            required: true,
            type: structures_1.ArgType.Number
        },
        {
            name: "max",
            description: "The max value of current",
            rest: false,
            required: true,
            type: structures_1.ArgType.Number
        },
        {
            name: "length",
            description: "The length of the bar",
            rest: false,
            type: structures_1.ArgType.Number
        },
        {
            name: "values",
            description: "The values to make the bar with, for example `=;~;#` means `0%;33%;66%`",
            rest: true,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    output: structures_1.ArgType.String,
    execute(ctx, [curr, max, len, values]) {
        return this.success((0, generateBar_1.generateAdvancedBar)(curr, max, len || undefined, values));
    }
});
//# sourceMappingURL=advancedBar.js.map