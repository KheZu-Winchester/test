import { Component } from '@angular/core';

@Component({
  selector: 'app-caurosel',
  templateUrl: './caurosel.component.html',
  styleUrls: ['./caurosel.component.css']
})
export class CauroselComponent {
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      src: '../assets/Images/blog1.jpg',
    };
    this.slides[1] = {
      src: '../assets/Images/blog1.jpg',
    }
    this.slides[2] = {
      src: '../assets/Images/blog1.jpg',
    }
  }
}


