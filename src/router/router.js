import Vue from 'vue'
import Router from 'vue-router'

import vStationCar from '../components/station-car/v-station-car'

import vStations from '../components/station/v-stations'
import vStationShow from '../components/station/v-station-show'
import vStationUpdate from '../components/station/v-station-update'

import vCars from '../components/car/v-cars'
import vCarShow from '../components/car/v-car-show'
import vCarUpdate from '../components/car/v-car-update'

Vue.use(Router)

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: vStationCar
        },
        /*Station Router*/
        {
            path: '/stations',
            name: 'stations',
            component: vStations
        },
        {
            path: '/stations/:id',
            name: 'stationShow',
            component: vStationShow
        },
        {
            path: '/station/update/:id',
            name: 'stationUpdate',
            component: vStationUpdate
        },
        {
            path: '/station/new',
            name: 'stationNew',
            component: vStationUpdate
        },
        /*Carrssss router*/
        {
            path: '/cars',
            name: 'cars',
            component: vCars
        },
        {
            path: '/cars/:id',
            name: 'carShow',
            component: vCarShow
        },
        {
            path: '/car/update/:id',
            name: 'carUpdate',
            component: vCarUpdate
        },
        {
            path: '/car/new',
            name: 'carNew',
            component: vCarUpdate
        }
    ],
    mode: 'history'
})

export default router