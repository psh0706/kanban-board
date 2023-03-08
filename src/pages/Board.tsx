import { BoardList } from "./BoardList";
import "../styles/Board.css";

export function Board() {
  const addBoardList = () => {
    console.log("addBoardList");
  };

  return (
    <>
      <div className="title">Board</div>
      <div className="board-list-container">
        {/* lists */}
        <BoardList title={"list 1"} />
        <BoardList title={"list 2"} />

        {/* add list button */}
        <button className="add-board-list-btn" onClick={addBoardList}>
          +
        </button>
      </div>
    </>
  );
}
