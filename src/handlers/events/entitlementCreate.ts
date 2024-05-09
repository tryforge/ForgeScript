import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "entitlementCreate",
    version: "1.5.0",
    description: "This event is fired when an entitlement is created",
    listener: async function (en) {
        const commands = this.commands.get("entitlementCreate")

        for (const command of commands) {
            Interpreter.run({
                obj: en,
                command,
                client: this,
                states: {
                    entitlement: {
                        new: en,
                    },
                },
                data: command.compiled.code,
                args: [],
            })
        }
    }
})
