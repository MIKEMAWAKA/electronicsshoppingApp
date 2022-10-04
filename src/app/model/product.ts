// export class Product {
// }

// To parse this data:
//
//   import { Convert } from "./file";
//
//   const product = Convert.toProduct(json);

export interface Product {
  id?:               number;
  name?:             string;
  price?:            string;
  regular_price?:    string;
  sale_price?:       string;
  category_id?:       string;
  subcategory_id?:   number;
  tag_id?:           number;
  vendor_id?:     string;
  quantity?:         number;
  stock?:            string;
  viewer?:           number;
  sku?:            string;
  location?:           string;
  region?:             string;
  shortdescription?: string;
  font_image?:     string;
  discount?:         string;
  parent?:        string;
  created_at?:        string;
  updated_at?:      string;
  deleted_at?:         string;
  productimages?:    Productimage[];
}



export interface Productimage {
  id?:         number;
  name?:       string;
  product_id?: number;
  created_at?:    string;
  updated_at?:    string;
  deleted_at?:    string;
}




