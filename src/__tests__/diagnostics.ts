import { subscribe, channel } from "node:diagnostics_channel"

const ch = channel("messaging")

subscribe(ch.name, msg => {
    console.log(msg)
})

ch.publish({ data: true })