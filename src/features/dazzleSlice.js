import { createSlice, createSelector } from '@reduxjs/toolkit'    

const initialState = {
  dazData: [] 
};

export const dazzleSlice = createSlice({
    name: 'dazzle',                           
    initialState,                          
    reducers: {                             
      submitCheck: (state, action) => {
        state.dazData.push(action.payload);
      },
      deleteCheck: (state, action) => {
        const indexToDelete = state.dazData.indexOf(action.payload);            // jo value ayi uska index find kiya (waise har baar last hi hoga)
        if (indexToDelete !== -1) {                                             
          state.dazData.splice(indexToDelete, 1);                              // splice kar diya us index ko
        }
      },
    },
  })

  export const { submitCheck, deleteCheck} = dazzleSlice.actions 

  const statedata = (state) => state.dazzle
  export const dazSelector = createSelector( [statedata] , (dazSelector) => dazSelector.dazData) 

  export default dazzleSlice.reducer