import { ApplicationCommandOptionType, ApplicationCommandType } from "discord.js"
import { ApplicationCommand } from "../../structures/ApplicationCommand"

export default new ApplicationCommand({
    data: {
        name: "ping",
        description: "A simple ping command",
        type: ApplicationCommandType.ChatInput,
        options: [
            {
                name: "uwu",
                autocomplete: true,
                type: ApplicationCommandOptionType.String,
                required: true,
                description: "The uwu"
            }
        ]
    },
    code: "uwu rawr $option[uwu]"
})