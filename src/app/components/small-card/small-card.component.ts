import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent implements OnInit {
  // Corrigindo a declaração da interface

  // Corrigindo o nome da variável e a tipagem
  // listas: any[];
  @Input()
  photoCover:string = 'https://infopunch.files.wordpress.com/2013/07/linux_pingwin_041.jpg?w=640'
  @Input()
  cardTitle:string = 'Linux achar windows um comedia'
  @Input()
  Id:string = '0'
  constructor() {
    // interface Card {
    //   img: string;
    //   title: string;
    //   description: string;
    // }
    // this.listas = [
    //   {
    //     img: 'https://blog.wijman.net/content/images/2022/08/post-image-linux-sleep-hibernation.png',
    //     title: 'Linux dorme em quanto ',
    //     description: 'blabla',
    //   },
    //   {
    //     img: 'https://blog.wijman.net/content/images/2022/08/post-image-linux-sleep-hibernation.png',
    //     title: 'Título 2',
    //     description: 'bla bla',
    //   },
    //   {
    //     img: 'https://blog.wijman.net/content/images/2022/08/post-image-linux-sleep-hibernation.png',
    //     title: 'Título 2',
    //     description: 'bla bla',
    //   },

    //   // Adicione mais objetos conforme necessário
    // ];
  }

  ngOnInit(): void {}
}
