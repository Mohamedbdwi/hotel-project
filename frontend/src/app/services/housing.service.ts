import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IProperty } from '../property/IProperty.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties():Observable<any[]>{
   return this.http.get('data/property.json').pipe(
     map(
       data=>{
          // console.log(data);
         const propertiesArray:any =data;
        //  for(const id in data){
        //    if(data.hasOwnProperty(id)){
        //     propertiesArray.push(data);
        //    }
        //  }

         return propertiesArray;
       }
     )
   )
  }
}
