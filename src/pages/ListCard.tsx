import { Draggable } from "react-beautiful-dnd";
import { CardProps } from "../common";
import "../styles/ListCard.css";

export function ListCard({
  cardId,
  title,
  description,
  index,
}: CardProps & { index: number }) {
  return (
    <Draggable key={cardId} draggableId={cardId} index={index}>
      {(provided) => (
        <div
          className="card-container"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="card-header">{title}</div>
          <div className="card-body">
            <div className="card-content">{description}</div>
          </div>
        </div>
      )}
    </Draggable>
  );
}
