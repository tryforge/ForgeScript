# $reactionEmoji
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> The emoji that was used
## Usage
```
$reactionEmoji
```
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/reactionEmoji.ts)
    
</summary>
    
```ts
import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$reactionEmoji",
    version: "1.0.0",
    description: "The emoji that was used",
    unwrap: true,
    execute(ctx) {
        return this.success(ctx.reaction?.emoji.toString())
    },
})

```
    
</details>