# $httpSetBody
> Sets a JSON body for the request.
## Usage
```
$httpSetBody[body]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
body | Json | the JSON body | Yes | No
<details>
<summary>
    
## [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/httpSetBody.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction } from "../structures/NativeFunction"
import { Return } from "../structures/Return"

export default new NativeFunction({
    name: "$httpSetBody",
    description: "Sets a JSON body for the request.",
    args: [
        {
            name: "body",
            description: "the JSON body",
            rest: false,
            required: true,
            type: ArgType.Json
        }
    ],
    unwrap: true,
    brackets: true,
    execute(ctx, [ json ]) {
        ctx.http.body = JSON.stringify(json)
        return Return.success()
    },
})
```
    
</details>