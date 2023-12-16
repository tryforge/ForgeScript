"use strict";
async function asyncTask() {
    return 0;
}
function syncTask() {
    return 0;
}
async function runAsync() {
    const start = performance.now();
    for (let i = 0; i < 1000000; i++) {
        await asyncTask();
    }
    console.log(performance.now() - start, "ms");
    return runAsync;
}
async function runSync() {
    const start = performance.now();
    for (let i = 0; i < 1000000; i++) {
        let run = syncTask();
    }
    console.log(performance.now() - start, "ms");
    return runSync;
}
console.log("ASYNC");
runAsync()
    .then(runAsync)
    .then(runAsync)
    .then(runAsync)
    .then(runAsync)
    .then(() => {
    console.log("SYNC");
    runSync()
        .then(runSync)
        .then(runSync)
        .then(runSync)
        .then(runSync);
});
//# sourceMappingURL=async.js.map