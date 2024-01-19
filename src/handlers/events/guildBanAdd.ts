import { Interpreter } from "../../core"
import { DiscordEventHandler } from "../../structures/extended/DiscordEventHandler"
import { InviteTracker } from "../../structures/trackers/InviteTracker"

export default new DiscordEventHandler({
    name: "guildBanAdd",
    version: "1.4.0",
    description: "This event is fired when a member is banned from the guild",
    listener: async function (m) {
        const commands = this.commands.get("guildBanAdd")

        for (const command of commands) {
            Interpreter.run({
                obj: m.user,
                command,
                client: this,
                states: {
                    ban: {
                        new: m
                    },
                },
                data: command.compiled.code,
                args: [],
            })
        }
    },
    intents: ["GuildMembers"],
})
