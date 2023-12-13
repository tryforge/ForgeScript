# $deleteCommand
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Deletes the author's message
## Usage
```
$deleteCommand
```
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/deleteCommand.ts)
    
</summary>
    
```ts
import { noop } from "lodash"
import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$deleteCommand",
    version: "1.2.0",
    description: "Deletes the author's message",
    unwrap: false,
    async execute(ctx) {
        await ctx.message?.delete().catch(noop)
        return this.success()
    },
})
```
    
</details>