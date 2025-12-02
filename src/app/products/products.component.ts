import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  myData: any = [];
  ngOnInit(): void {
    this.fetchData();
  }
  async fetchData() {
    try {
      const response = await fetch('http://localhost:3000/products');
      const data = await response.json();
      console.log(data);
      this.myData = data;
    } catch (error) {
      console.log(error);
    }
  }
}
