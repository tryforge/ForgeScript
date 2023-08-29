# $inviteExists
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns whether an invite code exists
## Usage
```
$inviteExists[code]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
code | String | The invite to check | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/inviteExists.ts)
    
</summary>
    
```ts
import noop from "../functions/noop"
import { ArgType, CompiledFunction, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$inviteExists",
    description: "Returns whether an invite code exists",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "code",
            description: "The invite to check",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    async execute(ctx, [ id ]) {
        return Return.success(
            !!(await ctx.client.fetchInvite(id).catch(noop))    
        )
    },
})
```
    
</details>