# $httpAddHeader
> Adds an HTTP header
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
    
## [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/httpAddHeader.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"

export default new NativeFunction({
    name: "$httpAddHeader",
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