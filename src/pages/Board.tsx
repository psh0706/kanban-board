import { BoardList } from "./BoardList";
import { TEMP_DATA } from "../common";
import "../styles/Board.css";
import { DragDropContext } from "react-beautiful-dnd";

export function Board() {
  const addBoardList = () => {
    console.log("addBoardList");
  };

  const onDragEnd = () => {
    /* 드래그를 마치고 해야할 일 -> 순서 변경
    
    drag 한 아이템이 어느곳에 놓였는지 정보를 가져와 순서를 재정렬

    1. 드래그한 아이템의 id를 가져온다.
    2. 드래그한 아이템의 위치를 가져온다.
    3. 드래그한 아이템의 위치를 변경한다.
    4. 드래그한 아이템의 위치를 변경한 데이터를 저장한다.
    */
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
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
    </DragDropContext>
  );
}
