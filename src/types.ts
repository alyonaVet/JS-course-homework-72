export interface Dish {
  id: string;
  title: string;
  price: number;
  image: string;
}

export type ApiDish = Omit<Dish, 'id'>;

export interface ApiDishes {
  [id: string]: ApiDish;
}

export interface DishFormType {
  title: string;
  price: string;
  image: string;
}

export interface UpdateDishType {
  id: string;
  dish: ApiDish;
}

export interface CartDish {
  dish: Dish;
  amount: number;
}

export interface ApiOrder {
  [id: string]: number;
}

export interface ApiOrders {
  [id: string]: ApiOrder;
}