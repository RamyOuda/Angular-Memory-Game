import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  @ViewChild('boardRef') boardElement!: ElementRef;

  colors: string[] = ['red', 'green', 'yellow', 'blue', 'purple', 'cyan'];
  currentScore = 0;

  ngOnInit(): void {
    this.colors.push(...this.colors);
    this.shuffle(this.colors);
  }

  updateScore(): void {
    this.currentScore++;
  }

  shuffle(array: string[]): string[] {
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
