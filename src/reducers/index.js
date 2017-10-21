import {combineReducers} from 'redux';
import carData from './reducer-car-data';
import customerImages from './reducer-customer-images';

const rootReducer = combineReducers({
  cars:carData,
  customers:customerImages
})

export default rootReducer;