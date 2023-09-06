# $arrayEvery
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Loops through every element of the array with a condition that must pass every element

> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Warning.svg/156px-Warning.svg.png" alt="image" width="25" height="auto"> This feature is currently <span style="color:yellow"><strong>experimental</strong></span>.

## Usage
```
$arrayEvery[name;variable;code]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
name | String | The variable that holds the array | Yes | No
variable | String | The variable to load the element value to | Yes | No
code | String | The code to execute for every element | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/arrayEvery.ts)
    
</summary>
    
```ts

import { ArgType, IExtendedCompiledFunctionField, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$arrayEvery",
    version: "1.0.0",
    description: "Loops through every element of the array with a condition that must pass every element",
    unwrap: false,
    experimental: true,
    args: [
        {
            name: "name",
            description: "The variable that holds the array",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "variable",
            description: "The variable to load the element value to",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "code",
            description: "The code to execute for every element",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    brackets: true,
    async execute(ctx) {
        const [ nameField, varField, code ] = this.data.fields! as IExtendedCompiledFunctionField[]

        const name = await this["resolveCode"](ctx, nameField)
        if (!this["isValidReturnType"](name)) return name

        const variable = await this["resolveCode"](ctx, varField)
        if (!this["isValidReturnType"](variable)) return variable

        const arr = ctx.getEnvironmentKey([ name.value as string ])
        const varName = variable.value as string

        if (Array.isArray(arr)) {
            for (let i = 0, len = arr.length;i < len;i++) {
                const el = arr[i]
                ctx.setEnvironmentKey(varName, el)
                const rt = await this["resolveCode"](ctx, code) as Return
                
                if (rt.return) {
                    if (!rt.value)
                        continue
                    return Return.success(false)
                }
                else if (!this["isValidReturnType"](rt)) return rt
            }
        }

        return Return.success(true)
    },
})
```
    
</details>