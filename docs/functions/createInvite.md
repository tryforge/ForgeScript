# $createInvite
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Creates an invite, returns the code
## Usage
```
$createInvite[channel ID;max uses;reason]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The channel to make the invite for | Yes | No
max uses | Number | The max amount of uses for this invite | No | No
reason | String | The reason for creating this invite | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/createInvite.ts)
    
</summary>
    
```ts
import { BaseChannel, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$createInvite",
    version: "1.0.0",
    brackets: true,
    description: "Creates an invite, returns the code",
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to make the invite for",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => !i.isDMBased(),
        },
        {
            name: "max uses",
            description: "The max amount of uses for this invite",
            rest: false,
            type: ArgType.Number,
        },
        {
            name: "reason",
            description: "The reason for creating this invite",
            rest: false,
            type: ArgType.String
        }
    ],
    async execute(ctx, [ch, maxUses, reason]) {
        const channel = (ch ?? ctx.channel) as TextChannel
        const invite = await channel
            .createInvite({
                reason: reason || undefined,
                maxUses: maxUses || undefined,
            })
            .catch(noop)

        return this.success(invite ? invite.code : undefined)
    },
})

```
    
</details>