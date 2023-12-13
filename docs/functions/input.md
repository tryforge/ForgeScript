# $input
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns a value from a text field
## Usage
```
$input[custom ID]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
custom ID | String | The custom id to get the input field value | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/input.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$input",
    version: "1.0.0",
    description: "Returns a value from a text field",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "custom ID",
            description: "The custom id to get the input field value",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    execute(ctx, [id]) {
        return this.success(
            ctx.interaction?.isModalSubmit() ? ctx.interaction.fields.getTextInputValue(id) : undefined
        )
    },
})

```
    
</details>