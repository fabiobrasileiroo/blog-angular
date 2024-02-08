import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string  = 'https://upload.wikimedia.org/wikipedia/pt/5/57/Doom_cover_art.jpg'
  contentTitle: string = 'MINHA NOTÍCA'
  contentDescription:string = 'Dom estar em tudo quer canto'

  constructor() { }

  ngOnInit(): void {
  }

}
