# $logger
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Implements Logger API of ForgeScript.
## Usage
```
$logger[log type;text]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
log type | Enum (`Warn`, `Debug`, `Info`, `Error`) | The log type | Yes | No
text | String | What to log | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/logger.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction } from "../structures"
import { LogType, Logger } from "../structures/@internal/Logger"

export default new NativeFunction({
    name: "$logger",
    version: "1.3.0",
    description: "Implements Logger API of ForgeScript.",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "log type",
            description: "The log type",
            enum: LogType,
            type: ArgType.Enum,
            required: true,
            rest: false
        },
        {
            name: "text",
            description: "What to log",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ type, value ]) {
        Logger[LogType[type].toLowerCase() as Lowercase<keyof typeof LogType>](value)
        return this.success()
    },
})
```
    
</details>