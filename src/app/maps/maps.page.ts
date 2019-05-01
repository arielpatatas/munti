import { Component, OnInit } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps/ngx';
import { ModalController } from '@ionic/angular';
import { MapsModalPage } from '../maps-modal/maps-modal.page';
import { StoreService } from 'src/app/services/store.service';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  map: GoogleMap;
  stores:any;
  storesMarkers: any[];

  loadMap() {

    // let mapOptions: GoogleMapOptions = {
    //   camera: {
    //      target: {
    //       lat: 14.8386,
    //       lng: 120.2842
    //      },
    //      zoom: 15,
    //      tilt: 30
    //    }
    // };

    // this.map = GoogleMaps.create('map_canvas', mapOptions);

    // let marker: Marker = this.map.addMarkerSync({
    //   title: 'Choas Supermart',
    //   icon: 'green',
    //   animation: 'DROP',
    //   position: {
    //     lat: 14.8402345,
    //     lng: 120.287124
    //   }
    // });

    
    // let marker2: Marker = this.map.addMarkerSync({
    //   title: 'YBC ',
    //   icon: 'green',
    //   animation: 'DROP',
    //   position: {
    //     lat: 14.8301916,
    //     lng: 120.2804034
    //   }
    // });

    // let marker3: Marker = this.map.addMarkerSync({
    //   title: 'Vercon Gapo 1 Rizal Triangle',
    //   icon: 'green',
    //   animation: 'DROP',
    //   position: {
    //     lat: 14.8412173,
    //     lng: 120.2865559
    //   }
    // });

    // let marker4: Marker = this.map.addMarkerSync({
    //   title: 'Vercon Gapo 2 Arthur St.',
    //   icon: 'green',
    //   animation: 'DROP',
    //   position: {
    //     lat: 14.8431657,
    //     lng: 120.2876802
    //   }
    // });

    // let marker5: Marker = this.map.addMarkerSync({
    //   title: 'SM City Olongapo',
    //   icon: 'green',
    //   animation: 'DROP',
    //   position: {
    //     lat: 14.8265356,
    //     lng: 120.2828903
    //   }
    // });

    // let marker6: Marker = this.map.addMarkerSync({
    //   title: 'Puregold Harbor Point',
    //   icon: 'green',
    //   animation: 'DROP',
    //   position: {
    //     lat: 14.8247704,
    //     lng: 120.2814418
    //   }
    // });

    // let marker7: Marker = this.map.addMarkerSync({
    //   title: 'Royal Duty Free',
    //   icon: 'green',
    //   animation: 'DROP',
    //   position: {
    //     lat: 14.8226997,
    //     lng: 120.3012694
    //   }
    // });

    // let marker8: Marker = this.map.addMarkerSync({
    //   title: 'Puregold Duty Free',
    //   icon: 'green',
    //   animation: 'DROP',
    //   position: {
    //     lat: 14.8221807,
    //     lng: 120.2982395
    //   }
    // });
    
    // let marker9: Marker = this.map.addMarkerSync({
    //   title: 'Royal Duty Free Manila Avenue, Canal Road',
    //   icon: 'green',
    //   animation: 'DROP',
    //   position: {
    //     lat: 14.8235981,
    //     lng: 120.2759152
    //   }
    // });

    
   

    // MODAL SA LOOB NG MARKER
   
    
  }

  constructor(
    public modalController:ModalController,
    public storeService: StoreService
  ) { }

  ngOnInit() {
    this.getStores();
    // this.loadMap();
  }

  getStores(){
    this.storeService.getStores().subscribe((Response)=>{
      this.stores=Response;
      let mapOptions: GoogleMapOptions = {
        camera: {
           target: {
            lat: 14.8386,
            lng: 120.2842
           },
           zoom: 15,
           tilt: 30
         }
      };
  
      this.map = GoogleMaps.create('map_canvas', mapOptions);
      Response.forEach(element => {
        console.log(element)

        
        let marker: Marker = this.map.addMarkerSync({
          title: element.name,
          icon: 'blue',
          animation: 'DROP',
          position: {
            lat: element.lat,
            lng: element.lang
          }
        });
        console.log(marker)
        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
          // alert('PRICE COMPARISON');
         
    
          this.modalController.create({
            component: MapsModalPage,
            componentProps:{storeData:element.id}
          }).then((mod) => {
            mod.present();
          });
    
          
          });

      // this.storesMarkers.push({id: element.id, marker: marker})
      });
    })

  }


}



