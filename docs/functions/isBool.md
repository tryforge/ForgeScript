# $isBool
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Checks whether given value is bool like
## Usage
```
$isBool[value]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
value | String | Value to check if its valid bool | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/isBool.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$isBool",
    version: "1.0.6",
    description: "Checks whether given value is bool like",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "value",
            description: "Value to check if its valid bool",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ v ]) {
        return Return.success(v === "true" || v === "false")
    },
})
```
    
</details>