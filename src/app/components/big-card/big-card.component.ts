import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input()
  photoCover:string ='https://media.licdn.com/dms/image/D4E12AQGx_XxlH8rHLw/article-cover_image-shrink_423_752/0/1699328092463?e=1712793600&v=beta&t=QQpri70Jc2-U5AKa7oPpBPfE0D9npppYI02e86AgW7Y'
  @Input()
  cardTitle: string = 'Novo angular'
  @Input()
  cardDescription: string = 'O angular 17 estar top'
  @Input()
  Id:string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
