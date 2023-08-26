# $djsEval
> Eval js code
## Usage
```
$djsEval[...code]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
code | String | The code to eval | Yes | Yes
<details>
<summary>
    
## [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/djsEval.ts)
    
</summary>
    
```ts
import { inspect } from "util"
import { ErrorType } from "../structures/ForgeError"
import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"

export default new NativeFunction({
    name: "$djsEval",
    description: "Eval js code",
    unwrap: true,
    args: [
        {
            name: "code",
            description: "The code to eval",
            rest: true,
            required: true,
            type: ArgType.String
        }
    ],
    brackets: true,
    async execute(ctx, [ arg ]) {
        const code = arg.join(";")
        try {
            let evaled = await eval(code)
            if (typeof evaled !== "string") evaled = inspect(evaled, { depth: 1 })
            return Return.success(evaled)
        } catch (error: unknown) {
            return Return.error(
                this.error(
                    ErrorType.Custom,
                    (error as Error).message
                )
            )
        }
    },
})
```
    
</details>