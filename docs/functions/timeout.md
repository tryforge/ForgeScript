# $timeout
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Times a member out for X milliseconds
## Usage
```
$timeout[guild ID;user ID;ms]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
guild ID | Guild | The guild to pull member from | Yes | No
user ID | Member | The member to timeout | Yes | No
ms | Number | The ms to timeout for | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/timeout.ts)
    
</summary>
    
```ts
import noop from "../functions/noop"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$timeout",
    version: "1.0.0",
    description: "Times a member out for X milliseconds",
    unwrap: true,
    brackets: true,
    args: [
        {
            name: "guild ID",
            description: "The guild to pull member from",
            rest: false,
            required: true,
            type: ArgType.Guild,
        },
        {
            name: "user ID",
            description: "The member to timeout",
            rest: false,
            required: true,
            type: ArgType.Member,
            pointer: 0,
        },
        {
            name: "ms",
            description: "The ms to timeout for",
            rest: false,
            type: ArgType.Number,
        },
    ],
    async execute(ctx, [guild, member, ms]) {
        const timeout = await member.disableCommunicationUntil(ms ? Date.now() + ms : null).catch(noop)
        return Return.success(!!timeout)
    },
})

```
    
</details>