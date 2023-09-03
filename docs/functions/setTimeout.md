# $setTimeout
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Executes code after given duration
## Usage
```
$setTimeout[code;time]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
code | String | The code to execute | Yes | No
time | Time | How long to wait for before running this code | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/setTimeout.ts)
    
</summary>
    
```ts
import { ArgType, IExtendedCompiledFunctionField, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$setTimeout",
    version: "1.0.2",
    description: "Executes code after given duration",
    unwrap: false,
    brackets: true,
    args: [
        {
            name: "code",
            description: "The code to execute",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "time",
            description: "How long to wait for before running this code",
            rest: false,
            type: ArgType.Time
        }
    ],
    async execute(ctx) {
        const [
            code,
            rawTime
        ] = this.data.fields! as IExtendedCompiledFunctionField[]

        const time: Return = await this["resolveUnhandledArg"](ctx, 1)
        if (!this["isValidReturnType"](time)) return time

        const timeout = setTimeout(async () => {
            await this["resolveCode"](ctx, code)
        }, time.value as number)

        return Return.success()
    },
})
```
    
</details>