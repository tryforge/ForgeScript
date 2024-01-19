import { ApplicationCommandOptionType } from "discord.js"
import { ApplicationCommand } from "../../../structures"

export default {
    code: "ok! $applicationCommandDisplay",
    data: {
        name: "sure",
        description: "bye",
        options: [
            {
                name: "hi",
                description: "tmr",
                type: ApplicationCommandOptionType.String,
                required: false
            }
        ]
    }
}