import { BoardList } from "./BoardList";
import "../styles/Board.css";

export function Board() {
  return (
    <>
      <div className="title">Board</div>
      <div className="board-container">
        <BoardList />
      </div>
    </>
  );
}
