# $default
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns right hand value if the left hand value is falsy
## Usage
```
$default[left hand;right hand]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
left hand | String | Left hand value | Yes | No
right hand | String | Right hand value | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/default.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$default",
    version: "1.0.6",
    brackets: true,
    unwrap: true,
    description: "Returns right hand value if the left hand value is falsy",
    args: [
        {
            name: "left hand",
            description: "Left hand value",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "right hand",
            description: "Right hand value",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    execute(ctx, [ lhs, rhs ]) {
        return Return.success(lhs || rhs)
    },
})
```
    
</details>