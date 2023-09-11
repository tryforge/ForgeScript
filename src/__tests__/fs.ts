import { FileReader } from "../core/FileReader"

console.log(
    new FileReader(`[name]

Ping

[type]

messageCreate

[code]
ping is $ping
`, {}).read()
)