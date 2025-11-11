import { configureStore } from "@reduxjs/toolkit";

const dummmyRed = (state = {}) => state; //this is to hide error.//
const store = configureStore({
    reducer : {
        dummmy :dummmyRed
    }
});

export default store