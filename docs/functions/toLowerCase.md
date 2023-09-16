# $toLowerCase
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Makes a string lowercase
## Usage
```
$toLowerCase[...string]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
string | String | The string to turn lowercase | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/toLowerCase.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$toLowerCase",
    version: "1.0.0",
    description: "Makes a string lowercase",
    unwrap: true,
    args: [
        {
            name: "string",
            description: "The string to turn lowercase",
            type: ArgType.String,
            rest: true,
            required: true,
        },
    ],
    brackets: true,
    execute(ctx, [values]) {
        return Return.success(values.join(";").toLowerCase())
    },
})

```
    
</details>