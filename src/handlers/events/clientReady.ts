import { Interpreter } from "../../core"
import { Logger } from "../../structures"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"
import { InviteTracker } from "../../structures/trackers/InviteTracker"

export default new DiscordEventHandler({
    name: "clientReady",
    version: "2.4.2",
    description: "This event is fired when the bot becomes ready",
    listener: async function () {
        const commands = this.commands.get("clientReady")
        if (commands.length) {
            for (const command of commands) {
                Interpreter.run({
                    client: this,
                    command,
                    data: command.compiled.code,
                    obj: {},
                })
            }
        } else {
            Logger.info(`Ready on client ${this.user.displayName}`)
        }

        if (this.options.trackers?.invites) {
            await InviteTracker.cacheAll(this)
        }
    },
})
