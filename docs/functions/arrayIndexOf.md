# $arrayIndexOf
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Gets the index of an element in the array
## Usage
```
$arrayIndexOf[name;value]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
name | String | The variable that holds the array | Yes | No
value | String | The exact value to get its index | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/arrayIndexOf.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$arrayIndexOf",
    description: "Gets the index of an element in the array",
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The variable that holds the array",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "value",
            description: "The exact value to get its index",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    brackets: true,
    execute(ctx, [ name, value ]) {
        const arr = ctx.getEnvironmentKey([ name ])
        return Return.success(Array.isArray(arr) ? arr.indexOf(value) : -1)
    },
})
```
    
</details>