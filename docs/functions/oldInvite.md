# $oldInvite
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Retrieves old data from an event whose context was a invite instance
## Usage
```
$oldInvite[property;separator]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
property | Enum (`authorID`, `channelID`, `guildID`, `uses`, `maxUses`, `maxAge`, `timestamp`, `code`, `url`, `expiresTimestamp`) | The property to pull | Yes | No
separator | String | The separator to use in case of array | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/oldInvite.ts)
    
</summary>
    
```ts
import { InviteProperties, InviteProperty } from "../properties/invite"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$oldInvite",
    version: "1.0.3",
    description: "Retrieves old data from an event whose context was a invite instance",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: ArgType.Enum,
            enum: InviteProperty,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(ctx, [prop, sep]) {
        return Return.success(InviteProperties[prop](ctx.states?.invite?.old, sep))
    },
})

```
    
</details>