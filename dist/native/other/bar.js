"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateBar_1 = require("../../functions/generateBar");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$bar",
    version: "1.5.0",
    aliases: [
        "$generateBar"
    ],
    description: "Generates a progress bar",
    brackets: true,
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
            name: "fill",
            description: "The string to use as filled points of the bar",
            rest: false,
            type: structures_1.ArgType.String
        },
        {
            name: "empty",
            description: "The string to use as empty points of the bar",
            rest: false,
            type: structures_1.ArgType.String
        }
    ],
    unwrap: true,
    execute(ctx, [curr, max, len, fill, empty]) {
        return this.success((0, generateBar_1.generateBar)(curr, max, len ?? undefined, fill ?? undefined, empty ?? undefined));
    }
});
//# sourceMappingURL=bar.js.map