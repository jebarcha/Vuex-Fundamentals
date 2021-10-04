
export const increment = (state) => {
    state.count++
    state.lastMut = 'increment'
}

export const incrementBy = (state, val) => {
    state.count += val
    state.lastMut = 'incrementBy ' + val
    state.lastRandomInt = val
}

export const setLoading = (state, val) => {
    state.isLoading = val
    state.lastMut = 'setLoading ' + val
}