import { ArgType, NativeFunction } from "../../structures";
import translate from "@iamtraction/google-translate";

export default new NativeFunction({
    name: "$translateText",
    version: "1.1.3",
    description: "translates text into another language.",
    brackets: true,
    args: [
        {
            name: "text",
            description: "text to translate",
            type: ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "to",
            description: "The Language to translate to",
            type: ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "from",
            description: "The Language to translate from.",
            type: ArgType.String,
            required: false,
            rest: false
        }
    ],
    unwrap: true,
    async execute(ctx, [text, toLang, fromLang]) {
        
        try {
        const res = await translate(text, { from: fromLang ?? "auto", to: toLang })
        return this.success(res.text);
    } catch (e) {
        return this.customError(`Translation failed`);
    }
    }
});