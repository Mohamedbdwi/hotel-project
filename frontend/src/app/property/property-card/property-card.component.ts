import { Component } from "@angular/core";

@Component({
  selector:'app-card-component',
  // template:`<h1>Hi I am a card</h1>`,
  templateUrl:'./property-card.component.html',
  // styles:['h1{font-weight:normal;}']
styleUrls:['./property-card.component.css']
})
export class PropertycardComponent{
  property:any ={
    "id":1,
    "type":"House",
    "name":"Birla House",
    "price":12000
  }

}
