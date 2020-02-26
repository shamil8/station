import axios from 'axios'

const url = 'https://127.0.0.1:8000/api/cars'
// const url = 'http://localhost:3000/cars/'

export default {
    GET_CARS({commit}) {
        return axios.get(url + '?isDelete=false')
            .then((res) => {
                commit('SET_CARS', res.data['hydra:member'])
                return res
            })
            .catch( error => console.log(error) )
    },
    GET_CAR({commit}, id){
        return axios.get(url + '/' + id)
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
        let  id = '/' + car.id
        return axios.patch(url + id, car,{
            headers: {
                'Content-Type': 'application/merge-patch+json'
            }
        })
            .then((res) => {
                commit('UPDATE_CAR', res.data)
                return res
            })
            .catch( error => console.log(error) )
    },
    DELETE_CAR({commit}, [index, id]) {
        let  idDel = '/' + id
        return axios.patch(url + idDel,{"isDelete": true}, {
            headers: {
                'Content-Type': 'application/merge-patch+json'
            }
        })
            .then((res) => {
                commit('DELETE_CAR', index)
                return res
            })
            .catch( error => console.log(error) )
    },
}