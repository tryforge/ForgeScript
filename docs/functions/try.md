# $try
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Handles a possible error from given code

> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Warning.svg/156px-Warning.svg.png" alt="image" width="25" height="auto"> This feature is currently <span style="color:yellow"><strong>experimental</strong></span>.

## Usage
```
$try[code;catch code;variable]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
code | String | The code to safely execute | Yes | No
catch code | String | The code to run in case of an error | No | No
variable | String | Variable to load the error message to | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/try.ts)
    
</summary>
    
```ts
import { ArgType, ForgeError, IExtendedCompiledFunctionField, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$try",
    experimental: true,
    description: "Handles a possible error from given code",
    unwrap: false,
    args: [
        {
            name: "code",
            rest: false,
            type: ArgType.String,
            required: true,
            description: "The code to safely execute"
        },
        {
            name: "catch code",
            description: "The code to run in case of an error",
            rest: false,
            type: ArgType.String,
        },
        {
            name: "variable",
            description: "Variable to load the error message to",
            rest: false,
            type: ArgType.String
        }
    ],
    brackets: true,
    async execute(ctx) {
        const [ tryCode, catchCode, varName ] = this.data.fields! as IExtendedCompiledFunctionField[]

        const tryExecution: Return = await this["resolveCode"](ctx, tryCode)

        if (!this["isValidReturnType"](tryExecution)) {
            if (tryExecution.error) {
                const value = tryExecution.value as ForgeError
                const name = await this["resolveCode"](ctx, varName)
                if (!this["isValidReturnType"](name)) return name
                if (name.value) ctx.setEnvironmentKey(name.value as string, value.message)
            }
        
            return this["resolveCode"](ctx, catchCode)
        }

        return Return.success(this["isValidReturnType"](tryExecution) ? tryExecution.value : undefined)
    },
})
```
    
</details>