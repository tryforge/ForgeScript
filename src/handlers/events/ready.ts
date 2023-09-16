import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/DiscordEventHandler"
import { InviteSystem } from "../../structures/InviteSystem"

export default new DiscordEventHandler({
    name: "ready",
    version: "1.0.1",
    description: "This event is fired when the bot becomes ready",
    listener: async function () {
        const commands = this.commands.get("ready")
        if (commands.length) {
            for (const command of commands) {
                Interpreter.run({
                    client: this,
                    command,
                    data: command.compiled.code,
                    obj: null,
                })
            }
        } else {
            console.log(`Ready on client ${this.user.displayName}`)
        }

        if (this.options.useInviteSystem) {
            await InviteSystem.cacheAll(this)
        }
    },
})
