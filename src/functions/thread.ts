import { once } from "events"
import { join } from "path"
import { Worker } from "worker_threads"

export async function spawn(name: string) {
    // eslint-disable-next-line no-undef
    const worker = new Worker(join(__dirname, "..", "experimental", "threading", `${name}.js`))
    await once(worker, "online")
    return worker
}

export async function postMessage<T>(worker: Worker, msg: any): Promise<T> {
    worker.postMessage(msg)
    const result = await once(worker, "message").then(x => x[0])
    return result
}

export async function terminate(...workers: Worker[]) {
    for (const worker of workers) {
        worker.terminate()
        await once(worker, "exit")
    }
}