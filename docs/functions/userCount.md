# $userCount
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the user count of the bot
## Usage
```
$userCount
```
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/userCount.ts)
    
</summary>
    
```ts
import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$userCount",
    version: "1.0.0",
    description: "Returns the user count of the bot",
    unwrap: true,
    execute(ctx) {
        return Return.success(ctx.client.guilds.cache.reduce((x, y) => x + (y.memberCount || 0), 0))
    },
})

```
    
</details>