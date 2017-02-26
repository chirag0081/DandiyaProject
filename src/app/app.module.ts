import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContainerComponent } from './container/container.component';

import { HomeComponentComponent } from './container/home-component/home-component.component';
import { AboutUsComponent } from './container/about-us/about-us.component';
const appRoutes: Routes = [
    { path: 'home', component: HomeComponentComponent },
    { path: 'aboutus', component: AboutUsComponent },
    //{ path: 'hero/:id', component: HeroDetailComponent },
    //{
    //    path: 'aboutUs',
    //    component: AboutUs,
    //    data: { title: 'Heroes List' }
    //},
    //{
    //    path: '',
    //    redirectTo: '/heroes',
    //    pathMatch: 'full'
    //},
    //{ path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    HomeComponentComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
      HttpModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
