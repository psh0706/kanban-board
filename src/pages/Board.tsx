import { BoardList } from "./BoardList";
import { TEMP_DATA } from "../common";
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
        {TEMP_DATA.map((boardList) => (
          <BoardList key={boardList.id} {...boardList} />
        ))}

        {/* add a new list */}
        <button className="add-board-list-btn" onClick={addBoardList}>
          +
        </button>
      </div>
    </>
  );
}
