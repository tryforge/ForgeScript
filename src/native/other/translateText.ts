import { ArgType, NativeFunction } from "../../structures"
import translate from "@iamtraction/google-translate"

export default new NativeFunction({
    name: "$translateText",
    version: "2.3.0",
    description: "Translates text into another language",
    experimental: true,
    brackets: true,
    unwrap: true,
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
            description: "The language to translate to",
            type: ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "from",
            description: "The language to translate from",
            type: ArgType.String,
            required: false,
            rest: false
        },
        {
            name: "return json",
            description: "Whether to return the response as json",
            type: ArgType.Boolean,
            rest: false
        }
    ],
    output: [
        ArgType.String,
        ArgType.Json
    ],
    async execute(ctx, [text, toLang, fromLang, json]) {
        const res = await translate(text, { to: toLang, from: fromLang || "auto" }).catch(ctx.noop)
        if (json) return this.successJSON(res)
        return this.success(res?.text)
    }
})