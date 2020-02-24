export default {
    SET_CARS: (state, stations) => {
        state.cars = stations
    },
    ADD_CAR: (state, station) => {
        state.cars.push(station)
        state.newCar = {}
    },
    UPDATE_CAR: (state, car) => {
        state.cars = [
            ...state.cars.filter(element => element.id !== car.id),
            car
        ]
    },
    SET_CAR: (state, station) => {
        state.car = station
    },
    DELETE_CAR: (state, index) => {
        state.cars.splice(index, 1)
    }
}