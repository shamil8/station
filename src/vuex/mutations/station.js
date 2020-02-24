export default {
    SET_STATIONS: (state, stations) => {   // load stations
        state.stations = stations
    },
    SET_STATION: (state, station) => {     // load station, if they call this station direct url
        state.station = station
    },
    ADD_STATION: (state, station) => {      // Create a new station
        state.stations.push(station)
        state.newStation = {}
    },
    UPDATE_STATION: (state, station) => {      // Update a station
        state.stations = [
            ...state.stations.filter(element => element.id !== station.id),
            station
        ]
    },
    DELETE_STATION: (state, index) => {
        state.stations.splice(index, 1)
    }
}