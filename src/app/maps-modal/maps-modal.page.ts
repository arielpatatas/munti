import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-maps-modal',
  templateUrl: './maps-modal.page.html',
  styleUrls: ['./maps-modal.page.scss'],
})
export class MapsModalPage implements OnInit {
  @Input("storeData") store_data;
  products:any;
  constructor(private navParams:NavParams, private storeService:StoreService) { }

  ngOnInit() {
    // alert(JSON.stringify(this.store_data))
    console.log(this.navParams.get("storeData"))

    this.storeService.getStore(this.navParams.get("storeData")).subscribe((response) => {
      this.products = response;
      console.log(this.products)
    });
  }

}
