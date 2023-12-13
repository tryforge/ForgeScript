# $findRole
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Finds a role of a guild
## Usage
```
$findRole[guild ID;query]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to find the role on | Yes | No
query | String | The id, mention or role name to find | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/findRole.ts)
    
</summary>
    
```ts
import { ArgType, CompiledFunction, NativeFunction, Return } from "../structures"

export const RoleMentionCharRegex = /[@<>&]/g

export default new NativeFunction({
    name: "$findRole",
    version: "1.0.0",
    description: "Finds a role of a guild",
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to find the role on",
            type: ArgType.Guild,
            rest: false,
            required: true,
        },
        {
            name: "query",
            description: "The id, mention or role name to find",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    unwrap: true,
    execute(_, [guild, q]) {
        const id = q.replace(RoleMentionCharRegex, "")

        if (CompiledFunction.IdRegex.test(id)) {
            const r = guild.roles.cache.get(id)
            if (r) return this.success(r.id)
        }

        q = q.toLowerCase()

        return this.success(guild.roles.cache.find((x) => x.id === id || x.name.toLowerCase() === q)?.id)
    },
})

```
    
</details>