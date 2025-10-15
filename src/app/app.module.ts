import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule , Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SubpageComponent } from './subpage/subpage.component';
import { ErrorComponent } from './error/error.component';
//step1 declare the routes
const routes : Routes =[{
  path : 'mainpage',
  component : MainpageComponent,
},
{
  path : 'subpage',
  component : SubpageComponent,
},
// {
//   path : '',
//   component : MainpageComponent,
// },
{
  path : '',
  redirectTo : 'mainpage',
  pathMatch : 'full'      
},
{
  path : 'subpage',
  component : SubpageComponent,
},
{
  path : '**',
  component : ErrorComponent,
},

];
@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    SubpageComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes)   //register the routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
