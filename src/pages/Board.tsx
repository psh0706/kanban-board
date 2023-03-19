import { BoardList } from "./BoardList";
import { TEMP_DATA } from "../common";
import "../styles/Board.css";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

export function Board() {
  const addBoardList = () => {
    console.log("addBoardList");
  };

  function onDragEnd(result: DropResult): void {
    const { destination, source, draggableId } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    // dropped in the same place
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const startColumn = TEMP_DATA.find(
      (list) => list.listId === source.droppableId
    );
    const finishColumn = TEMP_DATA.find(
      (list) => list.listId === destination.droppableId
    );

    // dropped in the same list
    if (startColumn && finishColumn && startColumn === finishColumn) {
      const movedCard = startColumn.entities.find(
        (card) => card.cardId === draggableId
      );

      if (movedCard) {
        startColumn.entities.splice(source.index, 1);
        startColumn.entities.splice(destination.index, 0, movedCard);

        TEMP_DATA.forEach((list) => {
          if (list.listId === startColumn.listId) {
            list.entities = startColumn.entities;
          }
        });
      }
    } else {
      // dropped in a different list
      const movedCard = startColumn?.entities.find(
        (card) => card.cardId === draggableId
      );

      if (movedCard && startColumn && finishColumn) {
        startColumn.entities.splice(source.index, 1);
        finishColumn.entities.splice(destination.index, 0, movedCard);

        TEMP_DATA.forEach((list) => {
          if (list.listId === startColumn.listId) {
            list.entities = startColumn.entities;
          } else if (list.listId === finishColumn.listId) {
            list.entities = finishColumn.entities;
          }
        });
      }
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <>
        <div className="title">Board</div>

        <div className="board-list-container">
          {/* lists */}
          {TEMP_DATA.map((boardList) => (
            <BoardList key={boardList.listId} {...boardList} />
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
