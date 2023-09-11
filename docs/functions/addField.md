# $addField
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Adds an embed field
## Usage
```
$addField[name;value;inline;index]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
name | String | The name for the field | Yes | No
value | String | The value for the field | Yes | No
inline | Boolean | Whether this field will be inline | No | No
index | Number | The index to add this data to | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/addField.ts)
    
</summary>
    
```ts
import { EmbedField } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$addField",
    version: "1.0.0",
    description: "Adds an embed field",
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The name for the field",
            required: true,
            type: ArgType.String,
            rest: false
        },
        {
            name: "value",
            description: "The value for the field",
            required: true,
            type: ArgType.String,
            rest: false
        },
        {
            name: "inline",
            description: "Whether this field will be inline",
            type: ArgType.Boolean,
            rest: false
        },
        {
            name: "index",
            description: "The index to add this data to",
            rest: false,
            type: ArgType.Number
        }
    ],
    brackets: true,
    execute(ctx, [ name, value, inline, index ]) {
        ctx.container.embed((index ?? 0)).addFields({
            name,
            value,
            inline: inline ?? false
        })

        return Return.success()
    },
})
```
    
</details>