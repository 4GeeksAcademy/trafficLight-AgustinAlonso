import React, { useState } from "react";
import Luz from "./luz";

//create your first component
const TrafficLight = () => {

	const [currentColor, setCurrentColor] = useState("rojo")

	function changeColor(color) {
		setCurrentColor(color)
	}

	return (
		<div className="container">
			<div className="row justify-content-center mt-5">
				<div className="card bg-dark" style={{ width: "7rem" }}>
					<ul className="list-group list-group-flush">
						<Luz color="rojo" onClick={() => changeColor("rojo")} currentColor={currentColor}/>
						<Luz color="amarillo" onClick={() => changeColor("amarillo")} currentColor={currentColor}/>
						<Luz color="verde" onClick={() => changeColor("verde")} currentColor={currentColor}/>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default TrafficLight;
