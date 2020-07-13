import React from "react";
import SidePanel from "../SidePanel/SidePanel";
import AddToDoInput from "../AddToDoInput/AddToDoInput";
import ToDoCard from "../ToDoCard/ToDoCard";

const cards = [{disabled: true}, {active: true}, {completed: true}, {failed: true}];

const AppContainer = () => {
	return (
		<div className="container-fluid d-flex">
			<SidePanel />
			<div className="w-100 d-flex flex-column align-items-center">
				<AddToDoInput />
				<div className="w-100 d-flex flex-wrap">
					{cards.map((card) => (
						<ToDoCard card={card}/>
					))}
				</div>
			</div>
		</div>
	);
};

export default AppContainer;
