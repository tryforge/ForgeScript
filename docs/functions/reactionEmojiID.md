# $reactionEmojiID
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> The reaction id that was used
## Usage
```
$reactionEmojiID
```
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/reactionEmojiID.ts)
    
</summary>
    
```ts
import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$reactionEmojiID",
    version: "1.0.0",
    description: "The reaction id that was used",
    unwrap: true,
    execute(ctx) {
        return Return.success(
            ctx.reaction?.emoji.id
        )
    }
})
```
    
</details>