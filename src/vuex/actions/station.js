import axios from "axios"

const url = 'http://localhost:3000/stations/'

export default {
    GET_STATIONS({commit}) {
        return axios.get(url)
            .then((res) => {
                commit('SET_STATIONS', res.data)
                return res
            })
            .catch( error => console.log(error) )
    },
    GET_STATION({commit}, id){
        return axios.get(url + id)
            .then(res => {
                commit('SET_STATION', res.data)
                return res
            })
    },
    POST_STATION({commit}, station) {
        return axios.post(url, station)
            .then((res) => {
                commit('ADD_STATION', res.data)
                return res
            })
            .catch( error => console.log(error) )
    },
    UPDATE_STATION({commit}, station) {
        return axios.patch(url + station.id, station)
            .then((res) => {
                commit('UPDATE_STATION', res.data)
                return res
            })
            .catch( error => console.log(error) )
    },
    DELETE_STATION({commit}, [index, id]) {
        return axios.delete(url + id)
            .then((res) => {
                commit('DELETE_STATION', index)
                return res
            })
            .catch( error => console.log(error) )
    },
}