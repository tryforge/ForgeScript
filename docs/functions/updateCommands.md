# $updateCommands
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Updates bot commands, also registers new ones
## Usage
```
$updateCommands
```
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/updateCommands.ts)
    
</summary>
    
```ts
import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$updateCommands",
    version: "1.0.2",
    description: "Updates bot commands, also registers new ones",
    unwrap: false,
    execute(ctx) {
        ctx.client.commands.refresh()
        return this.success()
    },
})

```
    
</details>