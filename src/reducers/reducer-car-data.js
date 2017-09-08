export default function(state=[], action){
  switch (action.type){
    case "FETCH-ALL":
      return action.payload;
    default :
      return state;
  }
}