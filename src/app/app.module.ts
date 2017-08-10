import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- ngModel
//import { RouterModule }  from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }         from './app.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { HeroService }          from './Services/hero.service';
import { DashboardComponent }   from './dashboard.component';

import { AppRoutingModule }     from './app-routing.module';


@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,     // <-- must import before using ngModel
    HttpModule,
    AppRoutingModule
    // RouterModule.forRoot([
    //       { path: 'heroes', component: HeroesComponent },
    //       { path: 'dashboard', component: DashboardComponent },
    //       { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    //       { ath: 'detail/:id', component: HeroDetailComponent }
    //     ])
    ],
  declarations: [ 
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
    ],
  providers: [ 
    HeroService 
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
