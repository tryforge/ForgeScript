# $addThreadMember
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Adds a member to a thread, returns bool
## Usage
```
$addThreadMember[guild ID;channel ID;user ID;reason]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to pull member from | Yes | No
channel ID | Channel | The thread to add member to | Yes | No
user ID | Member | The member to add | Yes | No
reason | String | The reason to add this member to thread | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/addThreadMember.ts)
    
</summary>
    
```ts
import { BaseChannel, ThreadChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$addThreadMember",
    version: "1.0.0",
    description: "Adds a member to a thread, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            required: true,
            type: ArgType.Guild
        },
        {
            name: "channel ID",
            description: "The thread to add member to",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThread()
        },
        {
            name: "user ID",
            pointer: 0,
            description: "The member to add",
            rest: false,
            required: true,
            type: ArgType.Member
        },
        {
            name: "reason",
            description: "The reason to add this member to thread",
            rest: false,
            type: ArgType.String
        }
    ],
    async execute(ctx, [ guild, channel, member, reason ]) {
        const thread = channel as ThreadChannel
        const success = await thread.members.add(member, reason || undefined).catch(noop)

        return Return.success(
            !!success
        )
    },
})
```
    
</details>