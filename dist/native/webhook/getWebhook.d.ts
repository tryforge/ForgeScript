import { WebhookProperty } from "../../properties/webhook";
import { ArgType, NativeFunction } from "../../structures";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    type: ArgType.Webhook;
    required: true;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    enum: typeof WebhookProperty;
}], true, true>;
export default _default;
//# sourceMappingURL=getWebhook.d.ts.map