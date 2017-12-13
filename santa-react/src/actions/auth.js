import { CHECKED_NICE } from '../types';
import api from '../api';



export const checkedNice = (user) => ({
	type: CHECKED_NICE,
	user

})

export const checking = (credentials) => (dispatch) =>
 api.user.checking(credentials).then(user => dispatch(checkedNice(user)));




 