import axios from "axios"

const url = 'https://127.0.0.1:8000/api/car_station'
// const url = 'http://localhost:3000/car-station'

export default {
    GET_CAR_STATION({commit}, page = 1) {
        return axios.get(url + '?page=' + page)
            .then((res) => {
                commit('SET_CAR_STATION', res.data.items)
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