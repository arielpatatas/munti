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
@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  map: GoogleMap;

  loadMap() {

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
          lat: 14.8386,
          lng: 120.2842
         },
         zoom: 18,
         tilt: 30
       }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    let marker: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'green',
      animation: 'DROP',
      position: {
        lat: 14.8406377,
        lng: 120.2855406
      }
    });

    let marker2: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'green',
      animation: 'DROP',
      position: {
        lat: 14.8412097,
        lng: 120.2869079
      }
    });

    let marker3: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'green',
      animation: 'DROP',
      position: {
        lat: 14.8299273,
        lng: 120.2803312
      }
    });

    let marker4: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'green',
      animation: 'DROP',
      position: {
        lat: 14.8270034,
        lng: 120.2825666
      }
    });

    let marker5: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'green',
      animation: 'DROP',
      position: {
        lat: 14.824996,
        lng: 120.280903
      }
    });

    // MODAL SA LOOB NG MARKER
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('PRICE COMPARISON');
    });
  }

  constructor() { }

  ngOnInit() {
    
    this.loadMap();
  }

}
