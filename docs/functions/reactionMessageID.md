# $reactionMessageID
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> The message id of the reacted message
## Usage
```
$reactionMessageID
```
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/reactionMessageID.ts)
    
</summary>
    
```ts
import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$reactionMessageID",
    version: "1.0.0",
    description: "The message id of the reacted message",
    unwrap: true,
    execute(ctx) {
        return Return.success(
            ctx.reaction?.message.id
        )
    }
})
```
    
</details>