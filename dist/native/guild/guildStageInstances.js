"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = __importDefault(require("../../functions/array"));
const stage_1 = require("../../properties/stage");
const structures_1 = require("../../structures");
exports.default = new structures_1.NativeFunction({
    name: "$guildStageInstances",
    version: "2.3.0",
    description: "Returns all active stage instances of a guild",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to get stage instances from",
            rest: false,
            required: true,
            type: structures_1.ArgType.Guild,
        },
        {
            name: "property",
            description: "The property of each stage instance to return",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: stage_1.StageProperty
        },
        {
            name: "separator",
            description: "The separator to use for each property",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: [
        structures_1.ArgType.Json,
        (0, array_1.default)()
    ],
    async execute(ctx, [guild, prop, sep]) {
        const instances = (guild ?? ctx.guild).stageInstances.cache;
        if (prop)
            return this.success(instances.map((x) => stage_1.StageProperties[prop](x)).join(sep ?? ", "));
        return this.successJSON(instances);
    },
});
//# sourceMappingURL=guildStageInstances.js.map