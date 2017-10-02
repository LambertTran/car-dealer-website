import axios from 'axios';

const URL ='https://server-car-web.herokuapp.com/api' 

export function fetchAllCars(callback){
  const req = axios.get(`${URL}/cars`)

  return {
    type:'FETCH-ALL',
    payload:req
  }
}

export function sendEmail(data){
  const req = axios.post(`${URL}/sendemail`,data);
  return;
}


/*export function UploadCar(data){
  console.log(data)
  const req = axios.post(`${URL}/images`,data)
    .then(() => console.log('yes'));
  
  return {
    type:'UPLOAD',
    payload:req
  }
}*/