# $automodCustomMessage
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> The custom message used by automod on this detection
## Usage
```
$automodCustomMessage
```
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/automodCustomMessage.ts)
    
</summary>
    
```ts
import { AutoModerationActionType } from "discord.js"
import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$automodCustomMessage",
    version: "1.2.0",
    description: "The custom message used by automod on this detection",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.automod?.action.metadata.customMessage)
    },
})
```
    
</details>