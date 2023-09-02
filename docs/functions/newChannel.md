# $newChannel
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Retrieves new data from an event whose context was a channel instance
## Usage
```
$newChannel[property;separator]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
property | Enum (`id`, `type`, `topic`, `bitrate`, `members`, `name`, `timestamp`) | The property to pull | Yes | No
separator | String | The separator to use in case of array | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/newChannel.ts)
    
</summary>
    
```ts
import { ChannelProperties, ChannelProperty } from "../properties/channel"
import { GuildProperties, GuildProperty } from "../properties/guild"
import { RoleProperties, RoleProperty } from "../properties/role"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$newChannel",
    version: "1.0.0",
    description: "Retrieves new data from an event whose context was a channel instance",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: ArgType.Enum,
            enum: ChannelProperty,
            required: true
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: ArgType.String
        }
    ],
    execute(ctx, [ prop, sep ]) {
        return Return.success(
            ChannelProperties[prop](ctx.states?.channel?.new, sep)
        )
    },
})
```
    
</details>