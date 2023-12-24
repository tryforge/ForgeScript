# $inviterCode
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the invite code that was used by this person
## Usage
```
$inviterCode
```
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/inviterCode.ts)
    
</summary>
    
```ts
import { NativeFunction, Return } from "../structures"
import { InviteTracker } from "../structures/trackers/InviteTracker"

export default new NativeFunction({
    name: "$inviterCode",
    version: "1.0.3",
    description: "Returns the invite code that was used by this person",
    unwrap: true,
    execute(ctx) {
        return this.success(InviteTracker.Inviters.get(ctx.guild?.id!)?.get(ctx.user?.id!)?.code)
    },
})

```
    
</details>