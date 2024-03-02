"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$isJSON",
    version: "1.4.0",
    aliases: [
        "$isValidJSON"
    ],
    description: "Checks whether given json is valid",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "json",
            description: "The json to check for",
            rest: false,
            required: true,
            type: structures_1.ArgType.String
        }
    ],
    output: structures_1.ArgType.Boolean,
    execute(ctx, [json]) {
        try {
            void JSON.parse(json);
            return this.success(true);
        }
        catch (error) {
            return this.success(false);
        }
    },
});
//# sourceMappingURL=isJSON.js.map