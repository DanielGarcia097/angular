import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public products = [
    {id: 1, name: 'egg', categoria: 'food', description: 'Lorem egg', price: 1},
    {id: 2, name: 'egg2', categoria: 'food', description: 'Lorem egg 2', price: 1}
  ];

  getAllProducts(){
    return this.products;
  }

  getProductbyId(id){
    return this.products.filter((product) => product.id == id);
  }
}
