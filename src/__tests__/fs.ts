import { FileReader } from "../core/FileReader"

console.log(
    new FileReader(`
[pepe]
culata

[tmr]
land bro?
\\[hello]
bye
`, {}).read()
)