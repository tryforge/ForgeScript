import { ArgType, NativeFunction, Return } from "../../structures"

const MathRegex = /[^0-9%\-+./*\t\n\s()<>]/

export default new NativeFunction({
    name: "$math",
    version: "1.0.0",
    description: "Run math expression, returns nothing if incorrect expression",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "expr",
            description: "The expression",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    execute(_, [expr]) {
        try {
            if (MathRegex.test(expr)) return this.success()
            return this.success(eval(expr))
        } catch (error: any) {
            return this.success()
        }
    },
})
