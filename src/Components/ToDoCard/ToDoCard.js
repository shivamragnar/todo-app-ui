import React, {useState} from "react";

import "./_style.css";

const ToDoCard = (props) => {
    const [showToolbar, setShowToolbar] = useState(false)

    const handleMouseEnter = () => {
        setShowToolbar(true)
    }
    const handleMouseLeave = () => {
        setShowToolbar(false)
    }

    const additionalClass = props.card.failed ? "failed" : props.card.disabled ? "disabled" : props.card.completed ? "completed" : ""
	return (
		<div className={`card-container ${additionalClass}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {
                props.card.disabled 
                ?
                <div className="overlay"></div>
                : null
            }
			<div className="card-text">Hello this is a card !!</div>
			<div className={`card-toolbar ${showToolbar ? 'visible' : 'invisible' }`}>
				<button className="btn btn-circle">
					<i className="far fa-trash-alt"></i>
				</button>
				<button className="btn btn-circle">
					<i className="fas fa-pencil-alt"></i>
				</button>
				<button className="btn btn-circle">
					<i className="far fa-check-square"></i>
				</button>
				{/* <button className="btn btn-circle">
					<i className="fa fa-thumbtack"></i>
				</button> */}
			</div>
		</div>
	);
};

export default ToDoCard;
