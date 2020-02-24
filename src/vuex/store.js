import Vue from 'vue'
import Vuex from 'vuex'

import mutationsStation from './mutations/station'
import mutationsCar from './mutations/car'
import mutationsCarStation from './mutations/car-station'

import actionStation from './actions/station'
import actionCar from './actions/car'
import actionCarStation from './actions/car-station'

import gettersStation from './getters/station'
import gettersCar from './getters/car'
import gettersCarStation from './getters/car-station'

Vue.use(Vuex)
const station = {
    state: {
        stations: [],
        station: {},
        newStation: {},
    },
    mutations: mutationsStation,
    actions: actionStation,
    getters: gettersStation
}
const car = {
    state: {
        cars: [],
        car: {},
        newCar: {},
    },
    mutations: mutationsCar,
    actions: actionCar,
    getters: gettersCar
}
const carStation = {
    state: {
        carStation: [],
    },
    mutations: mutationsCarStation,
    actions: actionCarStation,
    getters: gettersCarStation
}
let store = new Vuex.Store({
    modules: {
        station,
        car,
        carStation
    }
})

export default store