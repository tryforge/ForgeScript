import { ArgType, NativeFunction, Return } from "../structures"

export const LinkRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/

export default new NativeFunction({
    name: "$isValidLink",
    version: "1.0.0",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "link",
            description: "The link to check",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    description: "Checks whether a link is valid",
    execute(ctx, [ link ]) {
        return Return.success(LinkRegex.test(link)) 
    },
})