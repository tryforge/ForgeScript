# $updateApplicationCommands
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Updates application commands
## Usage
```
$updateApplicationCommands
```
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/updateApplicationCommands.ts)
    
</summary>
    
```ts
import { NativeFunction } from "../structures"

export default new NativeFunction({
    name: "$updateApplicationCommands",
    version: "1.2.0",
    description: "Updates application commands",
    unwrap: false,
    async execute(ctx) {
        ctx.client.applicationCommands.load()
        await ctx.client.applicationCommands.register()
        return this.success()
    },
})
```
    
</details>
