# $min
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the smallest number of the ones given
## Usage
```
$min[...numbers]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
numbers | Number | Numbers among which to find the smallest | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/min.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$min",
    version: "1.0.7",
    description: "Returns the smallest number of the ones given",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "numbers",
            description: "Numbers among which to find the smallest",
            rest: true,
            type: ArgType.Number,
            required: true,
        },
    ],
    execute(_, [numbers]) {
        return this.success(Math.min(...numbers))
    },
})

```
    
</details>