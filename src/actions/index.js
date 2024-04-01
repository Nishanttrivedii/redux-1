// import { createStore, applyMiddleware, combineReducers } from "redux";
// import {logger} from "redux-logger";
// import axios from "axios";
// import {thunk} from 'redux-thunk';
// import { accountReducer } from "../reducers/accountReducer";
// import { bonusReducer } from '../reducers/bonusReducer';
// export const history = [];
// export const inc = "accounts/increment";
// export const dec = "accounts/decrement";
// export const byAmt = "account/changeByAmount";
// export const incBonus="bonus/increment"
// export const getAccUserPending='account/getUser/pending';
// export const getAccUserFulfilled='account/getUser/fulllfilled';
// export const getAccUserRejected='account/getUser/rejected';
// //Action Creators
// //now we just have created a function for the type increment and we call that function when we are dispatching


// export const increment=()=>{
//     return { type:inc};
//   }
  
//   export const decrement=()=>{
//     return {type:dec};
//   }
  
//   export const increaseByAmount=(value)=>{  
//     return {type:byAmt,payload:value}
//   }
  
  
  
//   //now instead of using the previous method we will use api call
  
//   export async function getUser(){
//     const data=await axios.get('http://localhost:3000/accounts/1')
//     console.log(data);
//   }
//   export const getAccountUserFulfilled=(value)=>{
//     return {type:getAccUserFulfilled,payload:value,pending:false}
//   }
//   export const getAccountUserPending=()=>{
//     return {type:getAccUserPending}
//   }
//   export const getAccountUserRejected=(error)=>{
//     return {type:getAccUserRejected,error:error,pending:false}
//   }


//   export function getUserAccount(id){
//     return async(dispatch,getState)=>{
//      try{
//       dispatch(getAccountUserPending());
//       const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
//       dispatch(getAccountUserFulfilled(data.amount))
//      }
//      catch(error){
//       dispatch(getAccountUserRejected(error.message))
//      }
//     }
//   }
import axios  from 'axios';

//action constants
export const inc = "accounts/increment";
export const dec = "accounts/decrement";
export const byAmt = "account/changeByAmount";
export const incBonus="bonus/increment"
export const getAccUserPending='account/getUser/pending';
export const getAccUserFulfilled='account/getUser/fulllfilled';
export const getAccUserRejected='account/getUser/rejected';



//action creators
export const getAccountUserFulfilled=(value)=>{
  debugger
    return {type:getAccUserFulfilled,payload:value,pending:false}
    debugger
  }
  export const getAccountUserPending=()=>{
    return {type:getAccUserPending}
  }
  export const getAccountUserRejected=(error)=>{
    return {type:getAccUserRejected,error:error,pending:false}
  }

  export const increment=()=>{
    return { type:inc};
  }
  export const increaseByAmount=(value)=>{
    return {type:byAmt,payload:value}
  }
  
  export const increaseBonus=()=>{
    return {type:incBonus}
  }
  
  
  export const decrement=()=>{
    return { type:dec};
  }
  


  export function getUserAccount(id){
    return async(dispatch,getState)=>{
     try{
      dispatch(getAccountUserPending());
      const { data } = await axios.get(`http://localhost:8080/accounts/${id}`);
  
      dispatch(getAccountUserFulfilled(data.amount))
      console.log(data.amount);
      debugger
     }
     catch(error){
      dispatch(getAccountUserRejected(error.message))
     }
    }
  }