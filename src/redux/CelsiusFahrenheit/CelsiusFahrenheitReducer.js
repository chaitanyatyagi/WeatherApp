
const CelsiusFahrenheitReducer = (state = true,action) => {
    switch(action.type){
        case 'CelsiusFahrenheit':
            return true
        case 'FahrenheitCelsius':
            return false
        default:
            return state
    }
}

export default CelsiusFahrenheitReducer