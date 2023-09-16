export default function (n: number, max: number): Array<number> {
    const splitTimes = n % max === 0 ? Math.floor(n / max) : Math.floor(n / max) + 1
    const arr = new Array<number>(splitTimes)
    arr.fill(max)
    const left = n - max * (splitTimes - 1)
    if (left !== 0) arr[arr.length - 1] = left
    return arr
}
