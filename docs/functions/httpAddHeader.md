# $httpAddHeader
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Adds an HTTP header
## Usage
```
$httpAddHeader[name;...value]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
name | String | The header name | Yes | No
value | String | The header value | Yes | Yes
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/httpAddHeader.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"

export default new NativeFunction({
    name: "$httpAddHeader",
    version: "1.0.0",
    description: "Adds an HTTP header",
    unwrap: true,
    args: [
        {
            name: "name",
            description: "The header name",
            rest: false,
            type: ArgType.String,
            required: true
        },
        {
            name: "value",
            description: "The header value",
            rest: true,
            type: ArgType.String,
            required: true
        }
    ],
    brackets: true,
    execute(ctx, [name, values ]) {
        const value = values.join(";")
        if (!ctx.http.headers) ctx.http.headers = {}
        ctx.http.headers[name] = value
        return Return.success()
    },
})
```
    
</details>