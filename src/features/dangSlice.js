import { createSlice, createSelector } from '@reduxjs/toolkit'    

const initialState = {
  dangData: [] 
};

export const dangSlice = createSlice({
    name: 'dang',                           
    initialState,                          
    reducers: {                             
      submitDang: (state, action) => {
        state.dangData.push(action.payload);
      },
      deleteDang: (state, action) => {
        const indexToDelete = action.payload;      // id that we are recieving
        const objectIndex = state.dangData.findIndex(item => item.index === indexToDelete);        // finding the index at which the object has same index value inside  to that of payload 
        if (objectIndex !== -1) {
          state.dangData.splice(objectIndex, 1);                   
        }
      },
    },
  })

  export const { submitDang, deleteDang} = dangSlice.actions 

  const statedata = (state) => state.dang
  export const dangSelector = createSelector( [statedata] , (dangSelector) => dangSelector.dangData) 

  export default dangSlice.reducer