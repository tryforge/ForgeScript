# $modulo
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Returns the remainder of multiple numbers
## Usage
```
$modulo[...numbers]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
numbers | Number | Numbers to get their remainders | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/modulo.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$modulo",
    version: "1.0.0",
    description: "Returns the remainder of multiple numbers",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "numbers",
            description: "Numbers to get their remainders",
            rest: true,
            type: ArgType.Number,
            required: true,
        },
    ],
    execute(_, [numbers]) {
        return Return.success(numbers.reduce((x, y) => x % y))
    },
})

```
    
</details>