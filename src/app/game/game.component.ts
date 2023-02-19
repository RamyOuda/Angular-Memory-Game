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

  colors: Color[] = [];
  currentScore = 0;

  ngOnInit(): void {
    this.generateColors();
  }

  ngAfterViewInit(): void {
    // Array of child elements of the board element
    const children = this.boardElement.nativeElement.children;

    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const color = this.colors[i];

      child.style.backgroundColor = `rgb(${color.R}, ${color.G}, ${color.B})`;
    }
  }

  updateScore(): void {
    this.currentScore++;
  }

  generateColors(): void {
    // Function that returns a random number 0-255
    const randomColor = () => Math.floor(Math.random() * 256);

    // Add 6 objects of random RBG values into the colorArr array
    for (let i = 0; i < 6; i++) {
      this.colors.push({
        R: randomColor(),
        G: randomColor(),
        B: randomColor(),
      });
    }

    // Push a copy of the 6 objects into the array (for 2 of each color)
    this.colors.push(...this.colors);

    // Shuffle the array
    this.shuffle(this.colors);
  }

  shuffle(array: Color[]): Color[] {
    let currentIndex = array.length;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
}
