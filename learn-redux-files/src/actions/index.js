export const increment = (number) => {
    return {
        type: "INCREMENT",
        increase: number
    }
}

export const decrement = () => {
    return {
        type: "DECREMENT"
    }
}
