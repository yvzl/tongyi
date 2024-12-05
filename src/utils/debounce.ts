export const debounce = (fun: (...args: any[]) => any, delay: number) => {
    let state: ReturnType<typeof setTimeout> = null
    return (...args: any[]) => {
        clearTimeout(state)
        state = setTimeout(() => fun(...args), delay)
    }
}