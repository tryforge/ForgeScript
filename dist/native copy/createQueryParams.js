"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
const node_querystring_1 = require("node:querystring");
exports.default = new structures_1.NativeFunction({
    name: "$createQueryParams",
    version: "1.0.7",
    description: "Creates query params with given fields",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "param name; param value",
            description: "The param name followed by the value, (param1;value1)",
            rest: true,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    execute(_, [params]) {
        const obj = {};
        for (let i = 0, len = params.length; i < len; i += 2) {
            obj[params[i]] = params[i + 1];
        }
        return this.success((0, node_querystring_1.stringify)(obj));
    },
});
//# sourceMappingURL=createQueryParams.js.map