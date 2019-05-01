import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Api } from '../entities/api.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private HTTP:HttpClient) { 

  }

  getStores():Observable<Store[]>{
    return this.HTTP.get<Store[]>(Api.URL+"store")
  }

  getStore(id){
    return this.HTTP.get(Api.URL + "products/"+id);
  }
}

interface Store{
  id:number,
  name:string,
  lat:number,
  lang:number

}