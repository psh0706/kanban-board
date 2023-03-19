import "../styles/BoardList.css";
import { BoardListProps } from "../common";
import { ListCard } from "./ListCard";
import { Droppable } from "react-beautiful-dnd";

export function BoardList({ id, title, entities }: BoardListProps) {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div
          key={id}
          className="board-list"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {title}
          {entities.map(({ id, title, description }, index) => (
            <ListCard
              id={id}
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
