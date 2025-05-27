"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const message_1 = require("../../properties/message");
const array_1 = __importDefault(require("../../functions/array"));
exports.default = new structures_1.NativeFunction({
    name: "$getSnapshots",
    version: "2.4.0",
    description: "Retrieves data of snapshots from a message",
    aliases: ["$getSnapshot"],
    unwrap: true,
    brackets: false,
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
            name: "index",
            description: "The index of the snapshot to get",
            rest: false,
            type: structures_1.ArgType.Number,
        },
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: message_1.MessageProperty,
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    output: [
        structures_1.ArgType.Json,
        (0, array_1.default)()
    ],
    execute(ctx, [, m, index, prop, sep]) {
        const snapshots = (m ?? ctx.message)?.messageSnapshots.toJSON();
        if (typeof index !== "number")
            return this.successJSON(snapshots);
        if (prop === null)
            return this.successJSON(snapshots[index]);
        return this.success(message_1.MessageProperties[prop](snapshots[index], sep ?? ", "));
    },
});
//# sourceMappingURL=getSnapshots.js.map