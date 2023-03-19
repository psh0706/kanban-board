import "../styles/BoardList.css";
import { BoardListProps } from "../common";
import { ListCard } from "./ListCard";
import { Droppable } from "react-beautiful-dnd";

export function BoardList({ listId, title, entities }: BoardListProps) {
  return (
    <Droppable key={listId} droppableId={listId}>
      {(provided) => (
        <div
          className="board-list"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {title}
          {entities.map(({ cardId, title, description }, index) => (
            <ListCard
              key={cardId}
              cardId={cardId}
              title={title}
              description={description}
              index={index}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
