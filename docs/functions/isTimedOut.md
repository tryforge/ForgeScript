# $isTimedOut
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Whether an member is timed out
## Usage
```
$isTimedOut
```
---
```
$isTimedOut[guild ID;user ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to pull member from | Yes | No
user ID | Member | The member to check for timeout | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/isTimedOut.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$isTimedOut",
    version: "1.0.0",
    description: "Whether an member is timed out",
    unwrap: true,
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            required: true,
            type: ArgType.Guild
        },
        {
            name: "user ID",
            description: "The member to check for timeout",
            rest: false,
            type: ArgType.Member,
            pointer: 0,
            required: true
        }
    ],
    execute(ctx, [ guild, member ]) {
        member ??= ctx.member!
        return Return.success(
            member?.isCommunicationDisabled() ?? false
        )
    },
})
```
    
</details>