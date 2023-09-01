# $botcount
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the bot count of the bot
## Usage
```
$botcount
```
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/botcount.ts)
    
</summary>
    
```ts
import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$botcount",
    description: "Returns the bot count of the bot",
    unwrap: true,
    execute(ctx) {
        return Return.success(
            ctx.client.users.cache.filter(x => x.bot).size
        )
    }
})
```
    
</details>