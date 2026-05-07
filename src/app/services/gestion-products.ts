import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GestionProducts {

  allProducts : WritableSignal<any[]> = signal([]);

  constructor(){
    this.allProducts.set([
      {
        id:1,
        name: 'Product 1',
        price: 432,
        isSelected: true,
      },
       {
        id: 2,
        name: 'Product 2',
        price: 221,
        isSelected: false,
      },
      {
        id: 3,
        name: 'Product 3',
        price: 87,
        isSelected: false,
      },
    ])
  }

  addProduct(newProduct : any){
    newProduct.id = this.allProducts()[this.allProducts().length - 1].id + 1;
    this.allProducts.update((previous) => {
      previous.push(newProduct);
      return [...previous]
    })
  }

  updateIsSelected(prodcutId: any){
    this.allProducts.update((previous)=> {
      let i = previous.findIndex((product) => product.id == prodcutId);
      previous[i].isSelected = !previous[i].isSelected;
      return [...previous]
    })
  }

  deleteProduct(productId : any){
    this.allProducts.update((previous)=> {
    let i = previous.findIndex((product) => product.id == productId);
    previous.splice(i,1);
    return [...previous]
    })
  }
}
