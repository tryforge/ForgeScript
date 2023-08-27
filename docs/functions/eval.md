# $eval
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Evaluates given code.
## Usage
```
$eval[...code]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
code | String | The code to eval | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/eval.ts)
    
</summary>
    
```ts
import { Compiler } from "../core/Compiler"
import { Interpreter } from "../core/Interpreter"
import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"

export default new NativeFunction({
    name: "$eval",
    description: "Evaluates given code.",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "code",
            type: ArgType.String,
            rest: true,
            required: true,
            description: "The code to eval"
        }
    ],
    async execute(ctx, [ args ]) {
        const code = args.join(";")
        
        try {
            const result = await Interpreter.run({
                client: ctx.client,
                data: Compiler.compile(code),
                obj: ctx.obj,
                args: ctx.args,
                doNotSend: true
            })

            return result === null ? Return.stop() : Return.success(result)
        } catch (error: unknown) {
            console.error(error)
            return Return.error(error as Error)
        }
    }
})
```
    
</details>