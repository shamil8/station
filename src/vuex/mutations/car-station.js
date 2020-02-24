export default {
    SET_CAR_STATION: (state, carStation) => {
        state.carStation = carStation
    },
    ADD_CAR_STATION: (state, carStation) => {
        state.carStation.push(carStation)
    },
}