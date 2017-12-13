import { CHECKED_NICE } from '../types';

export default function user(state = {}, action = {}) {
	switch(action.type) {
		case CHECKED_NICE: 
		  return action.user;
		default: 
			return state;
	}
};