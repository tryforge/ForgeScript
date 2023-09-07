# $deleteChannelPerms
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Deletes some permission overwrites from a channel, returns bool
## Usage
```
$deleteChannelPerms[channel ID;id;...perms]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The channel to clear perms from | Yes | No
id | String | The role or member id to clear these perms for | Yes | No
perms | String () | The perms to clear from the id | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/deleteChannelPerms.ts)
    
</summary>
    
```ts
import { BaseChannel, PermissionFlagsBits, PermissionsString, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$deleteChannelPerms",
    version: "1.0.3",
    description: "Deletes some permission overwrites from a channel, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to clear perms from",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased() && "permissionOverwrites" in i
        },
        {
            name: "id",
            description: "The role or member id to clear these perms for",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "perms",
            description: "The perms to clear from the id",
            rest: true,
            type: ArgType.String,
            required: true,
            enum: PermissionFlagsBits
        }
    ],
    async execute(ctx, [ ch, id, perms ]) {
        const channel = ch as TextChannel
        
        const obj: Partial<Record<PermissionsString, null>> = {}

        perms.forEach(x => obj[x as PermissionsString] = null)

        return Return.success(
            !!(await channel.permissionOverwrites.create(id, obj))
        )
    },
})
```
    
</details>