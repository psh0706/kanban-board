import "../styles/BoardList.css";
import { BoardListProps } from "../common";

export function BoardList({ id, title, entities }: BoardListProps) {
  return <div className="board-list">{title}</div>;
}
