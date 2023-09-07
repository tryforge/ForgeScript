# $clearChannelPerms
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Deletes all permission overwrites for given id, returns bool
## Usage
```
$clearChannelPerms[channel ID;id]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The channel to delete perms from | Yes | No
id | String | The role or member id to delete all perms for | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/clearChannelPerms.ts)
    
</summary>
    
```ts
import { BaseChannel, PermissionFlagsBits, PermissionsString, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$clearChannelPerms",
    version: "1.0.3",
    description: "Deletes all permission overwrites for given id, returns bool",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to delete perms from",
            rest: false,
            required: true,
            type: ArgType.Channel,
            check: (i: BaseChannel) => i.isTextBased() && "permissionOverwrites" in i
        },
        {
            name: "id",
            description: "The role or member id to delete all perms for",
            rest: false,
            required: true,
            type: ArgType.String
        },
    ],
    async execute(ctx, [ ch, id ]) {
        const channel = ch as TextChannel
        return Return.success(
            !!(await channel.permissionOverwrites.delete(id))
        )
    },
})
```
    
</details>