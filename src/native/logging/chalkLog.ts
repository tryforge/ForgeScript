import { ArgType, NativeFunction } from "../../structures"
import chalk from "chalk"

function applyStyles(text: string, styles: string[]): string {
    let styled = chalk
    for (const style of styles) {
        const fn = (styled as any)[style]
        if (typeof fn !== "function") continue
        styled = fn
    }
    return styled(text)
}

export default new NativeFunction({
    name: "$chalkLog",
    version: "2.3.0",
    description: "Logs styled text to the console using Chalk",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "text",
            description: "The text to log",
            type: ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "styles",
            description: "The styles to apply to the text",
            type: ArgType.String,
            required: true,
            rest: true
        }
    ],
    execute(ctx, [text, styles]) {
        console.log(applyStyles(text, styles))
        return this.success()
    }
})
