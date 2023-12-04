# $eval
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Evaluates given code
## Usage
```
$eval[code;send]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
code | String | The code to eval | Yes | No
send | Boolean | Whether to send as new message | No | No
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
    version: "1.0.0",
    description: "Evaluates given code",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "code",
            type: ArgType.String,
            rest: false,
            required: true,
            description: "The code to eval",
        },
        {
            name: "send",
            type: ArgType.Boolean,
            rest: false,
            description: "Whether to send as new message",
        },
    ],
    async execute(ctx, [code, send]) {
        send ??= true
        try {
            const result = await Interpreter.run({
                ...ctx.runtime,
                data: Compiler.compile(code),
                doNotSend: !send,
            })

            return result === null ? Return.stop() : Return.success(send ? undefined : result)
        } catch (error: unknown) {
            console.error(error)
            return Return.error(error as Error)
        }
    },
})

```
    
</details>