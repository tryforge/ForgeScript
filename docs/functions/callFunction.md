# $callFunction
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Calls a forge function made by the user
## Usage
```
$callFunction[name;...args]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
name | String | The function name | Yes | No
args | String | The args to call this function with | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/callFunction.ts)
    
</summary>
    
```ts
import { ErrorType } from "../structures/forge/ForgeError"
import { ArgType, NativeFunction } from "../structures/@internal/NativeFunction"
import { Return } from "../structures/@internal/Return"

export default new NativeFunction({
    name: "$callFunction",
    version: "1.0.0",
    description: "Calls a forge function made by the user",
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The function name",
            rest: false,
            required: true,
            type: ArgType.String,
        },
        {
            name: "args",
            description: "The args to call this function with",
            rest: true,
            type: ArgType.String,
            required: true,
        },
    ],
    brackets: true,
    execute(ctx, [name, args]) {
        const fn = ctx.client.functions.get(name)
        if (!fn) return this.err(this.error(ErrorType.UnknownXName, "function", name))

        return fn.call(ctx, args)
    },
})

```
    
</details>