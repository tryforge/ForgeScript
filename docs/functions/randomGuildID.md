# $randomGuildID
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns a random guild ID
## Usage
```
$randomGuildID
```
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/randomGuildID.ts)
    
</summary>
    
```ts
import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$randomGuildID",
    version: "1.0.3",
    description: "Returns a random guild ID",
    unwrap: false,
    execute(ctx) {
        return Return.success(
            ctx.client.guilds.cache.randomKey()
        )
    },
})
```
    
</details>