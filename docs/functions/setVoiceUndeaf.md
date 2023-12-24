# $setVoiceUndeaf
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Undeafens a member from voice channel
## Usage
```
$setVoiceUndeaf[guild ID;user ID;reason]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to pull member from | Yes | No
user ID | Member | The user to undeafen | Yes | No
reason | String | Reason to undeafen this user | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/setVoiceUndeaf.ts)
    
</summary>
    
```ts
import { noop } from "lodash"
import { ArgType, NativeFunction } from "../structures"

export default new NativeFunction({
    name: "$setVoiceUndeaf",
    version: "1.4.0",
    description: "Undeafens a member from voice channel",
    brackets: true,
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
            rest: false,
            required: true,
            type: ArgType.Member,
            pointer: 0,
            description: "The user to undeafen"
        },
        {
            name: "reason",
            description: "Reason to undeafen this user",
            rest: false,
            required: false,
            type: ArgType.String
        }
    ],
    unwrap: true,
    async execute(ctx, [, member, reason ]) {
        return this.success(!!(await member.voice.setDeaf(false, reason ?? undefined).catch(noop)))
    },
})
```
    
</details>