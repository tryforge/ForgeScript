# $onlyForRoles
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Only executes code if user has given roles
## Usage
```
$onlyForRoles[code;...roles]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
code | String | The code to execute if user does not meet the roles | Yes | No
roles | Role | The roles to check for | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/onlyForRoles.ts)
    
</summary>
    
```ts
import { ArgType, IExtendedCompiledFunctionField, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$onlyForRoles",
    version: "1.1.0",
    description: "Only executes code if user has given roles",
    brackets: true,
    unwrap: false,
    args: [
        {
            name: "code",
            description: "The code to execute if user does not meet the roles",
            rest: false,
            required: true,
            type: ArgType.String
        },
        {
            name: "roles",
            pointer: 0,
            description: "The roles to check for",
            rest: true,
            required: true,
            type: ArgType.Role
        }
    ],
    async execute(ctx) {
        const code = this.data.fields![0] as IExtendedCompiledFunctionField
        let ok = false

        if (ctx.guild) {
            const { args, return: rt } = await this["resolveMultipleArgs"](ctx, 1)
            if (!this["isValidReturnType"](rt)) return rt
            ok = ctx.member?.roles.cache.hasAny(...args[0].map(x => x.id)) ?? false
        }

        if (!ok)
            return this["fail"](ctx, code)

        return this.success()
    },
})
```
    
</details>