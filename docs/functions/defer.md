# $defer
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Defers this interaction
## Usage
```
$defer
```
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/defer.ts)
    
</summary>
    
```ts
import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$defer",
    version: "1.0.0",
    description: "Defers this interaction",
    unwrap: false,
    async execute(ctx) {
        if (ctx.interaction && ctx.interaction.isRepliable()) {
            await ctx.interaction.deferReply({
                ephemeral: ctx.container.ephemeral,
            })
        }
        return this.success()
    },
})

```
    
</details>