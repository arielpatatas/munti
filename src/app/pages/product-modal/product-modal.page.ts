import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Api } from 'src/app/entities/api.class';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.page.html',
  styleUrls: ['./product-modal.page.scss'],
})
export class ProductModalPage implements OnInit {

  products:any;


  constructor(private navParams:NavParams, private HTTP:HttpClient) {
    console.log(navParams.get("value"));
    this.getLowestCost(navParams.get("value"));
   }

  ngOnInit() {
  }

  getLowestCost(title){
    this.HTTP.get(Api.URL+"lowestCost?title="+title).subscribe(res => {
      
      this.products=res;
    });
    
  }

}
