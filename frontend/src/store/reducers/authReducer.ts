import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CreateUserState {
  user_email: string;
  user_name: string;
  user_password: string;
  company_code: string;
  account_description: string;
}

interface AuthState {
  createUser: CreateUserState;
  isAuth: boolean;
}

interface UpdateUserDto {
  name: keyof CreateUserState;
  value: string;
}

const initialState: AuthState = {
  createUser: {
    user_email: '',
    user_name: '',
    user_password: '',
    company_code: '',
    account_description: ''
  },
  isAuth: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateCreateUser: (
      state: AuthState,
      action: PayloadAction<UpdateUserDto>
    ) => {
      state.createUser[action.payload.name] = action.payload.value;
    },
    userLogin: (state: AuthState) => {
      state.isAuth = true;
    }
  }
});

export const { updateCreateUser, userLogin } = authSlice.actions;
export default authSlice.reducer;
