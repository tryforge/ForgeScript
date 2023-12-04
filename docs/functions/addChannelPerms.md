# $addChannelPerms
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Adds permission overwrites to a channel, returns bool
## Usage
```
$addChannelPerms[channel ID;id;...perms]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The channel to add perms to | Yes | No
id | String | The role or member id to add these perms to | Yes | No
perms | String () | The perms to add to the id | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/addChannelPerms.ts)
    
</summary>
    
```ts
import { BaseChannel, PermissionFlagsBits, PermissionsString, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$addChannelPerms",
    version: "1.0.3",
    description: "Adds permission overwrites to a channel, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to add perms to",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased() && "permissionOverwrites" in i,
        },
        {
            name: "id",
            description: "The role or member id to add these perms to",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "perms",
            description: "The perms to add to the id",
            rest: true,
            type: ArgType.String,
            required: true,
            enum: PermissionFlagsBits,
        },
    ],
    async execute(_, [ch, id, perms]) {
        const channel = ch as TextChannel

        const obj: Partial<Record<PermissionsString, boolean>> = {}

        perms.forEach((x) => (obj[x as PermissionsString] = true))

        return Return.success(!!(await channel.permissionOverwrites.create(id, obj)))
    },
})

```
    
</details>