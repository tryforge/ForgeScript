import { argv } from "process"

import(`./${argv.slice(2).join(" ")}`)
