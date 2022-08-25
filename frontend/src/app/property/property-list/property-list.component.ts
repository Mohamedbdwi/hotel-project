import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties: IProperty[] = [];


  constructor(private route:ActivatedRoute,
              private housingService: HousingService) { }
sellrent = 1;

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.sellrent =2;
    }
    this.housingService.getAllProperties(this.sellrent).subscribe({
      next: (data) => {
           this.properties = data;
           console.log(data);

                      },
      error: (e) => console.error(e)
  })

  }

}
