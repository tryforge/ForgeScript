"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structures_1 = require("../../structures");
const google_translate_1 = __importDefault(require("@iamtraction/google-translate"));
exports.default = new structures_1.NativeFunction({
    name: "$translateText",
    version: "1.1.3",
    description: "translates text into another language.",
    brackets: true,
    args: [
        {
            name: "text",
            description: "text to translate",
            type: structures_1.ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "to",
            description: "The Language to translate to",
            type: structures_1.ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "from",
            description: "The Language to translate from.",
            type: structures_1.ArgType.String,
            required: false,
            rest: false
        }
    ],
    unwrap: true,
    async execute(ctx, [text, toLang, fromLang]) {
        try {
            const res = await (0, google_translate_1.default)(text, { from: fromLang ?? "auto", to: toLang });
            return this.success(res.text);
        }
        catch (e) {
            return this.customError(`Translation failed`);
        }
    }
});
//# sourceMappingURL=translateText.js.map