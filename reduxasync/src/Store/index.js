import {createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"


export const initialState = {

 fetchedData :[],
 message:""

}


function reducer(state = initialState,action){



 if(action.type ==="fetchComplete"){

     return {...state, fetchedData:action.payload}


 }

 if(action.type === "FetchError"){


     return{...state,message:action.message}
 }

 return state


}


export const fetchData =() =>{

    return (dispatch,getState) =>{

        return fetch("https://jsonplaceholder.typicode.com/users")
               .then(res=>res.json())
               .then(json =>{
          
                dispatch({type:"fetchComplete",payload:json})

                if(!json.length>0){
                    
                    dispatch({type:"FetchError" , message :" error in fetching the data "})
                }

               })
               .catch(err=>{

                 
               })




    }



}




const store = createStore(reducer,applyMiddleware(thunk))




export default store