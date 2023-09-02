# $guildID
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the guild id with given name
## Usage
```
$guildID
```
---
```
$guildID[...name]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
name | String | The guild name to return the id | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/guildID.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$guildID",
    version: "1.0.0",
    description: "Returns the guild id with given name",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "name",
            description: "The guild name to return the id",
            rest: true,
            type: ArgType.String,
            required: true
        }
    ],
    execute(ctx, [ args ]) {
        if (!this.hasFields) return Return.success(ctx.guild?.id)
        const name = args.join(";")
        return Return.success(ctx.client.guilds.cache.find(x => x.name === name)?.id)
    },
})
```
    
</details>