# $commandName
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the current command name
## Usage
```
$commandName
```
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/commandName.ts)
    
</summary>
    
```ts
import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$commandName",
    version: "1.0.3",
    description: "Returns the current command name",
    unwrap: true,
    execute(ctx) {
        return Return.success(ctx.runtime.command?.name ?? (ctx.obj && "commandName" in ctx.obj ? ctx.obj.commandName : undefined))
    }
})
```
    
</details>