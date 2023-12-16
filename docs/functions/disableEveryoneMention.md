# $disableEveryoneMention
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Disables everyone mention
## Usage
```
$disableEveryoneMention
```
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/disableEveryoneMention.ts)
    
</summary>
    
```ts
import { NativeFunction } from "../structures"

export default new NativeFunction({
    name: "$disableEveryoneMention",
    version: "1.3.0",
    description: "Disables everyone mention",
    unwrap: false,
    execute(ctx) {
        ctx.container.allowedMentions.parse = ["everyone"]

        return this.success()
    },
})
```
    
</details>