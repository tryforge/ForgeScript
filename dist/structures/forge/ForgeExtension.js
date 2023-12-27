"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgeExtension = void 0;
const getVersionNumber_1 = __importDefault(require("../../functions/getVersionNumber"));
const ForgeError_1 = require("./ForgeError");
const Logger_1 = require("../@internal/Logger");
const managers_1 = require("../../managers");
class ForgeExtension {
    /**
     * Only the versions written here will be allowed
     */
    targetVersions;
    /**
     * A list of extension names this extension requires
     */
    requireExtensions;
    validateAndInit(client) {
        const version = client.version;
        const n = (0, getVersionNumber_1.default)(version);
        if (this.targetVersions?.length && !this.targetVersions.some(x => (0, getVersionNumber_1.default)(x) === n)) {
            throw new ForgeError_1.ForgeError(null, ForgeError_1.ErrorType.UnsupportedExtensionVersion, this.name, version);
        }
        if (this.requireExtensions?.length) {
            for (const wanted of this.requireExtensions) {
                if (!client.options.extensions.some(x => x.name === wanted)) {
                    throw new ForgeError_1.ForgeError(null, ForgeError_1.ErrorType.RequiredExtension, this.name, wanted);
                }
            }
        }
        this.init(client);
        Logger_1.Logger.info(`Extension ${this.name}@${this.version} has been loaded!`);
    }
    load(path) {
        return managers_1.FunctionManager.load(this.name, path);
    }
}
exports.ForgeExtension = ForgeExtension;
//# sourceMappingURL=ForgeExtension.js.map