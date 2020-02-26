import axios from "axios"

const url = 'https://127.0.0.1:8000/api/stations'
// const url = 'http://localhost:3000/api/stations'

export default {
    GET_STATIONS({commit}) {
        return axios.get(url + '?isDelete=false')
            .then((res) => {
                commit('SET_STATIONS', res.data['hydra:member'])
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
        return axios.post(url, station)
            .then((res) => {
                commit('ADD_STATION', res.data)
                return res
            })
            .catch( error => console.log(error) )
    },
    UPDATE_STATION({commit}, station) {
        let  id = '/' + station.id
        return axios.patch(url + id, station,{
            headers: {
                'Content-Type': 'application/merge-patch+json'
            }
        })
            .then((res) => {
                commit('UPDATE_STATION', res.data)
                return res
            })
            .catch( error => console.log(error) )
    },
    DELETE_STATION({commit}, [index, id]) {
        let  idDel = '/' + id
        return axios.patch(url + idDel,{"isDelete": true}, {
            headers: {
                'Content-Type': 'application/merge-patch+json'
            }
        })
            .then((res) => {
                commit('DELETE_STATION', index)
                return res
            })
            .catch( error => console.log(error) )
    },
}