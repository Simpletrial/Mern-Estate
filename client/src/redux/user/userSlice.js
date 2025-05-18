// import { createSlice } from '@reduxjs/toolkit'; 

// const initialState = {
//   currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,
//   error: null,
//   loading: false,
// };

  
//   const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//       signInStart: (state) => {
//         state.loading = true;
//       },
//       signInSuccess: (state, action) => {
//         state.currentUser = { 
//           ...action.payload,
//           avatar: action.payload.photoURL || '', // Ensure the avatar is set
//         };
//         state.loading = false;
//         state.error = null;
//         localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
//       },      
//       signInFailure: (state, action) => {
//         state.error = action.payload;
//         state.loading = false;
//       },
//       updateUserStart: (state) => {
//         state.loading = true;
//       },
//       updateUserSuccess: (state, action) => {
//         state.currentUser = {
//           ...action.payload,
//           avatar: action.payload.photoURL || action.payload.avatar || '',
//         };
//         state.loading = false;
//         state.error = null;
//         localStorage.setItem('currentUser', JSON.stringify(state.currentUser));      
//       },
//       updateUserFailure: (state, action) => {
//         state.error = action.payload;
//         state.loading = false;
//       },
//       deleteUserStart: (state) => {
//         state.loading = true;
//       },
//       deleteUserSuccess: (state) => {
//         state.currentUser = null;
//         state.loading = false;
//         state.error = null;
//       },
//       deleteUserFailure: (state, action) => {
//         state.error = action.payload;
//         state.loading = false;
//       },
//       signOutUserStart: (state) => {
//         state.loading = true;
//       },
//       signOutUserSuccess: (state) => {
//         state.currentUser = null;
//         state.loading = false;
//         state.error = null;
//         localStorage.removeItem('currentUser');

//       },
//       signOutUserFailure: (state, action) => {
//         state.error = action.payload;
//         state.loading = false;
//       },
//     },
// });

// export const { signInStart, signInSuccess, signInFailure, 
//     updateUserFailure, updateUserSuccess, updateUserStart,
//     deleteUserFailure, deleteUserSuccess, deleteUserStart,
//     signOutUserFailure, signOutUserSuccess, signOutUserStart} = userSlice.actions;

// export default userSlice.reducer;          


import { createSlice } from '@reduxjs/toolkit'; 

const initialState = {
  currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,
  error: null,
  loading: false,
};

  
  const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      signInStart: (state) => {
        state.loading = true;
      },
      signInSuccess: (state, action) => {
        state.currentUser = { 
          ...action.payload,
          avatar: action.payload.avatar || "https://lh3.googleusercontent.com/a/ACg8ocI-u2Qdmx6Ndx266_zYu4QJKkQyvG_Z9cmY8X0YRL8XJb_iFOe1pg=s96-c" , // Ensure the avatar is set
        };
        state.loading = false;
        state.error = null;
        localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
      },      
      signInFailure: (state, action) => {
        state.error = action.payload;
        state.loading = false;
      },
      updateUserStart: (state) => {
        state.loading = true;
      },
      updateUserSuccess: (state, action) => {
        state.currentUser = {
          ...action.payload,
          avatar: action.payload.photoURL || action.payload.avatar || '',
        };
        state.loading = false;
        state.error = null;
        localStorage.setItem('currentUser', JSON.stringify(state.currentUser));      
      },
      updateUserFailure: (state, action) => {
        state.error = action.payload;
        state.loading = false;
      },
      deleteUserStart: (state) => {
        state.loading = true;
      },
      deleteUserSuccess: (state) => {
        state.currentUser = null;
        state.loading = false;
        state.error = null;
      },
      deleteUserFailure: (state, action) => {
        state.error = action.payload;
        state.loading = false;
      },
      signOutUserStart: (state) => {
        state.loading = true;
      },
      signOutUserSuccess: (state) => {
        state.currentUser = null;
        state.loading = false;
        state.error = null;
        localStorage.removeItem('currentUser');

      },
      signOutUserFailure: (state, action) => {
        state.error = action.payload;
        state.loading = false;
      },
    },
});

export const { signInStart, signInSuccess, signInFailure, 
    updateUserFailure, updateUserSuccess, updateUserStart,
    deleteUserFailure, deleteUserSuccess, deleteUserStart,
    signOutUserFailure, signOutUserSuccess, signOutUserStart} = userSlice.actions;

export default userSlice.reducer;          