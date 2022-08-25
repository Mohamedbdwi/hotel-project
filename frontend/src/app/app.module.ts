import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import{Routes, RouterModule, Router} from '@angular/router';

import { AppComponent } from './app.component';
import { PropertycardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { from } from 'rxjs';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { PropertyNotFoundComponent } from './property/property-not-found/property-not-found.component';
const appRoutes:Routes =[
  {path:'', component:PropertyListComponent},
  {path:'property-rent', component:PropertyListComponent},
  {path:'add-property', component:AddPropertyComponent},
  {path:'property-detail/:id', component:PropertyDetailComponent},
  {path:'**', component:PropertyNotFoundComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    PropertycardComponent,
    PropertyListComponent,
      NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    PropertyNotFoundComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
