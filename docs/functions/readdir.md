# $readdir
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Reads a directory and load the result into a environment variable
## Usage
```
$readdir[path;variable;separator]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
path | String | The file path where the property will be imported from | Yes | No
variable | String | The environment variable name | Yes | No
separator | String | The result separator | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/readdir.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"
import { readdirSync } from "fs"

export default new NativeFunction({
    name: "$readdir",
    version: "1.0.7",
    description: "Reads a directory and load the result into a environment variable",
    args: [
        {
            name: "path",
            description: "The file path where the property will be imported from",
            required: true,
            type: ArgType.String,
            rest: false
        },
        {
            name: "variable",
            description: "The environment variable name",
            required: true,
            type: ArgType.String,
            rest: false
        },
        {
            name: "separator",
            description: "The result separator",
            required: false,
            type: ArgType.String,
            rest: false
        }
    ],
    brackets: true,
    unwrap: true,
    execute(ctx, [ path, variable, separator ]) {
        const files = readdirSync(path)
        ctx.setEnvironmentKey(variable, files.join(separator ?? ","))
        
        return Return.success()
    },
})
```
    
</details>