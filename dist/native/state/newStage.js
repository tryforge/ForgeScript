"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stage_1 = require("../../properties/stage");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$newStage",
    version: "1.4.0",
    description: "Retrieves new data from an event whose context was a stage instance",
    brackets: true,
    unwrap: true,
    output: structures_1.ArgType.Unknown,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: stage_1.StageProperty,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [prop, sep]) {
        return this.success(stage_1.StageProperties[prop](ctx.states?.stage?.new, sep));
    },
});
//# sourceMappingURL=newStage.js.map