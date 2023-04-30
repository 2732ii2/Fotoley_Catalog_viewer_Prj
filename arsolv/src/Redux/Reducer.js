// import { P } from "pdf-parser/lib/pdf";



const intial_state=0;
const Reducer_func= (state=intial_state,action)=>{
    if (action.type === "incre") {
        if(state<=3)
        {
            return state + 1;
        }
        else{
            return state=0;
        }
    } else if (action.type === "decre") {
      if (state > 0) {
        return state - 1;
      }
      else{
            return state=4;
      }
    } else {
      return state;
    }
}
export default Reducer_func