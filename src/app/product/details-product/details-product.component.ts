import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DataService } from '../../shared/data.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss']
})
export class DetailsProductComponent implements OnInit {

  

  
  constructor(private route:ActivatedRoute, private dataSvc: DataService, private location: Location) { }
  public producto:any = {};
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    [this.producto] = this.dataSvc.getProductbyId(id);
    console.log(this.producto+"hoal");
  }

  onGoBack():void{
    this.location.back();
  }

}
