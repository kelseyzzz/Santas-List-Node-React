import express from 'express';
// not sure if i need this
import User from '../models/User';


const router = express.Router();

router.post('/', (req, res) => {
	const { name } = req.body.credentials;
	const user = new User({ name });
	user.save().then(userRecord => res.json({ userRecord: user.name }));
	
});


export default router;










// router.post('/', (req, res) => {
// 	const { credentials } = req.body;
// 	User.findOne({ name: credentials.name }).then(user => {
// 		if (user) {
// 			res.json({ user: { name: user.name });
// 		} else {
// 			res.status(400).json({ errors: { global: "Invalid credentials" } });
// 		}
// 	});
// });

// .catch(err =>
		// res.status(400).json({ errors: { global: "Invalid credentials" } });