import axios from 'axios';

const URL ='https://server-car-web.herokuapp.com' 

export function fetchAllCars(){
  const req = axios.get(`${URL}/images`)

  return {
    type:'FETCH-ALL',
    payload:req
  }
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