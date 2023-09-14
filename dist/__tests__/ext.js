"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyExtension = void 0;
const FunctionManager_1 = require("../managers/FunctionManager");
const ForgeExtension_1 = require("../structures/ForgeExtension");
class MyExtension extends ForgeExtension_1.ForgeExtension {
    description = "Some description";
    name = "My extension";
    version = "1.0.0";
    init(client) {
        // eslint-disable-next-line no-undef
        FunctionManager_1.FunctionManager.load(`${__dirname}/custom`);
    }
}
exports.MyExtension = MyExtension;
//# sourceMappingURL=ext.js.map