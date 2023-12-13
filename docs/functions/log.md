# $log
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Log something to console
## Usage
```
$log[...message]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
message | String | The message to log to console | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/log.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"

export default new NativeFunction({
    name: "$log",
    version: "1.0.0",
    description: "Log something to console",
    unwrap: true,
    args: [
        {
            name: "message",
            description: "The message to log to console",
            rest: true,
            type: ArgType.String,
            required: true,
        },
    ],
    brackets: true,
    execute(_, [args]) {
        console.log(...args)
        return this.success()
    },
})

```
    
</details>