# $automodActionType
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> The action type automod used
## Usage
```
$automodActionType
```
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/automodActionType.ts)
    
</summary>
    
```ts
import { AutoModerationActionType } from "discord.js"
import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$automodActionType",
    version: "1.2.0",
    description: "The action type automod used",
    unwrap: false,
    execute(ctx) {
        const type = ctx.automod?.action.type
        return this.success(type ? AutoModerationActionType[type] : null)
    },
})
```
    
</details>