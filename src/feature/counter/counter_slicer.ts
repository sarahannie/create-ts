import { createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CounterState {
    value:number;
}


const initialState : CounterState ={
    value:0
}

const counterSlice = createSlice({
    name:"COUNTER",
    initialState,
    reducers:{
        //Increment
        Incremented(state){
            // we can munitate the state because of immer which is in redux but not found in the react.
            state.value++
        },
        //decrement
        amountIncrement(state, action:PayloadAction<number>){
            state.value += action.payload;
        },
        //reset
        reset(state){
            state.value == 0
        }
    }
})

export const { Incremented, amountIncrement } = counterSlice.actions
export default counterSlice.reducer