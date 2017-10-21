import axios from 'axios';

// const URL ='//login.auto27.us/api' 
const  URL = 'http://localhost:8080/api/';


export function fetchAllCars(){
  const req = axios.get(`${URL}/cars`)
  return {
    type:'FETCH-CARS',
    payload:req
  }
}

export function sendEmail(data){
  const req = axios.post(`${URL}/sendemail`,data);
  return;
}

export function fetchCustomerImages(){
  const req = axios.get(`${URL}/customers`);
  return {
    type:'FETCH-CUSTOMERS',
    payload:req
  }
}

