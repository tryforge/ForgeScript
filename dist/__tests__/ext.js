"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyExtension = void 0;
const ForgeExtension_1 = require("../structures/forge/ForgeExtension");
// Just a ext test
class MyExtension extends ForgeExtension_1.ForgeExtension {
    description = "Some description";
    name = "UwU";
    version = "1.0.0";
    static client;
    init(client) {
        MyExtension.client = client;
    }
}
exports.MyExtension = MyExtension;
//# sourceMappingURL=ext.js.map