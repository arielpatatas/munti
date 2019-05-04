import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { StoreService } from '../services/store.service';
import { HttpClient } from '@angular/common/http';
import { Api } from '../entities/api.class';

@Component({
  selector: 'app-maps-modal',
  templateUrl: './maps-modal.page.html',
  styleUrls: ['./maps-modal.page.scss'],
})
export class MapsModalPage implements OnInit {
  @Input("storeData") store_data;
  products:any;
  searchinput:any;
  constructor(private navParams:NavParams, private storeService:StoreService, private HTTP:HttpClient) { }

  ngOnInit() {
    // alert(JSON.stringify(this.store_data))
    console.log(this.navParams.get("storeData"))

    this.storeService.getStore(this.navParams.get("storeData")).subscribe((response) => {
      this.products = response;
      console.log(this.products)
    });
  }

  searchProduct(title){
    console.log(this.searchinput);
    this.HTTP.get(Api.URL+"searchProduct?title="+title+"&store_id="+this.navParams.get("storeData")).subscribe(res => {
      
      this.products=res;
    });
  }

}
