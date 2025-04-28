"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stage_1 = require("../../properties/stage");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$getStageInstance",
    version: "2.3.0",
    description: "Returns a stage instance of a guild",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "stage ID",
            description: "The stage instance to get",
            rest: false,
            required: true,
            type: structures_1.ArgType.StageInstance,
        },
        {
            name: "property",
            description: "The property of the stage instance to return",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: stage_1.StageProperty
        },
    ],
    output: [
        structures_1.ArgType.Json,
        structures_1.ArgType.Unknown
    ],
    async execute(ctx, [instance, prop]) {
        if (prop)
            return this.success(stage_1.StageProperties[prop](instance));
        return this.successJSON(instance);
    },
});
//# sourceMappingURL=getStageInstance.js.map