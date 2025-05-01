"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildActionRow = void 0;
const discord_js_1 = require("discord.js");
/**
 * Builds an action row. This is only needed inside ComponentsV2 functions and should never be used outside this context.
 * @param ctx The current context.
 * @returns
 */
function buildActionRow(ctx) {
    ctx.container.isComponentsV2 = true;
    const row = ctx.container.actionRow;
    if (!row)
        return;
    const comp = ctx.container.components.at(-1);
    if (comp instanceof discord_js_1.ContainerBuilder && ctx.container.isInside(discord_js_1.ComponentType.Container))
        comp.addActionRowComponents(row);
    else
        ctx.container.components.push(row);
    delete ctx.container.actionRow;
}
exports.buildActionRow = buildActionRow;
//# sourceMappingURL=buildActionRow.js.map