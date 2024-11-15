import { createSlice } from '@reduxjs/toolkit';

interface RoomState {
  isCreated: boolean;
}

const initialState: RoomState = {
  isCreated: false
};

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    createRoom: (state: RoomState) => {
      state.isCreated = true;
    }
  }
});

export const { createRoom } = roomSlice.actions;
export default roomSlice.reducer;
