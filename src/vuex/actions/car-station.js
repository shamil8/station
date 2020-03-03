import axios from "axios"

let db = 0 // 0- it's fake api (json-server) || 1 - Symfony API

const url = db ? 'https://127.0.0.1:8000/api/car_station' : 'http://localhost:3000/car-station'

export default {
    GET_CAR_STATION({commit}, page = 1) {
        return axios.get(url + '?page=' + page)
            .then((res) => {
                if (!db) res.data.total = res.data.length
                commit('SET_CAR_STATION', db ? res.data.items : res.data)
                return res
            })
            .catch( error => console.log(error) )
    },
    POST_CAR_STATION({commit}, carStation) {
        if (!db) {
            carStation = {
                id: carStation.id,
                mark: "LADA " + carStation.car,
                number: "232 " + carStation.car + carStation.station,
                name: "Станция " + carStation.station,
                type: "АИ-95",
                quantity: carStation.quantity,
                address: "г. Москва",
                date: "2020-02-"+ carStation.car
            }
        }
        return axios.post(url, carStation)
            .then((res) => {
                commit('ADD_CAR_STATION', res.data)
                return res
            })
            .catch( error => console.log(error) )
    },
}
