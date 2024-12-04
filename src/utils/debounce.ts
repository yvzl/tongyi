export const debounce = (fun: (...args: any[]) => any, delay: number) => {
    let state: ReturnType<typeof setTimeout> = null
    return (...args: any[]) => {
        console.log(1)
        clearTimeout(state)
        state = setTimeout(() => fun(...args), delay)
    }
}