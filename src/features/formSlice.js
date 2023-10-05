import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  formData: [], // Initialize with an empty array
};

export const formSlice = createSlice({
  name: 'form',                            // name of the slice
  initialState,                            // initial state 
  reducers: {                              // object that will do the work
    submitForm: (state, action) => {
      state.formData.push(action.payload);
    },
    // In summary, when an action of type "submitForm" is dispatched in your Redux application, this reducer function is called. It takes the current state, appends the data from action.payload to the formData array, and updates the state accordingly.
    deleteFormEntry: (state, action) => {
      const indexToDelete = action.payload;                    //stored id that we recieved 
      state.formData.splice(indexToDelete, 1);                 //.splice removes the array at indextodelete, '1' means 1 array is deleted
    },
  },
})

// Action creators are generated for each case reducer function
export const { submitForm, deleteFormEntry } = formSlice.actions                //
export const selectFormData = (state) => state.form.formData;  //this function is exporting the formdata from the state

export default formSlice.reducer