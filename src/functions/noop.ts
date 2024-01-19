import { DiscordAPIError } from "discord.js"
import { inspect } from "node:util"
import { Logger } from "../structures/@internal/Logger"

export default (...args: any[]) => {
    Logger.error(...args)
}
