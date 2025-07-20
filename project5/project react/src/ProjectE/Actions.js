export const setCurrentUser = (user) => {
    return {
        type: 'SET_CURRENT_USER',
        payload: user
    }
}
export const addUser = (users) => {
    return {
        type: 'ADD_USER',
        payload: users
    }
}
export const addRent=(rents)=>{
    return {
        type: 'ADD_RENT',
        payload: rents
    }
}
export const addReturn=(returns)=>{
    return {
        type: 'ADD_RETURNS',
        payload: returns
    }
}


export const addCar = (car) => {
    return {
        type: 'ADD_CAR',
        payload: car
    }
}
// export const removeCar = (id) => {
//     return {
//         type: 'DELETE_CAR',
//         payload:  state.filter(cars => cars.codeCars !== action.payload)}
       
// }
export const removeCar = (licenseNumber) => {
    return {
        type: 'REMOVE_CAR',
        payload: licenseNumber
    }
}
export const updateCarPrice = (carCode, price) => {
    return {
        type: 'UPDATE_CAR_PRICE',
        payload: { carCode, price }
    }
}
export const updateCarIsvacant = (carcode, isavaulable) => {
    return {
        type: 'UPDATE_CAR_ISVACANT',
        payload: { carcode, isavaulable }
    }
}

export const updateCarStatus = (carCode, status, rentDate, rentTime) =>{
    return {type: 'UPDATE_CAR_STATUS', payload: {carCode, status}}
}

