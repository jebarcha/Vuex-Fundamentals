import getRandpmInt from '../../helpers/getRandpmInt';

export const incrementRandomInt = async( { commit } ) => {

    commit('setLoading', true)

    const randomInt = await getRandpmInt()

    commit('incrementBy', randomInt)
    commit('setLoading', false)
}