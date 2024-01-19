"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyExtension = exports.RndManager = void 0;
const node_path_1 = require("node:path");
const managers_1 = require("../managers");
const ForgeExtension_1 = require("../structures/forge/ForgeExtension");
class RndManager extends managers_1.BaseCommandManager {
    handlerName = "cope";
}
exports.RndManager = RndManager;
// Just a ext test
class MyExtension extends ForgeExtension_1.ForgeExtension {
    description = "Some description";
    name = "UwU";
    version = "1.0.0";
    random;
    init(client) {
        // eslint-disable-next-line no-undef
        this.load((0, node_path_1.join)(__dirname, "custom"));
        this.random = new RndManager(client);
    }
}
exports.MyExtension = MyExtension;
//# sourceMappingURL=ext.js.map