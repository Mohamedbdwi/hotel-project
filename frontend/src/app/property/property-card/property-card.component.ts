import { Component, Input } from "@angular/core";
import { IProperty } from "../IProperty.interface";

@Component({
  selector:'app-card-component',
  // template:`<h1>Hi I am a card</h1>`,
  templateUrl:'./property-card.component.html',
  // styles:['h1{font-weight:normal;}']
styleUrls:['./property-card.component.css']
})
export class PropertycardComponent{
  @Input()property!: IProperty;

}
