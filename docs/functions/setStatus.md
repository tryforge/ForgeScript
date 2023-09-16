# $setStatus
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Sets the client's status
## Usage
```
$setStatus[presence;type;name;state;url]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
presence | String | The presence status | Yes | No
type | Enum (`Playing`, `Streaming`, `Listening`, `Watching`, `Custom`, `Competing`) | The activity type | Yes | No
name | String | The status name | Yes | No
state | String | The status state | No | No
url | String | The url to use for the stream | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/setStatus.ts)
    
</summary>
    
```ts
import { ActivityType, PresenceStatusData, PresenceUpdateStatus } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$setStatus",
    version: "1.0.0",
    description: "Sets the client's status",
    unwrap: true,
    args: [
        {
            name: "presence",
            description: "The presence status",
            type: ArgType.String,
            rest: false,
            required: true,
        },
        {
            name: "type",
            description: "The activity type",
            rest: false,
            type: ArgType.Enum,
            enum: ActivityType,
            required: true,
        },
        {
            name: "name",
            description: "The status name",
            rest: false,
            type: ArgType.String,
            required: true,
        },
        {
            name: "state",
            description: "The status state",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "url",
            description: "The url to use for the stream",
            rest: false,
            type: ArgType.String,
        },
    ],
    brackets: true,
    execute(ctx, [status, type, name, state, url]) {
        ctx.client.user.setPresence({
            activities: [
                {
                    name,
                    state: state || undefined,
                    type,
                    url: url || undefined,
                },
            ],
            status: status as PresenceStatusData,
        })
        return Return.success()
    },
})

```
    
</details>