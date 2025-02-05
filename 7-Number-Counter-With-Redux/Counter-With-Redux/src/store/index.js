import {createStore} from 'redux';

const INITIAL_STATE={
  counter:0
}


const counterReducer=(store=INITIAL_STATE,action)=>{

if(action.type === "INCREMENT"){
  return {counter : store.counter+1}
}else if(action.type ==="DECREMENT"){
  return {counter:store.counter-1}
}

  return store;
}

const CounterStore=createStore(counterReducer);

export default CounterStore;