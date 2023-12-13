"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../properties/user");
const structures_1 = require("../structures");
exports.default = new structures_1.NativeFunction({
    name: "$newUser",
    version: "1.0.0",
    description: "Retrieves new data from an event whose context was a user instance",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: structures_1.ArgType.Enum,
            enum: user_1.UserProperty,
            required: true,
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: structures_1.ArgType.String,
        },
    ],
    execute(ctx, [prop, sep]) {
        return this.success(user_1.UserProperties[prop](ctx.states?.user?.new, sep));
    },
});
//# sourceMappingURL=newUser.js.map