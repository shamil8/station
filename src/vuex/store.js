import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
let store = new Vuex.Store({
    state: {
        stations: [],
        cars: []
    },
    mutations: {
        SET_STATIONS_TO_STATE: (state, stations) => {
            state.stations = stations
        }
    },
    actions: {
        GET_STATIONS_FROM_API({commit}) {
            let url = 'http://localhost:3000/stations'
            return axios.get(url)
                .then((stations) => {
                    commit('SET_STATIONS_TO_STATE', stations.data)
                    return stations
                })
                .catch( (error) => {
                    console.log(error)
                })
        }
    },
    getters: {
        STATIONS(state){
            return state.stations
        }
    }
})

export default store