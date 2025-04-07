"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const google_translate_1 = __importDefault(require("@iamtraction/google-translate"));
exports.default = new structures_1.NativeFunction({
    name: "$translateText",
    description: "Translates text into another language",
    brackets: true,
    args: [
        {
            name: "text",
            description: "The text to translate",
            type: structures_1.ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "to",
            description: "The language to translate to",
            type: structures_1.ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "from",
            description: "The language to translate from",
            type: structures_1.ArgType.String,
            required: false,
            rest: false
        },
        {
            name: "return json",
            description: "Whether to return the response as json",
            type: structures_1.ArgType.Boolean,
            rest: false
        }
    ],
    unwrap: true,
    async execute(ctx, [text, toLang, fromLang, json]) {
        const res = await (0, google_translate_1.default)(text, { to: toLang, from: fromLang || "auto" }).catch(ctx.noop);
        if (json)
            return this.successJSON(res);
        return this.success(res?.text);
    }
});
//# sourceMappingURL=translateText.js.map