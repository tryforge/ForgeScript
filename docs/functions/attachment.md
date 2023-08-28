# $attachment
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Adds an attachment to the response
## Usage
```
$attachment[path;name]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
path | String | The attachment url or path to file | Yes | No
name | String | the name for this attachment, with the extension | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/attachment.ts)
    
</summary>
    
```ts
import { AttachmentBuilder } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$attachment",
    brackets: true,
    description: "Adds an attachment to the response",
    unwrap: true,
    args: [
        {
            name: "path",
            description: "The attachment url or path to file",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "name",
            description: "the name for this attachment, with the extension",
            rest: false,
            type: ArgType.String,
            required: true
        }
    ],
    execute(ctx, [ url, name ]) {
        const attachment = new AttachmentBuilder(url, {
            name
        })

        ctx.container.files.push(attachment)
        return Return.success()
    },
})
```
    
</details>