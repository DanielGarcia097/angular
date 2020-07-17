import { Component, OnInit } from '@angular/core';
import {DataService} from '../../shared/data.service';

@Component({
  selector: 'app-produtc-list',
  templateUrl: './produtc-list.component.html',
  styleUrls: ['./produtc-list.component.scss']
})
export class ProdutcListComponent implements OnInit {

  public productos = {};
  constructor(private dataSvc: DataService) { }

  ngOnInit(): void {
    this.productos = this.dataSvc.getAllProducts();
  }

}
