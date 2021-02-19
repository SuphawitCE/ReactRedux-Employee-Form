//Action Types
export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";


//Action Creator
export const incrementCounter = (xxx) => {
    console.log('INCREMENT_COUNTER',xxx) // check log action
    return {
        type: INCREMENT_COUNTER
    }
};

export const decrementCounter = () => ({
    type: DECREMENT_COUNTER
});


