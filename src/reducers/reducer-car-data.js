export default function(state=[], action){
  switch (action.type){
    case "FETCH-ALL":
      return action.payload.data;
    default :
      return state;
  }
}