import React from 'react';
import { Link } from 'react-router-dom';



const NaughtyPage = () => (
  <div>
  	<h1> Naughty Page </h1>

  	<p> Feeling nicer? </p>
  	<Link to ="/HomePage"> Try again </Link>
  </div>
);

export default NaughtyPage;