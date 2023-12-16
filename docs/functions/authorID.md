# $authorID
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Retrieves a user's id
## Usage
```
$authorID
```
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/authorID.ts)
    
</summary>
    
```ts
import { NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"

export default new NativeFunction({
    name: "$authorID",
    version: "1.0.0",
    description: "Retrieves a user's id",
    unwrap: true,
    execute(ctx) {
        return this.success(ctx.user?.id)
    },
})

```
    
</details>