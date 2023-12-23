# $bigintMulti
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Multiplies multiple numbers
## Usage
```
$bigintMulti[...numbers]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
numbers | BigInt | Numbers to multiply | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/bigintMulti.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$bigintMulti",
    version: "1.3.0",
    description: "Multiplies multiple numbers",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "numbers",
            description: "Numbers to multiply",
            rest: true,
            type: ArgType.BigInt,
            required: true,
        },
    ],
    execute(_, [numbers]) {
        return this.success(numbers.reduce((x, y) => x * y))
    },
})

```
    
</details>