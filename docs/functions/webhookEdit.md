# $webhookEdit
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Edits webhook with given id
## Usage
```
$webhookEdit[id;name;url]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
id | Webhook | The webhook id | Yes | No
name | String | The new name for the webhook | No | No
url | String | The new avatar for the webhook | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/webhookEdit.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"
import noop from "../functions/noop"

export default new NativeFunction({
    name: "$webhookEdit",
    version: "1.0.0",
    description: "Edits webhook with given id",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "id",
            description: "The webhook id",
            rest: false,
            type: ArgType.Webhook,
            required: true,
        },
        {
            name: "name",
            description: "The new name for the webhook",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "url",
            description: "The new avatar for the webhook",
            rest: false,
            type: ArgType.String,
        },
    ],
    async execute(_, [web, name, avatar]) {
        const edit = await web
            .edit({
                avatar: avatar || undefined,
                name: name || undefined,
            })
            .catch(noop)

        return this.success(!!edit)
    },
})

```
    
</details>