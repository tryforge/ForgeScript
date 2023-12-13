# $removeThreadMember
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Removes a thread member
## Usage
```
$removeThreadMember[guild ID;channel ID;user ID;reason]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to pull member from | Yes | No
channel ID | Channel | The thread to remove member from | Yes | No
user ID | Member | The member to remove | Yes | No
reason | String | The reason to remove this member from thread | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/removeThreadMember.ts)
    
</summary>
    
```ts
import { BaseChannel, ThreadChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$removeThreadMember",
    version: "1.0.0",
    description: "Removes a thread member",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "channel ID",
            description: "The thread to remove member from",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThread(),
        },
        {
            name: "user ID",
            pointer: 0,
            description: "The member to remove",
            rest: false,
            required: true,
            type: ArgType.Member,
        },
        {
            name: "reason",
            description: "The reason to remove this member from thread",
            rest: false,
            type: ArgType.String,
        },
    ],
    async execute(_, [, channel, member, reason]) {
        const thread = channel as ThreadChannel

        const success = await thread.members.remove(member.id, reason || undefined).catch(noop)

        return this.success(!!success)
    },
})

```
    
</details>