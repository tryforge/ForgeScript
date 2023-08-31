import { Interpreter } from "../../core/Interpreter"
import { EventHandler } from "../../structures/EventHandler"

export default new EventHandler(
    "messageCreate",
    async function(message) {
        if (message.author.bot) return

        const prefix = this.options.prefixes.find(x => message.content.startsWith(x))

        const args = message.content.slice(prefix?.length ?? 0).trim().split(/ +/g)
        const name = prefix ? args.shift()?.toLowerCase() : undefined

        const commands = this.commands.get("messageCreate", x => !x.name || (x.data.unprefixed ? (x.name === name || (x.data.aliases?.includes(name!) ?? false)) : !!prefix && (x.name === name || (x.data.aliases?.includes(name!) ?? false))))
        
        for (const command of commands) {
            Interpreter.run({
                obj: message,
                command,
                client: this,
                states: {
                    message: {
                        new: message
                    } 
                },
                data: command.compiled.code,
                args
            })
        }
    }
)