# $parseDate
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/160px-Infobox_info_icon.svg.png?20150409153300" alt="image" width="25" height="auto"> Parses valid ms to a date
## Usage
```
$parseDate[ms;type]
```
| Name | Type | Description | Required | Spread
| :---: | :---: | :---: | :---: | :---: |
ms | Number | The ms to convert to date | Yes | No
type | Enum (`LocaleDate`, `LocaleTime`, `Locale`, `Date`, `ISO`, `UTC`, `Time`) | The date type | No | No
<details>
<summary>
    
## <img align="top" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="image" width="25" height="auto">  [Source Code](https://github.com/tryforge/ForgeScript-V2/blob/main/src/native/parseDate.ts)
    
</summary>
    
```ts
import { TimeParser } from "../constants"
import { ArgType, NativeFunction, Return } from "../structures"

export enum DateType {
    LocaleDate,
    LocaleTime,
    Locale,
    Date,
    ISO,
    UTC,
    Time
}

export default new NativeFunction({
    name: "$parseDate",
    version: "1.0.1",
    description: "Parses valid ms to a date",
    brackets: true,
    args: [
        {
            name: "ms",
            description: "The ms to convert to date",
            rest: false,
            type: ArgType.Number,
            required: true
        },
        {
            name: "type",
            description: "The date type",
            enum: DateType,
            rest: false,
            type: ArgType.Enum
        }
    ],
    unwrap: true,
    execute(ctx, [ ms, type ]) {
        const date = new Date(ms)

        return Return.success(
            type === DateType.Date ? 
                date.toDateString() :
                type === DateType.ISO ? 
                    date.toISOString() :
                    type === DateType.Locale ?
                        date.toLocaleString() :
                        type === DateType.LocaleDate ?
                            date.toLocaleDateString() :
                            type === DateType.LocaleTime ?
                                date.toLocaleTimeString() :
                                type === DateType.Time ?
                                    date.toTimeString() :
                                    type === DateType.UTC ? 
                                        date.toUTCString() :
                                        null as never
        )
    },
})
```
    
</details>