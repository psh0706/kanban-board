import "../styles/BoardList.css";
import { ListCard } from "./ListCard";

export function BoardList({ title }: { title: string }) {
  return (
    <>
      <div className="board-list">
        {title}
        <ListCard />
        <ListCard />
      </div>
    </>
  );
}
