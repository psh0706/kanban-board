import "../styles/BoardList.css";
import { BoardListProps } from "../common";
import { ListCard } from "./ListCard";

export function BoardList({ id, title, entities }: BoardListProps) {
  return (
    <div className="board-list">
      {title}
      {entities.map(({ id, title, description }) => (
        <ListCard id={id} title={title} description={description} />
      ))}
    </div>
  );
}
