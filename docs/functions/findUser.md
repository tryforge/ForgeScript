# $findUser
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Finds a user
## Usage
```
$findUser[query]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
query | String | The id, mention or channel user to find | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/findUser.ts)
    
</summary>
    
```ts
import { ArgType, CompiledFunction, NativeFunction, Return } from "../structures"

export const UserMentionCharRegex = /[<>@]/g

export default new NativeFunction({
    name: "$findUser",
    version: "1.0.0",
    description: "Finds a user",
    brackets: true,
    args: [
        {
            name: "query",
            description: "The id, mention or channel user to find",
            rest: false,
            type: ArgType.String,
            required: true
        }
    ],
    unwrap: true,
    execute(ctx, [ q ]) {
        const id = q.replace(UserMentionCharRegex, "")

        if (CompiledFunction.IdRegex.test(id)) {
            const u = ctx.client.users.cache.get(id)
            if (u) return Return.success(u.id)
        }

        q = q.toLowerCase()

        return Return.success(
            ctx.client.users.cache.find(
                x => x.id === id || x.username.toLowerCase() === q
            )?.id
        )
    },
})
```
    
</details>