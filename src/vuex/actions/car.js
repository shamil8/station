import axios from 'axios'

const url = 'http://localhost:3000/cars/'

export default {
    GET_CARS({commit}) {
        return axios.get(url)
            .then((res) => {
                commit('SET_CARS', res.data)
                return res
            })
            .catch( error => console.log(error) )
    },
    GET_CAR({commit}, id){
        return axios.get(url+ id)
            .then(res => {
                commit('SET_CAR', res.data)
                return res
            })
    },
    POST_CAR({commit}, car) {
        return axios.post(url, car)
            .then((res) => {
                commit('ADD_CAR', res.data)
                return res
            })
            .catch( error => console.log(error) )
    },
    UPDATE_CAR({commit}, car) {
        return axios.patch(url + car.id, car)
            .then((res) => {
                commit('UPDATE_CAR', res.data)
                return res
            })
            .catch( error => console.log(error) )
    },
    DELETE_CAR({commit}, [index, id]) {
        return axios.delete(url + id)
            .then((res) => {
                commit('DELETE_CAR', index)
                return res
            })
            .catch( error => console.log(error) )
    },
}