# $reactionAuthorID
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the reaction author id that reacted
## Usage
```
$reactionAuthorID
```
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/reactionAuthorID.ts)
    
</summary>
    
```ts
import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$reactionAuthorID",
    version: "1.0.0",
    description: "Returns the reaction author id that reacted",
    unwrap: true,
    execute(ctx) {
        return this.success(ctx.states?.user?.new?.id)
    },
})

```
    
</details>