# $bigintDivide
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Divides multiple numbers
## Usage
```
$bigintDivide[...numbers]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
numbers | BigInt | Numbers to divide | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/bigintDivide.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$bigintDivide",
    version: "1.3.0",
    description: "Divides multiple numbers",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "numbers",
            description: "Numbers to divide",
            rest: true,
            type: ArgType.BigInt,
            required: true,
        },
    ],
    execute(_, [numbers]) {
        return this.success(numbers.reduce((x, y) => x / y))
    },
})

```
    
</details>