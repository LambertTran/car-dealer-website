export default function(state=[], action){
  switch (action.type){
    case "FETCH-CUSTOMERS":
      return action.payload.data;
    default :
      return state;
  }
}