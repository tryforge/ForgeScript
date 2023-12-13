# $customID
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Retrieves the custom id of the interaction
## Usage
```
$customID
```
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/customID.ts)
    
</summary>
    
```ts
import { NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"

export default new NativeFunction({
    name: "$customID",
    version: "1.0.0",
    description: "Retrieves the custom id of the interaction",
    unwrap: true,
    execute: async function (ctx) {
        return this.success(ctx.interaction && "customId" in ctx.interaction ? ctx.interaction.customId : undefined)
    },
})

```
    
</details>