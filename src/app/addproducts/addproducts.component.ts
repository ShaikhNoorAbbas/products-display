import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css'],
})
export class AddproductsComponent implements OnInit {
  formData: FormBuilder | any;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.formData = this.fb.group({
      imgSrc: ['', [Validators.required]],
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
    });
  }
  // Functions to Get Data
  async handleSubmit() {
    console.log(this.formData.value);
    try {
      const response = await fetch('http://localhost:3000/products', {
        method: 'post',
        body: JSON.stringify(this.formData.value),
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    this.formData.reset();
  }
}
