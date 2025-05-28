"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$syncGuildTemplate",
    version: "2.4.0",
    description: "Syncs this template to the current state of the guild, returns bool",
    aliases: [
        "$syncServerTemplate"
    ],
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "template code",
            description: "The code of the template to sync",
            rest: false,
            required: true,
            type: structures_1.ArgType.Template
        },
    ],
    output: structures_1.ArgType.Boolean,
    async execute(ctx, [template]) {
        return this.success(!!(await template.sync().catch(ctx.noop)));
    },
});
//# sourceMappingURL=syncGuildTemplate.js.map