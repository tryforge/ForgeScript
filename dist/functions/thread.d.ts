/// <reference types="node" />
import { Worker } from "worker_threads";
export declare function spawn(name: string): Promise<Worker>;
export declare function postMessage<T>(worker: Worker, msg: any): Promise<T>;
export declare function terminate(...workers: Worker[]): Promise<void>;
//# sourceMappingURL=thread.d.ts.map