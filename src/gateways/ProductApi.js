import products from '../mocks/products';
import http from "../http-common";
import { updateProduct } from './../actions/products';


class ProductApi {
  getProducts = () => {
    return products;
  }
  addProduct =(product)=> {
    return http.post("/Products", product);
  }
  updateProduct=(id,product) => {
    return http.put(`/products/${id}`, product);
  }
}
export const productApi = new ProductApi();
