export type Products = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Tating[];
};

type Tating = {
  rate: 3.9;
  count: 120;
};
