# $timestamp
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Adds an embed timestamp
## Usage
```
$timestamp
```
---
```
$timestamp[ms;index]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
ms | Number | The timestamp time to add | No | No
index | Number | The index to add this data to | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/timestamp.ts)
    
</summary>
    
```ts
import { ColorResolvable } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$timestamp",
    version: "1.0.0",
    description: "Adds an embed timestamp",
    unwrap: true,
    args: [
        {
            name: "ms",
            description: "The timestamp time to add",
            type: ArgType.Number,
            rest: false
        },
        {
            name: "index",
            description: "The index to add this data to",
            rest: false,
            type: ArgType.Number
        }
    ],
    brackets: false,
    execute(ctx, [ timestamp, index ]) {
        if (!this.hasFields) {
            ctx.container.embed(0).setTimestamp()
            return Return.success()
        }

        ctx.container.embed((index ?? 0)).setTimestamp(timestamp ?? Date.now())
        return Return.success()
    },
})
```
    
</details>