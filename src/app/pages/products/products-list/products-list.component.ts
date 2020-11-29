import { Component, OnInit } from '@angular/core';
import { ProductsListTableService } from './products-list-service.service';

@Component({
  selector: 'ngx-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  constructor(public service : ProductsListTableService) { }

  ngOnInit(): void {
  }

}
