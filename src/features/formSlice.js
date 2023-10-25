import { createSlice, createSelector } from '@reduxjs/toolkit'

const initialState = {
  formData: [], // Initialize with an empty array
  idCounter: 1
};

export const formSlice = createSlice({
  name: 'form',                            // name of the slice
  initialState,                            // initial state 
  reducers: {                              // object that will do the work
    // submitForm: (state, action) => {
    //   state.formData.push(action.payload);
    // },
    submitForm: (state, action) => {
      const newUserData = {
        id: state.idCounter,
        ...action.payload,
      };
      state.idCounter += 1;
      state.formData.push(newUserData);
    },
    submitData: (state, action) => {
      state.formData.push(action.payload);
    },
    // In summary, when an action of type "submitForm" is dispatched in your Redux application, this reducer function is called. It takes the current state, appends the data from action.payload to the formData array, and updates the state accordingly.
    deleteFormEntry: (state, action) => {
      const indexToDelete = action.payload;                    //stored id that we recieved 
      state.formData.splice(indexToDelete, 1);                 //.splice removes the array at indextodelete, '1' means 1 array is deleted
    },
    updateFormData: (state, action) => {
      // Find the index of the data to update
      const indexToUpdate = state.formData.findIndex(
        (data) => data.id === action.payload.id
      );

      if (indexToUpdate !== -1) {
        // Update the data in the array
        state.formData[indexToUpdate] = action.payload;
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { submitForm, submitData, deleteFormEntry, updateFormData } = formSlice.actions                //exporing them so that we can dispatch data through them

const statedata = (state) => state.form                  //this function is exporting the formdata from the state and the name could be anything
export const dataSelector = createSelector([statedata], (dataSelector) => dataSelector.formData)         // using cfeatesector to store state data in dataselector,   jo data state data me tha wo sataselector me daal diya is liye uske age .formdata bhi likh diya 
// create selector is dependent on statedata if it changes only them it will run and then component will re render 
export default formSlice.reducer