// 리스트가 가지는 타입
export type BoardListProps = {
  id: number;
  title: string;
  entities: CardProps[];
};

// 카드가 가지는 타입
export type CardProps = {
  id: number;
  title: string;
  description: string;
};
