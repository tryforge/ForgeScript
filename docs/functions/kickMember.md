# $kickMember
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Kicks a member from the guild, returns true or false depending on whether the action was successfully performed
## Usage
```
$kickMember[guild ID;user ID;reason]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to kick a member from | Yes | No
user ID | Member | The user to kick | Yes | No
reason | String | The reason to kick for | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/kickMember.ts)
    
</summary>
    
```ts
import noop from "../functions/noop"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$kickMember",
    version: "1.0.0",
    description: "Kicks a member from the guild, returns true or false depending on whether the action was successfully performed",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to kick a member from",
            rest: false,
            required: true,
            type: ArgType.Guild
        },
        {
            name: "user ID",
            description: "The user to kick",
            rest: false,
            type: ArgType.Member,
            pointer: 0,
            required: true
        },
        {
            name: "reason",
            description: "The reason to kick for",
            rest: false,
            type: ArgType.String
        }
    ],
    async execute(ctx, [ guild, member, reason ]) {
        return Return.success(
            await member.kick(reason || undefined).catch(() => false) !== false 
        )
    },
})
```
    
</details>