import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent implements OnInit{

cantidad: number = 0;
soldOut: boolean = false;

//Inicio objeto de producto.
//creacion del Input que recibe del componente padre el array de productos
@Input() product = 
   {
    name: 'Bike',
    price: 120,
    inventory: 10,//actualización agregada
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    cantidad: 0
  };
  	//1. agregar output 
  @Output() addToCart = new EventEmitter();

  constructor() { }


  ngOnInit() {
  }
//actualizado addProduct
  addProduct() {
    if(this.cantidad < this.product.inventory){
      this.soldOut = false;
      this.cantidad++;
    } else {
      this.soldOut = true;
    }
  
  }
//actualizado removeProduc
  removeProduct() {
    if(this.cantidad > 0){
      this.soldOut = false;
      this.cantidad--;
    }
  }

  addToCartHandler() { //2. crear metodo
    if(this.cantidad > 0){ //3. validar si tiena una cantidad de producto
      this.product['cantidad'] = this.cantidad; //4. asigna la cantidad a perdir
      this.addToCart.emit(this.product); //5. enviar la informacion por el event emiter del output
    }
    return null;
  }
}