import {Product} from "./product";
import {User} from "./user";

export interface Command {
  id: number;
  totalPrice: number;
  numCommand: string;
  createdAt: Date;
  status: number;
  products: Product[];
  user: User;
  adress: {
    streetNumber: string;
    streetName: string;
  }
}
