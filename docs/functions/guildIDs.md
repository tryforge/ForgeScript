# $guildIDs
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns all the guilds this bot is in
## Usage
```
$guildIDs
```
---
```
$guildIDs[separator]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
separator | String | The separator for each guild | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/guildIDs.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$guildIDs",
    version: "1.0.0",
    description: "Returns all the guilds this bot is in",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "separator",
            description: "The separator for each guild",
            type: ArgType.String,
            required: true,
            rest: false,
        },
    ],
    execute(ctx, [sep]) {
        return Return.success(ctx.client.guilds.cache.map((x) => x.id).join(sep || ", "))
    },
})

```
    
</details>