export default {
    STATIONS(state){
        return state.stations
    },
    STATION_ID: (state) => (id) => {
        if (isNaN(id)) {
            return state.newStation
        } else {
            let station = state.stations.find(station => station.id === id)
            return station || station !== undefined ? station : state.station
        }
    }
}