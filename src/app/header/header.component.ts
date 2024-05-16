import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  constructor() {
    console.log('1. Constructor: Se ejecuta primero');
  }

  ngOnInit(): void {
    console.log('2. ngOnInit: Se ejecuta después del constructor y antes del render');
  }

  ngOnChanges(): void {
    console.log('3. ngOnChanges: Se ejecuta cuando hay cambios en las propiedades de entrada');
  }

  ngOnDestroy(): void {
    console.log('4. ngOnDestroy: Se ejecuta cuando el componente es destruido');
  }
}
