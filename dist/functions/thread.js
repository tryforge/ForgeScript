"use strict";
/*
* SPDX-License-Identifier: LGPL-3.0-or-later
* Copyright © 2026 BotForge
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.spawn = spawn;
exports.postMessage = postMessage;
exports.terminate = terminate;
const events_1 = require("events");
const path_1 = require("path");
const worker_threads_1 = require("worker_threads");
async function spawn(name) {
    const worker = new worker_threads_1.Worker((0, path_1.join)(__dirname, "..", "experimental", "threading", `${name}.js`));
    await (0, events_1.once)(worker, "online");
    return worker;
}
async function postMessage(worker, msg) {
    worker.postMessage(msg);
    const result = await (0, events_1.once)(worker, "message").then(x => x[0]);
    return result;
}
async function terminate(...workers) {
    for (const worker of workers) {
        worker.terminate();
        await (0, events_1.once)(worker, "exit");
    }
}
//# sourceMappingURL=thread.js.map