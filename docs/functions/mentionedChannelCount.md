# $mentionedChannelCount
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the mentioned channel count
## Usage
```
$mentionedChannelCount
```
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/mentionedChannelCount.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$mentionedChannelCount",
    version: "1.3.0",
    description: "Returns the mentioned channel count",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.message?.mentions.channels.size)
    },
})

```
    
</details>