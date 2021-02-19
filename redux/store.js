import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from "redux-devtools-extension"

/*
function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("persist ", serializedState);
    } catch(e) {
        console.warn("saveToLocalStoage try-catch ", e);
    }
}

    // load string from localStarage and convert into an Object
    // invalid output must be undefined

function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem("persis");
        if(serializedState === null)    return undefined;
        else    return JSON.parse(serializedState);
    } catch(e) {
        console.warn("loadlFromLocalStorage try-catch ", e);
        return undefined;
    }
} */

  
const store = createStore(
    rootReducer,
    composeWithDevTools() 
    //loadFromLocalStorage() // localStorage
);

//store.subcribe(() => saveToLocalStorage(store.getState())); // localStorage

export default store;