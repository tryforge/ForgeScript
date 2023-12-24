import { Worker } from "worker_threads"
import { ForgeClient, IRunnable } from "../core"
import { once } from "events"
import { Logger } from "../structures/@internal/Logger"

export interface IThreadContext {
    code: string
    environment?: IRunnable["environment"]
    keywords?: IRunnable["keywords"]
}

export interface IThreadResult {
    taskId: number
    value: string | null
}

export interface IThreadTask {
    id: number
    resolve: (res: string | null) => void
    context: IThreadContext
}

export class ThreadManager {
    private readonly available = new Set<Worker>()
    private readonly busy = new Set<Worker>()

    private maxWorkerCount = 1

    private readonly queue = new Map<number, IThreadTask>()
    private readonly executing = new Map<number, IThreadTask>()
    
    private increment = 0

    public constructor(private readonly client: ForgeClient) {}

    public async run(ctx: IThreadContext) {
        return new Promise<string | null>(resolve => {
            this.enqueue({
                id: this.getNextTaskId(),
                context: ctx,
                resolve
            })
        })
    }

    private async enqueue(task: IThreadTask) {
        this.queue.set(task.id, task)
        await this.execute()
    }

    private async execute() {
        for (const [, task ] of this.queue) {
            const worker = await this.getAvailableWorker()
            if (worker === null) {
                return
            }

            this.setBusyWorker(worker)
            this.queue.delete(task.id)
            this.executing.set(task.id, task)
            
            worker.postMessage({
                ...task.context,
                taskId: task.id
            })
        }
    }

    private getNextTaskId() {
        return ++this.increment
    }

    private get workerCount() {
        return this.available.size + this.busy.size
    }

    private setAvailableWorker(worker: Worker) {
        this.available.add(worker)
        this.busy.delete(worker)
    }

    private setBusyWorker(worker: Worker) {
        this.available.delete(worker)
        this.busy.add(worker)
    }

    private async getAvailableWorker(): Promise<Worker | null> {
        if (this.available.size !== 0) return this.available.values().next().value
        if (this.workerCount >= this.maxWorkerCount) return null
        // eslint-disable-next-line no-undef
        const worker = new Worker(`${__dirname}/../experimental/threading/thread.js`)
        
        worker.on("error", this.onWorkerError.bind(this, worker))
        worker.on("message", this.onWorkerMessage.bind(this, worker))
        worker.on("exit", this.onWorkerExit.bind(this, worker))
        await once(worker, "online")
        this.available.add(worker)
        return worker
    }

    private async onWorkerExit(worker: Worker, code: number) {
        Logger.debug(`Worker exited with code ${code}`)
        this.busy.delete(worker)
        this.available.delete(worker)
        await this.execute()
    }

    private async onWorkerError(worker: Worker, err: Error) {
        Logger.debug("Thread closed with err:", err)
        this.busy.delete(worker)
        await this.execute()
    }

    private async onWorkerMessage(worker: Worker, msg: IThreadResult) {
        this.setAvailableWorker(worker)
        const task = this.executing.get(msg.taskId)!
        this.executing.delete(msg.taskId)
        task.resolve(msg.value)
        await this.execute()
    }
}