# $import
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Import a property from the provided file
## Usage
```
$import[path;property]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
path | String | The file path where the property will be imported from | Yes | No
property | String | The property name | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/import.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"

export default new NativeFunction({
    name: "$import",
    version: "1.0.7",
    description: "Import a property from the provided file",
    args: [
        {
            name: "path",
            description: "The file path where the property will be imported from",
            required: true,
            type: ArgType.String,
            rest: false
        },
        {
            name: "property",
            description: "The property name",
            required: true,
            type: ArgType.String,
            rest: false
        }
    ],
    brackets: true,
    unwrap: true,
    execute(ctx, [ path, property ]) {
        return Return.success(require(path)[property])
    },
})
```
    
</details>