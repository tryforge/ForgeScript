"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$commandInfo",
    version: "1.0.3",
    description: "Retrieves command info",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "type",
            description: "The command type",
            rest: false,
            type: structures_1.ArgType.String,
            required: true,
        },
        {
            name: "name",
            description: "The command name",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "property",
            description: "The property to retrieve",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
        {
            name: "separator",
            description: "Separator to use in case of array",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [type, name, prop, sep]) {
        const cmd = ctx.client.commands.get(type, (x) => x.name === name || !!x.data.aliases?.includes(name))[0];
        if (!cmd)
            return this.success();
        const val = cmd.data?.[prop];
        return this.success(Array.isArray(val) ? val.join(sep || ", ") : val);
    },
});
//# sourceMappingURL=commandInfo.js.map