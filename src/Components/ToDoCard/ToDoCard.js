import React, {useState} from "react";

import "./_style.css";

const ToDoCard = (props) => {
    const [showToolbar, setShowToolbar] = useState(false)
    const [showDeleteConfirmation, setShowDelelteConfirmation] = useState(false)
    const [showTextToolBar, setShowTextToolBar] = useState(false)
    const [cardValue, setCardValue] = useState("Hello this is a card !!")

    const handleMouseEnter = () => {
        setShowToolbar(true)
    }
    const handleMouseLeave = () => {
        setShowToolbar(false)
    }

    const handleClickEdit = (status) => {
        setShowTextToolBar(status)
        handleMouseLeave()
    }

    const handleClickDelete = (status) => {
        setShowDelelteConfirmation(status)
        handleMouseLeave()
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
            {
                showTextToolBar 
                ? 
                <input className="card-edit-box" type="text" value={cardValue} onChange={(e) => setCardValue(e.target.value)} /> 
                : 
                <div className="card-text">{cardValue}</div>
                }
            {
                !showTextToolBar && !showDeleteConfirmation
                ?
                <div className={`card-toolbar ${showToolbar ? 'visible' : 'invisible' }`}>
                    <button className="btn btn-circle" onClick={() => handleClickDelete(true)}>
                        <i className="far fa-trash-alt"></i>
                    </button>
                    <button className="btn btn-circle" onClick={() => handleClickEdit(true)}>
                        <i className="fas fa-pencil-alt"></i>
                    </button>
                    <button className="btn btn-circle">
                        <i className="far fa-check-square"></i>
                    </button>
                </div>
                :null

            }
            {
                showTextToolBar
                ?
                <div className="text-toolbar">
                    <button type="button" class="btn btn-light mr-10" onClick={() => handleClickEdit(false)}>Cancel</button>
                    <button type="button" class="btn btn-primary" onClick={() => handleClickEdit(false)}>Save!</button>
                </div>
                :null
            }
            {
                showDeleteConfirmation
                ?
                <div className="text-toolbar">
                    <button type="button" class="btn btn-light mr-10" onClick={() => handleClickDelete(false)}>Cancel</button>
                    <button type="button" class="btn btn-danger" onClick={() => handleClickDelete(false)}>Delete</button>
                </div>
                :null
            }
		</div>
	);
};

export default ToDoCard;
