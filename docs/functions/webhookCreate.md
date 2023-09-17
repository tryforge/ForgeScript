# $webhookCreate
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Creates a webhook in a channel, returns the webhook id
## Usage
```
$webhookCreate[channel ID;name;url]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
channel ID | Channel | The channel to create the webhook | Yes | No
name | String | The webhook name | Yes | No
url | String | The avatar url | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/webhookCreate.ts)
    
</summary>
    
```ts
import { BaseChannel, TextChannel } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$webhookCreate",
    version: "1.0.0",
    description: "Creates a webhook in a channel, returns the webhook id",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "channel ID",
            description: "The channel to create the webhook",
            type: ArgType.Channel,
            rest: false,
            required: true,
            check: (i: BaseChannel) => "createWebhook" in i,
        },
        {
            name: "name",
            description: "The webhook name",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "url",
            description: "The avatar url",
            rest: false,
            type: ArgType.String,
        },
    ],
    async execute(_, [channel, name, url]) {
        const ch = channel as TextChannel
        const web = await ch
            .createWebhook({
                name: name,
                avatar: url || undefined,
            })
            .catch(noop)

        return Return.success(web ? web.id : undefined)
    },
})

```
    
</details>