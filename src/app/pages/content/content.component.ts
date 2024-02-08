import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string  = 'https://upload.wikimedia.org/wikipedia/pt/5/57/Doom_cover_art.jpg'
  contentTitle: string = 'MINHA NOTÍCA'
  contentDescription:string = 'Dom estar em tudo quer canto'
  private id:string | null= '0'

  constructor(private route:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string| null) {
    // if(id !== null) {
      const result = dataFake.filter(article => article.id == id)[0]
      // if(!result) {
        this.contentTitle = result.title
        this.contentDescription = result.description
        this.photoCover = result.photoCover
      // }
    // }
  }

}
