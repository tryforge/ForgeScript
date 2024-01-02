import { ApplicationCommandOptionType, ApplicationCommandType } from "discord.js"
import { ApplicationCommand } from "../../structures"

export default new ApplicationCommand(module.exports = {
    data: {
        name: "eval",
        description: "Evaluate a code.",
        options: [
            {
                type: 3,
                name: "code",
                description: "Your code goes here.",
                required: true,
            },
            {
                type: 5,
                name: "ephemeral",
                description: "Make the response ephemeral?"
            }
        ]
    },
    code: `
    $applicationCommandDisplay
 `
})