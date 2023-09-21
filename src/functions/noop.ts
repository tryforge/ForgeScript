import { DiscordAPIError } from "discord.js"
import { inspect } from "node:util"

export default (...args: any[]) => {
    console.error(...args.map(x => typeof x === "string" ? x : inspect(x, { colors: true, depth: Infinity })))
}
