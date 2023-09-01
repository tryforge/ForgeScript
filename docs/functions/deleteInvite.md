# $deleteInvite
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Deletes an invite, returns the code
## Usage
```
$deleteInvite[code]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
code | Invite | The invite code | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/deleteInvite.ts)
    
</summary>
    
```ts
import { BaseChannel, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$deleteInvite",
    brackets: true,
    description: "Deletes an invite, returns the code",
    unwrap: true,
    args: [
        {
            name: "code",
            description: "The invite code",
            rest: false,
            required: true,
            type: ArgType.Invite
        }
    ],
    async execute(ctx, [ invite ]) {
        return Return.success(
            !!(await invite.delete().catch(noop))
        )
    }
})
```
    
</details>