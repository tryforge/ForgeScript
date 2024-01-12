"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadManager = void 0;
const Logger_1 = require("../structures/@internal/Logger");
const thread_1 = require("../functions/thread");
class ThreadManager {
    client;
    available = new Set();
    busy = new Set();
    maxWorkerCount = 1;
    queue = new Map();
    executing = new Map();
    increment = 0;
    constructor(client) {
        this.client = client;
    }
    async run(ctx) {
        return new Promise(resolve => {
            this.enqueue({
                id: this.getNextTaskId(),
                context: ctx,
                resolve
            });
        });
    }
    async enqueue(task) {
        this.queue.set(task.id, task);
        await this.execute();
    }
    async execute() {
        for (const [, task] of this.queue) {
            const worker = await this.getAvailableWorker();
            if (worker === null) {
                return;
            }
            this.setBusyWorker(worker);
            this.queue.delete(task.id);
            this.executing.set(task.id, task);
            worker.postMessage({
                ...task.context,
                taskId: task.id
            });
        }
    }
    getNextTaskId() {
        return ++this.increment;
    }
    get workerCount() {
        return this.available.size + this.busy.size;
    }
    setAvailableWorker(worker) {
        this.available.add(worker);
        this.busy.delete(worker);
    }
    setBusyWorker(worker) {
        this.available.delete(worker);
        this.busy.add(worker);
    }
    async getAvailableWorker() {
        if (this.available.size !== 0)
            return this.available.values().next().value;
        if (this.workerCount >= this.maxWorkerCount)
            return null;
        // eslint-disable-next-line no-undef
        const worker = await (0, thread_1.spawn)("thread");
        worker.on("error", this.onWorkerError.bind(this, worker));
        worker.on("message", this.onWorkerMessage.bind(this, worker));
        worker.on("exit", this.onWorkerExit.bind(this, worker));
        this.available.add(worker);
        return worker;
    }
    async onWorkerExit(worker, code) {
        Logger_1.Logger.debug(`Worker exited with code ${code}`);
        this.busy.delete(worker);
        this.available.delete(worker);
        await this.execute();
    }
    async onWorkerError(worker, err) {
        Logger_1.Logger.debug("Thread closed with err:", err);
        this.busy.delete(worker);
        await this.execute();
    }
    async onWorkerMessage(worker, msg) {
        this.setAvailableWorker(worker);
        const task = this.executing.get(msg.taskId);
        this.executing.delete(msg.taskId);
        task.resolve(msg.value);
        await this.execute();
    }
}
exports.ThreadManager = ThreadManager;
//# sourceMappingURL=ThreadManager.js.map