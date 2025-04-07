import { ArgType, NativeFunction } from "../../structures";
import translate from "@iamtraction/google-translate";

export default new NativeFunction({
    name: "$translateText",
    description: "translates text into another language.",
    brackets: true,
    args: [
        {
            name: "text",
            description: "The text to translate",
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
    async execute(ctx, [text, toLang, fromLang, json]) {
        const res = await translate(text, { to: toLang, from: fromLang || "auto" }).catch(ctx.noop)
        if (json) return this.successJSON(res)
        return this.success(res?.text)
    }
})