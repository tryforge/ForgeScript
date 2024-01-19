import { Context, Logger } from "../structures"

export default function(this: Context, ...args: any[]) {
    if (this.hasDisabledConsoleErrors()) {
        return
    } 

    Logger.error(...args)
}