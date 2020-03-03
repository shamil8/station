import axios from "axios"

let db = 0 // 0- it's fake api (json-server) || 1 - Symfony API

const url = db ? 'https://127.0.0.1:8000/api/stations' : 'https://json-server.adib.now.sh/stations'

export default {
    GET_STATIONS({commit}) {
        return axios.get(url + '?isDelete=false')
            .then((res) => {
                commit('SET_STATIONS', db ? res.data['hydra:member'] : res.data)
                return res
            })
            .catch( error => console.log(error) )
    },
    GET_STATION({commit}, id){
        return axios.get(url + '/' + id)
            .then(res => {
                commit('SET_STATION', res.data)
                return res
            })
    },
    POST_STATION({commit}, station) {
        station.isDelete = false
        return axios.post(url, station)
            .then((res) => {
                commit('ADD_STATION', res.data)
                return res
            })
            .catch( error => console.log(error) )
    },
    UPDATE_STATION({commit}, station) {
        let  id = '/' + station.id
        return db
            ? axios.patch(url + id, station, {
                headers: {
                    'Content-Type': 'application/merge-patch+json'
                }
            })
            : axios.put(url + id, station)
                .then((res) => {
                    commit('UPDATE_STATION', res.data)
                    return res
                })
                .catch( error => console.log(error) )
    },
    DELETE_STATION({commit}, [index, id]) {
        let  idDel = '/' + id
        return db
            ? axios.patch(url + idDel, {"isDelete": true}, {
                headers: {
                    'Content-Type': 'application/merge-patch+json'
                }
            })
            : axios.put(url + idDel, {"isDelete": true})
                .then((res) => {
                    commit('DELETE_STATION', index)
                    return res
                })
                .catch( error => console.log(error) )
    },
}
