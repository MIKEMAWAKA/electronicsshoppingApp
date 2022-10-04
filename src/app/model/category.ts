// export class Category {
// }

import { Subcategory } from "./subcategory";



export  interface Category {
  id?:            number;
  parent?:       string;
  name?:          string;
  description?:   string;
  image?:         string;
  created_at?:  string;
  updated_at?: string;
  deleted_at?:   string;
  subcategories?: Subcategory[];
}
