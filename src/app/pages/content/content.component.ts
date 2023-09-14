import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent  implements OnInit{
  phoCover: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW3X2pZ-GOOXBiN3GIE28uPOKTDwTYsmekgg&usqp=CAU'
  contentTitle: string = 'Minha Notícia'
  contentDescription: string = 'Olá, Mundo!'
  private id: string | null = '0'

  constructor(private route: ActivatedRoute){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(v => {
      this.id = v.get('id')
      this.setValuesToComponent(this.id)
    })  
  }

  setValuesToComponent(_id: string | null){
    const result = dataFake.filter(article => article.id == _id)[0]
    
    this.contentTitle = result.title
    this.phoCover = result.photo
    this.contentDescription = result.description
    
  }
}
