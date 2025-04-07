import { ArgType, NativeFunction } from "../../structures";
import chalk from "chalk";

export default new NativeFunction({
    name: "$chalkLog",
    version: "1.3.0",
    description: "Logs colored text to the console using Chalk.",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "log color",
            description: "The log color (e.g., red, green, blue)",
            type: ArgType.String,
            required: true,
            rest: false
        },
        {
            name: "text",
            description: "What to log",
            type: ArgType.String,
            required: true,
            rest: false
        }
    ],
    execute(ctx, [color, value]) {
        const fn = (chalk as any)[color];
        if (typeof fn !== "function") {
            return this.customError(`Invalid chalk color: "${color}"`);
        }

        console.log(fn(value));
        return this.success();
    }
});
