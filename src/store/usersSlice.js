import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	users: [],
	searchUsers: {
		default: [],
		alphabet: [],
		birthday: [],
	},
	cacched: [],
};

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setUsers: (state, action) => {
			state.users = [...action.payload];
		},
	},
});

export const { setUsers, setError } = usersSlice.actions;

export default usersSlice.reducer;
