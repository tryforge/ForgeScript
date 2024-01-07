import { MemberProperties, MemberProperty } from "../../properties/member"
import { ScheduledEventProperties, ScheduledEventProperty } from "../../properties/scheduledEvent"
import { ArgType, NativeFunction, Return } from "../../structures"

export default new NativeFunction({
    name: "$newScheduledEvent",
    version: "1.4.0",
    description: "Retrieves new data from an event whose context was a scheduled event instance",
    brackets: true,
    unwrap: true,
    output: ArgType.Unknown,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: ArgType.Enum,
            enum: ScheduledEventProperty,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: ArgType.String,
        },
    ],
    execute(ctx, [prop, sep]) {
        return this.success(ScheduledEventProperties[prop](ctx.states?.scheduledEvent?.new, sep))
    },
})
