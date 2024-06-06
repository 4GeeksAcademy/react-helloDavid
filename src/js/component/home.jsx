import React from "react";

//include images into your bundle
import Navbar from './navbar'
import Jumbotron from './jumbotron'
import Card from './card'
import Footer from './footer'
//create your first component
const Home = () => {
	return (
		<div className="">
			<Navbar/>
		<div className="ms-2 me-2">
			<Jumbotron/>
		</div>	
			
		<div className="container my-4 p-0">
         <div className="row">
			<Card />
		    <Card />
			<Card />
			<Card />
		</div>
	
			</div>
			<Footer/>
		
		</div>
	);
};

export default Home;
