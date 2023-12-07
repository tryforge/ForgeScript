# $automodDuration
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> The duration in ms by this automod action
## Usage
```
$automodDuration
```
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/automodDuration.ts)
    
</summary>
    
```ts
import { AutoModerationActionType } from "discord.js"
import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$automodDuration",
    version: "1.2.0",
    description: "The duration in ms by this automod action",
    unwrap: false,
    execute(ctx) {
        const dur = ctx.automod?.action.metadata.durationSeconds
        return Return.success(dur ? dur * 1000 : null)
    },
})
```
    
</details>