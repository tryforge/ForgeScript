# $getThreadMembers
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Gets thread members
## Usage
```
$getThreadMembers[channel ID;separator]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The thread to pull members from | Yes | No
separator | String | The separator for every id | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/getThreadMembers.ts)
    
</summary>
    
```ts
import { BaseChannel, ThreadChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$getThreadMembers",
    description: "Gets thread members",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The thread to pull members from",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isThread()
        },
        {
            name: "separator",
            description: "The separator for every id",
            rest: false,
            type: ArgType.String
        }
    ],
    async execute(ctx, [ channel, sep ]) {
        const thread = channel as ThreadChannel

        const success = await thread.members.fetch().catch(noop)

        return Return.success(
            success && success.size ? success.map(x => x.id).join(sep || ", ") : undefined
        )
    },
})
```
    
</details>