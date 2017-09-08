import {combineReducers} from 'redux';
import carData from './reducer-car-data'

const rootReducer = combineReducers({
  cars:carData
})

export default rootReducer;