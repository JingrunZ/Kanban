import React from "react";
import Card from "react-bootstrap/Card";
import "./Card.scss";
import { Draggable } from "react-beautiful-dnd";

function CardInfo({ title, text, id, index }) {
    const strId = String(id)
  return (
    <Draggable draggableId={strId} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <h4>Title</h4>
              <Card.Title contentEditable suppressContentEditableWarning={true}>{title}</Card.Title>
              <h4>Description</h4>
              <Card.Text contentEditable suppressContentEditableWarning={true}>{text}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      )}
    </Draggable>
  );
}

export default CardInfo;
