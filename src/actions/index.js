import axios from 'axios';

// const URL ='//login.auto27.us/api' 
const URL = 'http://ec2-52-52-42-92.us-west-1.compute.amazonaws.com:8080/api/auto27';
// const  URL = 'http://localhost:8080/api/auto27';


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

