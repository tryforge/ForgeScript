# $math
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Run math expression, returns nothing if incorrect expression
## Usage
```
$math[expr]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
expr | String | The expression | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/math.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

const MathRegex = /[^0-9%\-+./*\t\n\s()<>]/

export default new NativeFunction({
    name: "$math",
    version: "1.0.0",
    description: "Run math expression, returns nothing if incorrect expression",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "expr",
            description: "The expression",
            rest: false,
            type: ArgType.String,
            required: true,
        },
    ],
    execute(_, [expr]) {
        try {
            if (MathRegex.test(expr)) return this.success()
            return this.success(eval(expr))
        } catch (error: any) {
            return this.success()
        }
    },
})

```
    
</details>