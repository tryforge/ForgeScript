# $randomString
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Creates a random string
## Usage
```
$randomString[length;characters]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
length | Number | The length of the random string | Yes | No
characters | String | The characters to use for this string | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/randomString.ts)
    
</summary>
    
```ts
import { ArgType, NativeFunction, Return } from "../structures"

export const Numbers = "0123456789"
export const LowercaseLetters = "qwertyuiopasdfghjklzxcvbnm"
export const UppercaseLetters = LowercaseLetters.toUpperCase()

export const CharArray = [
    ...Numbers,
    ...LowercaseLetters,
    ...UppercaseLetters
]

export default new NativeFunction({
    name: "$randomString",
    version: "1.2.0",
    description: "Creates a random string",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "length",
            description: "The length of the random string",
            rest: false,
            required: true,
            type: ArgType.Number
        },
        {
            name: "characters",
            description: "The characters to use for this string",
            rest: false,
            required: false,
            type: ArgType.String
        }
    ],
    execute(ctx, [ len, chars ]) {
        const arr = chars ? [...chars] : CharArray
        return this.success(Array.from({ length: len }, () => arr[Math.floor(Math.random() * arr.length)]).join(""))
    }
})
```
    
</details>