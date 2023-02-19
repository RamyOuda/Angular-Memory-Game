import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

interface Color {
  R: number;
  G: number;
  B: number;
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit, AfterViewInit {
  @ViewChild('boardRef') boardElement!: ElementRef;

  colorArr: Color[] = [];

  generateColors(): void {
    const randomColor = () => Math.floor(Math.random() * 256);

    for (let i = 0; i < 12; i++) {
      this.colorArr.push({
        R: randomColor(),
        G: randomColor(),
        B: randomColor(),
      });
    }
  }

  ngOnInit(): void {
    this.generateColors();
  }

  ngAfterViewInit(): void {
    const childrenArr = this.boardElement.nativeElement.children;

    for (let i = 0; i < childrenArr.length; i++) {
      childrenArr[
        i
      ].style.backgroundColor = `rgb(${this.colorArr[i].R}, ${this.colorArr[i].G}, ${this.colorArr[i].B})`;
    }
  }
}
