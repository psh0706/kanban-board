import "../styles/BoardList.css";
import { ListCard } from "./ListCard";

export function BoardList() {
  const addBoardList = () => {
    console.log("addBoardList");
  };

  return (
    <>
      <div className="board-list">
        Board List 1
        <ListCard />
        <ListCard />
      </div>
      <div className="board-list">Board List 2</div>
      <div className="board-list">Board List 3</div>
      <button className="add-board-list-btn" onClick={addBoardList}>
        +
      </button>
    </>
  );
}
