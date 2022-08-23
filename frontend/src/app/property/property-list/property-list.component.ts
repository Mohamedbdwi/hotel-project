import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties: Array<IProperty> = [];


  constructor(private housingService: HousingService) { }

  ngOnInit(): void {
    this.housingService.getAllProperties().subscribe({
      next: (data) => {
           this.properties = data;
           console.log(data);
                      },
      error: (e) => console.error(e)
  }
      //This is deprecated now:
      // data=>{
      //   this.properties = data;
      //   console.log(data);
      //       },
      // error=>{
      //   console.log(error)
      //       }
    );
    //This is before using services:
    // this.http.get('data/property.json').subscribe(data=>{
    //   this.properties = data;
    //   console.log(data)
    // }
    // );
  }

}
