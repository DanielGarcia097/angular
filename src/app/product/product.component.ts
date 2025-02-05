import {Component, Input} from '@angular/core';

@Component({

    selector: 'app-product',
    template: `<h1>Nombre: </h1>
    <h2>
        <a [routerLink]="['/product',product.id]">{{product.name}}</a>
    </h2>
    <div>Price: {{product.price}}</div>`,

})

export class ProductComponent {

    @Input() product;

}