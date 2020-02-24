export default {
    CARS(state){
        return state.cars
    },
    CAR_ID: (state) => (id) => {
        if (isNaN(id)) {
            return state.newCar
        } else {
            let car = state.cars.find(car => car.id === id)
            return car || car !== undefined ? car : state.car
        }
    }
}