import { Component } from '@angular/core'
import { HotelsService } from '../../services/hotels.service'
import { ArrStars } from '../../pipes/arrStars.pipe'


@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent{
  title = 'Home Componen2t'
  hotels = []

  constructor(private hotelsService:HotelsService) {
      this.hotelsService.getHotels().subscribe( data => {
        this.hotels = data.hotels;
       });
  }
}
