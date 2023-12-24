import { FunctionManager } from "../managers"
import { ArgType } from "../structures"
import { Logger } from "../structures/@internal/Logger"

// eslint-disable-next-line no-undef
FunctionManager.load("Validator", __dirname + "/../native")

for (const [, fn] of FunctionManager["Functions"]) {
    if (fn.data.args?.length) {
        for (const arg of fn.data.args) {
            if (
                arg.pointer === undefined &&
                [ArgType.Role, ArgType.Member, ArgType.Message, ArgType.GuildEmoji, ArgType.GuildSticker].includes(
                    arg.type
                )
            ) {
                Logger.error(`${arg.name} requires pointer for function ${fn.name}`)
            }
        }
    }
}
