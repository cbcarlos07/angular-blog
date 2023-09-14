import { Component } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  dataFake = dataFake

  convertId(id: string){
    return {
      id: String(Number(id) + 1),
      photo: dataFake[Number(id) + 1].photo,
      title: dataFake[Number(id) + 1].title,
      description: dataFake[Number(id) + 1].description,
    }
  }

  
}
