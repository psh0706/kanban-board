import { CardProps } from "../common";
import "../styles/ListCard.css";

export function ListCard({ id, title, description }: CardProps) {
  return (
    <div className="card-container" key={id}>
      <div className="card-header">{title}</div>
      <div className="card-body">
        <div className="card-content">{description}</div>
      </div>
    </div>
  );
}
