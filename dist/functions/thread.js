"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terminate = exports.postMessage = exports.spawn = void 0;
const events_1 = require("events");
const path_1 = require("path");
const worker_threads_1 = require("worker_threads");
async function spawn(name) {
    // eslint-disable-next-line no-undef
    const worker = new worker_threads_1.Worker((0, path_1.join)(__dirname, "..", "experimental", "threading", `${name}.js`));
    await (0, events_1.once)(worker, "online");
    return worker;
}
exports.spawn = spawn;
async function postMessage(worker, msg) {
    worker.postMessage(msg);
    const result = await (0, events_1.once)(worker, "message").then(x => x[0]);
    return result;
}
exports.postMessage = postMessage;
async function terminate(...workers) {
    for (const worker of workers) {
        worker.terminate();
        await (0, events_1.once)(worker, "exit");
    }
}
exports.terminate = terminate;
//# sourceMappingURL=thread.js.map