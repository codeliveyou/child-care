import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AdminState {
  isAuth: boolean;
  email: string
}

const initialState: AdminState = {
  isAuth: false,
  email: ''
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    adminLogin: (state: AdminState) => {
      state.isAuth = true;
    },
    updateEmail: (state: AdminState, action: PayloadAction<string>) => {
      state.email = action.payload;
    }
  }
});

export const { updateEmail, adminLogin } = adminSlice.actions;
export default adminSlice.reducer;
