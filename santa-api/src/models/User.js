import mongoose from 'mongoose';
// import jwt from 'jsonwebtoken';


const schema = new mongoose.Schema(
	{
	  name: { type: String, required: true, lowercase: true, index: true }
	} 
);


// schema.methods.generateJWT = function generateJWT() {
// 	return jwt.sign(
// 	  {
// 		name: this.name
// 	  }
// 	);
// };


// schema.methods.toAuthJSON = function toAuthJSON() {
// 	return {
// 		name: this.name,
// 		token: this.generateJWT()
// 	};
// };

export default mongoose.model('User', schema);