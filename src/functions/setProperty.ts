export default function<T extends object, K extends keyof T>(target: T, key: K, value: T[K]) {
    Reflect.set(target, key, value)
}