import React from 'react'
import "./Kanban.scss";
import CardInfo from "../Card/Card";
import { useDispatch } from "react-redux";
import { addCard } from "../action/index";
import { Droppable } from "react-beautiful-dnd";
import Button from "react-bootstrap/Button";

function Kanban({title,cards,colId,listID}) {
    //const state = useSelector((state) => state.handleData)
    console.log(cards)
    //console.log(listID)

    const dispatch = useDispatch()
    const handleAddCard = (title,text,listID) => {
        dispatch(addCard(title,text,listID))
    }
    return (
        <Droppable droppableId={String(colId)}>
            {(provided)=>(
                <div {...provided.droppableProps} ref={provided.innerRef} className="board" >
                    <h3 contentEditable suppressContentEditableWarning={true}>{title}</h3>
                    {cards.map((card,index)=>(
                    <CardInfo 
                        key={card.id}
                        index={index} 
                        title={card.title} 
                        text={card.text} 
                        id={card.id}
                    />
                    ))}
                    {provided.placeholder}
                    <button className="btn" onClick={() => handleAddCard("Edit Here","Edit Here",listID)}>add</button>
                </div>  
            )}
        </Droppable>
    )
}



export default Kanban;
