# $findMember
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Finds a member of a guild
## Usage
```
$findMember[guild ID;query]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to find the member on | Yes | No
query | String | The id, mention or name to find | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/findMember.ts)
    
</summary>
    
```ts
import noop from "../functions/noop"
import { ArgType, CompiledFunction, NativeFunction, Return } from "../structures"

export const MemberMentionCharRegex = /[<>@]/g

export default new NativeFunction({
    name: "$findMember",
    version: "1.0.0",
    description: "Finds a member of a guild",
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to find the member on",
            type: ArgType.Guild,
            rest: false,
            required: true
        },
        {
            name: "query",
            description: "The id, mention or name to find",
            rest: false,
            type: ArgType.String,
            required: true
        }
    ],
    unwrap: true,
    async execute(ctx, [ guild, q ]) {
        const id = q.replace(MemberMentionCharRegex, "")

        if (CompiledFunction.IdRegex.test(id)) {
            const m = await guild.members.fetch(id).catch(noop)
            if (m) Return.success(m.id)
        }

        q = q.toLowerCase()

        const query = await guild.members.search({
            query: q
        }).catch(noop)

        return Return.success(
            query ? query.at(0)?.id : undefined
        )
    },
})
```
    
</details>