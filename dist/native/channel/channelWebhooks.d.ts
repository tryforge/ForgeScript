import { BaseChannel } from "discord.js";
import { ArgType, NativeFunction } from "../../structures";
import { WebhookProperty } from "../../properties/webhook";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    type: ArgType.Channel;
    required: true;
    check: (i: BaseChannel) => boolean;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof WebhookProperty;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.String;
}], true>;
export default _default;
//# sourceMappingURL=channelWebhooks.d.ts.map