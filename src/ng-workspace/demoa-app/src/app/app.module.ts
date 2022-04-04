import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppHeaderComponent } from './app.header.component';
import { BoxaComponent } from './boxa/boxa.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppHeaderComponent,
    BoxaComponent,
    CustomerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [HomeComponent, AppHeaderComponent, AppComponent,CustomerFormComponent,BoxaComponent]
})
export class AppModule { }
 