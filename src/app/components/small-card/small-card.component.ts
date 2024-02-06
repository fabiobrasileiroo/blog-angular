import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent implements OnInit {
  // Corrigindo a declaração da interface

  // Corrigindo o nome da variável e a tipagem
  listas: any[];

  constructor() {
    interface Card {
      img: string;
      title: string;
      description: string;
    }
    this.listas = [
      {
        img: 'https://blog.wijman.net/content/images/2022/08/post-image-linux-sleep-hibernation.png',
        title: 'Linux dorme em quanto ',
        description: 'blabla',
      },
      {
        img: 'https://blog.wijman.net/content/images/2022/08/post-image-linux-sleep-hibernation.png',
        title: 'Título 2',
        description: 'bla bla',
      },
      {
        img: 'https://blog.wijman.net/content/images/2022/08/post-image-linux-sleep-hibernation.png',
        title: 'Título 2',
        description: 'bla bla',
      },

      // Adicione mais objetos conforme necessário
    ];
  }

  ngOnInit(): void {}
}
