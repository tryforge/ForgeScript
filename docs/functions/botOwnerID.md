# $botOwnerID
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the bot owner id
## Usage
```
$botOwnerID
```
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/botOwnerID.ts)
    
</summary>
    
```ts
import noop from "../functions/noop"
import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$botOwnerID",
    description: "Returns the bot owner id",
    unwrap: true,
    async execute(ctx) {
        if (!ctx.client.application.owner) await ctx.client.application.fetch().catch(noop)

        return Return.success(
            ctx.client.application.owner?.id
        )
    }
})
```
    
</details>