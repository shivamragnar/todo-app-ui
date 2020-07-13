import React from "react";
import "./_style.css";

const AddToDoInput = () => {
	return (
        <div className="w-50 d-flex align-items-center mx-auto todo-input-container mb-50">
			<input type="text" className="todo-input" placeholder="Take a note..." maxLength={256}/>
		</div>
	);
};

export default AddToDoInput;
