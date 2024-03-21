import { IUser } from '../slice_type/user-slice.type'
import createSliceWithThunk from '../createSliceWithThunk'
import axios from 'axios'
interface IInitialState {
	currentUser: null | IUser
}
const initialState: IInitialState = {
	currentUser: null
}

const userSlice = createSliceWithThunk({
	name: 'user',
	initialState,
	reducers: ({ asyncThunk }) => ({
		getUser: asyncThunk(async (_, { rejectWithValue }) => {
			try {
				const { data } = await axios('')
				return data
			} catch (error) {
				return rejectWithValue(error)
			}
		}, {})
	})
})

export const userActions = userSlice.actions

export default userSlice.reducer
