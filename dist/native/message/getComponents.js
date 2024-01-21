"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const component_1 = require("../../properties/component");
exports.default = new structures_1.NativeFunction({
    name: "$getComponents",
    version: "1.4.0",
    description: "Retrieves data of a component, not providing any property returns component json",
    unwrap: true,
    output: structures_1.ArgType.Unknown,
    brackets: false,
    aliases: ["$getComponent"],
    args: [
        {
            name: "channel ID",
            description: "The channel to pull message from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Channel,
            check: (i) => i.isTextBased(),
        },
        {
            name: "message ID",
            description: "The message to retrieve data from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Message,
            pointer: 0,
        },
        {
            name: "row index",
            description: "The row index to get data from",
            rest: false,
            required: false,
            type: structures_1.ArgType.Number,
        },
        {
            name: "component index",
            description: "The component index to get data from",
            rest: false,
            required: false,
            type: structures_1.ArgType.Number,
        },
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: component_1.ComponentProperty,
            required: false,
        },
        {
            name: "separator",
            description: "The separator to use for each value in case of array",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [, m, rowIndex, compIndex, prop, sep]) {
        if (typeof rowIndex !== "number") {
            return this.successJSON((m ?? ctx.message)?.components.map((x) => x.components));
        }
        const row = m.components[rowIndex];
        const comp = row?.components[compIndex];
        if (prop === null) {
            return this.successJSON(comp?.data ?? row?.components);
        }
        return this.success(component_1.ComponentProperties[prop](comp, sep));
    },
});
//# sourceMappingURL=getComponents.js.map