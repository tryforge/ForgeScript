"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$deleteComponent",
    version: "1.0.0",
    description: "Deletes a component with given custom id",
    brackets: true,
    args: [
        {
            name: "custom ID",
            description: "The component's custom id to delete",
            rest: false,
            required: true,
            type: structures_1.ArgType.String,
        },
    ],
    unwrap: true,
    execute(ctx, [id]) {
        for (let i = 0, len = ctx.container.components.length; i < len; i++) {
            const comp = ctx.container.components[i];
            const index = comp.components.findIndex((x) => "custom_id" in x.data && x.data.custom_id === id);
            if (index !== -1) {
                comp.components.splice(index, 1);
                break;
            }
        }
        return this.success();
    },
});
//# sourceMappingURL=deleteComponent.js.map