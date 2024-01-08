import { setTimeout } from "timers/promises"
import { Logger } from "../structures"

async function main() {
    Logger.infoUpdate("Hello")
    await setTimeout(1000)
    Logger.warnUpdate("Yes")
    await setTimeout(1000)
    Logger.errorUpdate("Damn")
}

main()