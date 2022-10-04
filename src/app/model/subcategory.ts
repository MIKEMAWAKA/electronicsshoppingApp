import { Product } from "./product";

// export class Subcategory {
// }
export  class Subcategory {
  id?:          number;
  name?:        string;
  image?:       string;
  category_id?: number;
  tag_id?:      number;
  created_at?:  Date;
  updated_at?:  Date;
  deleted_at?:  null;
  products?:    Product[];
}
