import { dec ,byAmt} from "../actions";
import { getAccUserRejected } from "../actions";
import { getAccUserPending } from "../actions";
import { getAccUserFulfilled } from "../actions";
export function accountReducer(state = { amount: 1 }, action) {


    switch (action.type) {
      case getAccUserFulfilled:
        return { amount: state.amount + 1 };
  
      case getAccUserRejected:
        
        return{         
            ...state,error:action.error}; 
  
      case getAccUserPending:
        return  {...state,pending:true};
         
             
            
            
            //we can also send error through action
  
      case dec:
        return { amount: state.amount - 1 };
  
      case byAmt:
        return { amount: state.amount + action.payload };
        
  
      default:
        return state;
    }
  
  }
  