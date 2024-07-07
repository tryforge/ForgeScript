import { ArgType, NativeFunction, Return } from "../../structures"
export const SplitTextName = "splits" as const

export const Segmenter = new Intl.Segmenter()

export default new NativeFunction({
    name: "$segmentTextSplit",
    version: "1.5.0",
    description: "Creates an array on given text using segmenter",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "text",
            description: "The text to split",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ text ]) {
        ctx.setEnvironmentKey(SplitTextName, [...Segmenter.segment(text)].map(x => x.segment))
        return this.success()
    },
})