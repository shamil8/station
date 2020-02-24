import axios from "axios"

const url = 'http://localhost:3000/car-station'

export default {
    GET_CAR_STATION({commit}) {
        return axios.get(url)
            .then((res) => {
                commit('SET_CAR_STATION', res.data)
                return res
            })
            .catch( error => console.log(error) )
    },
    POST_CAR_STATION({commit}, carStation) {
        return axios.post(url, carStation)
            .then((res) => {
                commit('ADD_CAR_STATION', res.data)
                return res
            })
            .catch( error => console.log(error) )
    },
}