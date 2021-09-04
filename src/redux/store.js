import { DailyReportFetchReducer } from "./DailyReport/DailyReportReducer";
import { DailyReportSearchReducer } from "./DailyReport/DailyReportReducer";
import CelsiusFahrenheitReducer from "./CelsiusFahrenheit/CelsiusFahrenheitReducer";
import {applyMiddleware, combineReducers} from "redux"
import { createStore } from "redux";
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
    place : DailyReportSearchReducer,
    placeData: DailyReportFetchReducer,
    celsiusFahrenheit:CelsiusFahrenheitReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk))

export default store