import { Interpreter } from "../../core/Interpreter"
import { EventHandler } from "../../structures/EventHandler"

export default new EventHandler(
    "messageCreate",
    async function(message) {
        if (message.author.bot) return

        const prefix = this.options.prefixes.find(x => message.content.startsWith(x))

        const args = prefix === undefined ? message.content.trim().split(/ +/g) : message.content.slice(prefix.length).trim().split(/ +/g)
        const name = prefix === undefined ? undefined : args.shift()?.toLowerCase()
        
        const commands = this.commands.get("messageCreate", x => !x.name || x.name === name)
        
        for (const command of commands) {
            await Interpreter.run({
                obj: message,
                client: this,
                data: command.compiled.code,
                args
            })
        }
    }
)