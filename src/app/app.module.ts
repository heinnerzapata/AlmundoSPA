import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpModule } from '@angular/http';

import { HotelsService } from './services/hotels.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

import { ArrStars } from './pipes/arrStars.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ArrStars
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
        {
          path: '',
          component: HomeComponent
        },
        {
          path: 'home',
          component: HomeComponent
        }
    ])
  ],
  providers: [HotelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
