import { ForgeClient, IRunnable } from "../core";
export interface IThreadContext {
    code: string;
    environment?: IRunnable["environment"];
    keywords?: IRunnable["keywords"];
}
export interface IThreadResult {
    taskId: number;
    value: string | null;
}
export interface IThreadTask {
    id: number;
    resolve: (res: string | null) => void;
    context: IThreadContext;
}
export declare class ThreadManager {
    private readonly client;
    private readonly available;
    private readonly busy;
    private maxWorkerCount;
    private readonly queue;
    private readonly executing;
    private increment;
    constructor(client: ForgeClient);
    run(ctx: IThreadContext): Promise<string | null>;
    private enqueue;
    private execute;
    private getNextTaskId;
    private get workerCount();
    private setAvailableWorker;
    private setBusyWorker;
    private getAvailableWorker;
    private onWorkerExit;
    private onWorkerError;
    private onWorkerMessage;
}
//# sourceMappingURL=ThreadManager.d.ts.map