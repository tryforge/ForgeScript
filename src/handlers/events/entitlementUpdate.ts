import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"

export default new DiscordEventHandler({
    name: "entitlementUpdate",
    version: "1.5.0",
    description: "This event is fired when an entitlement is updated",
    listener: async function (old, now) {
        const commands = this.commands.get("entitlementUpdate")

        for (const command of commands) {
            Interpreter.run({
                obj: now,
                command,
                client: this,
                states: {
                    entitlement: {
                        new: now,
                        old
                    },
                },
                data: command.compiled.code,
                args: [],
            })
        }
    }
})
