"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$parseString",
    version: "1.0.2",
    description: "Parses valid duration string to ms",
    brackets: true,
    args: [
        {
            name: "duration",
            description: "The valid string to convert to ms",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
    ],
    unwrap: true,
    execute(_, [str]) {
        try {
            return this.success(constants_1.TimeParser.parseToMS(str));
        }
        catch (error) {
            return this.success(0);
        }
    },
});
//# sourceMappingURL=parseString.js.map