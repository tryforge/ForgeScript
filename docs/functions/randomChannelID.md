# $randomChannelID
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns a random channel ID
## Usage
```
$randomChannelID
```
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/randomChannelID.ts)
    
</summary>
    
```ts
import { NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$randomChannelID",
    version: "1.0.3",
    description: "Returns a random channel ID",
    unwrap: false,
    execute(ctx) {
        return this.success(ctx.client.channels.cache.randomKey())
    },
})

```
    
</details>