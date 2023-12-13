# $arraySome
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Loops through every element of the array to find a match
## Usage
```
$arraySome[name;variable;code]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
name | String | The variable that holds the array | Yes | No
variable | String | The variable to load the element value to | Yes | No
code | String | The code to execute for every element | Yes | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/arraySome.ts)
    
</summary>
    
```ts
import isTrue from "../functions/isTrue"
import { ArgType, IExtendedCompiledFunctionConditionField, IExtendedCompiledFunctionField, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$arraySome",
    version: "1.0.0",
    description: "Loops through every element of the array to find a match",
    unwrap: false,
    args: [
        {
            name: "name",
            description: "The variable that holds the array",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "variable",
            description: "The variable to load the element value to",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "code",
            description: "The code to execute for every element",
            rest: false,
            condition: true,
            required: true,
            type: ArgType.String,
        },
    ],
    brackets: true,
    async execute(ctx) {
        const [, code] = this.data.fields! as IExtendedCompiledFunctionField[]

        const {
            args: { "0": name, "1": variable },
            return: rt,
        } = await this["resolveMultipleArgs"](ctx, 0, 1)
        if (!this["isValidReturnType"](rt)) return rt

        const arr = ctx.getEnvironmentKey(name)

        if (Array.isArray(arr)) {
            for (let i = 0, len = arr.length; i < len; i++) {
                const el = arr[i]
                ctx.setEnvironmentKey(variable, el)
                const rt = (await this["resolveCondition"](ctx, code as unknown as IExtendedCompiledFunctionConditionField)) as Return

                if (rt.return || rt.success) {
                    if (!isTrue(rt)) continue
                    return this.success(true)
                } else if (!this["isValidReturnType"](rt)) return rt
            }
        }

        return this.success(false)
    },
})

```
    
</details>