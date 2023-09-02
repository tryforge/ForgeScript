# $setGuildSplash
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Sets a guild splash, returns boolean
## Usage
```
$setGuildSplash[guild ID;url]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to set splash on | Yes | No
url | String | The new splash | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/setGuildSplash.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$setGuildSplash",
    version: "1.0.0",
    description: "Sets a guild splash, returns boolean",
    unwrap: true,
    args: [
        {
            name: "guild ID",
            rest: false,
            type: ArgType.Guild,
            required: true,
            description: "The guild to set splash on"
        },
        {
            name: "url",
            description: "The new splash",
            rest: false,
            type: ArgType.String
        }
    ],
    brackets: true,
    async execute(ctx, [ guild, icon ]) {
        return Return.success(
            await guild.setSplash(icon || null).catch(() => false) !== false
        ) 
    },
})
```
    
</details>