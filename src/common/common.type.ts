// 한 리스트가 가지는 타입
export type BoardListProps = {
  id: number;
  title: string;
  entities: Card[];
};

// 한 카드가 가지는 타입
export type Card = {
  id: number;
  title: string;
  description: string;
};
