# $oldState
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Retrieves old data from an event whose context was a voice state instance
## Usage
```
$oldState[property;separator]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
property | Enum (`channelID`, `guildID`, `authorID`, `deaf`, `selfDeaf`, `guildDeaf`, `muted`, `selfMuted`, `guildMuted`) | The property to pull | Yes | No
separator | String | The separator to use in case of array | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/oldState.ts)
    
</summary>
    
```ts
import { VoiceStateProperties, VoiceStateProperty } from "../properties/voiceState"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$oldState",
    description: "Retrieves old data from an event whose context was a voice state instance",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: ArgType.Enum,
            enum: VoiceStateProperty,
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
            VoiceStateProperties[prop](ctx.states?.voiceState?.old, sep)
        )
    },
})
```
    
</details>