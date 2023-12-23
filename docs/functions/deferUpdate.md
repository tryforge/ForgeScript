# $deferUpdate
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Defers this interaction as an update
## Usage
```
$deferUpdate
```
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/deferUpdate.ts)
    
</summary>
    
```ts
import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$deferUpdate",
    version: "1.3.0",
    description: "Defers this interaction as an update",
    unwrap: false,
    async execute(ctx) {
        if (ctx.interaction && "deferUpdate" in ctx.interaction) {
            await ctx.interaction.deferUpdate()
        }
        return this.success()
    },
})

```
    
</details>