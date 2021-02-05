import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemsComponent } from './items/items.component';
import { ReactiveFormsModule } from '@angular/forms';
import{FormsModule} from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { EditItemComponent } from './edit-item/edit-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemsComponent,
    AdminComponent,
    EditItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule ,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
