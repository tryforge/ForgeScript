# $arrayPop
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Deletes the last element of the array and returns it
## Usage
```
$arrayPop[name]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
name | String | The variable that holds the array | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/arrayPop.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$arrayPop",
    version: "1.0.0",
    description: "Deletes the last element of the array and returns it",
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The variable that holds the array",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    brackets: true,
    execute(ctx, [ name ]) {
        const arr = ctx.getEnvironmentKey([ name ])
        if (Array.isArray(arr)) return Return.success(arr.pop())
        return Return.success()
    },
})
```
    
</details>