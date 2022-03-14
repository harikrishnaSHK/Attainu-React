const redux = require("redux")

const counterReducer = (state = {count :3},action)=>{
    if(action.type==="increment"){
    
    
        return{
    
            count : state.count+1
            
            }
    }


    if(action.type === "decrement")
    {

     return{

        count : state.count-1
     }

    }
    
    return state
    
    
    
    }
//to store the data global state

const store  = redux.createStore(counterReducer)




const counterSubscriber = () =>{

let count = store.getState()

console.log(count)


}

store.subscribe(counterSubscriber)

store.dispatch({type:""})

store.dispatch({type:"increment"})

store.dispatch({type:"decrement"})


