# $addChoice
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Adds an autocomplete choice
## Usage
```
$addChoice[choice name;choice value]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
choice name | String | The name for this choice | Yes | No
choice value | String | The value for this choice | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/addChoice.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$addChoice",
    version: "1.0.6",
    description: "Adds an autocomplete choice",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "choice name",
            description: "The name for this choice",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "choice value",
            description: "The value for this choice",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ name, value ]) {
        ctx.container.choices.push({
            name,
            value
        })
        
        return Return.success()
    },
})
```
    
</details>