import axios from 'axios';


export default {
	user: {
		checking: (credentials) => 
			axios.post('/api/auth', { credentials }).then(res => res.data.user)
	}
};