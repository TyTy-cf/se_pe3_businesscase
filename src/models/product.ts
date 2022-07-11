import {Category} from "./category";
import {ProductPictures} from "./product-pictures";
import {Brand} from "./brand";

export interface Product {
  id: number;
  label: string;
  description: string;
  price: number;
  stock: number;
  isActif: boolean;
  categories: Category[];
  productPictures: ProductPictures[];
  brand: Brand;
}


